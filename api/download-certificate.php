<?php
declare(strict_types=1);

$certificatePath = dirname(__DIR__) . '/assets/DIFA_ALFARUQ_certificate.pdf';
$downloadName = 'Difa-Alfaruq-CCNA-Introduction-to-Networks.pdf';

if (!is_file($certificatePath) || !is_readable($certificatePath)) {
    http_response_code(404);
    header('Content-Type: text/plain; charset=utf-8');
    echo 'File sertifikat tidak tersedia.';
    exit;
}

header('Content-Type: application/pdf');
header('Content-Disposition: attachment; filename="' . $downloadName . '"');
header('Content-Length: ' . (string) filesize($certificatePath));
header('Cache-Control: private, max-age=0, must-revalidate');
header('X-Content-Type-Options: nosniff');

readfile($certificatePath);
exit;
