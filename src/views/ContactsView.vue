<script setup>
import {ref} from 'vue'

import {footerData} from '@models/homeData'
import AppHeader from '@/components/layout/AppHeader/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter/AppFooter.vue'

import AppContactModal from '@/components/ui/AppContactModal/AppContactModal.vue'
import AppContactForm from '@/components/ui/AppContactForm/AppContactForm.vue'

const showContactModal = ref(false)
</script>

<template>
    <div class="contact-view">
        <AppHeader />
        <main class="contact-view__main">
            <section class="contact-hero">
                <div class="contact-hero__overlay">
                    <h1 class="contact-hero__title">Связаться с нами</h1>
                    <p class="contact-hero__description">Свяжитесь с нами сегодня и позвольте нам помочь вам с любыми
                        вопросами, которые у вас могут возникнуть.</p>
                </div>
            </section>
            <section class="contact-item">
                <div class="contact-item-link">
                    <img src="/src/assets/images/footer-links/email.svg" alt="Email" class="contact-item-link__icon">
                    <a :href="`mailto:${footerData.email}`" class="contact-item-link__text">
                        studiya_dlyatebya@mail.ru
                    </a>
                </div>
                <div class="contact-item-link">
                    <img src="/src/assets/images/footer-links/phone.svg" alt="Телефон" class="contact-item-link__icon">
                    <a :href="`tel:${footerData.phone}`" class="contact-item-link__text">
                        +7(928)279-78-72
                    </a>
                </div>
                <div class="contact-item-link">
                    <img src="/src/assets/images/footer-links/location.svg" alt="Местоположение"
                        class="contact-item-link__icon">
                    <span class="contact-item-link__text">
                        Ростов-на-Дону
                    </span>
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
@use '../assets/styles/pages/ContactsView.scss';
</style>
