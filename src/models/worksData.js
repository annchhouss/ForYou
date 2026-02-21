import { Navigation } from 'swiper/modules'

export const worksHero = {
    title: 'Наши работы',
    description: 'Исследуйте наше портфолио – галерею визуально впечатляющих и продуманных до мелочей проектов.'
}

export const worksIntro = {
    title: 'Для Тебя',
    description: 'Здесь мы демонстрируем наш творческий подход и профессиональный опыт, превращая пространства в искусство – будь то уютный дом или грандиозное торжество. Каждый проект – это уникальная история, сотканная из стиля, эмоций и безупречного исполнения.',
    subtitle: 'Несколько историй, воплощенных в ваших мероприятиях'
}

export const worksBannerBottom = {
    title: 'Позвольте нам воплотить ваши идеи в атмосфере.',
    description: 'Мы гарантируем безупречный результат — и в интерьере, и в декоре мероприятия. Слаженная работа нашей многопрофильной команды обеспечит целостное и яркое воплощение вашей идеи',
    button: 'Начать проект'
}

export const worksCategories = [
    {
        id: 'weddings',
        title: 'Свадьбы',
        slug: 'weddings',
        description: 'Ваш день — в деталях мечты <br />Свадьба — это история, которая начинается с «да». Мы поможем вам рассказать её на языке цветов, фактур и безупречного вкуса. От первой встречи до финального тоста мы окружим вас красотой, которая создаёт настроение и остаётся на фотографиях навсегда.',
        image: '/src/assets/images/events/weddings/banner.png',
        buttonText: 'Перейти'
    },
    {
        id: 'corporate',
        title: 'Корпоративы',
        slug: 'corporate',
        description: 'Не просто мероприятие, а впечатление <br />Корпоратив — это больше, чем встреча коллег. Это возможность сказать «спасибо», вдохновить на новые победы и создать ту самую атмосферу единства, которая остаётся в памяти команды. Мы превращаем бизнес-событие в гармоничное пространство, где деловой этикет встречается с душевным теплом.',
        image: '/src/assets/images/events/corporate/banner.png',
        buttonText: 'Перейти'
    },
    {
        id: 'birthdays',
        title: 'Дни рождения',
        slug: 'birthdays',
        description: 'Год стал ярче — праздник должен быть прекраснее <br />День рождения — это личный праздник, где каждая деталь говорит о виновнике торжества. Мы создаём не просто декор, а ту самую волшебную атмосферу, в которой загадываются самые заветные желания и рождаются самые тёплые воспоминания. Пусть в этот день всё будет идеально.',
        image: '/src/assets/images/events/birthdays/banner.png',
        buttonText: 'Перейти'
    },
    {
        id: 'servings',
        title: 'Сервировки',
        slug: 'servings',
        description: 'Идеальная форма для вашего содержания <br />Когда важна не масштабность, а глубина впечатлений. Для тех самых тёплых встреч, где ценен каждый гость и каждое слово. Мы верим, что магия — в деталях, а уют — в продуманности. Создаём камерное пространство, где обстановка говорит сама за себя: «Здесь вам рады».',
        image: '/src/assets/images/events/servings/banner.png',
        buttonText: 'Перейти'
    },
]

