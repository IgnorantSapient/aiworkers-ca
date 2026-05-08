import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    author: z.string().default('aiworkers.ca'),
    category: z.string().default('AI Automation'),
    seoKeywords: z.array(z.string()).default([])
  })
});

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    industry: z.string(),
    result: z.string(),
    publishDate: z.coerce.date()
  })
});

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    outcome: z.string(),
    icon: z.string().default('▣')
  })
});

export const collections = { blog, 'case-studies': caseStudies, services };
