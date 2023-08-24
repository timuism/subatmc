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
    <h3 class="pb-2 text-xl">{{ title }}</h3>
    <ul class="text-sm">
      <li v-for="(detail, index) in details" :key="detail.dt" class="inline">
        <span v-show="showDt" class="inline mr-1">{{ detail.dt }}</span>
        <span class="inline italic font-bold">{{ detail.dd }}</span>
        <span v-if="index !== details.length - 1" class="text-gray-300"> / </span>
      </li>
    </ul>
    <p class="mt-2">
      <slot />
    </p>

    <section class="flex flex-col mt-4 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
      <PrimaryButton v-for="{ text, to } in actions" :key="to"
        class="px-4 py-2 text-white duration-100 bg-black hover:bg-red-700" v-bind="{ text, to }" />
    </section>
  </div>
</template>