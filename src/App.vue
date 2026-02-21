<script setup>
import {RouterView} from 'vue-router'
import {onMounted} from 'vue'
import {useSeo} from '@/composables/useSeo'
const {init} = useSeo()

onMounted(() => {
    init()
})
</script>

<template>
    <RouterView />
</template>