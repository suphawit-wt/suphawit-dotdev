import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'page',
      source: 'projects/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        priority: z.number().optional(),
        github: z.url().optional(),
        live_demo: z.url().optional(),
        tags: z.array(z.string()).optional(),
        thumbnail: z.string().optional(),
      }),
      indexes: [
        { columns: ['priority'] },
      ],
    }),
  }
})
