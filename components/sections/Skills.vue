<script setup lang="ts">
import { motion } from 'motion-v';

const { data: skills } = await useAsyncData('skills', () => queryCollection('skills')
  .select('id', 'title', 'priority', 'tags')
  .order('priority', 'ASC').all())
</script>

<template>
  <section class="max-w-7xl px-4 md:px-8 mx-auto mb-16 scroll-mt-24" id="skills">
    <motion.div :initial="{ opacity: 0, y: 16 }" :whileInView="{
      opacity: 1,
      y: 0,
      transition: {
        opacity: { duration: 0.6, delay: 0.46 },
        y: { duration: 0.3, delay: 0.46, ease: 'easeOut' }
      }
    }" :inViewOptions="{ once: true }">
      <h2 class="text-3xl font-bold mb-6 flex items-center">
        <LucideToolCase :size="30" class="inline-block mr-3 text-blue-800 dark:text-blue-400" />
        <span>Skills</span>
      </h2>
    </motion.div>

    <motion.div class="grid grid-cols-1 md:grid-cols-2  gap-4 transition will-change-transform"
      :initial="{ opacity: 0, y: 16 }" :whileInView="{
        opacity: 1,
        y: 0,
        transition: {
          opacity: { duration: 0.6, delay: 0.58 },
          y: { duration: 0.3, delay: 0.58, ease: 'easeOut' }
        }
      }" :inViewOptions="{ once: true }">

      <div v-for="(skill, i) in skills" :key="skill.id" class="group border border-neutral-200 dark:border-neutral-700
         rounded-xl bg-white dark:bg-neutral-900/70 backdrop-blur
         hover:shadow-xl hover:-translate-y-1
         transition-all duration-300">
        <div class="p-6">
          <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
            {{ skill.title }}
          </h3>

          <div v-if="skill.tags" class="flex flex-wrap gap-2">
            <span v-for="tag in skill.tags" :key="tag" class="text-xs px-2.5 py-1 rounded-full
               bg-blue-50 text-blue-700 border border-blue-100
               dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-400/20
               transition">
              {{ tag }}
            </span>
          </div>

        </div>
      </div>

    </motion.div>
  </section>
</template>