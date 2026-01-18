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
  icon: {
    type: String,
    default: ''
  }
})

const slots = useSlots()
const hasIconSlot = computed(() => !!slots.icon)
</script>

<template>
  <div class="app-feature-card">
    <div class="app-feature-card__icon" v-if="icon || hasIconSlot">
      <slot name="icon">
        <span class="icon-text">{{ icon }}</span>
      </slot>
    </div>
    <h3 class="app-feature-card__title" v-if="title">{{ title }}</h3>
    <p class="app-feature-card__description" v-if="description">{{ description }}</p>
  </div>
</template>

<style scoped>
.app-feature-card {
  padding: 30px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app-feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.app-feature-card__icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  color: white;
  font-size: 32px;
}

.icon-text {
  font-size: 24px;
}

.app-feature-card__title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #1f2937;
}

.app-feature-card__description {
  color: #6b7280;
  line-height: 1.6;
  font-size: 1rem;
  margin: 0;
}
</style>