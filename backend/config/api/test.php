<?php
require_once __DIR__ . '/../config/cors.php';

// Send back a simple JSON message to prove PHP is working.
echo json_encode([
    'success'     => true,
    'message'     => 'PHP backend is working!',
    'php_version' => PHP_VERSION,
    'pdo_mysql'   => extension_loaded('pdo_mysql') ? 'enabled' : 'MISSING',
    'time'        => date('Y-m-d H:i:s'),
]);