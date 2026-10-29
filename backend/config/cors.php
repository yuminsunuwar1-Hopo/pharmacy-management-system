<?php
// This file is included at the top of every API file.
// It sets headers so the React app is allowed to call our PHP API.

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Browsers send an "OPTIONS" request first (a "preflight" check)
// before POST/PUT/DELETE. We just reply "OK" and stop.
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}