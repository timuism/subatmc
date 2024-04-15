<script setup lang="ts">
const { page } = useContent()
useHead({
    titleTemplate: '%s | subatmc | tim long',
})
</script>

<template>
    <HelpBanner />

    <div class="flex flex-col max-w-screen-sm min-h-screen mx-auto">


        <header>
            <div class="flex items-center justify-center w-full p-6">
                <NuxtLink to="/"
                    class="p-2 rounded-full outline-none duration-500 opacity-40 hover:bg-green-700 hover:opacity-100 focus:opacity-100 focus:bg-green-700 focus:animate-pulse">
                    <img src="~/assets/SubatmcLogo/BlackCircleBackground.svg" class="h-[100px]"
                        alt="subatmc logo / emblem" />
                </NuxtLink>
            </div>

            <nav class="hidden md:flex justify-center pb-4 px-6 md:px-0 space-x-6 border-b border-gray-200">
                <ContentNavigation v-slot="{ navigation }">
                    <NuxtLink v-for="{ title, _path } in navigation" :key="_path" :to="_path"
                        class="p-2 rounded-sm outline-none font-display text-3xl text-gray-400 duration-300 hover:underline hover:text-green-700 focus:bg-green-700 focus:text-white"
                        :class="{ 'text-green-700 underline': _path === $route.path }">
                        {{ title }}
                    </NuxtLink>
                </ContentNavigation>
            </nav>
        </header>

        <section class="px-6 py-12 content grow">

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
