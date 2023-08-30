<script setup lang="ts">
defineProps<{
  title: string
  date: string
}>()
</script>

<template>
  <article>
    <header>
      <h2>{{ title }}</h2>
      <h3>{{ date }}</h3>
    </header>

    <section>

    </section>

    <footer v-if="$slots.footer">
      <slot name="footer" />
    </footer>
  </article>
</template>