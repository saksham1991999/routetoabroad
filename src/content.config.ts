import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import { LOCALES } from "./lib/i18n";

/**
 * Locales a collection entry can be written for; en is the unprefixed root.
 * Derived from LOCALES in lib/i18n.ts so a new locale only edits one file.
 */
const entryLocale = z.enum(LOCALES).default("en");

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      locale: entryLocale,
      title: z.string(),
      description: z.string(),
      category: z.enum(["education", "tourism", "trade"]),
      author: z.string(), // author id from src/data/authors.ts
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      readTime: z.number(),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      image: image(),
      imageAlt: z.string(),
    }),
});

const guides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
  schema: ({ image }) =>
    z.object({
      locale: entryLocale,
      title: z.string(),
      description: z.string(),
      pillar: z.enum(["education", "tourism", "trade"]),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      readTime: z.number(),
      tags: z.array(z.string()).default([]),
      image: image(),
      imageAlt: z.string(),
      faqs: z
        .array(z.object({ question: z.string(), answer: z.string() }))
        .optional(),
    }),
});

const universities = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/universities" }),
  schema: ({ image }) =>
    z.object({
      locale: entryLocale,
      name: z.string(),
      chineseName: z.string(),
      city: z.string(),
      citySlug: z.string(),
      type: z.enum(["comprehensive", "medical", "technical"]),
      founded: z.string(),
      nickname: z.string().optional(),
      intro: z.string(), // answer-first paragraph
      image: image(),
      imageAlt: z.string(),
      strengths: z.array(z.object({ title: z.string(), text: z.string() })),
      programmes: z.array(z.string()),
      costs: z.object({
        tuition: z.string(),
        dorm: z.string(),
        living: z.string(),
      }),
      facts: z.array(z.object({ label: z.string(), value: z.string() })),
      faqs: z
        .array(z.object({ question: z.string(), answer: z.string() }))
        .default([]),
      order: z.number().default(99),
    }),
});

const cities = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cities" }),
  schema: ({ image }) =>
    z.object({
      locale: entryLocale,
      name: z.string(),
      chineseName: z.string(),
      country: z.string(),
      intro: z.string(),
      image: image(),
      imageAlt: z.string(),
      studentMonthly: z.object({ low: z.number(), high: z.number() }), // USD/month
      touristDaily: z.object({ low: z.number(), high: z.number() }), // USD/day
      highlights: z.array(z.object({ title: z.string(), text: z.string() })),
      universities: z.array(z.string()).default([]),
      bestTime: z.string(),
      faqs: z
        .array(z.object({ question: z.string(), answer: z.string() }))
        .default([]),
      order: z.number().default(99),
    }),
});

const countries = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/countries" }),
  schema: ({ image }) =>
    z.object({
      locale: entryLocale,
      name: z.string(),
      intro: z.string(),
      image: image(),
      imageAlt: z.string(),
      stats: z.array(z.object({ label: z.string(), value: z.string() })),
      study: z.object({
        heading: z.string(),
        text: z.string(),
        points: z.array(z.object({ title: z.string(), text: z.string() })),
      }),
      travel: z.object({
        heading: z.string(),
        text: z.string(),
        points: z.array(z.object({ title: z.string(), text: z.string() })),
      }),
      faqs: z
        .array(z.object({ question: z.string(), answer: z.string() }))
        .default([]),
      order: z.number().default(99),
    }),
});

export const collections = { blog, guides, universities, cities, countries };
