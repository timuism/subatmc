<script setup lang="ts">
defineProps<{
  title: string
  details: {
    dt: string
    dd: string
  }[]
  actions: {
    text: string
    to: string
    newWindow?: boolean
  }[]
}>()

const showDt = false
</script>

<template>
  <div class="mb-24">
    <h3 class="pb-2 text-2xl font-display">{{ title }}</h3>
    <ul class="text-sm">
      <li v-for="(detail, index) in details" :key="detail.dt" class="inline font-mono text-green-800">
        <span v-show="showDt" class="inline mr-1">{{ detail.dt }}</span>
        <span class="inline">{{ detail.dd }}</span>
        <span v-if="index !== details.length - 1" class="text-gray-200"> / </span>
      </li>
    </ul>
    <p class="mt-2 text-gray-500">
      <slot />
    </p>

    <section class="flex flex-col mt-4 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
      <PrimaryButton v-for="{ text, to, newWindow } in actions" :key="to" v-bind="{ text, to, newWindow }" />
    </section>
  </div>
</template>