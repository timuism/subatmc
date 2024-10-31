<script setup lang="ts">
import gsap from 'gsap'
const h1 = ref(null)
const links = ref(null)
onMounted(() => {
  gsap.timeline({repeat: 0})
    .to(h1.value, {
      opacity: 1,
      x: 0,
    })
    .to(gsap.utils.toArray("#site-nav li"), {
      opacity: 1,
      y: 0,
      stagger: 0.1,
    }, '<0.12')
})
</script>
<template>
  <div
    class="flex flex-col mb-6 md:flex-row md:items-center md:justify-between">
    <header>
      <h1 ref="h1" class="text-base text-gray-700 opacity-0">
        <NuxtLink to="/">subatmc</NuxtLink>
      </h1>
    </header>

    <nav>
      <ContentNavigation v-slot="{ navigation }">
        <ul
          id="site-nav"
          class="flex items-center mt-3 space-x-6 text-base text-gray-400 md:mt-0">
          <li v-for="link of navigation" :key="link._path" class="opacity-0">
            <NuxtLink :to="link._path"
              class="inline-block duration-200 hover:opacity-80 hover:-translate-y-0.5">
              {{ link.title }}
            </NuxtLink>
          </li>
          <li class="opacity-0">
            <a href="https://sagesfromearth.com" target="_blank"
              class="hover:text-blue-500 inline-block duration-200 hover:opacity-80 hover:-translate-y-0.5">
              Sages From Earth
            </a>
          </li>
        </ul>
      </ContentNavigation>

    </nav>
  </div>
</template>