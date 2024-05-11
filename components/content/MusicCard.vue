<script setup lang="ts">
defineProps<{
    title: string
    link: string
    releaseDate: string
    image: string
    imageAlt: string
}>()
</script>

<template>
    <a :href="link" target="_blank"
        class="cursor-pointer group relative grid grid-cols-1 grid-rows-1 rounded-lg overflow-hidden w-full h-[200px] md:h-full">
        <div
            class="z-10 flex items-end justify-start w-full col-start-1 row-start-1 text-white duration-500 bg-gradient-to-t from-black/25 to-transparent group-hover:from-black/95">
            <div class="p-6 duration-500 opacity-0 group-hover:opacity-100 group-focus:opacity-100">
                <h2 class="font-sans text-sm uppercase">{{ title }}</h2>
            </div>
        </div>

        <div class="w-full col-start-1 row-start-1 pointer-events-none">
            <img :src="image" :alt="imageAlt" class="object-cover w-full h-full"
                :class="[title === '??? (Coming Soon)' ? 'blur-lg' : '']" />
        </div>
      </a>
</template>
