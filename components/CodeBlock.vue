<script setup lang="ts">
interface Props {
  fileName?: string
  language?: string
  badgeText?: string
  maxWidth?: string
}

withDefaults(defineProps<Props>(), {
  fileName: 'loadWorkspaces.js',
  language: 'JavaScript',
  badgeText: 'PRISM.JS COMPATIBLE',
  maxWidth: '480px'
})
</script>

<template>
 <figure 
    class="w-full my-6 mx-auto rounded-2xl overflow-hidden border transition-all duration-300 font-sans
           border-slate-200 bg-white text-slate-800 shadow-xl shadow-slate-200/50
           dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:shadow-black/40"
    :style="{ maxWidth }"
  >
    <figcaption class="flex flex-col gap-2.5 p-3.5 border-b
                       border-slate-200 bg-slate-50/80
                       dark:border-neutral-800 dark:bg-neutral-900/60">
      
      <div class="flex items-center justify-between w-full">
        <span class="inline-flex items-center gap-2 font-mono text-xs font-medium text-slate-800 dark:text-neutral-200">
          <span class="w-2 h-2 rounded-full bg-violet-500 dark:bg-violet-400" aria-hidden="true"></span>
          <LucideFileCode :size="15" class="text-slate-400 dark:text-neutral-400" />
          {{ fileName }}
        </span>

        <span 
          v-if="badgeText" 
          class="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase border
                 border-violet-300 bg-violet-50 text-violet-600
                 dark:border-violet-500/30 dark:bg-violet-500/10 dark:text-violet-300"
        >
          {{ badgeText }}
        </span>
      </div>

      <div v-if="language" class="flex items-center justify-between w-full">
        <span class="px-2 py-0.5 rounded-md font-mono text-xs border
                     border-slate-200 bg-white text-slate-500
                     dark:border-neutral-700/60 dark:bg-neutral-800/80 dark:text-neutral-400">
          {{ language }}
        </span>
      </div>
    </figcaption>

    <!-- Essential: <pre> and <slot /> on same line to prevent leading extra space -->
    <div class="w-full overflow-x-auto">
  <pre class="m-0 p-5 font-mono text-xs md:text-sm leading-relaxed whitespace-pre-wrap break-words font-normal"><code class="cbk-code block"><slot /></code></pre>
</div>
  </figure>
</template>

<style scoped>
/* Comments (// ...) */
:deep(.tok-comment) { 
  @apply text-[#008000] dark:text-[#6A9955] italic; 
}

/* Keywords (package, type, struct, var, func, import) */
:deep(.tok-keyword) { 
  @apply text-[#0000FF] dark:text-[#569CD6] font-semibold; 
}

/* Package Names & Custom Types/Structs (domain, main, Developer) */
:deep(.tok-package),
:deep(.tok-struct),
:deep(.tok-type) { 
  @apply text-[#2B91AF] dark:text-[#4EC9B0]; 
}

/* Built-in Primitive Types (string, int, bool) */
:deep(.tok-builtin) { 
  @apply text-[#2B91AF] dark:text-[#4EC9B0]; 
}

/* Struct Field Declarations (Name, Skills, Focuses) */
:deep(.tok-field) { 
  @apply text-[#001080] dark:text-[#9CDCFE]; 
}

/* Local Variables & Instances (me, err, ctx) */
:deep(.tok-variable) { 
  @apply text-[#001080] dark:text-[#9CDCFE]; 
}

/* Struct Literal Key Names (Name:, Skills:) */
:deep(.tok-key) { 
  @apply text-[#001080] dark:text-[#9CDCFE]; 
}

/* Strings */
:deep(.tok-string) { 
  @apply text-[#A31515] dark:text-[#CE9178]; 
}

/* Numbers */
:deep(.tok-number) { 
  @apply text-[#098658] dark:text-[#B5CEA8]; 
}

/* Punctuation & Operators ({ }, [ ], :=, =, :) */
:deep(.tok-punct), 
:deep(.tok-op) { 
  @apply text-[#000000] dark:text-[#D4D4D4]; 
}
</style>