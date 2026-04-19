<script setup>
import {computed} from 'vue'

const props = defineProps({
    type: {
        type: String,
        default: 'button'
    },
    variant: {
        type: String,
        default: 'primary',
        validator: (value) => ['primary', 'secondary', 'outline', 'light-outline'].includes(value)
    },
    size: {
        type: String,
        default: 'medium',
        validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    fullWidth: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['click'])

const buttonClasses = computed(() => [
    'app-button',
    `app-button--${props.variant}`,
    `app-button--${props.size}`,
    { 'app-button--full-width': props.fullWidth }
])

const handleClick = (event) => {
    emit('click', event)
}
</script>

<template>
    <button
        :type="type"
        :class="buttonClasses"
        @click="handleClick"
    >
        <slot />
    </button>
</template>

<style lang="scss">
@use './AppButton.scss';
</style>