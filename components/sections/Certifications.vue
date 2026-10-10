<script setup lang="ts">
import { motion } from 'motion-v';
const { formatDate } = useDate();

const { data: certifications } = await useAsyncData('certifications', () => queryCollection('certifications')
  .select('id', 'title', 'issuer', 'date', 'credential_url')
  .order('date', 'DESC').all())
</script>

<template>
  <section class="max-w-7xl px-4 md:px-8 mx-auto mb-16 scroll-mt-24" id="certifications">
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
        <span>Certifications</span>
      </h2>
    </motion.div>

    <motion.div class="flex flex-wrap gap-4 transition will-change-transform" :initial="{ opacity: 0, y: 16 }"
      :whileInView="{
        opacity: 1,
        y: 0,
        transition: {
          opacity: { duration: 0.6, delay: 0.58 },
          y: { duration: 0.3, delay: 0.58, ease: 'easeOut' }
        }
      }" :inViewOptions="{ once: true }">

      <div v-for="(cert, i) in certifications" :key="cert.id" class="group border border-neutral-200 dark:border-neutral-700
         rounded-xl bg-white dark:bg-neutral-900/70 backdrop-blur
         hover:shadow-xl hover:-translate-y-1
         transition-all duration-300">
        <div class="p-6 flex flex-col h-full">
          <!-- Date -->
          <p class="text-xs text-neutral-500 dark:text-neutral-400 mb-2">
            {{ formatDate(cert.date) }}
          </p>

          <!-- Title -->
          <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            {{ cert.title }}
          </h3>

          <!-- Issuer -->
          <p class="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            {{ cert.issuer }}
          </p>

          <!-- Action -->
          <div class="mt-auto">
            <NuxtLink v-if="cert.credential_url" :href="cert.credential_url" target="_blank" class="inline-flex items-center gap-1.5 text-sm
               text-blue-600 dark:text-blue-400
               hover:underline">
              <LucideExternalLink :size="16" />
              View Certificate
            </NuxtLink>
          </div>

        </div>
      </div>

    </motion.div>
  </section>
</template>