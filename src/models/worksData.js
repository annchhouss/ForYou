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
        image: '/images/events/weddings/banner.png',
        buttonText: 'Перейти'
    },
    {
        id: 'corporate',
        title: 'Корпоративы',
        slug: 'corporate',
        description: 'Не просто мероприятие, а впечатление <br />Корпоратив — это больше, чем встреча коллег. Это возможность сказать «спасибо», вдохновить на новые победы и создать ту самую атмосферу единства, которая остаётся в памяти команды. Мы превращаем бизнес-событие в гармоничное пространство, где деловой этикет встречается с душевным теплом.',
        image: '/images/events/corporate/banner.png',
        buttonText: 'Перейти'
    },
    {
        id: 'birthdays',
        title: 'Дни рождения',
        slug: 'birthdays',
        description: 'Год стал ярче — праздник должен быть прекраснее <br />День рождения — это личный праздник, где каждая деталь говорит о виновнике торжества. Мы создаём не просто декор, а ту самую волшебную атмосферу, в которой загадываются самые заветные желания и рождаются самые тёплые воспоминания. Пусть в этот день всё будет идеально.',
        image: '/images/events/birthdays/banner.png',
        buttonText: 'Перейти'
    },
    {
        id: 'servings',
        title: 'Сервировки',
        slug: 'servings',
        description: 'Идеальная форма для вашего мероприятия <br />Когда важна не масштабность, а глубина впечатлений. Для тех самых тёплых встреч, где ценен каждый гость и каждое слово. Мы верим, что магия — в деталях, а уют — в продуманности. Создаём камерное пространство, где обстановка говорит сама за себя: «Здесь вам рады».',
        image: '/images/events/servings/banner.png',
        buttonText: 'Перейти'
    },
]

export const categoryDetails = {
    weddings: {
        bannerImage: '/images/events/weddings/category-banner.png',
        title: 'Свадьбы',
        description: 'Примеры наших свадебных работ',
        gallery: [
            '/images/events/weddings/category/1.png',
            '/images/events/weddings/category/2.png',
            '/images/events/weddings/category/3.png',
            '/images/events/weddings/category/4.png',
            '/images/events/weddings/category/5.png',
            '/images/events/weddings/category/6.png',
        ],
        categoryIntro: {
            title: 'Наш подход',
            description: 'Мы выбираем подходящий вид декора специально для вас!',
            subtitle: 'Ниже предоставлены стили , которые мы можем реализовать'
        }
    },
    corporate: {
        bannerImage: '/images/events/corporate/banner.png',
        title: 'Корпоративы',
        description: 'Примеры наших корпоративных работ.',
        gallery: [
            '/images/events/corporate/ecos/ecos-6.JPG',
            '/images/events/corporate/circus/circus-5.jpg',
            '/images/events/corporate/nais/nais-3.JPG',
            '/images/events/corporate/ecos/ecos-1.JPG',
            '/images/events/corporate/circus/circus-1.jpg',
            '/images/events/corporate/nais/nais-5.JPG'
        ],
        categoryIntro: {
            title: 'Наш подход',
            description: 'Мы выбираем подходящий вид декора специально для вас!',
            subtitle: 'Ниже предоставлены стили , которые мы можем реализовать'
        }
    },
    birthdays: {
        bannerImage: '/images/events/birthdays/banner.png',
        title: 'Дни рождения',
        description: 'Примеры наших работ на дни рождения.',
        gallery: [
            '/images/events/birthdays/circus/circ-6.JPG',
            '/images/events/birthdays/debut/debut-3.JPG',
            '/images/events/birthdays/bulgakov/strashno-krasivo-1.JPG',
            '/images/events/birthdays/circus/circ-2.JPG',
            '/images/events/birthdays/debut/debut-1.JPG',
            '/images/events/birthdays/bulgakov/strashno-krasivo-3.JPG'
        ],
        categoryIntro: {
            title: 'Наш подход',
            description: 'Мы выбираем подходящий вид декора специально для вас!',
            subtitle: 'Ниже предоставлены стили , которые мы можем реализовать'
        }
    },
    servings: {
        bannerImage: '/images/events/servings/banner.png',
        title: 'Сервировки',
        description: 'Примеры наших работ сервировки.',
        gallery: [
            '/images/events/servings/orange/serv-orange-3.jpg',
            '/images/events/servings/green/serv-green-1.jpg',
            '/images/events/servings/red/serv-red-5.JPG',
            '/images/events/servings/gently/serv-gently-1.JPG',
            '/images/events/servings/orange/serv-orange-1.jpg',
            '/images/events/servings/green/serv-green-3.jpg'
        ],
        categoryIntro: {
            title: 'Наш подход',
            description: 'Мы выбираем подходящий вид декора специально для вас!',
            subtitle: 'Ниже предоставлены стили , которые мы можем реализовать'
        }
    }
}

