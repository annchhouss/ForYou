<script setup>
import {ref} from 'vue'

import AppHeader from '@/components/layout/AppHeader/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter/AppFooter.vue'
import AppButton from '@/components/ui/AppButton/AppButton.vue'
import AppContactModal from '@/components/ui/AppContactModal/AppContactModal.vue'
import AppContactForm from '@/components/ui/AppContactForm/AppContactForm.vue'

import {processHero, processIntro, processSteps} from '@models/processData'
import {contactSection} from '@models/homeData'

const showContactModal = ref(false)

const handleContact = () => {
    showContactModal.value = true
}
</script>

<template>
    <div class="process-view">
        <AppHeader />
        <main class="process-view__main">
            <section class="process-hero">
                <div class="process-hero__overlay">
                    <h1 class="process-hero__title">{{ processHero.title }}</h1>
                    <p class="process-hero__description">{{ processHero.description }}</p>
                </div>
            </section>
            <section class="process-intro">
                <h2 class="process-intro__title">{{ processIntro.title }}</h2>
                <p class="process-intro__description">{{ processIntro.description }}</p>
                <div class="process-intro__subtitle">
                    {{ processIntro.subtitle }}
                </div>
            </section>
            <section class="process-steps">
                <div class="process-steps__grid">
                    <div
                        v-for="step in processSteps"
                        :key="step.id"
                        class="process-step"
                    >
                        <div class="process-step__header">
                            <div class="process-step__number">{{ step.number }}</div>
                            <h3 class="process-step__title">{{ step.title }}</h3>
                        </div>
                        <p class="process-step__description">{{ step.description }}</p>
                    </div>
                </div>
            </section>
            <section class="process-contact-banner">
                <div class="process-contact-banner__overlay">
                    <div class="process-contact-banner__content">
                        <img src="/src/assets/images/logo/main-logo-small.png" alt="logo"
                            class="process-contact-banner__logo">
                        <h2 class="process-contact-banner__title">{{ contactSection.title }}</h2>
                        <p class="process-contact-banner__description">{{ contactSection.description }}</p>
                        <AppButton
                            variant="primary"
                            size="large"
                            class="process-contact-banner__button"
                            @click="handleContact()"
                        >
                            {{ contactSection.buttonText }}
                        </AppButton>
                    </div>
                </div>
            </section>
            <AppContactForm :initial-budget="[50000, 200000]" />
        </main>
        <AppFooter />
        <AppContactModal
            :is-open="showContactModal"
            @close="showContactModal = false"
        />
    </div>
</template>

<style lang="scss">
@use '../assets/styles/pages/ProcessView.scss';
</style>
