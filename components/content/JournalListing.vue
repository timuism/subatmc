<script setup lang="ts">

</script>

<template>
  <div>
    <ul class="space-y-12">
      <ContentList path="/_posts">
        <template #default="{list}">
        <li v-for="article in list" :key="article._path">
          <NuxtLink :to="article._path" class="group">
            <h2 class="text-lg text-gray-700 duration-100 group-hover:text-blue-400">
              {{ article.title }}
            </h2>

            <p class="text-xs tracking-wider text-gray-300 uppercase duration-100 group-hover:text-blue-400">
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