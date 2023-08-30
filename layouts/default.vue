<script setup lang="ts">
const { navigation, page } = useContent()
</script>

<template>
  <div class="flex flex-col max-w-screen-sm min-h-screen mx-auto text-gray-800 font-body">

    <header>
      <div class="flex items-center justify-center w-full p-6">
          <NuxtLink to="/">
            <img 
              src="~/assets/SubatmcLogo/BlackCircleBackground.svg" 
              class="h-[50px] md:h-[100px] hover:animate-pulse"
              alt="subatmc logo / emblem" 
            />
          </NuxtLink>
      </div>

      <div class="flex justify-center pb-4 space-x-6 border-b border-gray-200">
        <NuxtLink v-for="{title, _path} in navigation" :key="_path" :to="_path">
          {{ title }}
        </NuxtLink>
      </div>
    </header>

    <section class="px-6 py-12 content grow">
      <header class="mb-12 text-gray-400">
        <h2>{{ page.displayTitle ?? page.title }}</h2>
      </header>

      <slot />
    </section>

    <footer class="px-6 py-4 text-gray-400 border-t border-gray-200">
      <p>&copy; {{ new Date().getFullYear() }} subatmc</p>
      <p class="text-xs">made with 🧡 by <a href="https://timuism.net">timuism</a></p>
    </footer>
  </div>
</template>

<style>
.content p + p {
  @apply pt-6;
}
</style>