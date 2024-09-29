<script setup lang="ts">
defineProps({
    href: {
        type: String,
        default: ''
    },
    target: {
        type: String,
        default: undefined,
        required: false
    }
})
</script>

<template>
    <NuxtLink :href="href" :target="target"
        class="pb-0.5 duration-100 underline text-gray-400 decoration-gray-400 hover:text-gray-100 hover:border-gray-200 focus:text-gray-200 focus:border-gray-200 outline-none">
        <slot />
    </NuxtLink>
</template>
