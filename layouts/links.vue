<script setup lang="ts">
useHead({
  titleTemplate: 'links | subatmc | tim long',
})
</script>

<template>
  <div class="flex flex-col max-w-screen-sm min-h-screen mx-auto text-gray-800 font-body">
    <header>
      <div class="flex items-center justify-center w-full p-6">
        <NuxtLink to="/" class="p-2 rounded-full outline-none hover:animate-pulse focus:bg-green-700 focus:animate-pulse">
          <img 
              src="~/assets/SubatmcLogo/BlackCircleBackground.svg" 
              class="h-[50px] md:h-[100px]"
              alt="subatmc logo / emblem" 
            />
          </NuxtLink>
        </div>
    </header>

    <section class="p-6 content grow">
      <header class="mb-12 text-gray-400">
        <h2 class="text-center font-display">@subatmc | links</h2>
      </header>

      <slot />
    </section>

    <footer class="px-6 py-4 text-gray-400 border-t border-gray-200">
      <p>&copy; {{ new Date().getFullYear() }} subatmc</p>
      <p class="text-xs">made with 🧡 by <a href="https://timuism.net" class="underline outline-none hover:text-green-800 focus:text-green-800">timuism</a></p>
    </footer>
  </div>
</template>

<style>
.content p + p {
  @apply pt-6;
}
</style>