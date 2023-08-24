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
  }[]
}>()

const showDt = false
</script>

<template>
  <div>
    <h3 class="text-xl pb-2">{{ title }}</h3>
    <ul class="text-sm">
      <li v-for="(detail, index) in details" :key="detail.dt" class="inline">
        <span v-show="showDt" class="inline mr-1">{{ detail.dt }}</span>
        <span class="font-bold inline italic">{{ detail.dd }}</span>
        <span v-if="index !== details.length - 1" class="text-gray-300"> / </span>
      </li>
    </ul>
    <p class="mt-2">
      <slot />
    </p>

    <section class="space-x-4 mt-4">
      <PrimaryButton v-for="{ text, to } in actions" :key="to"
        class="bg-black text-white px-4 py-2 hover:bg-red-700 duration-100" v-bind="{ text, to }" />
    </section>
  </div>
</template>