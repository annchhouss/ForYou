<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Вход в админку | ForYou</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/admin.css">
</head>
<body>
    <div class="login-page">
        <div class="login-card">
            <div class="login-card__header">
                <span class="login-card__icon">🔐</span>
                <h1 class="login-card__title">Админка</h1>
                <p class="login-card__subtitle">Введите пароль для доступа к заявкам</p>
            </div>
            <?php if (isset($error)): ?>
                <div class="login-error"><?= htmlspecialchars($error) ?></div>
            <?php endif; ?>
            <form method="POST" class="login-form">
                <div class="login-form__group">
                    <input 
                        type="password" 
                        name="password" 
                        class="login-form__input" 
                        placeholder="Пароль" 
                        required 
                        autofocus
                    >
                </div>
                <button type="submit" class="login-form__button">Войти</button>
            </form>
        </div>
    </div>
</body>
</html>
