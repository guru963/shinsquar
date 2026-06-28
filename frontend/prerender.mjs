/**
 * Post-build prerender script.
 * Starts a local static server on the built dist/, visits each route via Puppeteer,
 * captures the final HTML (after JS hydration), and writes it to the corresponding
 * dist/<route>/index.html file. This gives crawlers fully-formed HTML.
 *
 * Usage: node prerender.mjs  (run after `vite build`)
 */

import puppeteer from 'puppeteer';
import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import handler from 'serve-handler';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, 'dist');
const PORT = 5999;

const ROUTES = [
  '/',
  '/regular-shops',
  '/regular-shops/motabhai',
  '/regular-shops/classic',
  '/regular-shops/electronics',
  '/experience-based',
  '/household-works',
  '/household-workers/rakesh-kumar',
  '/household-workers/suresh-singh',
  '/household-workers/amit-sharma',
  '/coming-soon',
];

// Start a static HTTP server on dist/
const server = createServer((req, res) =>
  handler(req, res, {
    public: DIST,
    rewrites: [{ source: '**', destination: '/index.html' }],
  })
);

await new Promise((resolve) => server.listen(PORT, resolve));
console.log(`\n🚀  Static server running on http://localhost:${PORT}`);

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();

for (const route of ROUTES) {
  const url = `http://localhost:${PORT}${route}`;
  console.log(`  ⏳  Pre-rendering ${route}`);

  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

  // Give React a moment to finish rendering
  await new Promise((r) => setTimeout(r, 500));

  const html = await page.content();

  // Write to dist/<route>/index.html
  const filePath =
    route === '/'
      ? join(DIST, 'index.html')
      : join(DIST, route.slice(1), 'index.html');

  const dir = dirname(filePath);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

  writeFileSync(filePath, html, 'utf-8');
  console.log(`  ✅  Written → ${filePath.replace(DIST, 'dist')}`);
}

await browser.close();
server.close();
console.log('\n✨  Pre-rendering complete!\n');
