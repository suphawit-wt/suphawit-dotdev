<template>
    <main class="flex flex-col items-center justify-center min-h-screen px-6 py-10 text-center">
        <NuxtImg src="/assets/img/web_search.svg" width="480" height="350"
            class="w-[60vw] max-w-[480px] h-auto drop-shadow-[10px_10px_6px_rgb(224,224,224)]" alt="Woman using Magnifying Glass" />
        <div class="flex flex-wrap items-baseline gap-2 mt-10 mb-2">
            <span class="text-2xl font-bold text-neutral-800">404 Page not found</span>
        </div>
        <NuxtLink to="/" class="font-semibold text-blue-700 hover:text-blue-900">Back to home page</NuxtLink>
    </main>
</template>

<script setup lang="ts">
useSeoMeta({
    title: 'Page not found',
});
</script>