<template>
    <div
        class="group grid grid-cols-2 grid-rows-1 w-full my-4 text-green-600 text-sm bg-green-100 rounded-md shadow-sm font-sans callout border-2 border-green-500 divide-x-2 divide-green-500">
        <div class="p-4">
            <slot />
        </div>
        <div v-if="$slots.extra" class="p-4">
            <slot name="extra" />
        </div>
    </div>
</template>

<style>
.callout a {
    @apply text-green-800 font-semibold underline decoration-green-800;
}
</style>
