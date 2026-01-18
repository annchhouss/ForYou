<script setup>
import { footerData } from '@models/homeData'
</script>

<template>
  <footer class="app-footer">
    <div class="container">
      <div class="app-footer__top">
        <div class="app-footer__logo">
          <h2>{{ footerData.logo }}</h2>
          <p class="app-footer__copyright">{{ footerData.copyright }}</p>
        </div>
        
        <div class="app-footer__quick-links">
          <h3 class="app-footer__section-title">Быстрые ссылки</h3>
          <ul class="app-footer__links">
            <li v-for="link in footerData.quickLinks" :key="link.id">
              <a :href="link.link" class="app-footer__link">{{ link.title }}</a>
            </li>
          </ul>
        </div>
        
        <div class="app-footer__contacts">
          <h3 class="app-footer__section-title">Контакты</h3>
          <div class="app-footer__social">
            <a 
              v-for="social in footerData.socialLinks" 
              :key="social.id"
              :href="social.link"
              class="app-footer__social-link"
            >
              <span class="app-footer__social-icon">{{ social.icon }}</span>
              <span class="app-footer__social-text">{{ social.name }}</span>
            </a>
          </div>
        </div>
      </div>
      
      <div class="app-footer__bottom">
        <div class="app-footer__bottom-content">
          <p>Разработано с ❤️ в 2024</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background-color: #1f2937;
  color: white;
  padding-top: 60px;
  margin-top: auto;
}

.app-footer__top {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #374151;
}

.app-footer__logo h2 {
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  margin-bottom: 15px;
}

.app-footer__copyright {
  color: #9ca3af;
  font-size: 0.9rem;
}

.app-footer__section-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: white;
}

.app-footer__links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.app-footer__links li {
  margin-bottom: 12px;
}

.app-footer__link {
  color: #d1d5db;
  text-decoration: none;
  transition: color 0.3s ease;
}

.app-footer__link:hover {
  color: white;
}

.app-footer__social {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.app-footer__social-link {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #d1d5db;
  text-decoration: none;
  transition: color 0.3s ease;
}

.app-footer__social-link:hover {
  color: white;
}

.app-footer__social-icon {
  font-size: 1.2rem;
}

.app-footer__social-text {
  font-size: 0.95rem;
}

.app-footer__bottom {
  padding: 30px 0;
  text-align: center;
}

.app-footer__bottom-content {
  color: #9ca3af;
  font-size: 0.9rem;
}
</style>