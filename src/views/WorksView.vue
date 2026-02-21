<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'

import AppHeader from '@/components/layout/AppHeader/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter/AppFooter.vue'
import AppButton from '@/components/ui/AppButton/AppButton.vue'
import AppContactModal from '@/components/ui/AppContactModal/AppContactModal.vue'

import {worksBannerBottom, worksHero, worksIntro, worksCategories} from '@models/worksData'

const router = useRouter()
const showContactModal = ref(false)
const categoriesSection = ref(null)

const handleContact = () => {
    showContactModal.value = true
}

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

const navigateToCategory = (categorySlug) => {
    scrollToTop()
    router.push(`/works/${categorySlug}`)
}

const scrollToCategories = () => {
    categoriesSection.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
    <div class="works-view">
        <AppHeader />
        <main>
            <section class="hero-section">
                <div class="hero-overlay">
                    <div class="hero-content ">
                        <h1 class="hero-title">{{ worksHero.title }}</h1>
                        <p class="hero-description">{{ worksHero.description }}</p>
                        <AppButton
                            variant="light-outline"
                            size="large"
                            class="hero-button"
                            @click="scrollToCategories"
                        >
                            Посмотреть
                        </AppButton>
                    </div>
                </div>
            </section>
            <section class="about-intro">
                <h2 class="about-intro__title">{{ worksIntro.title }}</h2>
                <p class="about-intro__description">{{ worksIntro.description }}</p>
                <div class="about-intro__subtitle">
                    {{ worksIntro.subtitle }}
                </div>
            </section>
            <section class="categories-section" ref="categoriesSection">
                <div
                    v-for="(category, index) in worksCategories"
                    :key="category.id"
                    class="category-block"
                    :class="{ 'category-block--reverse': index % 2 !== 0 }"
                >
                    <div class="category-image">
                        <img :src="category.image" :alt="category.title" />
                    </div>
                    <div class="category-content">
                        <h3 class="category-title" v-html="category.title" />
                        <p class="category-description" v-html="category.description" />
                        <AppButton
                            variant="primary"
                            size="medium"
                            class="category-button"
                            @click="navigateToCategory(category.slug)"
                        >
                            {{ category.buttonText || 'Перейти' }}
                        </AppButton>
                    </div>
                </div>
                <div class="categories-section-button">
                    <AppButton
                        variant="light-outline"
                        size="large"
                        class="category-content-button"
                        @click="scrollToCategories"
                    >
                        Посмотреть все работы
                    </AppButton>
                </div>
            </section>
            <section class="works-contact-banner">
                <div class="works-contact-banner__overlay">
                    <div class="works-contact-banner__content">
                        <img src="/src/assets/images/logo/main-logo-small.png" alt="logo"
                            class="works-contact-banner__logo">
                        <h2 class="works-contact-banner__title">{{ worksBannerBottom.title }}</h2>
                        <p class="works-contact-banner__description">{{ worksBannerBottom.description }}</p>
                        <AppButton
                            variant="light-outline"
                            size="large"
                            class="works-contact-banner__button"
                            @click="handleContact()"
                        >
                            {{ worksBannerBottom.button }}
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
@use '../assets/styles/pages/WorksView.scss';
</style>

