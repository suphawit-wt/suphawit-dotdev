<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const { toggleTheme, theme } = useTheme();
const isOpen = ref(false);

const links = [
  { name: 'Projects', to: '#projects' },
  { name: 'Experience', to: '#experience' },
  { name: 'Skills', to: '#skills' },
  { name: 'Certifications', to: '#certifications' }
];

const closeMenu = () => {
  isOpen.value = false;
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') closeMenu();
};

onMounted(() => window.addEventListener('keydown', handleKeyDown));
onUnmounted(() => window.removeEventListener('keydown', handleKeyDown));
</script>

<template>
  <header class="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      
      <NuxtLink 
        to="/"
        @click="closeMenu"
        class="group flex items-center gap-2 font-black text-xl tracking-tight text-neutral-900 dark:text-white transition-transform active:scale-95"
      >
        <span class="font-bold text-xl text-blue-800 hover:text-blue-500 dark:text-blue-700 dark:hover:text-blue-500 transition">
          Suphawit W
        </span>
      </NuxtLink>

      <nav class="hidden lg:flex items-center gap-1 bg-neutral-100/70 dark:bg-neutral-900/70 p-1.5 rounded-full border border-neutral-200/50 dark:border-neutral-800/50 shadow-inner">
        <NuxtLink 
          v-for="link in links" 
          :key="link.name" 
          :to="link.to"
          class="px-4 py-2 rounded-full text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-white dark:hover:bg-neutral-800/80 transition-all duration-200 shadow-none hover:shadow-sm"
        >
          {{ link.name }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-2">
        <button 
          @click="toggleTheme" 
          class="p-2.5 rounded-full text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
        >
          <LucideSun v-if="theme === 'dark'" :size="18" class="text-amber-400" />
          <LucideMoon v-else :size="18" class="text-indigo-600" />
        </button>

        <button 
          @click="isOpen = !isOpen"
          class="lg:hidden p-2.5 rounded-full text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition transform active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          :aria-expanded="isOpen"
          aria-label="Toggle navigation menu"
        >
          <LucideX v-if="isOpen" :size="20" />
          <LucideMenu v-else :size="20" />
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div 
        v-if="isOpen" 
        class="lg:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-200/80 dark:border-neutral-800/80 shadow-2xl z-50 px-4 py-6"
      >
        <nav class="flex flex-col gap-1.5 max-w-7xl mx-auto">
          <NuxtLink
            v-for="link in links"
            :key="link.name"
            :to="link.to"
            @click="closeMenu"
            class="flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-semibold text-neutral-700 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-neutral-100/80 dark:hover:bg-neutral-900/80 transition-all active:scale-[0.99]"
          >
            <span>{{ link.name }}</span>
            <LucideChevronRight :size="16" class="opacity-40" />
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>