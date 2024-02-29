<template>
   <footer class="px-6 py-4 text-gray-400 border-t border-gray-200">
      <p class="space-x-4 text-sm">
        <ContentNavigation v-slot="{ navigation}">
          <NuxtLink v-for="{title, _path} in navigation" :key="_path" :to="_path" class="underline outline-none hover:text-green-800 focus:text-green-800">
            {{ title }}
          </NuxtLink>
        </ContentNavigation>
        <NuxtLink to="/reading-list" class="underline outline-none hover:text-green-800 focus:text-green-800">reading list</NuxtLink>
        <NuxtLink to="/links" class="underline outline-none hover:text-green-800 focus:text-green-800">links</NuxtLink>
      </p>
      <p class="mt-4">&copy; {{ new Date().getFullYear() }} subatmc</p>
      <p class="text-xs">made with 🧡 by <a href="https://timuism.net" class="underline outline-none hover:text-green-800 focus:text-green-800">timuism</a></p>
      
    </footer>
</template>