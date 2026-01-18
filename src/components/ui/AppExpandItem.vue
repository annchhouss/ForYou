<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['toggle'])

const toggle = () => {
  emit('toggle', !props.isOpen)
}
</script>

<template>
  <div class="app-expand-item" :class="{ 'app-expand-item--active': isOpen }">
    <div class="app-expand-item__header" @click="toggle">
      <h3 class="app-expand-item__title">{{ title }}</h3>
      <span class="app-expand-item__toggle">
        {{ isOpen ? '−' : '+' }}
      </span>
    </div>
    <transition name="expand">
      <div v-show="isOpen" class="app-expand-item__content">
        <slot />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.app-expand-item {
  border-bottom: 1px solid #e5e7eb;
  padding: 24px 0;
}

.app-expand-item--active {
  border-bottom-color: #2563eb;
}

.app-expand-item__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.app-expand-item__title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.app-expand-item__toggle {
  font-size: 1.5rem;
  font-weight: 400;
  color: #2563eb;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.app-expand-item__toggle:hover {
  background-color: #f3f4f6;
}

.app-expand-item__content {
  padding-top: 20px;
  color: #6b7280;
  line-height: 1.6;
}

.expand-enter-active,
.expand-leave-active {
  transition: height 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  height: 0;
}

.expand-enter-to,
.expand-leave-from {
  height: auto;
}
</style>