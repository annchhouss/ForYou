<script setup>
import {ref} from 'vue'
import AppHeader from '@/components/layout/AppHeader/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter/AppFooter.vue'
import AppButton from '@/components/ui/AppButton/AppButton.vue'
import AppContactModal from '@/components/ui/AppContactModal/AppContactModal.vue'
import {aboutHero, aboutAgency, aboutHistory} from '@models/aboutData'

const showContactModal = ref(false)

const handleContact = () => {
    showContactModal.value = true
}
</script>

<template>
    <div class="about-view">
        <AppHeader/>
        <main>
            <section class="about-hero">
                <div class="about-hero__overlay">
                    <h1 class="about-hero__title">{{ aboutHero.title }}</h1>
                    <p class="about-hero__description">{{ aboutHero.description }}</p>
                </div>
            </section>
            <section class="agency-section">
                <div class="agency-content">
                    <div class="agency-text">
                        <h2 class="agency-title">{{ aboutAgency.title }}</h2>
                        <p class="agency-description">{{ aboutAgency.description }}</p>
                    </div>
                    <div class="agency-image">
                        <img src="/src/assets/images/banner/about-banner-agency.png" alt="Агентство Для тебя" />
                    </div>
                </div>
            </section>
            <section class="about-steps">
                <h2 class="about-steps__title">
                    Наша история
                </h2>
                <div class="about-steps__grid">
                    <div
                        v-for="step in aboutHistory.steps"
                        :key="step.id"
                        class="about-step"
                    >
                        <div class="about-step__header">
                            <div class="about-step__number">{{ step.number }}</div>
                            <h3 class="about-step__title">{{ step.title }}</h3>
                        </div>
                        <p class="about-step__description">{{ step.description }}</p>
                    </div>
                </div>
            </section>
            <section class="about-banner">
                <div class="about-banner__content">
                    <div class="about-banner__header">
                        <h2 class="about-banner__title">{{ aboutHistory.banner.title }}</h2>
                        <p class="about-banner__description">{{ aboutHistory.banner.description }}</p>
                    </div>
                    <div class="about-banner__cta">
                        <p class="about-banner__cta-title">Добро пожаловать в «Для Тебя»</p>
                        <p class="about-banner__cta-description">Давайте создадим вашу историю вместе.</p>
                        <AppButton
                            variant="primary"
                            size="large"
                            class="about-banner__cta-button"
                            @click="handleContact"
                        >
                            Начать проект
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
@use '../assets/styles/pages/AboutView.scss';
</style>
