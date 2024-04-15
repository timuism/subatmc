<script setup lang="ts">
const showMobileNav = ref(false)
watch(showMobileNav, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
})
</script>

<template>
  <div>
    <button @click="showMobileNav = true" class="text-gray-500 md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="w-8 h-8">
        <path fill-rule="evenodd"
          d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
          clip-rule="evenodd" />
      </svg>
    </button>

    <div :class="showMobileNav ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'"
      class="fixed z-10 w-screen h-[100dvh] overflow-hidden bg-white/80 backdrop-blur top-0 left-0 md:hidden duration-500">
      <div :class="showMobileNav ? 'translate-y-0' : 'translate-y-full'"
        class="absolute bottom-0 left-0 w-full duration-150">
        <div class="fixed bottom-0 right-0 pb-12 pr-6">
          <button @click="showMobileNav = false" class="p-4 text-white bg-green-800 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6 fill-green-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav class="flex flex-col justify-center px-6 py-12 space-y-2 border-t border-gray-200 bg-white/95 md:px-0">
          <ContentNavigation v-slot="{ navigation }">
            <NuxtLink v-for="{ title, _path } in navigation" :key="_path" :to="_path"
              class="p-2 text-3xl text-gray-400 duration-300 rounded-sm outline-none font-display hover:underline hover:text-green-700 focus:bg-green-700 focus:text-white"
              :class="{ 'text-green-700 underline': _path === $route.path }">
              {{ title }}
            </NuxtLink>
          </ContentNavigation>
        </nav>
      </div>
    </div>

  </div>
</template>