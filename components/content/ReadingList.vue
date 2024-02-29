<script setup lang="ts">
const { data } = await useAsyncData('/books', () => queryContent('/books').findOne())
const books = data.value?.books
const completed = books.filter((book: { status: string }) => book.status === 'complete')
const nowReading = books.filter((book: { status: string }) => book.status === 'now-reading')
const upNext = books.filter((book: { status: string }) => book.status === 'up-next')
const backlog = books.filter((book: { status: string }) => !book.status).sort((a: { title: string }, b: { title: string }) => a.title.localeCompare(b.title))
</script>

<template>
  <div class="space-y-12">
    <div class="mb-12">
      <AppImage src="/images/bookshelf.webp" alt="bookshelf" class="object-cover" />
    </div>

    <section>
      <h3 class="mb-4 text-xl font-medium text-green-400 font-display">Now Reading</h3>
      <ol class="pl-6 space-y-8 border-l-2 border-green-400">
        <li v-for="{ title, author, status } in nowReading" :key="title">
          <div class="font-sans">
            <div class="flex flex-col items-start">
              <h3 class="text-lg md:text-xl" :class="status === 'complete' ? 'text-gray-500' : 'text-black'">{{ title }}
              </h3>
            </div>
            <p class="italic">{{ author }}</p>
          </div>
        </li>
      </ol>
    </section>

    <section>
      <h3 class="mb-4 text-xl font-medium text-yellow-400 font-display">Up Next</h3>
      <ol class="pl-6 space-y-8 border-l-2 border-yellow-400">
        <li v-for="{ title, author, status } in upNext" :key="title">
          <div class="font-sans">
            <div class="flex flex-col items-start">
              <h3 class="text-lg md:text-xl" :class="status === 'complete' ? 'text-gray-500' : 'text-black'">{{ title }}
              </h3>
            </div>
            <p class="italic">{{ author }}</p>
          </div>
        </li>
      </ol>
    </section>

    <section>
      <h3 class="mb-4 text-xl font-medium text-red-400 font-display">Backlog</h3>
      <ol class="pl-6 space-y-8 border-l-2 border-red-400">
        <li v-for="{ title, author, status } in backlog" :key="title">
          <div class="font-sans">
            <div class="flex flex-col items-start">
              <h3 class="text-lg md:text-xl" :class="status === 'complete' ? 'text-gray-500' : 'text-black'">{{ title }}
              </h3>
            </div>
            <p class="italic">{{ author }}</p>
          </div>
        </li>
      </ol>
    </section>

    <section>
      <h3 class="mb-4 text-xl font-medium text-gray-400 font-display">Complete</h3>
      <ol class="pl-6 space-y-8 border-l-2 border-gray-400">
        <li v-for="{ title, author, status } in completed" :key="title">
          <div class="font-sans" :class="{ 'line-through text-gray-500': status === 'complete' }">
            <div class="flex flex-col items-start">
              <h3 class="text-lg md:text-xl" :class="status === 'complete' ? 'text-gray-500' : 'text-black'">{{ title }}
              </h3>
            </div>
            <p class="italic">{{ author }}</p>
          </div>
        </li>
      </ol>
    </section>
  </div>
</template>