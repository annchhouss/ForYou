<?php if (!$isAuthenticated): ?>
    <?php require __DIR__ . '/login.view.php'; ?>
<?php else: ?>
    <?php require __DIR__ . '/dashboard.view.php'; ?>
<?php endif; ?>
