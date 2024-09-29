<template>
  <div>
    <ul class="space-y-12">
      <ContentList path="/_posts">
        <template #default="{list}">
        <li v-for="article in list" :key="article._path">
          <NuxtLink :to="article._path" class="flex items-center px-1 space-x-4 duration-500 bg-transparent rounded-sm group hover:bg-gray-800/50">
            <h2 class="text-lg text-gray-400 duration-100 group-hover:text-gray-100">
              {{ article.title }}
            </h2>

            <hr class="mt-1 border-t border-gray-700 border-dotted grow" />

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