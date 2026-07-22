<?php
declare(strict_types=1);

require_once __DIR__ . '/common.php';

function validatePortfolioContent(array $content): void
{
    if (!isset($content['common'], $content['languages']) || !is_array($content['common']) || !is_array($content['languages'])) {
        apiRespond(422, ['success' => false, 'message' => 'Struktur konten portofolio tidak valid.']);
    }

    foreach (['id', 'en', 'ja'] as $language) {
        if (!isset($content['languages'][$language]) || !is_array($content['languages'][$language])) {
            apiRespond(422, ['success' => false, 'message' => "Konten bahasa {$language} belum lengkap."]);
        }
    }

    $encoded = json_encode($content, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    if ($encoded === false || strlen($encoded) > 1000000) {
        apiRespond(422, ['success' => false, 'message' => 'Ukuran konten terlalu besar.']);
    }
}

try {
    $method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
    $pdo = database();

    if ($method === 'GET') {
        $statement = $pdo->query('SELECT content_json, updated_at FROM portfolio_content WHERE id = 1');
        $row = $statement->fetch();
        $content = $row ? json_decode((string) $row['content_json'], true) : defaultPortfolioContent();
        if (!is_array($content)) {
            $content = defaultPortfolioContent();
        }

        apiRespond(200, [
            'success' => true,
            'data' => $content,
            'updated_at' => $row['updated_at'] ?? null,
            'using_default' => !$row,
        ]);
    }

    if ($method === 'PUT') {
        $admin = requireAdmin();
        requireCsrf();
        $content = apiJsonInput();
        validatePortfolioContent($content);
        $encoded = json_encode($content, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

        $statement = $pdo->prepare(
            'INSERT INTO portfolio_content (id, content_json, updated_by)
             VALUES (1, :content_json, :updated_by)
             ON DUPLICATE KEY UPDATE content_json = VALUES(content_json), updated_by = VALUES(updated_by)'
        );
        $statement->execute(['content_json' => $encoded, 'updated_by' => $admin['id']]);

        apiRespond(200, ['success' => true, 'message' => 'Konten portofolio berhasil disimpan.', 'data' => $content]);
    }

    header('Allow: GET, PUT');
    apiRespond(405, ['success' => false, 'message' => 'Metode tidak didukung.']);
} catch (PDOException $error) {
    error_log($error->getMessage());
    apiRespond(500, ['success' => false, 'message' => 'Database konten belum siap. Jalankan setup_database.php.']);
} catch (Throwable $error) {
    error_log($error->getMessage());
    apiRespond(500, ['success' => false, 'message' => 'Terjadi kesalahan pada server.']);
}
