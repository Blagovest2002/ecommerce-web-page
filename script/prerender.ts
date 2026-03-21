/**
 * Post-build pre-rendering script.
 *
 * After Vite produces dist/public/index.html, this script:
 *   1. Starts a tiny static server on the built assets
 *   2. Uses Puppeteer to visit each route
 *   3. Saves the fully-rendered HTML (with Helmet tags, JSON-LD, content)
 *      back to the corresponding index.html file
 *
 * This gives crawlers (including Googlebot) full HTML without needing JS.
 */

import { launch } from "puppeteer";
import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist", "public");
const ROUTES = ["/", "/products", "/promotions", "/contact"];
const PORT = 4567; // temp port for the static server

async function prerender() {
  if (!fs.existsSync(path.join(DIST, "index.html"))) {
    console.error("❌  dist/public/index.html not found. Run the Vite build first.");
    process.exit(1);
  }

  // 1. Spin up a minimal static server
  const app = express();
  app.use(express.static(DIST));
  // SPA fallback
  app.get("/{*path}", (_req, res) => {
    res.sendFile(path.join(DIST, "index.html"));
  });

  const server = await new Promise<ReturnType<typeof app.listen>>((resolve) => {
    const s = app.listen(PORT, () => resolve(s));
  });
  console.log(`📡  Static server running on http://localhost:${PORT}`);

  // 2. Launch Puppeteer
  const browser = await launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    for (const route of ROUTES) {
      const url = `http://localhost:${PORT}${route}`;
      console.log(`🔄  Pre-rendering ${route} ...`);

      const page = await browser.newPage();
      await page.goto(url, { waitUntil: "networkidle0", timeout: 30_000 });

      // Wait a bit for Helmet to flush
      await page.evaluate(() => new Promise((r) => setTimeout(r, 500)));

      const html = await page.content();
      await page.close();

      // Determine output path: / → dist/public/index.html,
      // /products → dist/public/products/index.html, etc.
      const outDir =
        route === "/" ? DIST : path.join(DIST, ...route.split("/").filter(Boolean));
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, "index.html"), html, "utf-8");
      console.log(`✅  ${route} → ${path.relative(process.cwd(), path.join(outDir, "index.html"))}`);
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log("\n🎉  Pre-rendering complete!");

  // Post-process HTML: add CSS preload hint, fix fonts, inject modulepreloads
  await postProcessHTML();
}

/**
 * Post-process pre-rendered HTML files:
 *  1. Add <link rel="preload" as="style"> for the CSS file so it downloads
 *     in parallel with the HTML document (no render-blocking delay).
 *     The CSS stays as a separate cacheable file — inlining 40 KB into every
 *     HTML response bloats the document and hurts mobile FCP on slow networks.
 *  2. Restore font stylesheet media=print (Puppeteer's onload handler changes it to all).
 *  3. Preserve display=optional in font URLs.
 *  4. Inject modulepreload hints for critical JS.
 */
async function postProcessHTML() {
  console.log("\n🔧  Post-processing HTML files...");

  const assetsDir = path.join(DIST, "assets");
  if (!fs.existsSync(assetsDir)) {
    console.log("⚠️  No assets directory found, skipping post-processing");
    return;
  }

  const cssFiles = fs.readdirSync(assetsDir).filter((f: string) => f.endsWith(".css"));

  const htmlFiles = getAllHtmlFiles(DIST);

  for (const htmlFile of htmlFiles) {
    let html = fs.readFileSync(htmlFile, "utf-8");

    // Add <link rel="preload" as="style"> for each CSS file so the browser
    // fetches it immediately while still parsing the rest of the <head>.
    // This eliminates extra round-trip latency without bloating the HTML.
    for (const cssFile of cssFiles) {
      const href = `/assets/${cssFile}`;
      const preloadTag = `<link rel="preload" as="style" href="${href}">`;
      // Only inject if not already present
      if (!html.includes(preloadTag)) {
        html = html.replace("<head>", `<head>\n    ${preloadTag}`);
      }
    }

    // Restore font stylesheet media=print (Puppeteer's onload handler changed it to media=all)
    html = html.replace(
      /(<link[^>]*href=["']https:\/\/fonts\.googleapis\.com\/css2[^"']*["'][^>]*?)media=["']all["']/gi,
      '$1media="print"'
    );

    // Ensure display=optional is preserved in font URLs (Puppeteer may have resolved differently)
    html = html.replace(
      /(fonts\.googleapis\.com\/css2[^"']*?)display=swap/gi,
      '$1display=optional'
    );

    // Inject modulepreload hints for critical JS chunks to flatten the dependency chain
    html = injectModulePreloads(html);

    fs.writeFileSync(htmlFile, html, "utf-8");
    console.log(`  ✅  Post-processed ${path.relative(DIST, htmlFile)}`);
  }

  console.log("🔧  Post-processing complete!");
}

function getAllHtmlFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== "assets") {
      results.push(...getAllHtmlFiles(fullPath));
    } else if (entry.name.endsWith(".html")) {
      results.push(fullPath);
    }
  }
  return results;
}

/**
 * Inject <link rel="modulepreload"> for the entry-point JS chunk into the <head>.
 * Vite already handles deeper chunks, but the entry file (index-*.js) is only
 * discovered after HTML parsing. Preloading it flattens the critical chain.
 */
function injectModulePreloads(html: string): string {
  const assetsDir = path.join(DIST, "assets");
  if (!fs.existsSync(assetsDir)) return html;

  const jsFiles = fs.readdirSync(assetsDir).filter((f: string) => f.endsWith(".js"));

  // Only preload the entry-point chunk (index-*.js) — Vite handles the rest
  const entryFile = jsFiles.find((f: string) => f.startsWith("index-"));
  if (!entryFile) return html;

  // Skip if already preloaded by Vite
  if (html.includes(entryFile)) return html;

  const preloadTag = `<link rel="modulepreload" href="/assets/${entryFile}">`;
  return html.replace("</head>", `${preloadTag}\n</head>`);
}

prerender().catch((err) => {
  console.error("Pre-render failed:", err);
  process.exit(1);
});
