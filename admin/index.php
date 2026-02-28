<?php
session_start();

$ADMIN_PASSWORD = 'admin123';

$eventTypeLabels = [
    'wedding' => 'Свадьба',
    'birthday' => 'День рождения',
    'corporate' => 'Корпоратив',
    'other' => 'Другое'
];

$submissionsFile = __DIR__ . '/../api/submissions.json';

function translateEventType($value, $labels) {
    if (empty($value)) return '';
    $types = explode(', ', $value);
    $translated = [];
    foreach ($types as $type) {
        $translated[] = $labels[$type] ?? $type;
    }
    return implode(', ', $translated);
}

function loadSubmissions($file) {
    if (!file_exists($file)) {
        return [];
    }
    $content = file_get_contents($file);
    if (empty($content)) {
        return [];
    }
    return json_decode($content, true) ?: [];
}

function saveSubmissions($file, $submissions) {
    file_put_contents($file, json_encode($submissions, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
}

function filterSubmissions($submissions, $filter) {
    if ($filter === 'form') {
        return array_filter($submissions, fn($s) => $s['formType'] === 'contactForm');
    } elseif ($filter === 'modal') {
        return array_filter($submissions, fn($s) => $s['formType'] === 'contactModal');
    }
    return $submissions;
}

if (isset($_POST['password'])) {
    if ($_POST['password'] === $ADMIN_PASSWORD) {
        $_SESSION['authenticated'] = true;
    } else {
        $error = 'Неверный пароль';
    }
}

if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: index.php');
    exit();
}

if (isset($_POST['delete']) && isset($_SESSION['authenticated'])) {
    $submissions = loadSubmissions($submissionsFile);
    $idToDelete = $_POST['delete'];
    
    $submissions = array_values(array_filter($submissions, function($s) use ($idToDelete) {
        return $s['id'] !== $idToDelete;
    }));
    
    saveSubmissions($submissionsFile, $submissions);
    
    header('Location: index.php');
    exit();
}

$isAuthenticated = isset($_SESSION['authenticated']);
$filter = $_GET['filter'] ?? 'all';
$submissions = [];
$filteredSubmissions = [];
$stats = ['total' => 0, 'form' => 0, 'modal' => 0];

if ($isAuthenticated) {
    $submissions = loadSubmissions($submissionsFile);
    
    usort($submissions, function($a, $b) {
        return strcmp($b['timestamp'], $a['timestamp']);
    });
    
    $filteredSubmissions = filterSubmissions($submissions, $filter);
    
    $stats = [
        'total' => count($submissions),
        'form' => count(array_filter($submissions, fn($s) => $s['formType'] === 'contactForm')),
        'modal' => count(array_filter($submissions, fn($s) => $s['formType'] === 'contactModal'))
    ];
}

require __DIR__ . '/templates/login.template.php';
