<script setup lang="ts">
import { motion } from 'motion-v';

const { data: projects } = await useAsyncData('projects', () => queryCollection('projects')
  .select('id', 'title', 'description', 'tags', 'github', 'live_demo', 'priority', 'thumbnail')
  .order('priority', 'ASC').all());
</script>

<template>
  <section class="max-w-7xl px-4 md:px-8 mx-auto mb-16 scroll-mt-24" id="projects">
    <motion.div :initial="{ opacity: 0, y: 16 }" :whileInView="{
      opacity: 1,
      y: 0,
      transition: {
        opacity: { duration: 0.6, delay: 0.24 },
        y: { duration: 0.3, delay: 0.24, ease: 'easeOut' }
      }
    }" :inViewOptions="{ once: true }">
      <h2 class="text-3xl font-bold mb-6 flex items-center">
        <LucideFolderCode :size="30" class="inline-block mr-3 text-blue-800 dark:text-blue-400" />
        <span>Projects</span>
      </h2>
    </motion.div>

    <motion.div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 transition will-change-transform"
      :initial="{ opacity: 0, y: 16 }" :whileInView="{
        opacity: 1,
        y: 0,
        transition: {
          opacity: { duration: 0.6, delay: 0.38 },
          y: { duration: 0.3, delay: 0.38, ease: 'easeOut' }
        }
      }" :inViewOptions="{ once: true }">

      <div v-for="(project, i) in projects" :key="project.id" class="group border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden
         bg-white dark:bg-neutral-900/70 backdrop-blur
         hover:shadow-xl hover:-translate-y-1
         transition-all duration-300">

        <!-- Image -->
        <div class="overflow-hidden">
          <NuxtImg :src="`/assets/img/projects/${project.thumbnail}`" alt="Project Image"
            class="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>

        <!-- Content -->
        <div class="p-6">
          <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
            {{ project.title }}
          </h3>

          <p class="text-neutral-600 dark:text-neutral-400 text-sm mb-4 leading-relaxed">
            {{ project.description }}
          </p>

          <!-- Tags -->
          <div v-if="project.tags" class="flex flex-wrap gap-2 mb-4">
            <span v-for="tag in project.tags" :key="tag" class="text-xs px-2.5 py-1 rounded-full
               bg-blue-50 text-blue-700 border border-blue-100
               dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-400/20">
              {{ tag }}
            </span>
          </div>

          <!-- Actions -->
          <div class="flex gap-2">
            <NuxtLink :to="project.github" class="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg
               border border-neutral-300 dark:border-neutral-600
               text-neutral-800 dark:text-neutral-200
               hover:bg-neutral-100 dark:hover:bg-neutral-800
               transition">
              <LucideGithub :size="16" />
              GitHub
            </NuxtLink>

            <NuxtLink :to="project.live_demo" class="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg
               bg-blue-600 text-white
               hover:bg-blue-700
               transition shadow-sm">
              <LucideExternalLink :size="16" />
              Live Demo
            </NuxtLink>
          </div>
        </div>
      </div>

    </motion.div>
  </section>
</template>