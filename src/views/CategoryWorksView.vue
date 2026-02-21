<script setup>
import {ref, computed, onMounted} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {Swiper, SwiperSlide} from 'swiper/vue'

import AppHeader from '@/components/layout/AppHeader/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter/AppFooter.vue'
import AppButton from '@/components/ui/AppButton/AppButton.vue'
import AppContactModal from '@/components/ui/AppContactModal/AppContactModal.vue'

import {getCategoryDetails, getWorksByCategory, mainSwiperOptions, workSwiperOptions} from '@models/worksData'
import 'swiper/css'
import 'swiper/css/navigation'

const route = useRoute()
const router = useRouter()
const sliderSection = ref(null)
const showContactModal = ref(false)
const innerSwipers = ref([])
const categorySlug = route.params.category

const onSwiperInit = (swiper, workId) => {
    const existingIndex = innerSwipers.value.findIndex(s => s.workId === workId)

    if (existingIndex >= 0) {
        innerSwipers.value[existingIndex].swiper = swiper
    } else {
        innerSwipers.value.push({ workId, swiper })
    }
}

const slideNext = (workId, event) => {
    event.stopPropagation()
    const swiperObj = innerSwipers.value.find(s => s.workId === workId)

    if (swiperObj && swiperObj.swiper) {
        swiperObj.swiper.slideNext()
    }
}

const slidePrev = (workId, event) => {
    event.stopPropagation()
    const swiperObj = innerSwipers.value.find(s => s.workId === workId)

    if (swiperObj && swiperObj.swiper) {
        swiperObj.swiper.slidePrev()
    }
}

const handleContact = () => {
    showContactModal.value = true
}

const scrollToSlider = () => {
    if (sliderSection.value) {
        sliderSection.value.scrollIntoView({ behavior: 'smooth' })
    }
}

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

const navigateToWork = (workSlug) => {
    scrollToTop()
    router.push(`/works/${categorySlug}/${workSlug}`)
}

const categoryDetails = computed(() => {
    return getCategoryDetails(categorySlug)
})

const categoryWorks = computed(() => {
    return getWorksByCategory(categorySlug)
})

onMounted(() => {
    return () => {
        innerSwipers.value.forEach(item => {
            if (item.swiper && item.swiper.destroy) {
                item.swiper.destroy()
            }
        })

        innerSwipers.value = []
    }
})
</script>

<template>
    <div class="category-works-view" v-if="categoryDetails">
        <AppHeader />
        <main>
            <section class="category-banner" :style="{ backgroundImage: `url(${categoryDetails.bannerImage})` }">
                <div class="category-banner__overlay">
                    <div class="category-banner__content">
                        <h2 class="category-banner__title">{{ categoryDetails.title }}</h2>
                        <p class="category-banner__description">{{ categoryDetails.description }}</p>
                        <AppButton variant="light-outline" size="large" class="category-banner__button"
                            @click="scrollToSlider()">
                            Посмотреть
                        </AppButton>
                    </div>
                </div>
            </section>
            <section class="category-intro">
                <h2 class="category-intro__title">{{ categoryDetails.categoryIntro.title }}</h2>
                <p class="category-intro__description">{{ categoryDetails.categoryIntro.description }}</p>
                <div class="category-intro__subtitle">
                    {{ categoryDetails.categoryIntro.subtitle }}
                </div>
            </section>
            <section
                ref="sliderSection"
                class="works-slider"
            >
                <div class="works-slider__wrapper">
                    <button class="works-slider__btn works-slider__btn--prev">
                        <img src="/src/assets/images/slider-left.png" alt="Назад" />
                    </button>
                    <button class="works-slider__btn works-slider__btn--next">
                        <img src="/src/assets/images/slider-right.png" alt="Вперёд" />
                    </button>
                    <swiper
                        v-bind="mainSwiperOptions"
                        class="works-slider__swiper"
                    >
                        <swiper-slide
                            v-for="work in categoryWorks"
                            :key="work.id"
                            class="works-slider__slide"
                        >
                            <div
                                class="work-card"
                                @click="navigateToWork(work.slug)"
                            >
                                <swiper
                                    v-bind="workSwiperOptions(work.id, work.images)"
                                    :key="work.id"
                                    class="work-card__gallery"
                                    @swiper="(swiper) => onSwiperInit(swiper, work.id)"
                                >
                                    <swiper-slide
                                        v-for="(img, idx) in work.images"
                                        :key="idx"
                                        class="work-card__slide"
                                    >
                                        <div class="work-card__image" :style="{ backgroundImage: `url(${img})` }"></div>
                                    </swiper-slide>
                                </swiper>
                                <div class="work-card__overlay"></div>
                                <div class="work-card__content">
                                    <h3 class="work-card__title">{{ work.title }}</h3>
                                </div>
                                <div class="work-card__nav">
                                    <button
                                        :class="`work-card__nav-btn work-card__nav-btn--prev prev-${work.id}`"
                                        @click.stop="slidePrev(work.id, $event)"
                                        aria-label="Предыдущее изображение"
                                    >
                                        <img src="/src/assets/images/arrow-left.svg" alt="Arrow">
                                    </button>
                                    <button
                                        :class="`work-card__nav-btn work-card__nav-btn--next next-${work.id}`"
                                        @click.stop="slideNext(work.id, $event)"
                                        aria-label="Следующее изображение"
                                    >
                                        <img src="/src/assets/images/arrow-right.svg" alt="Arrow">
                                    </button>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </section>
            <section class="category-gallery" v-if="categoryDetails.gallery && categoryDetails.gallery.length > 0">
                <h2 class="category-gallery__title">Наши фото</h2>
                <div class="category-gallery__grid">
                    <div v-for="(image, index) in categoryDetails.gallery" :key="index" class="category-gallery__item">
                        <img :src="image" :alt="`${categoryDetails.title} - фото ${index + 1}`"
                            class="category-gallery__image" />
                    </div>
                </div>
            </section>
            <section class="category-contact-banner"
                :style="{ backgroundImage: `url(${categoryDetails.bannerImage})` }">
                <div class="category-contact-banner__overlay">
                    <div class="category-contact-banner__content">
                        <img src="/src/assets/images/logo/main-logo-small.png" alt="logo"
                            class="category-contact-banner__logo">
                        <h2 class="category-contact-banner__title">Позвольте нам воплотить ваши идеи в атмосфере.</h2>
                        <p class="category-contact-banner__description">Мы гарантируем безупречный результат — и в
                            интерьере, и в декоре мероприятия. Слаженная работа нашей многопрофильной команды обеспечит
                            целостное и яркое воплощение вашей идеи</p>
                        <AppButton variant="light-outline" size="large" class="category-contact-banner__button"
                            @click="handleContact()">
                            Сотрудничать
                        </AppButton>
                    </div>
                </div>
            </section>
        </main>
        <AppFooter />
        <AppContactModal :is-open="showContactModal" @close="showContactModal = false" />
    </div>
</template>

<style lang="scss">
@use '../assets/styles/pages/CategoryWorksView.scss';
</style>