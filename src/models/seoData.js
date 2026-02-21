const baseUrl = 'https://ForYou.com'

export const seoData = {
    '/': {
        title: 'Для Тебя — Студия декора мероприятий | Главная',
        description: 'Организация и декор мероприятий под ключ. Свадьбы, дни рождения, корпоративы. Создаём атмосферу, которую запомнят.',
        image: '/og-home.jpg',
        type: 'website'
    },
    
    '/works': {
        title: 'Наши работы — Для Тебя | Портфолио мероприятий',
        description: 'Посмотрите наши реализованные проекты. Декор свадеб, дней рождений, корпоративных мероприятий.',
        image: '/og-works.jpg',
        type: 'website'
    },
    
    '/about': {
        title: 'О нас — Для Тебя | Студия декора мероприятий',
        description: 'Узнайте больше о нашей команде и подходе к организации мероприятий. Опыт, портфолио, философия.',
        image: '/og-about.jpg',
        type: 'website'
    },
    
    '/process': {
        title: 'Как мы работаем — Для Тебя | Процесс организации',
        description: 'Узнайте о нашем подходе к организации мероприятий. От первой встречи до реализации проекта.',
        image: '/og-process.jpg',
        type: 'website'
    },
    
    '/contacts': {
        title: 'Контакты — Для Тебя | Связаться с нами',
        description: 'Свяжитесь с нами для обсуждения вашего мероприятия. Телефон, email, форма обратной связи.',
        image: '/og-contacts.jpg',
        type: 'website'
    },

    'category-template': {
        title: 'Категория работ — Для Тебя | Декор мероприятий',
        description: 'Посмотрите работы по категории. Профессиональный декор и организация мероприятий.',
        image: '/og-category.jpg',
        type: 'website'
    },
    
    'work-template': {
        title: 'Работа — Для Тебя | Пример мероприятия',
        description: 'Пример реализованного мероприятия. Декор, организация, атмосфера.',
        image: '/og-work.jpg',
        type: 'article'
    },
    
    default: {
        title: 'Для Тебя — Студия декора мероприятий',
        description: 'Организация и декор мероприятий под ключ. Свадьбы, дни рождения, корпоративы.',
        image: '/og-default.jpg',
        type: 'website'
    }
}

/**
 * @param {string} path
 * @returns {Object}
 */
export const getSeoByPath = (path) => {
    if (seoData[path]) {
        return {
            ...seoData[path],
            url: `${baseUrl}${path}`,
            favicon: '/icon.svg'
        }
    }

    if (path.match(/^\/works\/[^/]+$/)) {
        return {
            ...seoData['category-template'],
            url: `${baseUrl}${path}`,
            favicon: '/icon.svg'
        }
    }
    
    if (path.match(/^\/works\/[^/]+\/[^/]+$/)) {
        return {
            ...seoData['work-template'],
            url: `${baseUrl}${path}`,
            favicon: '/icon.svg'
        }
    }
    
    return {
        ...seoData.default,
        url: `${baseUrl}${path}`,
        favicon: '/icon.svg'
    }
}