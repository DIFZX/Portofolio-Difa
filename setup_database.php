<?php
declare(strict_types=1);

if (PHP_SAPI !== 'cli') {
    http_response_code(404);
    exit;
}

require_once __DIR__ . '/api/config.php';

try {
    $dsn = sprintf('mysql:host=%s;port=%d;charset=utf8mb4', DB_HOST, DB_PORT);
    $pdo = new PDO($dsn, DB_USER, DB_PASS, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    ]);
    $pdo->exec((string) file_get_contents(__DIR__ . '/database.sql'));
    echo "Database, rating, konten portofolio, dan akun admin berhasil dibuat.\n";
} catch (Throwable $error) {
    fwrite(STDERR, "Setup database gagal: {$error->getMessage()}\n");
    exit(1);
}
