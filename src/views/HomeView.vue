<script setup>
import { ref, computed } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import AppButton from '@/components/ui/AppButton.vue'
import AppBanner from '@/components/ui/AppBanner.vue'
import AppFeatureCard from '@/components/ui/AppFeatureCard.vue'
import AppExpandItem from '@/components/ui/AppExpandItem.vue'
import {
  heroBanner,
  miniBanner,
  features,
  additionalBanner,
  faqItems,
  contactForm
} from '@models/homeData'

// Состояние формы
const form = ref({
  name: '',
  email: '',
  companyType: 'startup',
  budget: 50,
  message: ''
})

// Состояние FAQ
const faqState = ref(faqItems.map(item => ({ ...item })))

// Вычисляемые свойства
const firstThreeFeatures = computed(() => features.slice(0, 3))

// Методы
const handleLogin = () => {
  console.log('Login clicked')
}

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
  // Здесь будет отправка формы
  alert('Заявка отправлена! Мы свяжемся с вами в течение 24 часов.')
  resetForm()
}

const resetForm = () => {
  form.value = {
    name: '',
    email: '',
    companyType: 'startup',
    budget: 50,
    message: ''
  }
}

const toggleFaq = (index) => {
  faqState.value[index].open = !faqState.value[index].open
}
</script>

<template>
  <div class="home-view">
    <AppHeader @login="handleLogin" />
    
    <main>
      <!-- Герой-баннер -->
      <section class="hero-section section">
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title">{{ heroBanner.title }}</h1>
            <p class="hero-description">{{ heroBanner.description }}</p>
            <div class="hero-actions">
              <AppButton
                v-for="button in heroBanner.buttons"
                :key="button.id"
                :variant="button.variant"
                :size="button.size"
                class="hero-button"
              >
                {{ button.text }}
              </AppButton>
            </div>
          </div>
        </div>
      </section>

      <!-- Мини-баннер -->
      <section class="section">
        <div class="container">
          <AppBanner
            :title="miniBanner.title"
            :description="miniBanner.description"
            :variant="miniBanner.variant"
          />
        </div>
      </section>

      <!-- Преимущества (3 шт) -->
      <section class="section">
        <div class="container">
          <h2 class="section-title">Наши преимущества</h2>
          <div class="grid grid-3">
            <AppFeatureCard
              v-for="feature in firstThreeFeatures"
              :key="feature.id"
              :title="feature.title"
              :description="feature.description"
              :icon="feature.icon"
            />
          </div>
        </div>
      </section>

      <!-- Дополнительный баннер -->
      <section class="section">
        <div class="container">
          <AppBanner
            :title="additionalBanner.title"
            :description="additionalBanner.description"
            :variant="additionalBanner.variant"
          />
        </div>
      </section>

      <!-- Еще 4 преимущества -->
      <section class="section">
        <div class="container">
          <h2 class="section-title">Почему выбирают нас</h2>
          <div class="grid grid-4">
            <AppFeatureCard
              v-for="feature in features"
              :key="feature.id"
              :title="feature.title"
              :description="feature.description"
              :icon="feature.icon"
            />
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="section">
        <div class="container">
          <h2 class="section-title">Часто задаваемые вопросы</h2>
          <div class="faq-container">
            <AppExpandItem
              v-for="(item, index) in faqState"
              :key="item.id"
              :title="item.title"
              :is-open="item.open"
              @toggle="toggleFaq(index)"
            >
              <p>{{ item.content }}</p>
            </AppExpandItem>
          </div>
        </div>
      </section>

      <!-- Форма заявки -->
      <section class="section contact-section">
        <div class="container">
          <div class="contact-wrapper">
            <div class="contact-info">
              <h2 class="contact-title">{{ contactForm.title }}</h2>
              <p class="contact-description">{{ contactForm.description }}</p>
            </div>
            
            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Имя</label>
                  <input
                    v-model="form.name"
                    type="text"
                    class="form-input"
                    placeholder="Ваше имя"
                    required
                  />
                </div>
                
                <div class="form-group">
                  <label class="form-label">Email</label>
                  <input
                    v-model="form.email"
                    type="email"
                    class="form-input"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div class="form-group">
                <label class="form-label">Тип предприятия</label>
                <select v-model="form.companyType" class="form-select">
                  <option value="startup">Стартап</option>
                  <option value="small">Малый бизнес</option>
                  <option value="medium">Средний бизнес</option>
                  <option value="large">Крупная компания</option>
                </select>
              </div>
              
              <div class="form-group">
                <label class="form-label">
                  Бюджет: {{ form.budget }} тыс. руб.
                </label>
                <input
                  v-model="form.budget"
                  type="range"
                  min="10"
                  max="500"
                  step="10"
                  class="form-range"
                />
                <div class="range-labels">
                  <span>10 тыс.</span>
                  <span>500 тыс.</span>
                </div>
              </div>
              
              <div class="form-group">
                <label class="form-label">Описание проекта</label>
                <textarea
                  v-model="form.message"
                  class="form-textarea"
                  placeholder="Расскажите о вашем проекте..."
                  rows="4"
                ></textarea>
              </div>
              
              <AppButton
                type="submit"
                variant="primary"
                size="large"
                full-width
                class="submit-button"
              >
                {{ contactForm.buttonText }}
              </AppButton>
            </form>
          </div>
        </div>
      </section>
    </main>
    
    <AppFooter />
  </div>
</template>

<style scoped>
.home-view {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section {
  padding: 80px 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 48px;
  color: #1f2937;
}

.grid {
  display: grid;
  gap: 30px;
}

.grid-3 {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.grid-4 {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

/* Герой секция */
.hero-section {
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  padding: 120px 0;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 24px;
  color: #1f2937;
}

.hero-description {
  font-size: 1.25rem;
  color: #6b7280;
  margin-bottom: 40px;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.hero-button {
  min-width: 180px;
}

/* FAQ */
.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

/* Контактная форма */
.contact-section {
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
}

.contact-wrapper {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 48px;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
}

.contact-info {
  text-align: center;
  margin-bottom: 40px;
}

.contact-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: #1f2937;
}

.contact-description {
  color: #6b7280;
  font-size: 1.1rem;
}

/* Форма */
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 24px;
}

.form-group {
  margin-bottom: 24px;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #374151;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s ease;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.form-range {
  width: 100%;
  height: 8px;
  margin: 12px 0;
  background: #e5e7eb;
  border-radius: 4px;
  outline: none;
}

.form-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 24px;
  height: 24px;
  background: #2563eb;
  border-radius: 50%;
  cursor: pointer;
}

.range-labels {
  display: flex;
  justify-content: space-between;
  color: #6b7280;
  font-size: 0.9rem;
}

.form-textarea {
  resize: vertical;
}

.submit-button {
  margin-top: 32px;
}

/* Адаптивность */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-button {
    width: 100%;
    max-width: 300px;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .grid-3,
  .grid-4 {
    grid-template-columns: 1fr;
  }
  
  .app-header__inner {
    flex-direction: column;
    gap: 20px;
  }
  
  .app-header__nav {
    width: 100%;
  }
  
  .app-header__menu {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
}
</style>