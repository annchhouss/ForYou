<script setup>
import {ref, computed, onMounted} from 'vue'
import {useRoute, useRouter} from 'vue-router'

import AppHeader from '@/components/layout/AppHeader/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter/AppFooter.vue'
import AppButton from '@/components/ui/AppButton/AppButton.vue'
import AppContactModal from '@/components/ui/AppContactModal/AppContactModal.vue'

import {getWorkBySlug} from '@models/worksData'

const route = useRoute()
const router = useRouter()
const showContactModal = ref(false)
const workGallery = ref(null)
const categorySlug = route.params.category
const workSlug = route.params.slug

const work = computed(() => {
    return getWorkBySlug(workSlug)
})

const handleContact = () => {
    showContactModal.value = true
}

const scrollToGallery = () => {
    if (workGallery.value) {
        workGallery.value.scrollIntoView({ behavior: 'smooth' })
    }
}

const getMediaType = (url) => {
    if (!url) return null
    const ext = url.split('.').pop().toLowerCase()

    if (['mp4', 'webm', 'ogg'].includes(ext)) return 'video'

    if (['jpg', 'jpeg', 'png', 'webp', 'gif'].includes(ext)) return 'image'

    return null
}

const bannerMediaType = computed(() => {
    return getMediaType(work.value?.bannerBottomMedia)
})

const hasVideo = computed(() => {
    return bannerMediaType.value === 'video'
})

onMounted(() => {
    if (!work.value) {
        router.push(`/works/${categorySlug}`)
    }
})
</script>

<template>
    <div class="event-detail-view" v-if="work">
        <AppHeader />
        <main>
            <section class="event-banner" :style="{ backgroundImage: `url(${work.bannerImage})` }">
                <div class="event-banner__overlay">
                    <div class="event-banner__content">
                        <h2 class="event-banner__title">{{ work.title }}</h2>
                        <p class="event-banner__description">{{ work.shortDescription }}</p>
                        <AppButton
                            variant="light-outline"
                            size="large"
                            class="event-banner__button"
                            @click="scrollToGallery()"
                        >
                            Посмотреть
                        </AppButton>
                    </div>
                </div>
            </section>
            <section class="event-intro">
                <h2 class="event-intro__title">Проект {{ work.title }}</h2>
                <p class="event-intro__description">{{ work.fullDescription }}</p>
            </section>
            <section
                v-if="work.images && work.images.length > 0"
                class="event-gallery"
                ref="workGallery"
            >
                <div class="event-gallery__grid">
                    <div
                        v-for="(image, index) in work.images"
                        :key="index"
                        class="event-gallery__item"
                    >
                        <img :src="image" :alt="`${work.title} - фото ${index + 1}`" class="event-gallery__image" />
                    </div>
                </div>
            </section>
            <section v-if="hasVideo" class="event-video-banner">
                <video 
                    :src="work.bannerBottomMedia" 
                    autoplay 
                    muted 
                    loop 
                    playsinline
                    class="event-video-banner__video"
                ></video>
            </section>
            <section class="event-contact-banner">
                <div class="event-contact-banner__media">
                    <img 
                        :src="work.bannerBottomImage || '/src/assets/images/default-banner.jpg'" 
                        alt="Фон мероприятия" 
                        class="event-contact-banner__image" 
                    />
                </div>
                <div class="event-contact-banner__overlay">
                    <div class="event-contact-banner__content">
                        <img src="/src/assets/images/logo/main-logo-small.png" alt="logo"
                            class="event-contact-banner__logo">
                        <h2 class="event-contact-banner__title">Позвольте нам воплотить ваши идеи в атмосфере.</h2>
                        <p class="event-contact-banner__description">
                            Мы гарантируем безупречный результат — и в интерьере, и в декоре мероприятия. Слаженная
                            работа нашей
                            многопрофильной команды обеспечит целостное и яркое воплощение вашей идеи
                        </p>
                        <AppButton
                            variant="light-outline"
                            size="large"
                            @click="handleContact()"
                        >
                            Сотрудничать
                        </AppButton>
                    </div>
                </div>
            </section>
        </main>
        <AppFooter />
        <AppContactModal
            :is-open="showContactModal"
            @close="showContactModal = false"
        />
    </div>
</template>

<style lang="scss">
@use '../assets/styles/pages/WorkDetailView.scss';
</style>
