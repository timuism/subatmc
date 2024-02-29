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
          <img src="~/assets/SubatmcLogo/BlackCircleBackground.svg" class="h-[50px] md:h-[100px]"
            alt="subatmc logo / emblem" />
        </NuxtLink>
      </div>
    </header>

    <section class="p-6 content grow">
      <header class="mb-12 text-gray-400">
        <h2 class="text-center font-display">@subatmc | links</h2>
      </header>

      <slot />
    </section>

    <Footer />
  </div>
</template>

<style>
.content p+p {
  @apply pt-6;
}
</style>