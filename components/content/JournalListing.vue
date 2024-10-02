<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: '/_posts', sort: [{ date: -1 }] }
</script>
<template>
  <div>
    <ul class="space-y-12">
      <ContentList :query="query">
        <template #default="{list}">
        <li v-for="article in list" :key="article._path">
          <NuxtLink :to="article._path" class="flex flex-col justify-start px-1 duration-500 bg-transparent rounded-sm md:space-x-4 md:items-center md:justify-center md:flex-row group hover:bg-gray-800/50">
            <h2 class="text-lg text-gray-400 duration-100 group-hover:text-gray-100">
              {{ article.title }}
            </h2>

            <hr class="hidden mt-1 border-t border-gray-700 border-dotted md:block grow" />

            <p class="text-base tracking-wider text-gray-600 uppercase duration-100 group-hover:text-gray-100">
              {{ article.date }}
            </p>
          </NuxtLink>
        </li>
      </template>
      <template #not-found>
        <p>nothing here yet</p>
      </template>
      </ContentList>
    </ul>
  </div>
</template>