import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/projects',
  }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    thumbnail: image(),
    liveUrl: z.union([z.url(), z.literal('')]).optional(),
    repoUrl: z.union([z.url(), z.literal('')]).optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };