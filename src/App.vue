<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="bg-black text-primary w-screen h-screen font-dmsans">
        <header>
            <div class="wrapper hidden">
                <nav>
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/about">About</RouterLink>
                </nav>
            </div>
        </header>

        <RouterView />
    </div>
</template>