export const works = [
    //weddings
    {
        id: 1,
        title: 'Код Сердца',
        shortDescription: 'Любовь - это то чувство, которое возникает неожиданно, оно как будто появляется из ниоткуда.',
        category: 'weddings',
        slug: 'kod-serdtsa',
        bannerImage: '/images/events/weddings/kod-serdtsa/banner.jpg',
        bannerBottomMedia: '/images/events/weddings/kod-serdtsa/banner-bottom.mp4',
        bannerBottomImage: '/images/events/weddings/kod-serdtsa/banner.jpg',
        images: [
            '/images/events/weddings/kod-serdtsa/7.png',
            '/images/events/weddings/kod-serdtsa/1.png',
            '/images/events/weddings/kod-serdtsa/2.png',
            '/images/events/weddings/kod-serdtsa/3.png',
            '/images/events/weddings/kod-serdtsa/4.png',
            '/images/events/weddings/kod-serdtsa/6.png'
        ],
        fullDescription: 'Название свадьбы было придумано не просто так, ребята познакомились и стали переписываться. Вова отправил ссылку на сайт «100 вопросов, чтобы влюбиться», ребята каждый день отвечали по одному вопросу, и любовь случилась',
    },
    {
        id: 2,
        title: 'Казаки | Любовь бескрайняя как степь',
        shortDescription: 'Мы открываем историю одного особенного проекта — свадьбы Дмитрия и Анастасии. На эту концепцию нас вдохновила любовь пары к донским традициям и большой интерес к казачеству.',
        category: 'weddings',
        slug: 'kazaki',
        bannerImage: '/images/events/weddings/kazaki/kazak-8.jpg',
        bannerBottomImage: '/images/events/weddings/kazaki/kazak-3.jpg',
        images: [
            '/images/events/weddings/kazaki/kazak-1.jpg',
            '/images/events/weddings/kazaki/kazak-2.jpg',
            '/images/events/weddings/kazaki/kazak-3.jpg',
            '/images/events/weddings/kazaki/kazak-4.jpg',
            '/images/events/weddings/kazaki/kazak-5.jpg',
            '/images/events/weddings/kazaki/kazak-6.jpg',
            '/images/events/weddings/kazaki/kazak-7.jpg',
            '/images/events/weddings/kazaki/kazak-8.jpg',
            '/images/events/weddings/kazaki/kazak-9.jpg'
        ],
        fullDescription: 'Мы использовали нестандартную расстановку столов. Длинные прямоугольные столы - отсылка к традиционным казачьим застольям, за которыми собиралась вся семья. А деревянные стулья добавили пространству тепла и того самого уюта',
    },
    {
        id: 3,
        title: 'Владислав & Наталья',
        shortDescription: 'Не перестаем говорить о том, что наши молодые - наше вдохновение.',
        category: 'weddings',
        slug: 'vladislav&natali',
        bannerImage: '/images/events/weddings/natali/natali-5.JPG',
        bannerBottomMedia: '/images/events/weddings/natali/natali-banner-vid.mp4',
        bannerBottomImage: '/images/events/weddings/natali/natali-8.JPG',
        images: [
            '/images/events/weddings/natali/natali-1.JPG',
            '/images/events/weddings/natali/natali-2.JPG',
            '/images/events/weddings/natali/natali-3.JPG',
            '/images/events/weddings/natali/natali-4.JPG',
            '/images/events/weddings/natali/natali-5.JPG',
            '/images/events/weddings/natali/natali-6.JPG',
            '/images/events/weddings/natali/natali-7.JPG',
            '/images/events/weddings/natali/natali-8.JPG',
            '/images/events/weddings/natali/natali-9.JPG'
        ],
        fullDescription: 'Владислав и Наталья с особым трепетом выбирали все детали. Они хотели, чтобы их гости получили истинное наслаждение от праздника. В подарок для них подготовили брендированные зеркала с именем каждого',
    },
    {
        id: 4,
        title: 'Все Просто',
        shortDescription: '«Иногда то, что кажется простым на первый взгляд, не всегда таковым является».',
        category: 'weddings',
        slug: 'vse-prosto',
        bannerImage: '/images/events/weddings/vse-prosto/vse-prosto-4.jpg',
        bannerBottomMedia: '/images/events/weddings/vse-prosto/vse-prosto-banner-vid.mp4',
        bannerBottomImage: '/images/events/weddings/vse-prosto/vse-prosto-9.jpg',
        images: [
            '/images/events/weddings/vse-prosto/vse-prosto-1.jpg',
            '/images/events/weddings/vse-prosto/vse-prosto-2.jpg',
            '/images/events/weddings/vse-prosto/vse-prosto-3.jpg',
            '/images/events/weddings/vse-prosto/vse-prosto-4.jpg',
            '/images/events/weddings/vse-prosto/vse-prosto-5.jpg',
            '/images/events/weddings/vse-prosto/vse-prosto-6.jpg',
            '/images/events/weddings/vse-prosto/vse-prosto-7.jpg',
            '/images/events/weddings/vse-prosto/vse-prosto-8.jpg',
            '/images/events/weddings/vse-prosto/vse-prosto-9.jpg'
        ],
        fullDescription: 'В истории Андрея и Анны на первый взгляд все просто. Они просто познакомились, просто свидание, и вот он ПРОСТО едет за ней в другой город. Скалывается впечатление, что все у пары все просто, но это не совсем так. За их историей скрывается глубина, которую мы хотели подчеркнуть концепцией «просто о сложном».',
    },
    // corporate
    {
        id: 5,
        title: 'ECOS | вода вне времени',
        shortDescription: '35 лет компании ECOS. Вода вне времени',
        category: 'corporate',
        slug: 'ecos',
        bannerImage: '/images/events/corporate/ecos/ecos-6.jpg',
        bannerBottomMedia: '/images/events/corporate/ecos/ecos.mp4',
        bannerBottomImage: '/images/events/corporate/ecos/ecos-9.jpg',
        images: [
            '/images/events/corporate/ecos/ecos-1.jpg',
            '/images/events/corporate/ecos/ecos-2.jpg',
            '/images/events/corporate/ecos/ecos-3.jpg',
            '/images/events/corporate/ecos/ecos-4.jpg',
            '/images/events/corporate/ecos/ecos-5.jpg',
            '/images/events/corporate/ecos/ecos-6.jpg',
            '/images/events/corporate/ecos/ecos-7.jpg',
            '/images/events/corporate/ecos/ecos-8.jpg',
            '/images/events/corporate/ecos/ecos-9.jpg'
        ],
        fullDescription: 'Деятельность компании непосредственно связана с водой, поэтому мы сделали необычные гостевые композиции со льдом и живыми цветами. Получилось очень стильно',
    },
    {
        id: 6,
        title: 'Цирк "Новый год"',
        shortDescription: 'Корпоративы ',
        category: 'corporate',
        slug: 'circus',
        bannerImage: '/images/events/corporate/circus/circus-5.jpg',
        bannerBottomMedia: '/images/events/corporate/circus/circus-banner-bottom.mp4',
        bannerBottomImage: '/images/events/corporate/circus/circus-1.jpg',
        images: [
            '/images/events/corporate/circus/circus-1.jpg',
            '/images/events/corporate/circus/circus-2.jpg',
            '/images/events/corporate/circus/circus-3.jpg',
            '/images/events/corporate/circus/circus-4.jpg',
            '/images/events/corporate/circus/circus-5.jpg',
            '/images/events/corporate/circus/circus-6.jpg',
            '/images/events/corporate/circus/circus-7.jpg',
            '/images/events/corporate/circus/circus-8.jpg',
            '/images/events/corporate/circus/circus-9.jpg'
        ],
        fullDescription: 'Корпоратив в стиле цирк "GRAIN CIRCUS" ',
    },
    {
        id: 7,
        title: 'NAIS',
        shortDescription: '«Миссия выполнима».',
        category: 'corporate',
        slug: 'nais',
        bannerImage: '/images/events/corporate/nais/nais-3.jpg',
        bannerBottomMedia: '/images/events/corporate/nais/nais.mp4',
        bannerBottomImage: '/images/events/corporate/nais/nais-3.jpg',
        images: [
            '/images/events/corporate/nais/nais-1.jpg',
            '/images/events/corporate/nais/nais-2.jpg',
            '/images/events/corporate/nais/nais-3.jpg',
            '/images/events/corporate/nais/nais-4.jpg',
            '/images/events/corporate/nais/nais-5.jpg',
            '/images/events/corporate/nais/nais-6.jpg',
        ],
        fullDescription:'НАИС миссия Выполнима',
    },
    //birthdays
    {
        id: 8,
        title: 'Цирк Дамира | 10 лет',
        shortDescription: '«День рождения в стиле страшного цирка».',
        category: 'birthdays',
        slug: 'birthdaydamir',
        bannerImage: '/images/events/birthdays/circus/circ-6.jpg',
        bannerBottomMedia: '/images/events/birthdays/circus/circ-vid.mp4',
        bannerBottomImage: '/images/events/birthdays/circus/circ-3.jpg',
        images: [
            '/images/events/birthdays/circus/circ-1.jpg',
            '/images/events/birthdays/circus/circ-2.jpg',
            '/images/events/birthdays/circus/circ-3.jpg',
            '/images/events/birthdays/circus/circ-4.jpg',
            '/images/events/birthdays/circus/circ-5.jpg',
            '/images/events/birthdays/circus/circ-6.jpg'
        ],
        fullDescription:'Мы вдохновились ужастиками и ретро-стилистикой, создавали праздник от которого даже у взрослых по спине бежал холодок',
    },
    {
        id: 9,
        title: 'Debut | Живи играючи',
        shortDescription: '«Ведь в 50 все только начинается!».',
        category: 'birthdays',
        slug: 'debut',
        bannerImage: '/images/events/birthdays/debut/debut-3.jpg',
        bannerBottomMedia: '/images/events/birthdays/debut/debut-vid.mp4',
        bannerBottomImage: '/images/events/birthdays/debut/debut-7.jpg',
        images: [
            '/images/events/birthdays/debut/debut-1.jpg',
            '/images/events/birthdays/debut/debut-2.jpg',
            '/images/events/birthdays/debut/debut-3.jpg',
            '/images/events/birthdays/debut/debut-4.jpg',
            '/images/events/birthdays/debut/debut-5.jpg',
            '/images/events/birthdays/debut/debut-6.jpg',
            '/images/events/birthdays/debut/debut-7.jpg',
            '/images/events/birthdays/debut/debut-8.jpg',
            '/images/events/birthdays/debut/debut-9.jpg'
        ],
        fullDescription:'Когда жизнь наполнена красками. Когда энергия кипит. Когда возраст лишь отражение мудрости человека. Ведь в 50 все только начинается! Живи играючи',
    },
    {
        id: 10,
        title: 'Страшно красиво',
        shortDescription: '«Современный бал»',
        category: 'birthdays',
        slug: 'bulgakov',
        bannerImage: '/images/events/birthdays/bulgakov/strashno-krasivo-1.jpg',
        bannerBottomMedia: '/images/events/birthdays/bulgakov/strashno-krasivo-banner-bottom.mp4',
        bannerBottomImage: '/images/events/birthdays/bulgakov/strashno-krasivo-3.jpg',
        images: [
            '/images/events/birthdays/bulgakov/strashno-krasivo-1.jpg',
            '/images/events/birthdays/bulgakov/strashno-krasivo-2.jpg',
            '/images/events/birthdays/bulgakov/strashno-krasivo-3.jpg',
            '/images/events/birthdays/bulgakov/strashno-krasivo-4.jpg',
            '/images/events/birthdays/bulgakov/strashno-krasivo-5.jpg',
            '/images/events/birthdays/bulgakov/strashno-krasivo-6.jpg'
        ],
        fullDescription:'Мы черпали вдохновение в легендарном романе M.Булгакова и самом загадочном событии книги - бале Маргариты. Наша задача была не просто оформить пространство, а создать магический театр эмоций, где гости проходят через «завесу реальности» и попадают в другой мир. Наша идея создать «путешествие», где гости сначала наблюдают, а затем погружаются в атмосферу праздника. Как в романе Булгакова: сначала - туман, ожидание, интрига...  А потом - бал, где оживают мечты...',
    },
    //servings
    {
        id: 11,
        title: '9125 дней',
        shortDescription: '«9125 дней любви».',
        category: 'servings',
        slug: '9125-days',
        bannerImage: '/images/events/servings/orange/serv-orange-3.jpg',
        bannerBottomImage: '/images/events/servings/orange/serv-orange-5.jpg',
        images: [
            '/images/events/servings/orange/serv-orange-1.jpg',
            '/images/events/servings/orange/serv-orange-2.jpg',
            '/images/events/servings/orange/serv-orange-3.jpg',
            '/images/events/servings/orange/serv-orange-4.jpg',
            '/images/events/servings/orange/serv-orange-5.jpg',
            '/images/events/servings/orange/serv-orange-6.jpg'
        ],
        fullDescription:'Когда детали имеют значение. 9125 дней или 25 лет любви. Сервировка была предназначена для прекрасной пары, которая вместе уже 25 лет! Ну, или все-таки 9125 дней',
    },
    {
        id: 12,
        title: 'В оттенках зеленого',
        shortDescription: '',
        category: 'servings',
        slug: 'green-serving',
        bannerImage: '/images/events/servings/green/serv-green-1.jpg',
        bannerBottomMedia: '/images/events/servings/green/serv-green-bottom-vid.mp4',
        bannerBottomImage: '/images/events/servings/green/serv-green-3.jpg',
        images: [
            '/images/events/servings/green/serv-green-1.jpg',
            '/images/events/servings/green/serv-green-2.jpg',
            '/images/events/servings/green/serv-green-3.jpg',
            '/images/events/servings/green/serv-green-4.jpg',
            '/images/events/servings/green/serv-green-5.jpg',
            '/images/events/servings/green/serv-green-6.jpg'
        ],
        fullDescription:'Перед нами стояла задача сделать уютный вечер для дня рождения на 10 человек. Для создания более камерной атмосферы, мы зашили весь зал тканью. По центру зала поставили необычной формы прямоугольный стол',
    },
    {
        id: 13,
        title: 'В ритме красного',
        shortDescription: '',
        category: 'servings',
        slug: 'red-serving',
        bannerImage: '/images/events/servings/red/serv-red-3.jpg',
        bannerBottomMedia: '/images/events/servings/red/serv-red-banner-bottom.mp4',
        bannerBottomImage: '/images/events/servings/red/serv-red-3.jpg',
        images: [
            '/images/events/servings/red/serv-red-1.jpg',
            '/images/events/servings/red/serv-red-2.jpg',
            '/images/events/servings/red/serv-red-3.jpg',
            '/images/events/servings/red/serv-red-4.jpg',
            '/images/events/servings/red/serv-red-5.jpg',
            '/images/events/servings/red/serv-red-6.jpg',
        ],
        fullDescription:'Оформление декора в едином цвете - сейчас тренд, который набирает обороты. Моно оформление подразумевает использование одного цвета в различных оттенках и текстурах. Это позволяет создать гармоничное и стильное оформление, где каждый элемент будет дополнять другой',
    },
    {
        id: 14,
        title: 'Цветы и нежность',
        shortDescription: '',
        category: 'servings',
        slug: 'gently',
        bannerImage: '/images/events/servings/gently/serv-gently-1.jpg',
        bannerBottomImage: '/images/events/servings/gently/serv-gently-1.jpg',
        images: [
            '/images/events/servings/gently/serv-gently-1.jpg',
            '/images/events/servings/gently/serv-gently-2.jpg',
            '/images/events/servings/gently/serv-gently-3.jpg',
            '/images/events/servings/gently/serv-gently-4.jpg',
            '/images/events/servings/gently/serv-gently-5.jpg',
            '/images/events/servings/gently/serv-gently-6.jpg',
            '/images/events/servings/gently/serv-gently-7.jpg',
            '/images/events/servings/gently/serv-gently-8.jpg',
            '/images/events/servings/gently/serv-gently-9.jpg'
        ],
        fullDescription:'Тщательная проработка посуды, тарелок, бокалов, приборов, салфеток, скатертей, карточек - все это создает невероятную красоту',
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