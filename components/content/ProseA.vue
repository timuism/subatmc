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
  <NuxtLink 
    :href="href" 
    :target="target" 
    class="pb-0.5 duration-100 border-b border-gray-400 hover:text-blue-400 hover:border-blue-400"
  >
    <slot />
  </NuxtLink>
</template>

