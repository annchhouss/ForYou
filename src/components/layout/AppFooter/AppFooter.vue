<script setup>
import {computed} from 'vue'
import {useRoute} from 'vue-router'
import {footerData} from '@models/homeData'

const route = useRoute()

const isHomePage = computed(() => route.path === '/')
</script>

<template>
    <footer class="app-footer">
        <div class="container">
            <div class="app-footer__top">
                <div class="app-footer__logo">
                    <RouterLink to="/">
                        <img src="/src/assets/images/logo/main-logo.png" alt="Logo">
                    </RouterLink>
                </div>
                <nav class="app-footer__nav">
                    <ul class="app-footer__nav-links">
                        <li
                            v-for="link in footerData.navLinks"
                            :key="link.id"
                        >
                            <a
                                :href="link.link"
                                class="app-footer__nav-link"
                            >
                                {{ link.title }}
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="app-footer__block" />
            </div>
            <div class="app-footer__contact">
                <div 
                    class="app-footer__contact-info" 
                    :class="{ 'app-footer__contact-info--right': !isHomePage }"
                >
                    <div class="app-footer__contact-item">
                        <img src="/src/assets/images/footer-links/email.svg" alt="Email"
                            class="app-footer__contact-icon">
                        <a :href="`mailto:${footerData.email}`" class="app-footer__contact-link">
                            {{ footerData.email }}
                        </a>
                    </div>
                    <div class="app-footer__contact-item">
                        <img src="/src/assets/images/footer-links/phone.svg" alt="Телефон"
                            class="app-footer__contact-icon">
                        <a :href="`tel:${footerData.phone}`" class="app-footer__contact-link">
                            {{ footerData.phone }}
                        </a>
                    </div>
                    <div class="app-footer__contact-item">
                        <img src="/src/assets/images/footer-links/location.svg" alt="Местоположение"
                            class="app-footer__contact-icon">
                        <span class="app-footer__contact-link">
                            {{ footerData.location }}
                        </span>
                    </div>
                    <div
                        v-if="isHomePage"
                        class="app-footer__contact-item"
                    >
                        <a :href="footerData.termsLink" class="app-footer__contact-link">
                            {{ footerData.termsText }}
                        </a>
                    </div>
                    <div
                        v-if="isHomePage"
                        class="app-footer__contact-item"
                    >
                        <a :href="footerData.privacyLink" class="app-footer__contact-link">
                            {{ footerData.privacyText }}
                        </a>
                    </div>
                    <div class="app-footer__bottom">
                        <div class="app-footer__bottom-content">
                            <p>{{ footerData.copyright }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
@use './AppFooter.scss';
</style>