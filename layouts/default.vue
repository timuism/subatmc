<script setup lang="ts">
const { navigation } = useContent()
console.log({navigation})
</script>

<template>
  <div class="font-body max-w-screen-sm min-h-screen flex flex-col mx-auto text-gray-800">

    <header>
      <div class="w-full p-6 flex items-center justify-center">
          <NuxtLink to="/">
            <img 
              src="~/assets/SubatmcLogo/BlackCircleBackground.svg" 
              class="h-[50px] md:h-[100px] hover:animate-pulse"
              alt="subatmc emblem" 
            />
          </NuxtLink>
      </div>

      <div class="flex justify-center space-x-6 pb-4 border-b border-gray-200">
        <NuxtLink v-for="{title, _path} in navigation" :key="_path" :to="_path">
          {{ title }}
        </NuxtLink>
      </div>
    </header>

    <section class="content grow px-6 py-12">
      <slot />
    </section>

    <footer class="border-t py-4 px-6 border-gray-200 text-gray-400">
      <p>&copy; {{ new Date().getFullYear() }} subatmc</p>
    </footer>
  </div>
</template>

<style>
h1 {
  @apply mb-12 text-gray-400;
}

.content p + p {
  @apply pt-6;
}
</style>