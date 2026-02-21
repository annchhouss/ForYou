<script setup>
import {ref} from 'vue'
import AppHeader from '@/components/layout/AppHeader/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter/AppFooter.vue'

import AppButton from '@/components/ui/AppButton/AppButton.vue'
import AppFeatureCard from '@/components/ui/AppFeatureCard/AppFeatureCard.vue'
import AppExpandItem from '@/components/ui/AppExpandItem/AppExpandItem.vue'
import AppContactModal from '@/components/ui/AppContactModal/AppContactModal.vue'
import AppContactForm from '@/components/ui/AppContactForm/AppContactForm.vue'

import {
    heroBanner,
    servicesSection,
    services,
    whyChooseUsBanner,
    features,
    faqSection,
    faqItems,
    contactSection,
} from '@models/homeData'

const faqState = ref(faqItems.map(item => ({ ...item })))
const showContactModal = ref(false)

const handleContact = () => {
    showContactModal.value = true
}

const toggleFaq = (index) => {
    faqState.value[index].open = !faqState.value[index].open
}
</script>

<template>
    <div class="home-view">
        <AppHeader />
        <main>
            <section class="hero-section">
                <div class="hero-overlay">
                    <div class="hero-content">
                        <h1 class="hero-title">
                            <span class="hero-title__line">{{ heroBanner.title }}</span>
                            <span class="hero-title__line">{{ heroBanner.subtitle }}</span>
                        </h1>
                        <div class="hero-categories">
                            Для
                            <p class="category-button">
                                Свадеб
                            </p>
                            ,
                            <p class="category-button">
                                Дней рождений
                            </p>
                            ,
                            <p class="category-button">
                                Мероприятий
                            </p>
                            и
                            <p class="category-button">
                                Тебя
                            </p>
                        </div>
                         <div class="hero-actions">
                            <RouterLink
                                v-if="heroBanner.buttons[0]"
                                :to="'/works'"
                                class="router-link-button"
                            >
                                <AppButton 
                                    :variant="heroBanner.buttons[0].variant" 
                                    :size="heroBanner.buttons[0].size"
                                    class="hero-button"
                                >
                                    {{ heroBanner.buttons[0].text }}
                                </AppButton>
                            </RouterLink>
                            <AppButton 
                                v-if="heroBanner.buttons[1]"
                                :variant="heroBanner.buttons[1].variant" 
                                :size="heroBanner.buttons[1].size"
                                class="hero-button"
                                @click="handleContact"
                            >
                                {{ heroBanner.buttons[1].text }}
                            </AppButton>
                        </div>
                    </div>
                </div>
            </section>
            <section class="services-section">
                <h2 class="section-title">{{ servicesSection.title }}</h2>
                <p class="section-description">{{ servicesSection.description }}</p>
            </section>
            <section class="services-columns">
                <div class="services-grid">
                    <div
                        v-for="service in services"
                        :key="service.id"
                        class="service-card"
                    >
                        <img :src="service.img" :alt="service.title" class="service-card__icon">
                        <h3 class="service-card__title">{{ service.title }}</h3>
                        <p class="service-card__description">{{ service.description }}</p>
                    </div>
                </div>
            </section>
            <section class="why-choose-us">
                <div class="why-choose-us__overlay">
                    <h2 class="why-choose-us__title">{{ whyChooseUsBanner.title }}</h2>
                    <p class="why-choose-us__description">{{ whyChooseUsBanner.description }}</p>
                </div>
            </section>
            <section class="features-section">
                <div class="features-grid">
                    <AppFeatureCard
                        v-for="feature in features"
                        :key="feature.id"
                        :title="feature.title"
                        :description="feature.description"
                        :icon="feature.icon"
                    />
                </div>
            </section>
            <section class="faq-banner">
                <div class="faq-banner__overlay">
                    <h2 class="faq-banner__title">{{ faqSection.title }}</h2>
                    <p class="faq-banner__description">{{ faqSection.description }}</p>
                </div>
            </section>
            <section class="faq-section">
                <div class="faq-container">
                    <AppExpandItem
                        v-for="(item, index) in faqState"
                        :key="item.id"
                        :title="item.title"
                        :number="item.number"
                        :is-open="item.open"
                        @toggle="toggleFaq(index)"
                    >
                        <p>{{ item.content }}</p>
                    </AppExpandItem>
                </div>
            </section>
            <section class="contact-banner">
                <div class="contact-banner__overlay">
                    <div class="contact-banner__content">
                        <img src="/src/assets/images/logo/main-logo-small.png" alt="logo" class="contact-banner__logo">
                        <h2 class="contact-banner__title">{{ contactSection.title }}</h2>
                        <p class="contact-banner__description">{{ contactSection.description }}</p>
                        <AppButton
                            variant="primary"
                            size="large"
                            class="contact-banner__button"
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
@use '../assets/styles/pages/HomeView.scss';
</style>
