<script setup lang="ts">
import { motion } from 'motion-v';

const { data: experience } = await useAsyncData('experience', () => queryCollection('experience')
  .select('id', 'title', 'company', 'period', 'priority', 'tags', 'achievements')
  .order('priority', 'ASC').all())
</script>

<template>
  <section class="max-w-7xl px-4 md:px-8 mx-auto mb-16 scroll-mt-24" id="experience">
    <motion.div :initial="{ opacity: 0, y: 16 }" :whileInView="{
      opacity: 1,
      y: 0,
      transition: {
        opacity: { duration: 0.6, delay: 0.46 },
        y: { duration: 0.3, delay: 0.46, ease: 'easeOut' }
      }
    }" :inViewOptions="{ once: true }">
      <h2 class="text-3xl font-bold mb-6 flex items-center">
        <LucideBriefcase :size="30" class="inline-block mr-3 text-blue-800 dark:text-blue-400" />
        <span>Experience</span>
      </h2>
    </motion.div>

    <motion.div class="flex flex-col gap-4 transition will-change-transform" :initial="{ opacity: 0, y: 16 }"
      :whileInView="{
        opacity: 1,
        y: 0,
        transition: {
          opacity: { duration: 0.6, delay: 0.58 },
          y: { duration: 0.3, delay: 0.58, ease: 'easeOut' }
        }
      }" :inViewOptions="{ once: true }">

      <div v-for="(exp, i) in experience" :key="exp.id" class="group border border-neutral-200 dark:border-neutral-700
         rounded-xl bg-white dark:bg-neutral-900/70 backdrop-blur
         hover:shadow-xl hover:-translate-y-1
         transition-all duration-300">
        <div class="p-6">
          <!-- Period -->
          <p class="text-xs text-neutral-500 dark:text-neutral-400 mb-3">
            {{ exp.period }}
          </p>

          <!-- Role -->
          <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            {{ exp.title }}
          </h3>

          <!-- Company -->
          <h4 class="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-4">
            {{ exp.company }}
          </h4>

          <!-- Achievements -->
          <ul v-if="exp.achievements" class="space-y-2 text-sm text-neutral-700 dark:text-neutral-300 mb-4">
            <li v-for="(achievement, index) in exp.achievements" :key="index" class="flex items-start gap-2">
              <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500"></span>
              <div>
                <strong class="font-semibold text-neutral-900 dark:text-neutral-100">
                  {{ achievement.title }}
                </strong>
                <span> {{ achievement.description }}</span>
              </div>
            </li>
          </ul>

          <!-- Tags -->
          <div v-if="exp.tags" class="flex flex-wrap gap-2">
            <span v-for="tag in exp.tags" :key="tag" class="text-xs px-2.5 py-1 rounded-full
               bg-blue-50 text-blue-700 border border-blue-100
               dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-400/20">
              {{ tag }}
            </span>
          </div>

        </div>
      </div>

    </motion.div>
  </section>
</template>