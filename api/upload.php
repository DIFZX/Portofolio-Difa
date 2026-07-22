<?php
declare(strict_types=1);

require_once __DIR__ . '/common.php';

try {
    if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
        header('Allow: POST');
        apiRespond(405, ['success' => false, 'message' => 'Metode tidak didukung.']);
    }

    requireAdmin();
    requireCsrf();

    if (!isset($_FILES['image']) || !is_array($_FILES['image'])) {
        apiRespond(422, ['success' => false, 'message' => 'Pilih file gambar terlebih dahulu.']);
    }

    $file = $_FILES['image'];
    if (($file['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_OK) {
        apiRespond(422, ['success' => false, 'message' => 'Upload gambar gagal.']);
    }
    if ((int) $file['size'] > 5 * 1024 * 1024) {
        apiRespond(422, ['success' => false, 'message' => 'Ukuran gambar maksimal 5 MB.']);
    }

    $temporaryPath = (string) $file['tmp_name'];
    $mime = (new finfo(FILEINFO_MIME_TYPE))->file($temporaryPath);
    $allowed = ['image/jpeg' => 'jpg', 'image/png' => 'png', 'image/webp' => 'webp', 'image/gif' => 'gif'];
    if (!isset($allowed[$mime]) || @getimagesize($temporaryPath) === false) {
        apiRespond(422, ['success' => false, 'message' => 'File harus berupa JPG, PNG, WEBP, atau GIF yang valid.']);
    }

    $uploadDirectory = dirname(__DIR__) . '/assets/uploads';
    if (!is_dir($uploadDirectory) && !mkdir($uploadDirectory, 0755, true) && !is_dir($uploadDirectory)) {
        throw new RuntimeException('Folder upload tidak dapat dibuat.');
    }

    $filename = date('Ymd-His') . '-' . bin2hex(random_bytes(6)) . '.' . $allowed[$mime];
    $destination = $uploadDirectory . '/' . $filename;
    if (!move_uploaded_file($temporaryPath, $destination)) {
        throw new RuntimeException('Gambar tidak dapat disimpan.');
    }

    apiRespond(201, ['success' => true, 'message' => 'Gambar berhasil diunggah.', 'path' => 'assets/uploads/' . $filename]);
} catch (Throwable $error) {
    error_log($error->getMessage());
    apiRespond(500, ['success' => false, 'message' => 'Terjadi kesalahan saat mengunggah gambar.']);
}