export const categoryDetails = {
    weddings: {
        bannerImage: '/src/assets/images/events/weddings/category-banner.png',
        title: 'Свадьбы',
        description: 'Примеры наших свадебных работ',
        gallery: [
            '/src/assets/images/events/weddings/category/1.png',
            '/src/assets/images/events/weddings/category/2.png',
            '/src/assets/images/events/weddings/category/3.png',
            '/src/assets/images/events/weddings/category/4.png',
            '/src/assets/images/events/weddings/category/5.png',
            '/src/assets/images/events/weddings/category/6.png',
        ],
        categoryIntro: {
            title: 'Наш подход',
            description: 'Мы выбираем подходящий вид декора специально для вас!',
            subtitle: 'Ниже предоставлены стили , которые мы можем реализовать'
        }
    },
    corporate: {
        bannerImage: '/src/assets/images/categories/corporate-banner.jpg',
        title: 'Корпоративы',
        description: 'Примеры наших корпоративных работ.',
        gallery: [
            '/src/assets/images/categories/corporate-gallery-1.jpg',
            '/src/assets/images/categories/corporate-gallery-2.jpg',
            '/src/assets/images/categories/corporate-gallery-3.jpg'
        ],
        categoryIntro: {
            title: 'Наш подход',
            description: 'Мы выбираем подходящий вид декора специально для вас!',
            subtitle: 'Ниже предоставлены стили , которые мы можем реализовать'
        }
    },
    birthdays: {
        bannerImage: '/src/assets/images/categories/birthdays-banner.jpg',
        title: 'Дни рождения',
        description: 'Примеры наших работ на дни рождения.',
        gallery: [
            '/src/assets/images/categories/birthday-gallery-1.jpg',
            '/src/assets/images/categories/birthday-gallery-2.jpg',
            '/src/assets/images/categories/birthday-gallery-3.jpg'
        ],
        categoryIntro: {
            title: 'Наш подход',
            description: 'Мы выбираем подходящий вид декора специально для вас!',
            subtitle: 'Ниже предоставлены стили , которые мы можем реализовать'
        }
    },
    servings: {
        bannerImage: '/src/assets/images/categories/servings-banner.jpg',
        title: 'Сервировки',
        description: 'Примеры наших работ сервировки.',
        gallery: [
            '/src/assets/images/categories/serving-gallery-1.jpg',
            '/src/assets/images/categories/serving-gallery-2.jpg',
            '/src/assets/images/categories/serving-gallery-3.jpg'
        ],
        categoryIntro: {
            title: 'Наш подход',
            description: 'Мы выбираем подходящий вид декора специально для вас!',
            subtitle: 'Ниже предоставлены стили , которые мы можем реализовать'
        }
    }
}

