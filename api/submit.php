<?php
error_reporting(0);
ini_set('display_errors', 0);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON']);
    exit();
}

$formType = $input['formType'] ?? 'unknown';
$timestamp = date('Y-m-d H:i:s');

$data = [
    'id' => uniqid(),
    'timestamp' => $timestamp,
    'formType' => $formType,
    'name' => $input['name'] ?? '',
    'email' => $input['email'] ?? '',
    'phone' => $input['phone'] ?? '',
    'eventType' => isset($input['eventType']) && is_array($input['eventType']) ? implode(', ', $input['eventType']) : '',
    'budgetMin' => $input['budget'][0] ?? '',
    'budgetMax' => $input['budget'][1] ?? '',
    'message' => $input['message'] ?? '',
    'status' => 'new'
];

$file = __DIR__ . '/submissions.json';
$submissions = [];

if (file_exists($file)) {
    $existing = file_get_contents($file);
    $submissions = json_decode($existing, true) ?: [];
}

$submissions[] = $data;
$saveResult = file_put_contents($file, json_encode($submissions, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

if ($saveResult === false) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Ошибка записи в файл']);
} else {
    echo json_encode(['success' => true, 'message' => 'Заявка успешно отправлена']);
}
