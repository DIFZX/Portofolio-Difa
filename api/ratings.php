<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

require_once __DIR__ . '/database.php';

function respond(int $status, array $payload): never
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function formatRating(array $rating): array
{
    return [
        'id' => (int) $rating['id'],
        'name' => $rating['name'],
        'origin' => $rating['origin'] ?? '',
        'message' => $rating['message'],
        'rating' => (int) $rating['rating'],
        'created_at' => date('d M Y', strtotime($rating['created_at'])),
    ];
}

try {
    $pdo = database();
    $method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

    if ($method === 'GET') {
        $statement = $pdo->query(
            'SELECT id, name, origin, message, rating, created_at
             FROM ratings
             WHERE is_visible = 1
             ORDER BY created_at DESC, id DESC
             LIMIT 100'
        );

        $ratings = array_map('formatRating', $statement->fetchAll());
        respond(200, ['success' => true, 'data' => $ratings]);
    }

    if ($method !== 'POST') {
        header('Allow: GET, POST');
        respond(405, ['success' => false, 'message' => 'Metode permintaan tidak didukung.']);
    }

    $contentType = $_SERVER['CONTENT_TYPE'] ?? '';
    if (stripos($contentType, 'application/json') === false) {
        respond(415, ['success' => false, 'message' => 'Format data harus berupa JSON.']);
    }

    $input = json_decode((string) file_get_contents('php://input'), true);
    if (!is_array($input)) {
        respond(400, ['success' => false, 'message' => 'Data yang dikirim tidak valid.']);
    }

    $name = trim((string) ($input['name'] ?? ''));
    $origin = trim((string) ($input['origin'] ?? ''));
    $message = trim((string) ($input['message'] ?? ''));
    $rating = filter_var($input['rating'] ?? null, FILTER_VALIDATE_INT);

    if ($name === '' || mb_strlen($name) > 80) {
        respond(422, ['success' => false, 'message' => 'Nama wajib diisi dan maksimal 80 karakter.']);
    }

    if (mb_strlen($origin) > 100) {
        respond(422, ['success' => false, 'message' => 'Asal maksimal 100 karakter.']);
    }

    if ($message === '' || mb_strlen($message) > 500) {
        respond(422, ['success' => false, 'message' => 'Masukan wajib diisi dan maksimal 500 karakter.']);
    }

    if ($rating === false || $rating < 1 || $rating > 5) {
        respond(422, ['success' => false, 'message' => 'Rating harus antara 1 sampai 5 bintang.']);
    }

    $statement = $pdo->prepare(
        'INSERT INTO ratings (name, origin, message, rating, ip_hash)
         VALUES (:name, :origin, :message, :rating, :ip_hash)'
    );
    $statement->execute([
        'name' => $name,
        'origin' => $origin !== '' ? $origin : null,
        'message' => $message,
        'rating' => $rating,
        'ip_hash' => hash('sha256', ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . DB_NAME),
    ]);

    $id = (int) $pdo->lastInsertId();
    $statement = $pdo->prepare(
        'SELECT id, name, origin, message, rating, created_at FROM ratings WHERE id = :id'
    );
    $statement->execute(['id' => $id]);

    respond(201, ['success' => true, 'data' => formatRating($statement->fetch())]);
} catch (PDOException $error) {
    error_log($error->getMessage());
    respond(500, [
        'success' => false,
        'message' => 'Database belum terhubung. Periksa api/config.php dan import database.sql.',
    ]);
} catch (Throwable $error) {
    error_log($error->getMessage());
    respond(500, ['success' => false, 'message' => 'Terjadi kesalahan pada server.']);
}

