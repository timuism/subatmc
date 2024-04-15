<script setup lang="ts">
const props = withDefaults(defineProps<{
    title: string
    kind: 'default' | 'event' | 'music' | 'help'
    details: {
        dt: string
        dd: string
    }[]
    actions: {
        text: string
        to: string
        newWindow?: boolean
    }[]
}>(), {
    kind: 'default'
})

const showDt = false
const $kind = computed(() => {
    switch (props.kind) {
        case 'default':
            return 'border-gray-100'
        case 'event':
            return 'border-purple-100'
        case 'music':
            return 'border-blue-100'
        case 'help':
            return 'border-yellow-100'
    }
})
</script>

<template>
    <div class="mb-8 border-2 p-8 rounded-xl" :class="[$kind]">
        <h3 class="pb-2 text-xl font-sans font-semibold text-gray-600">{{ title }}</h3>
        <ul class="text-sm">
            <li v-for="(detail, index) in details" :key="detail.dt" class="inline font-mono text-green-800">
                <span v-show="showDt" class="inline mr-1">{{ detail.dt }}</span>
                <span class="inline">{{ detail.dd }}</span>
                <span v-if="index !== details.length - 1" class="text-gray-200"> / </span>
            </li>
        </ul>
        <p class="mt-2 text-gray-500">
            <slot />
        </p>

        <section class="flex flex-col mt-4 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <PrimaryButton v-for="{ text, to, newWindow } in actions" :key="to" v-bind="{ text, to, newWindow }" />
        </section>
    </div>
</template>
