<template>
  <div
    class="flex flex-col mb-6 md:flex-row md:items-center md:justify-between">
    <header>
      <h1 class="text-base text-gray-700">
        <NuxtLink to="/">subatmc</NuxtLink>
      </h1>
    </header>

    <nav>
      <ContentNavigation v-slot="{ navigation }">
        <ul
          class="flex items-center mt-3 space-x-6 text-base text-gray-400 md:mt-0">
          <li v-for="link of navigation" :key="link._path">
            <NuxtLink :to="link._path"
              class="inline-block duration-200 hover:opacity-80 hover:-translate-y-0.5">
              {{ link.title }}
            </NuxtLink>
          </li>
          <li>
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