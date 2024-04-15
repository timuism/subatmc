<script setup lang="ts">
withDefaults(defineProps<{
    text: string
    to: string
    newWindow?: boolean
}>(), { newWindow: false })
</script>

<template>
    <a :href="to" :target="newWindow ? '_new' : '_self'"
        class="px-4 py-2 text-white duration-500 bg-gray-800 rounded-lg outline-none font-sans font-medium hover:bg-green-800 ring-transparent ring-4 focus:ring-green-700">
        {{ text }}
    </a>
</template>
