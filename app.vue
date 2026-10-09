<script lang="ts" setup>
import { motion } from 'motion-v';

const isMaintenance = ref(false)
const { setTheme, toggleTheme, theme } = useTheme();

useHead({
  titleTemplate: (title) =>
    title ? `${title} | Suphawit.dev` : 'Suphawit.dev'
})

useSeoMeta({
  description: 'Suphawit.dev Portfolio Website',
  ogSiteName: 'Suphawit.dev',
  twitterCard: 'summary_large_image'
})

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')

  if (savedTheme === 'dark') {
    setTheme('dark');
  }
})
</script>

<template>
  <main v-if="isMaintenance"
    class="relative flex flex-col items-center justify-center min-h-screen px-6 py-10 overflow-hidden text-center bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">

    <div class="absolute w-64 h-64 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-xl pointer-events-none" />

    <motion.div class="relative z-10 flex flex-col items-center max-w-lg mx-auto" :initial="{ opacity: 0, y: 15 }"
      :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.4, ease: 'easeOut' }">

      <div class="animate-float">
        <NuxtImg src="/assets/img/maintenance.svg" width="480" height="350"
          class="w-[60vw] max-w-[420px] h-auto drop-shadow-sm select-none" alt="Under Construction Illustration" />
      </div>

      <div class="mt-8 space-y-3">
        <h1 class="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Under Construction 🚧
        </h1>
        <p class="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
          Adding some fresh projects and updates.
        </p>
      </div>

      <div class="mt-6">
        <button @click="toggleTheme"
          class="p-2.5 rounded-full text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-900 dark:hover:bg-neutral-800 transition transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'">
          <LucideSun v-if="theme === 'dark'" :size="18" class="text-amber-400" />
          <LucideMoon v-else :size="18" class="text-indigo-600" />
        </button>
      </div>
    </motion.div>
  </main>

  <NuxtLayout v-else>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
  will-change: transform;
}
</style>