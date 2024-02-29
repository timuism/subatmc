<template>
  <div class="p-4 my-4 text-green-600 bg-green-100 rounded-md shadow-sm font-display callout">
    <slot />
  </div>
</template>

<style>
.callout a {
  @apply text-green-800 hover:text-green-950 duration-100 decoration-green-800;
}
</style>