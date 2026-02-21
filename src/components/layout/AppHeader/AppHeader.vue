<script setup>
import {ref} from 'vue'
import {useRoute} from 'vue-router'
import {RouterLink} from 'vue-router'
import AppButton from '@/components/ui/AppButton/AppButton.vue'
import {menuItems} from '@models/homeData'
import AppContactModal from '@/components/ui/AppContactModal/AppContactModal.vue'

const emit = defineEmits(['login'])
const route = useRoute()
const showContactModal = ref(false)
const isMobileMenuOpen = ref(false)

const handleContact = () => {
    showContactModal.value = true
    isMobileMenuOpen.value = false
}

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

const isActive = (link) => {
    return route.path === link
}

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
    document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
    document.body.style.overflow = ''
}

const handleMenuClick = (link) => {
    scrollToTop()
    closeMobileMenu()
}
</script>

<template>
    <header class="app-header">
        <div class="container">
            <div class="app-header__inner">
                <div class="app-header__logo">
                    <slot name="logo">
                        <RouterLink to="/" @click="closeMobileMenu">
                            <img src="/src/assets/images/logo/main-logo.png" alt="Logo">
                        </RouterLink>
                    </slot>
                </div>
                <nav class="app-header__nav">
                    <ul class="app-header__menu">
                        <li
                            v-for="item in menuItems"
                            :key="item.id"
                            class="app-header__menu-item"
                        >
                            <RouterLink
                                :to="item.link"
                                class="app-header__menu-link"
                                :class="{ 'app-header__menu-link--active': isActive(item.link) }"
                                @click="handleMenuClick(item.link)"
                            >
                                {{ item.title }}
                            </RouterLink>
                        </li>
                    </ul>
                </nav>
                <div class="app-header__actions">
                    <slot name="actions">
                        <AppButton
                            size="medium"
                            @click="handleContact()"
                        >
                            Связаться с нами
                        </AppButton>
                    </slot>
                </div>
                <button 
                    class="app-header__burger" 
                    :class="{ 'app-header__burger--active': isMobileMenuOpen }"
                    @click="toggleMobileMenu"
                    aria-label="Меню"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <transition name="mobile-menu">
                    <div 
                        class="app-header__mobile-menu" 
                        v-show="isMobileMenuOpen"
                    >
                        <div class="app-header__mobile-menu-content">
                            <nav class="app-header__mobile-nav">
                                <ul class="app-header__mobile-menu-list">
                                    <li
                                        v-for="item in menuItems"
                                        :key="item.id"
                                        class="app-header__mobile-menu-item"
                                    >
                                        <RouterLink
                                            :to="item.link"
                                            class="app-header__mobile-menu-link"
                                            :class="{ 'app-header__mobile-menu-link--active': isActive(item.link) }"
                                            @click="handleMenuClick(item.link)"
                                        >
                                            {{ item.title }}
                                        </RouterLink>
                                    </li>
                                </ul>
                            </nav>
                            <div class="app-header__mobile-actions">
                                <AppButton
                                    size="large"
                                    @click="handleContact()"
                                    full-width
                                >
                                    Связаться с нами
                                </AppButton>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </header>
    <transition name="fade">
        <div 
            class="app-header__overlay" 
            v-show="isMobileMenuOpen"
            @click="closeMobileMenu"
        ></div>
    </transition>
    <AppContactModal
        :is-open="showContactModal"
        @close="showContactModal = false"
    />
</template>

<style lang="scss">
@use './AppHeader.scss';
</style>