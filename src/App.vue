<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="flex flex-col flex-1 w-screen min-h-screen bg-black text-primary font-dmsans">
        <header>
            <div class="hidden wrapper">
                <nav>
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/about">About</RouterLink>
                </nav>
            </div>
        </header>

        <RouterView />

        <footer class="w-auto px-12 py-4 text-xs text-black shrink">
            Part of the @timuism universe. &copy; 2022 timuism
        </footer>
    </div>
</template>
