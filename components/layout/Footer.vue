<template>
  <footer class="py-6 mt-24">
    <div class="max-w-7xl px-4 md:px-8 mx-auto">
      <div class="flex gap-4 justify-center md:justify-start mb-4">
        <NuxtLink href="https://github.com/suphawit-wt" target="_blank"
          class="hover:text-blue-800 dark:hover:text-blue-400 transition">
          <LucideGithub :size="24" />
        </NuxtLink>

        <NuxtLink href="https://linkedin.com/in/suphawit-wt" target="_blank"
          class="hover:text-blue-800 dark:hover:text-blue-400 transition">
          <LucideLinkedin :size="24" />
        </NuxtLink>

        <NuxtLink href="mailto:suphawit.wt@gmail.com"
          class="hover:text-blue-800 dark:hover:text-blue-400 transition">
          <LucideMail :size="24" />
        </NuxtLink>
      </div>

      <div class="text-sm text-neutral-600 text-center md:text-left">
        © {{ new Date().getFullYear() }} Suphawit W. All rights reserved.
      </div>
    </div>
  </footer>
</template>
