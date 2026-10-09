<script setup lang="ts">
import { motion } from 'motion-v';

</script>

<template>
  <section class="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-4 md:px-8 mb-8 md:mb-0">
    <div class="flex flex-col md:flex-row items-center gap-2 md:gap-16 mt-10 md:mt-0 justify-between">

      <!-- Left -->
      <div class="text-center md:text-left">
        <motion.div :initial="{ opacity: 0, y: 16 }" :whileInView="{
          opacity: 1,
          y: 0,
          transition: {
            opacity: { duration: 0.6, delay: 0.06 },
            y: { duration: 0.3, delay: 0.06, ease: 'easeOut' }
          }
        }" :inViewOptions="{ once: true }">
          <h3 class="text-lg sm:text-xl font-semibold">Hi 👋, I'm</h3>
        </motion.div>

        <motion.div :initial="{ opacity: 0, y: 16 }" :whileInView="{
          opacity: 1,
          y: 0,
          transition: {
            opacity: { duration: 0.6, delay: 0.28 },
            y: { duration: 0.3, delay: 0.28, ease: 'easeOut' }
          }
        }" :inViewOptions="{ once: true }">

          <h1 class="text-3xl md:text-4xl lg:text-6xl font-bold text-blue-800 dark:text-blue-400 leading-tight">
            Suphawit
          </h1>

          <h1 class="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-blue-800 dark:text-blue-400 leading-tight">
            Watthanataetakun
          </h1>

        </motion.div>

        <motion.div :initial="{ opacity: 0, y: 16 }" :whileInView="{
          opacity: 1,
          y: 0,
          transition: {
            opacity: { duration: 0.6, delay: 0.46 },
            y: { duration: 0.3, delay: 0.46, ease: 'easeOut' }
          }
        }" :inViewOptions="{ once: true }" class="mb-6">

          <h3 class="text-lg sm:text-xl font-bold mb-1">
            <Typewriter :texts="['Software Engineer', 'Full-stack Engineer']" style="characters" :typing-speed="30"
              :deleting-speed="40" :pause-duration="1300" :blink-cursor="{ when: 'end' }" />
          </h3>

          <p class="max-w-lg mx-auto md:mx-0 text-neutral-600 dark:text-neutral-300">
            Passionate about crafting high-performance applications and
            solving real-world problems through modern technology.
          </p>

        </motion.div>

        <motion.div :initial="{ opacity: 0, y: 16 }" :whileInView="{
          opacity: 1,
          y: 0,
          transition: {
            opacity: { duration: 0.6, delay: 0.58 },
            y: { duration: 0.3, delay: 0.58, ease: 'easeOut' }
          }
        }" :inViewOptions="{ once: true }">

          <div class="flex gap-3 justify-center md:justify-start">

            <motion.span :whileHover="{ rotate: 10, scale: 1.1 }">
              <NuxtLink href="https://github.com/suphawit-wt" target="_blank"
                class="p-3 flex rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:text-blue-800 dark:hover:text-blue-400 transition">
                <LucideGithub :size="24" />
              </NuxtLink>
            </motion.span>

            <motion.span :whileHover="{ rotate: 10, scale: 1.1 }">
              <NuxtLink href="https://linkedin.com/in/suphawit-wt" target="_blank"
                class="p-3 flex rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:text-blue-800 dark:hover:text-blue-400 transition">
                <LucideLinkedin :size="24" />
              </NuxtLink>
            </motion.span>

            <motion.span :whileHover="{ rotate: 10, scale: 1.1 }">
              <NuxtLink href="mailto:suphawit.wt@gmail.com"
                class="p-3 flex rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:text-blue-800 dark:hover:text-blue-400 transition">
                <LucideMail :size="24" />
              </NuxtLink>
            </motion.span>

          </div>

        </motion.div>

      </div>

      <!-- Right -->
      <motion.div :initial="{ opacity: 0, y: 16 }" :whileInView="{
        opacity: 1,
        y: 0,
        transition: {
          opacity: { duration: 0.6, delay: 0.68 },
          y: { duration: 0.3, delay: 0.68, ease: 'easeOut' }
        }
      }" :inViewOptions="{ once: true }" class="w-full flex justify-center md:max-w-xl">
        <CodeBlock file-name="suphawit_wt.go" language="Go" badge-text="Summary" max-width="900px">
          <div class="tok-comment">// Summary</div>
          <div>
            <span class="tok-keyword">package</span> <span class="tok-package">main</span>
          </div>
          <br />
          <div>
            <span class="tok-keyword">type</span> <span class="tok-struct">Developer</span> <span
              class="tok-keyword">struct</span> <span class="tok-punct">{</span>
          </div>
          <div>
            &nbsp;&nbsp;<span class="tok-field">Name</span> <span class="tok-builtin">string</span>
          </div>
          <div>
            &nbsp;&nbsp;<span class="tok-field">Role</span> <span class="tok-builtin">string</span>
          </div>
          <div>
            &nbsp;&nbsp;<span class="tok-field">Languages</span> <span class="tok-punct">[]</span><span
              class="tok-builtin">string</span>
          </div>
          <div>
            &nbsp;&nbsp;<span class="tok-field">Frameworks</span> <span class="tok-punct">[]</span><span
              class="tok-builtin">string</span>
          </div>
          <div>
            &nbsp;&nbsp;<span class="tok-field">Architecture</span> <span class="tok-punct">[]</span><span
              class="tok-builtin">string</span>
          </div>
          <div>
            &nbsp;&nbsp;<span class="tok-field">Databases</span> <span class="tok-punct">[]</span><span
              class="tok-builtin">string</span>
          </div>
          <div>
            &nbsp;&nbsp;<span class="tok-field">DevOps</span> <span class="tok-punct">[]</span><span
              class="tok-builtin">string</span>
          </div>
          <div>
            &nbsp;&nbsp;<span class="tok-field">Status</span> <span class="tok-builtin">string</span>
          </div>
          <div><span class="tok-punct">}</span></div>
          <br />
          <div>
            <span class="tok-variable">suphawit</span> <span class="tok-op">:=</span> <span
              class="tok-struct">Developer</span><span class="tok-punct">{</span>
          </div>
          <div>
            &nbsp;&nbsp;<span class="tok-key">Name</span><span class="tok-punct">:</span> <span
              class="tok-string">"Suphawit Watthanataetakun"</span><span class="tok-punct">,</span>
          </div>
          <div>
            &nbsp;&nbsp;<span class="tok-key">Role</span><span class="tok-punct">:</span> <span
              class="tok-string">"Software Engineer"</span><span class="tok-punct">,</span>
          </div>
          <div>
            &nbsp;&nbsp;<span class="tok-key">Languages</span><span class="tok-punct">:</span> <span
              class="tok-punct">[]</span><span class="tok-builtin">string</span><span class="tok-punct">{</span>
            <span class="tok-string">"Go"</span><span class="tok-punct">, </span>
            <span class="tok-string">"TypeScript"</span><span class="tok-punct">, </span>
            <span class="tok-string">"Java"</span><span class="tok-punct">, </span>
            <span class="tok-string">"C#"</span>
            <span class="tok-punct">}</span><span class="tok-punct">,</span>
          </div>
          <div>
            &nbsp;&nbsp;<span class="tok-key">Frameworks</span><span class="tok-punct">:</span> <span
              class="tok-punct">[]</span><span class="tok-builtin">string</span><span class="tok-punct">{</span>
            <span class="tok-string">"Gin"</span><span class="tok-punct">, </span>
            <span class="tok-string">"Fiber"</span><span class="tok-punct">, </span>
            <span class="tok-string">"Next.js"</span>
            <span class="tok-punct">}</span><span class="tok-punct">,</span>
          </div>
          <div>
            &nbsp;&nbsp;<span class="tok-key">Architecture</span><span class="tok-punct">:</span> <span
              class="tok-punct">[]</span><span class="tok-builtin">string</span><span class="tok-punct">{</span>
            <span class="tok-string">"Microservices"</span><span class="tok-punct">, </span>
            <span class="tok-string">"Event-Driven"</span>
            <span class="tok-punct">}</span><span class="tok-punct">,</span>
          </div>
          <div>
            &nbsp;&nbsp;<span class="tok-key">Databases</span><span class="tok-punct">:</span> <span
              class="tok-punct">[]</span><span class="tok-builtin">string</span><span class="tok-punct">{</span>
            <span class="tok-string">"PostgreSQL"</span><span class="tok-punct">, </span>
            <span class="tok-string">"Redis"</span><span class="tok-punct">, </span>
            <span class="tok-string">"Elasticsearch"</span><span class="tok-punct">, </span>
            <span class="tok-string">"Cassandra"</span>
            <span class="tok-punct">}</span><span class="tok-punct">,</span>
          </div>
          <div>
            &nbsp;&nbsp;<span class="tok-key">DevOps</span><span class="tok-punct">:</span> <span
              class="tok-punct">[]</span><span class="tok-builtin">string</span><span class="tok-punct">{</span>
            <span class="tok-string">"Kubernetes"</span><span class="tok-punct">, </span>
            <span class="tok-string">"Istio"</span><span class="tok-punct">, </span>
            <span class="tok-string">"Kafka"</span><span class="tok-punct">, </span>
            <span class="tok-string">"Vault"</span>
            <span class="tok-punct">}</span><span class="tok-punct">,</span>
          </div>
          <div>
            &nbsp;&nbsp;<span class="tok-key">Status</span><span class="tok-punct">:</span>
            <span class="tok-string">"Open to Opportunities"</span><span class="tok-punct">,</span>
          </div>
          <div><span class="tok-punct">}</span></div>
        </CodeBlock>
      </motion.div>

    </div>
  </section>
</template>