import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import rehypeMahJax from "rehype-mathjax"
import remarkMath from "remark-math"
import sitemap from "@astrojs/sitemap"
import remarkToc from "remark-toc"

// https://astro.build/config
export default defineConfig({
    site: "https://lumikalt.vercel.app",
    sitemap: true,
    integrations: [mdx(), sitemap()],
    markdown: {
        remarkPlugins: [remarkMath, remarkToc],
        rehypePlugins: [[
            rehypeMahJax,
            {
                loader: { load: ["[tex]/physics"] },
                tex: { packages: { "[+]": ["physics"] } }
            }
        ]]
    }
});
