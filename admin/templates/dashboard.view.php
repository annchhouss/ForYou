<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Админка - Заявки | ForYou</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/admin.css">
</head>
<body>
    <div class="dashboard">
        <header class="dashboard__header">
            <h1 class="dashboard__title">
                <span class="dashboard__icon">📋</span>
                Заявки
            </h1>
            <a href="?logout=1" class="dashboard__logout">Выйти</a>
        </header>
        <div class="dashboard__stats">
            <div class="stat-card">
                <div>
                    <div class="stat-card__label">Всего заявок</div>
                    <div class="stat-card__value"><?= $stats['total'] ?></div>
                </div>
            </div>
            <div class="stat-card stat-card--form">
                <div>
                    <div class="stat-card__label">Из формы</div>
                    <div class="stat-card__value"><?= $stats['form'] ?></div>
                </div>
            </div>
            <div class="stat-card stat-card--modal">
                <div>
                    <div class="stat-card__label">Из модального окна</div>
                    <div class="stat-card__value"><?= $stats['modal'] ?></div>
                </div>
            </div>
        </div>
        <div class="dashboard__filters">
            <a href="?filter=all" class="filter-btn <?= $filter === 'all' ? 'filter-btn--active' : '' ?>">Все</a>
            <a href="?filter=form" class="filter-btn <?= $filter === 'form' ? 'filter-btn--active' : '' ?>">Заявка</a>
            <a href="?filter=modal" class="filter-btn <?= $filter === 'modal' ? 'filter-btn--active' : '' ?>">Сотрудничество</a>
        </div>
        <main class="dashboard__content">
            <?php if (empty($filteredSubmissions)): ?>
                <div class="empty-state">
                    <span class="empty-state__icon">📭</span>
                    <h2 class="empty-state__title">Пока нет заявок</h2>
                </div>
            <?php else: ?>
                <?php foreach ($filteredSubmissions as $sub): ?>
                    <div class="submission-card">
                        <div class="submission-card__header" onclick="toggleDetails('<?= $sub['id'] ?>')">
                            <div class="submission-card__info">
                                <span class="submission-card__type submission-card__type--<?= $sub['formType'] === 'contactForm' ? 'form' : 'modal' ?>">
                                    <?= $sub['formTypeLabel'] ?? ($sub['formType'] === 'contactForm' ? 'Заявка' : 'Сотрудничество') ?>
                                </span>
                                <span class="submission-card__name"><?= htmlspecialchars($sub['name']) ?></span>
                                <span class="submission-card__phone"><?= htmlspecialchars($sub['phone']) ?: '—' ?></span>
                                <span class="submission-card__date"><?= $sub['timestamp'] ?></span>
                            </div>
                            <div class="submission-card__actions">
                                <form method="POST" style="display:inline;" onsubmit="return confirm('Удалить заявку?')">
                                    <input type="hidden" name="delete" value="<?= $sub['id'] ?>">
                                    <button type="submit" class="btn btn--delete">Удалить</button>
                                </form>
                            </div>
                        </div>
                        <div class="submission-card__details" id="<?= $sub['id'] ?>">
                            <div class="detail-row">
                                <span class="detail-label">Имя:</span>
                                <span class="detail-value"><?= htmlspecialchars($sub['name']) ?></span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">Телефон:</span>
                                <span class="detail-value"><?= htmlspecialchars($sub['phone']) ?: '—' ?></span>
                            </div>
                            <?php if ($sub['formType'] === 'contactModal'): ?>
                            <div class="detail-row">
                                <span class="detail-label">Почта:</span>
                                <span class="detail-value"><?= htmlspecialchars($sub['email']) ?: '—' ?></span>
                            </div>
                            <?php endif; ?>
                            <?php if (!empty($sub['eventType'])): ?>
                            <div class="detail-row">
                                <span class="detail-label">Тип мероприятия:</span>
                                <span class="detail-value"><?= htmlspecialchars(translateEventType($sub['eventType'], $eventTypeLabels)) ?></span>
                            </div>
                            <?php endif; ?>
                            <?php if (!empty($sub['budgetMin']) || !empty($sub['budgetMax'])): ?>
                            <div class="detail-row">
                                <span class="detail-label">Бюджет:</span>
                                <span class="detail-value">
                                    <?= number_format($sub['budgetMin'], 0, '.', ' ') ?> -
                                    <?= number_format($sub['budgetMax'], 0, '.', ' ') ?> ₽
                                </span>
                            </div>
                            <?php endif; ?>
                            <?php if (!empty($sub['message'])): ?>
                            <div class="detail-row">
                                <span class="detail-label">Сообщение:</span>
                                <span class="detail-value detail-value--message"><?= nl2br(htmlspecialchars($sub['message'])) ?></span>
                            </div>
                            <?php endif; ?>
                            <div class="detail-row">
                                <span class="detail-label">Дата:</span>
                                <span class="detail-value"><?= $sub['timestamp'] ?></span>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            <?php endif; ?>
        </main>
    </div>
    <script>
        function toggleDetails(id) {
            const details = document.getElementById(id);
            const isShown = details.classList.contains('submission-card__details--show');
            document.querySelectorAll('.submission-card__details').forEach(el => {
                el.classList.remove('submission-card__details--show');
            });
            if (!isShown) {
                details.classList.add('submission-card__details--show');
            }
        }
    </script>
</body>
</html>
