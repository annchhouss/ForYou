<script setup>
import { computed, useSlots } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'dark', 'light'].includes(value)
  }
})

const slots = useSlots()
const hasActions = computed(() => !!slots.actions)
const hasImage = computed(() => !!slots.image)
</script>

<template>
  <section :class="['app-banner', `app-banner--${variant}`]">
    <div class="app-banner__content">
      <h2 v-if="title" class="app-banner__title">{{ title }}</h2>
      <p v-if="description" class="app-banner__description">{{ description }}</p>
      <div v-if="hasActions" class="app-banner__actions">
        <slot name="actions" />
      </div>
    </div>
    <div v-if="hasImage" class="app-banner__image">
      <slot name="image" />
    </div>
  </section>
</template>

<style scoped>
.app-banner {
  display: flex;
  align-items: center;
  padding: 60px;
  border-radius: 16px;
  gap: 40px;
}

.app-banner--primary {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: white;
}

.app-banner--secondary {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
}

.app-banner--dark {
  background-color: #1f2937;
  color: white;
}

.app-banner--light {
  background-color: #f9fafb;
  color: #1f2937;
  border: 1px solid #e5e7eb;
}

.app-banner__content {
  flex: 1;
}

.app-banner__title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
}

.app-banner__description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 30px;
  opacity: 0.9;
}

.app-banner__actions {
  display: flex;
  gap: 15px;
}

.app-banner__image {
  flex: 1;
  text-align: center;
}

.app-banner__image img {
  max-width: 100%;
  border-radius: 8px;
}
</style>