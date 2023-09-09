import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import rehypeMahJax from "rehype-mathjax"
import remarkMath from "remark-math"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
    site: "https://lumikalt.vercel.app",
    sitemap: true,
    plugins: {
        integrations: [mdx(), sitemap()],
        markdown: {
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeMahJax]
        }
    }
});
