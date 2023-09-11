import { defineCollection, z } from "astro:content"

const disciplinas = defineCollection({
    schema: z.object({
        title: z.string(),
        name: z.string(),
        author: z.string()
    })
})

export const collections = { disciplinas }
