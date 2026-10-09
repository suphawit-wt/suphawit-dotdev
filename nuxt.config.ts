// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
    }
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  ssr: true,
  css: ['~/public/assets/css/styles.css'],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    'nuxt-lucide-icons',
    'motion-v/nuxt',
    '@evanschleret/nuxt-typewriter'
  ],
  experimental: {
    componentIslands: true
  }
})