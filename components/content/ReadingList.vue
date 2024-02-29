<script setup lang="ts">
const { data } = await useAsyncData('/books', () => queryContent('/books').findOne())
const books = data.value?.books
</script>

<template>
  <div>
    <div class="mb-12">
      <AppImage src="/images/bookshelf.webp" alt="bookshelf" class="object-cover" />
    </div>
    <ol class="space-y-8">
      <li v-for="{ title, author, status } in books" :key="title">
        <div class="font-sans" :class="{ 'line-through text-gray-500': status === 'complete' }">
          <div class="flex flex-col items-start">
            <h3 class="text-lg md:text-xl" :class="status === 'complete' ? 'text-gray-500' : 'text-black'">{{ title }}
            </h3>
          </div>
          <p class="italic">{{ author }}</p>
          <span v-if="status === 'now-reading'"
            class="whitespace-nowrap font-semibold text-xs bg-green-600 px-2 py-0.5 text-white inline-block rounded-md">
            Currently Reading
          </span>
          <span v-if="status === 'up-next'"
            class="whitespace-nowrap font-semibold text-xs bg-orange-600 px-2 py-0.5 text-white inline-block rounded-md">
            Up Next
          </span>
        </div>
      </li>
    </ol>
  </div>
</template>