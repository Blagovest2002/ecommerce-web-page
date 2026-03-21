/**
 * Post-build pre-rendering script.
 */

import { launch } from "puppeteer";
import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist", "public");
const ROUTES = ["/", "/products", "/promotions", "/contact"];
const PORT = 4567;

async function prerender() {
  if (!fs.existsSync(path.join(DIST, "index.html"))) {
    console.error("dist/public/index.html not found. Run the Vite build first.");
    process.exit(1);
  }

  const app = express();
  app.use(express.static(DIST));
  app.get("/{*path}", (_req, res) => { res.sendFile(path.join(DIST, "index.html")); });

  const server = await new Promise<ReturnType<typeof app.listen>>((resolve) => {
    const s = app.listen(PORT, () => resolve(s));
  });
  console.log(`Static server running on http://localhost:${PORT}`);

  const browser = await launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] });

  try {
    for (const route of ROUTES) {
      const url = `http://localhost:${PORT}${route}`;
      console.log(`Pre-rendering ${route} ...`);
      const page = await browser.newPage();
      await page.goto(url, { waitUntil: "networkidle0", timeout: 30_000 });
      await page.evaluate(() => new Promise((r) => setTimeout(r, 500)));
      const html = await page.content();
      await page.close();
      const outDir = route === "/" ? DIST : path.join(DIST, ...route.split("/").filter(Boolean));
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, "index.html"), html, "utf-8");
      console.log(`OK  ${route} -> ${path.relative(process.cwd(), path.join(outDir, "index.html"))}`);
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log("Pre-rendering complete!");
  await postProcessHTML();
}

const CRITICAL_CSS =
  `*,::before,::after{box-sizing:border-box}` +
  `html{background:#0a0a0a;color:#f5f5f5;font-family:system-ui,-apple-system,sans-serif;line-height:1.5;-webkit-text-size-adjust:100%}` +
  `body{margin:0}` +
  `#root{display:flex;flex-direction:column;min-height:100vh}`;

async function postProcessHTML() {
  console.log("Post-processing HTML files...");
  const assetsDir = path.join(DIST, "assets");
  if (!fs.existsSync(assetsDir)) { console.log("No assets dir, skipping"); return; }

  const cssFiles = fs.readdirSync(assetsDir).filter((f: string) => f.endsWith(".css"));
  const htmlFiles = getAllHtmlFiles(DIST);

  for (const htmlFile of htmlFiles) {
    let html = fs.readFileSync(htmlFile, "utf-8");

    // 1. Inline critical CSS
    const criticalTag = `<style id="critical">${CRITICAL_CSS}</style>`;
    if (!html.includes('id="critical"')) {
      html = html.replace("<head>", `<head>\n    ${criticalTag}`);
    }

    // 2+3. Preload hint + make stylesheet non-render-blocking
    for (const cssFile of cssFiles) {
      const href = `/assets/${cssFile}`;
      const preloadTag = `<link rel="preload" as="style" href="${href}">`;
      if (!html.includes(preloadTag)) {
        html = html.replace("<head>", `<head>\n    ${preloadTag}`);
      }
      const escapedHref = href.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const nonBlock = ` media="print" onload="this.media='all'"`;
      const noscript = `<noscript><link rel="stylesheet" href="${href}"></noscript>`;
      // rel before href
      html = html.replace(
        new RegExp(`<link([^>]*)rel=["']stylesheet["']([^>]*)href=["']${escapedHref}["']([^>]*)>`, "gi"),
        `<link$1rel="stylesheet"$2href="${href}"$3${nonBlock}>${noscript}`
      );
      // href before rel
      html = html.replace(
        new RegExp(`<link([^>]*)href=["']${escapedHref}["']([^>]*)rel=["']stylesheet["']([^>]*)>`, "gi"),
        `<link$1href="${href}"$2rel="stylesheet"$3${nonBlock}>${noscript}`
      );
    }

    // 4. Restore font media=print
    html = html.replace(
      /(<link[^>]*href=["']https:\/\/fonts\.googleapis\.com\/css2[^"']*["'][^>]*?)media=["']all["']/gi,
      '$1media="print"'
    );

    // 5. Preserve display=optional
    html = html.replace(/(fonts\.googleapis\.com\/css2[^"']*?)display=swap/gi, "$1display=optional");

    // 6. Modulepreload hints
    html = injectModulePreloads(html);

    fs.writeFileSync(htmlFile, html, "utf-8");
    console.log(`  OK  ${path.relative(DIST, htmlFile)}`);
  }
  console.log("Post-processing complete!");
}

function getAllHtmlFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== "assets") { results.push(...getAllHtmlFiles(fullPath)); }
    else if (entry.name.endsWith(".html")) { results.push(fullPath); }
  }
  return results;
}

function injectModulePreloads(html: string): string {
  const assetsDir = path.join(DIST, "assets");
  if (!fs.existsSync(assetsDir)) return html;
  const jsFiles = fs.readdirSync(assetsDir).filter((f: string) => f.endsWith(".js"));
  const entryFile = jsFiles.find((f: string) => f.startsWith("index-"));
  if (!entryFile) return html;
  if (html.includes(entryFile)) return html;
  return html.replace("</head>", `<link rel="modulepreload" href="/assets/${entryFile}">\n</head>`);
}

prerender().catch((err) => { console.error("Pre-render failed:", err); process.exit(1); });
