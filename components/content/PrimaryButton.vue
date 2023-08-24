<script setup lang="ts">
defineProps<{
  text: string
  to: string
}>()
</script>

<template>
  <a
    :href="to"
    class="px-4 py-2 text-white duration-100 bg-gray-800 hover:bg-blue-400"
  >
    {{ text }}
  </a>
</template>