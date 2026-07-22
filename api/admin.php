<?php
declare(strict_types=1);

require_once __DIR__ . '/common.php';

try {
    $method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
    $action = (string) ($_GET['action'] ?? 'status');

    if ($method === 'GET' && $action === 'status') {
        $admin = adminIdentity();
        apiRespond(200, [
            'success' => true,
            'authenticated' => $admin !== null,
            'admin' => $admin,
            'csrf_token' => $admin !== null ? csrfToken() : null,
        ]);
    }

    if ($method === 'POST' && $action === 'login') {
        startAdminSession();
        $input = apiJsonInput();
        $username = trim((string) ($input['username'] ?? ''));
        $password = (string) ($input['password'] ?? '');

        if ($username === '' || $password === '') {
            apiRespond(422, ['success' => false, 'message' => 'Username dan password wajib diisi.']);
        }

        $attempts = (int) ($_SESSION['login_attempts'] ?? 0);
        $lastAttempt = (int) ($_SESSION['last_login_attempt'] ?? 0);
        if ($attempts >= 5 && (time() - $lastAttempt) < 60) {
            apiRespond(429, ['success' => false, 'message' => 'Terlalu banyak percobaan. Tunggu satu menit.']);
        }

        $statement = database()->prepare('SELECT id, username, password_hash FROM admin_users WHERE username = :username LIMIT 1');
        $statement->execute(['username' => $username]);
        $user = $statement->fetch();

        if (!$user || !password_verify($password, (string) $user['password_hash'])) {
            $_SESSION['login_attempts'] = $attempts + 1;
            $_SESSION['last_login_attempt'] = time();
            apiRespond(401, ['success' => false, 'message' => 'Username atau password salah.']);
        }

        session_regenerate_id(true);
        $_SESSION['admin_id'] = (int) $user['id'];
        $_SESSION['admin_username'] = (string) $user['username'];
        $_SESSION['login_attempts'] = 0;
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));

        apiRespond(200, [
            'success' => true,
            'message' => 'Login berhasil.',
            'admin' => adminIdentity(),
            'csrf_token' => csrfToken(),
        ]);
    }

    if ($method === 'POST' && $action === 'logout') {
        requireAdmin();
        requireCsrf();
        $_SESSION = [];
        if (ini_get('session.use_cookies')) {
            $params = session_get_cookie_params();
            setcookie(session_name(), '', time() - 42000, $params['path'], $params['domain'] ?? '', $params['secure'], $params['httponly']);
        }
        session_destroy();
        apiRespond(200, ['success' => true, 'message' => 'Logout berhasil.']);
    }

    if ($method === 'PUT' && $action === 'password') {
        $admin = requireAdmin();
        requireCsrf();
        $input = apiJsonInput();
        $currentPassword = (string) ($input['current_password'] ?? '');
        $newPassword = (string) ($input['new_password'] ?? '');

        if (mb_strlen($newPassword) < 8) {
            apiRespond(422, ['success' => false, 'message' => 'Password baru minimal 8 karakter.']);
        }

        $statement = database()->prepare('SELECT password_hash FROM admin_users WHERE id = :id');
        $statement->execute(['id' => $admin['id']]);
        $hash = (string) $statement->fetchColumn();
        if (!password_verify($currentPassword, $hash)) {
            apiRespond(422, ['success' => false, 'message' => 'Password saat ini tidak sesuai.']);
        }

        $statement = database()->prepare('UPDATE admin_users SET password_hash = :hash WHERE id = :id');
        $statement->execute(['hash' => password_hash($newPassword, PASSWORD_DEFAULT), 'id' => $admin['id']]);
        apiRespond(200, ['success' => true, 'message' => 'Password berhasil diubah.']);
    }

    apiRespond(405, ['success' => false, 'message' => 'Aksi tidak didukung.']);
} catch (PDOException $error) {
    error_log($error->getMessage());
    apiRespond(500, ['success' => false, 'message' => 'Database admin belum siap. Jalankan setup_database.php.']);
} catch (Throwable $error) {
    error_log($error->getMessage());
    apiRespond(500, ['success' => false, 'message' => 'Terjadi kesalahan pada server.']);
}
