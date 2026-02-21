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
        <div class="app-feature-card__header">
            <div
                v-if="icon || hasIconSlot"
                class="app-feature-card__icon"
            >
                <slot name="icon">
                    <img
                    :src="icon"
                    :alt="title"
                    class="icon-image" />
                </slot>
            </div>
            <h3
                v-if="title"
                class="app-feature-card__title"
            >
                {{ title }}
            </h3>
        </div>
        <p
            v-if="description"
            class="app-feature-card__description"
        >
            {{ description }}
        </p>
    </div>
</template>

<style lang="scss">
@use './AppFeatureCard.scss';
</style>