## Структура проекта

```
ForYou/
├── 📂 .vscode/                 # Настройки редактора VS Code
├── 📂 admin/                   # Админ-панель (PHP)
│   └── index.php               # Интерфейс администратора
├── 📂 api/                     # Бэкенд API (PHP)
│   ├── submit.php              # Эндпоинт для приёма заявок
│   └── submissions.json        # Хранилище данных заявок
├── 📂 node_modules/            # Зависимости npm
├── 📂 public/                  # Статические файлы
│   └── icon.svg                # Фавикон сайта
├── 📂 src/                     # Исходный код Vue.js приложения
│   ├── 📂 assets/              # Ресурсы (стили, изображения, шрифты)
│   │   ├── 📂 fonts/           # Шрифты
│   │   ├── 📂 images/          # Изображения и иконки
│   │   └── 📂 styles/          # SCSS стили
│   ├── 📂 components/          # Vue компоненты
│   │   ├── 📂 layout/          # Layout-компоненты
│   │   │   ├── AppHeader/      # Шапка сайта
│   │   │   └── AppFooter/      # Подвал сайта
│   │   └── 📂 ui/              # UI-компоненты
│   │       ├── AppButton/      # Кнопка
│   │       ├── AppContactForm/ # Форма обратной связи
│   │       ├── AppContactModal/# Модальное окно формы
│   │       ├── AppExpandItem/  # Раскрывающийся элемент
│   │       └── AppFeatureCard/ # Карточка преимущества
│   ├── 📂 composables/         # Композаблы Vue 3
│   ├── 📂 models/              # Модели данных
│   │   └── homeData.js         # Данные для главной страницы
│   ├── 📂 router/              # Настройки маршрутизации
│   │   └── index.js            # Конфигурация vue-router
│   ├── 📂 views/               # Страницы приложения
│   │   ├── HomeView.vue        # Главная страница
│   │   ├── WorksView.vue       # Каталог работ
│   │   ├── CategoryWorksView.vue # Работы по категории
│   │   ├── WorkDetailView.vue  # Детальный просмотр работы
│   │   ├── ProcessView.vue     # Страница процесса
│   │   ├── AboutView.vue       # О нас
│   │   └── ContactsView.vue    # Контакты
│   ├── App.vue                 # Корневой компонент
│   └── main.js                 # Точка входа приложения
├── .gitignore                  # Игнорируемые файлы Git
├── index.html                  # HTML шаблон
├── package.json                # Зависимости и скрипты npm
├── vite.config.js              # Конфигурация Vite
├── yarn.lock                   # Lock-файл зависимостей
├── README.md                   # Краткая инструкция
└── BACKEND_README.md           # Документация бэкенда
```
---

## Технологический стек

### Frontend
| Vue.js Основной фреймворк |
| Vue Route Маршрутизация |
| Vite Сборщик и dev-сервер |
| Sass  CSS-препроцессор |
| Swiper Слайдеры/карусели |

### Backend
| PHP | Обработка форм, API, админка |
| JSON | Хранение данных заявок |

---

## Установка и запуск

### 1. Установка зависимостей

```bash
npm install
yarn install
```

### 2. Запуск frontend (Vite dev-сервер)

```bash
npm run dev
yarn dev
```
Сервер запустится на http://localhost:3000

### 3. Запуск backend (PHP сервер)

Откройте новый терминал и запустите PHP сервер:

php -S localhost:8000

### 4. Установка PHP на Windows

1. Скачайте PHP: https://windows.php.net/download/ (рекомендуется Non Thread Safe версия 8.x)
2. Распакуйте в `C:\php`
3. Добавьте в PATH:
   - `Win + R` → `sysdm.cpl` → вкладка «Дополнительно» → «Переменные среды»
   - В «Системные переменные» найдите `Path` → Изменить → Создать
   - Добавьте: `C:\php`
4. Создайте `php.ini`:
   - Скопируйте `C:\php\php.ini-development` → `C:\php\php.ini`
   - Откройте, найдите `;extension=curl` → уберите `;` → `extension=curl`
5. Перезапустите терминал и проверьте:

---

### Корневой компонент (`src/App.vue`)

Содержит основную структуру приложения и роутер-вид для отображения страниц.

### Маршрутизация (`src/router/index.js`)

| `/` | HomeView | Главная страница |
| `/works` | WorksView | Все работы |
| `/works/:category` | CategoryWorksView | Работы категории |
| `/works/:category/:slug` | WorkDetailView | Детально работа |
| `/process` | ProcessView | Процесс работы |
| `/about` | AboutView | О студии |
| `/contacts` | ContactsView | Контакты |

---

## API и бэкенд

### Эндпоинт: `POST /api/submit.php`

Принимает данные форм и сохраняет в JSON-файл.

### Хранилище: `api/submissions.json`

---

## 🔐 Админ-панель

**URL:** `http://localhost:3000/admin/index.php`
**Или:** `http://localhost:8000/admin/index.php`

Пароль по умолчанию: **`admin`**

### Layout компоненты

#### `AppHeader`
Шапка сайта с навигацией и логотипом.

#### `AppFooter`
Подвал с контактами, навигацией и ссылками.

### UI компоненты

#### `AppButton`
Универсальная кнопка с вариантами

#### `AppContactForm`
Основная форма обратной связи на странице контактов.

#### `AppContactModal`
Модальное окно с упрощённой формой.

#### `AppExpandItem`
Раскрывающийся элемент (используется в FAQ).

#### `AppFeatureCard`
Карточка преимущества с иконкой.


## 🎨 Стили и дизайн

### Структура стилей

```
src/assets/styles/
├── main.scss           # Точка входа (подключает модули)
├── _fonts.scss         # Подключение шрифтов
├── _reset.scss         # CSS reset
├── _base.scss          # Базовые стили
└── pages/              # Стили страниц
    └── ContactsView.scss
```

### Шрифты

Подключается **Barlow** из Google Fonts (все начертания).
