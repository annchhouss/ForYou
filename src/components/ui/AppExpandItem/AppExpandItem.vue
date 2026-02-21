<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    number: {
        type: String,
        default: ''
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
    <div
        class="app-expand-item"
        :class="{ 'app-expand-item--open': isOpen }"
    >
        <div
            class="app-expand-item__static-row"
            @click="toggle"
        >
            <div class="app-expand-item__number-container">
                <span class="app-expand-item__number">{{ number }}</span>
            </div>
            <h3 class="app-expand-item__title">{{ title }}</h3>
            <span class="app-expand-item__toggle">
                <span class="toggle-icon">{{ isOpen ? '×' : '+' }}</span>
            </span>
        </div>
        <transition name="slide">
            <div
                v-show="isOpen"
                class="app-expand-item__content"
            >
                <slot />
            </div>
        </transition>
    </div>
</template>

<style lang="scss">
@use './AppExpandItem.scss';
</style>