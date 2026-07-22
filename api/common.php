<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

require_once __DIR__ . '/database.php';

function apiRespond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function apiJsonInput(): array
{
    $contentType = $_SERVER['CONTENT_TYPE'] ?? '';
    if (stripos($contentType, 'application/json') === false) {
        apiRespond(415, ['success' => false, 'message' => 'Format permintaan harus JSON.']);
    }

    $payload = json_decode((string) file_get_contents('php://input'), true);
    if (!is_array($payload)) {
        apiRespond(400, ['success' => false, 'message' => 'Data JSON tidak valid.']);
    }

    return $payload;
}

function startAdminSession(): void
{
    if (session_status() === PHP_SESSION_ACTIVE) {
        return;
    }

    ini_set('session.use_strict_mode', '1');
    $sessionPath = dirname(__DIR__) . '/data/sessions';
    if (!is_dir($sessionPath) && !mkdir($sessionPath, 0700, true) && !is_dir($sessionPath)) {
        throw new RuntimeException('Folder sesi admin tidak dapat dibuat.');
    }
    session_save_path($sessionPath);
    session_name('difa_portfolio_admin');
    $secureCookie = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off');
    if (PHP_VERSION_ID >= 70300) {
        session_set_cookie_params([
            'lifetime' => 0,
            'path' => '/',
            'secure' => $secureCookie,
            'httponly' => true,
            'samesite' => 'Strict',
        ]);
    } else {
        // PHP 7.2 belum mendukung parameter cookie berbentuk array.
        session_set_cookie_params(0, '/; SameSite=Strict', '', $secureCookie, true);
    }
    session_start();
}

function adminIdentity(): ?array
{
    startAdminSession();
    if (empty($_SESSION['admin_id']) || empty($_SESSION['admin_username'])) {
        return null;
    }

    return [
        'id' => (int) $_SESSION['admin_id'],
        'username' => (string) $_SESSION['admin_username'],
    ];
}

function requireAdmin(): array
{
    $admin = adminIdentity();
    if ($admin === null) {
        apiRespond(401, ['success' => false, 'message' => 'Silakan login sebagai admin.']);
    }
    return $admin;
}

function csrfToken(): string
{
    startAdminSession();
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return (string) $_SESSION['csrf_token'];
}

function requireCsrf(): void
{
    startAdminSession();
    $provided = (string) ($_SERVER['HTTP_X_CSRF_TOKEN'] ?? '');
    $expected = (string) ($_SESSION['csrf_token'] ?? '');
    if ($expected === '' || $provided === '' || !hash_equals($expected, $provided)) {
        apiRespond(403, ['success' => false, 'message' => 'Token keamanan tidak valid. Muat ulang halaman admin.']);
    }
}

function defaultPortfolioContent(): array
{
    $path = dirname(__DIR__) . '/data/default-content.json';
    $content = json_decode((string) file_get_contents($path), true);
    return is_array($content) ? $content : ['common' => [], 'languages' => []];
}
