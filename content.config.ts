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
    experience: defineCollection({
      type: 'page',
      source: 'experience/*.md',
      schema: z.object({
        title: z.string(),
        priority: z.number().optional(),
        company: z.string(),
        period: z.string(),
        achievements: z.array(z.string()).optional(),
        tags: z.array(z.string()).optional(),
      }),
      indexes: [
        { columns: ['priority'] },
      ],
    }),
    skills: defineCollection({
      type: 'page',
      source: 'skills/*.md',
      schema: z.object({
        title: z.string(),
        priority: z.number().optional(),
        tags: z.array(z.string()).optional(),
      }),
      indexes: [
        { columns: ['priority'] },
      ],
    }),
    certifications: defineCollection({
      type: 'page',
      source: 'certifications/*.md',
      schema: z.object({
        title: z.string(),
        issuer: z.string(),
        date: z.string(),
        credential_url: z.url().optional(),
      }),
      indexes: [
        { columns: ['date'] },
      ],
    })
  }
})
