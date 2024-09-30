<script setup lang="ts">
import Lenis from 'lenis'
useHead({
  titleTemplate: '%s | subatmc | tim long',
})
onMounted(() => {
  const lenis = new Lenis()
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
})
</script>

<template>
  <div class="w-full pt-12">
    <div class="w-full border-b border-white/10">
      <div class="max-w-screen-sm px-8 mx-auto md:px-0">
        <HeaderAndNav />
      </div>
    </div>
    <section class="max-w-screen-sm mx-auto">
      <div class="px-8 py-12 md:px-0">
        <slot />
      </div>
    </section>
  </div>
</template>
