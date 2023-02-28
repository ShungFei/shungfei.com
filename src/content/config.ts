import { defineCollection, z } from "astro:content";

export const collections = {
	projects: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			featured: z.boolean().optional(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			img_caption: z.string().optional(),
		}),
	}),
};
