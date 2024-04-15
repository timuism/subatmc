<script setup lang="ts">
defineProps<{
    src: string
    alt: string
}>()
</script>

<template>
    <figure>
        <img :src="src" :alt="alt" class="rounded-sm border-2 border-gray-200 mb-4 w-full mx-auto" />
        <figcaption v-if="$slots.default">
            <slot />
        </figcaption>
    </figure>
</template>
