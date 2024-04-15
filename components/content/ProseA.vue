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
        class="pb-0.5 duration-100 decoration-green-800 hover:text-green-800 hover:border-green-800 focus:text-green-800 focus:border-green-800 outline-none">
        <slot />
    </NuxtLink>
</template>
