<script setup lang="ts">
defineProps<{
  text: string
  to: string
}>()
</script>

<template>
  <a
    :href="to"
    class="bg-gray-800 text-white px-4 py-2 hover:bg-green-700 duration-100"
  >
    {{ text }}
  </a>
</template>