export const works = [
    {
        id: 1,
        title: 'Код Сердца',
        shortDescription: 'Любовь - это то чувство, которое возникает неожиданно, оно как будто появляется из ниоткуда.',
        category: 'weddings',
        slug: 'kod-serdtsa',
        bannerImage: '/src/assets/images/events/weddings/kod-serdtsa/banner.jpg',
        bannerBottomMedia: '/src/assets/images/events/weddings/kod-serdtsa/banner-bottom.mp4',
        bannerBottomImage: '/src/assets/images/events/weddings/kod-serdtsa/banner-bottom.jpg',
        images: [
            '/src/assets/images/events/weddings/kod-serdtsa/7.png',
            '/src/assets/images/events/weddings/kod-serdtsa/1.png',
            '/src/assets/images/events/weddings/kod-serdtsa/2.png',
            '/src/assets/images/events/weddings/kod-serdtsa/3.png',
            '/src/assets/images/events/weddings/kod-serdtsa/4.png',
            '/src/assets/images/events/weddings/kod-serdtsa/6.png'
        ],
        fullDescription: 'Название свадьбы было придумано не просто так, ребята познакомились и стали переписываться. Вова отправил ссылку на сайт «100 вопросов, чтобы влюбиться», ребята каждый день отвечали по одному вопросу, и любовь случилась',
    },
    {
        id: 2,
        title: 'Код Сердца',
        shortDescription: 'Любовь - это то чувство, которое возникает неожиданно, оно как будто появляется из ниоткуда.',
        category: 'weddings',
        slug: 'kod-serdtsa',
        bannerImage: '/src/assets/images/events/weddings/kod-serdtsa/banner.jpg',
        bannerBottomMedia: '/src/assets/images/events/weddings/kod-serdtsa/banner-bottom.mp4',
        bannerBottomImage: '/src/assets/images/events/weddings/kod-serdtsa/banner-bottom.jpg',
        images: [
            '/src/assets/images/events/weddings/kod-serdtsa/7.png',
            '/src/assets/images/events/weddings/kod-serdtsa/1.png',
            '/src/assets/images/events/weddings/kod-serdtsa/2.png',
            '/src/assets/images/events/weddings/kod-serdtsa/3.png',
            '/src/assets/images/events/weddings/kod-serdtsa/4.png',
            '/src/assets/images/events/weddings/kod-serdtsa/6.png'
        ],
        fullDescription: 'Название свадьбы было придумано не просто так, ребята познакомились и стали переписываться. Вова отправил ссылку на сайт «100 вопросов, чтобы влюбиться», ребята каждый день отвечали по одному вопросу, и любовь случилась',
    },
    {
        id: 3,
        title: 'Код Сердца',
        shortDescription: 'Любовь - это то чувство, которое возникает неожиданно, оно как будто появляется из ниоткуда.',
        category: 'weddings',
        slug: 'kod-serdtsa',
        bannerImage: '/src/assets/images/events/weddings/kod-serdtsa/banner.jpg',
        bannerBottomMedia: '/src/assets/images/events/weddings/kod-serdtsa/banner-bottom.mp4',
        bannerBottomImage: '/src/assets/images/events/weddings/kod-serdtsa/banner-bottom.jpg',
        images: [
            '/src/assets/images/events/weddings/kod-serdtsa/7.png',
            '/src/assets/images/events/weddings/kod-serdtsa/1.png',
            '/src/assets/images/events/weddings/kod-serdtsa/2.png',
            '/src/assets/images/events/weddings/kod-serdtsa/3.png',
            '/src/assets/images/events/weddings/kod-serdtsa/4.png',
            '/src/assets/images/events/weddings/kod-serdtsa/6.png'
        ],
        fullDescription: 'Название свадьбы было придумано не просто так, ребята познакомились и стали переписываться. Вова отправил ссылку на сайт «100 вопросов, чтобы влюбиться», ребята каждый день отвечали по одному вопросу, и любовь случилась',
    },
    {
        id: 3,
        title: 'Код Сердца',
        shortDescription: 'Любовь - это то чувство, которое возникает неожиданно, оно как будто появляется из ниоткуда.',
        category: 'weddings',
        slug: 'kod-serdtsa',
        bannerImage: '/src/assets/images/events/weddings/kod-serdtsa/banner.jpg',
        bannerBottomMedia: '/src/assets/images/events/weddings/kod-serdtsa/banner-bottom.mp4',
        bannerBottomImage: '/src/assets/images/events/weddings/kod-serdtsa/banner-bottom.jpg',
        images: [
            '/src/assets/images/events/weddings/kod-serdtsa/7.png',
            '/src/assets/images/events/weddings/kod-serdtsa/1.png',
            '/src/assets/images/events/weddings/kod-serdtsa/2.png',
            '/src/assets/images/events/weddings/kod-serdtsa/3.png',
            '/src/assets/images/events/weddings/kod-serdtsa/4.png',
            '/src/assets/images/events/weddings/kod-serdtsa/6.png'
        ],
        fullDescription: 'Название свадьбы было придумано не просто так, ребята познакомились и стали переписываться. Вова отправил ссылку на сайт «100 вопросов, чтобы влюбиться», ребята каждый день отвечали по одному вопросу, и любовь случилась',
    },
]

export const mainSwiperOptions = {
    modules: [Navigation],
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    navigation: {
        nextEl: '.works-slider__btn--next',
        prevEl: '.works-slider__btn--prev'
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
}

export const workSwiperOptions = (workId, images) => {
    const hasMultipleImages = images.length > 1;

    return {
        modules: [Navigation],
        navigation: {
            nextEl: `.next-${workId}`,
            prevEl: `.prev-${workId}`,
        },
        slidesPerView: 1,
        loop: hasMultipleImages,
        autoplay: hasMultipleImages
            ? { delay: 3000, disableOnInteraction: false }
            : false,
    };
};

export const getWorksByCategory = (categorySlug) => {
    return works.filter(work => work.category === categorySlug)
}

export const getWorkBySlug = (slug) => {
    return works.find(work => work.slug === slug)
}

export const getWorkById = (id) => {
    return works.find(work => work.id === id)
}

export const getCategoryBySlug = (categorySlug) => {
    return worksCategories.find(cat => cat.slug === categorySlug)
}

export const getCategoryDetails = (categorySlug) => {
    return categoryDetails[categorySlug] || null
}