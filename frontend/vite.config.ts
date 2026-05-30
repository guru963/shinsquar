import fs from "fs";
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import vitePrerender from "vite-plugin-prerender";
import { ALL_ROUTES, SITE_URL } from "./src/seo/routes";

const sitemapPlugin = (routes: string[]) => ({
  name: "sitemap-generator",
  apply: "build",
  async closeBundle() {
    const uniqueRoutes = Array.from(new Set(routes));
    const lastmod = new Date().toISOString().split("T")[0];
    const urls = uniqueRoutes
      .map((route) => {
        const normalized = route === "/" ? "" : route;
        const changefreq = route === "/" ? "daily" : "weekly";
        const priority = route === "/" ? "1.0" : "0.7";
        return [
          "  <url>",
          `    <loc>${SITE_URL}${normalized}</loc>`,
          `    <lastmod>${lastmod}</lastmod>`,
          `    <changefreq>${changefreq}</changefreq>`,
          `    <priority>${priority}</priority>`,
          "  </url>",
        ].join("\n");
      })
      .join("\n");

    const sitemap = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      urls,
      "</urlset>",
      "",
    ].join("\n");

    await fs.promises.writeFile(
      path.resolve(__dirname, "dist", "sitemap.xml"),
      sitemap
    );
  },
});

const getChromiumPath = () => {
  const defaultPath = "/usr/bin/chromium";
  return fs.existsSync(defaultPath) ? defaultPath : undefined;
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    vitePrerender({
      staticDir: path.resolve(__dirname, "dist"),
      routes: ALL_ROUTES,
      renderer: new vitePrerender.PuppeteerRenderer({
        executablePath: getChromiumPath(),
        renderAfterDocumentEvent: "seo-rendered",
      }),
    }),
    sitemapPlugin(ALL_ROUTES),
  ],
})
