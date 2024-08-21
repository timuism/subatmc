<template>
    <div
        class="grid w-full grid-cols-2 grid-rows-1 my-4 font-sans text-sm text-green-600 bg-green-100 border-2 border-green-500 divide-x-2 divide-green-500 rounded-md shadow-sm group callout">
        <div class="flex items-center p-4">
            <slot />
        </div>
        <div v-if="$slots.extra" class="flex items-center p-4">
            <slot name="extra" />
        </div>
    </div>
</template>

<style>
.callout a {
    @apply text-green-800 font-semibold underline decoration-green-800;
}
</style>
