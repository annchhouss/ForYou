<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'dark', 'light'].includes(value)
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  fullWidth: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const buttonClasses = computed(() => [
  'app-button',
  `app-button--${props.variant}`,
  `app-button--${props.size}`,
  { 
    'app-button--full': props.fullWidth,
    'app-button--disabled': props.disabled
  }
])

const handleClick = (event) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<template>
  <button
    :class="buttonClasses"
    @click="handleClick"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style scoped>
.app-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  outline: none;
  font-family: inherit;
}

.app-button--primary {
  background-color: #2563eb;
  color: white;
}

.app-button--primary:hover:not(.app-button--disabled) {
  background-color: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

.app-button--secondary {
  background-color: #10b981;
  color: white;
}

.app-button--secondary:hover:not(.app-button--disabled) {
  background-color: #059669;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.app-button--outline {
  background-color: transparent;
  color: #2563eb;
  border: 2px solid #2563eb;
}

.app-button--outline:hover:not(.app-button--disabled) {
  background-color: #2563eb;
  color: white;
}

.app-button--dark {
  background-color: #1f2937;
  color: white;
}

.app-button--light {
  background-color: #f9fafb;
  color: #1f2937;
  border: 1px solid #e5e7eb;
}

.app-button--small {
  padding: 8px 16px;
  font-size: 14px;
}

.app-button--medium {
  padding: 12px 24px;
  font-size: 16px;
}

.app-button--large {
  padding: 16px 32px;
  font-size: 18px;
}

.app-button--full {
  width: 100%;
}

.app-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.app-button--disabled:hover {
  transform: none !important;
  box-shadow: none !important;
}
</style>