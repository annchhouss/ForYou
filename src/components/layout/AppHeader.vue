<script setup>
import AppButton from '@/components/ui/AppButton.vue'
import { menuItems } from '@models/homeData'

const emit = defineEmits(['login'])

const handleLogin = () => {
  emit('login')
}
</script>

<template>
  <header class="app-header">
    <div class="container">
      <div class="app-header__inner">
        <div class="app-header__logo">
          <slot name="logo">
            <h1>Digital Solutions</h1>
          </slot>
        </div>
        
        <nav class="app-header__nav">
          <ul class="app-header__menu">
            <li 
              v-for="item in menuItems" 
              :key="item.id" 
              class="app-header__menu-item"
            >
              <a 
                :href="item.link" 
                class="app-header__menu-link"
                :class="{ 'app-header__menu-link--active': item.active }"
              >
                {{ item.title }}
              </a>
            </li>
          </ul>
        </nav>
        
        <div class="app-header__actions">
          <slot name="actions">
            <AppButton 
              size="medium" 
              variant="outline"
              @click="handleLogin"
            >
              Войти
            </AppButton>
          </slot>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.app-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
}

.app-header__logo h1 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2563eb;
  margin: 0;
}

.app-header__nav {
  flex: 1;
  display: flex;
  justify-content: center;
}

.app-header__menu {
  display: flex;
  list-style: none;
  gap: 32px;
  margin: 0;
  padding: 0;
}

.app-header__menu-link {
  text-decoration: none;
  color: #4b5563;
  font-weight: 500;
  font-size: 16px;
  transition: color 0.3s ease;
  position: relative;
  padding: 8px 0;
}

.app-header__menu-link:hover {
  color: #2563eb;
}

.app-header__menu-link--active {
  color: #2563eb;
  font-weight: 600;
}

.app-header__menu-link--active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #2563eb;
}

.app-header__menu-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #2563eb;
  transition: width 0.3s ease;
}

.app-header__menu-link:hover::after {
  width: 100%;
}

.app-header__actions {
  display: flex;
  gap: 16px;
}
</style>