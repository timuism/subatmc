<script setup lang="ts">
defineProps<{
  author?: string
}>()
</script>

<template>
  <blockquote class="p-6 border-l-2 border-gray-300 rounded-r-sm bg-gray-900/50 rounded-y-sm">
    <div class="italic text-gray-300">
      <slot />
    </div>
    <p v-if="author" class="mt-2 text-sm font-semibold text-gray-400">
      -{{ author }}
    </p>
  </blockquote>
</template>