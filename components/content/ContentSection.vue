<template>
    <section>
        <header v-if="$slots.header" class="mb-6">
            <slot name="header" />
        </header>

        <article>
            <slot />
        </article>

    </section>
</template>
