import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // Cache static assets aggressively (hashed filenames)
  app.use(
    "/assets",
    express.static(path.join(distPath, "assets"), {
      maxAge: "1y",
      immutable: true,
    }),
  );

  // Other static files with short cache
  app.use(
    express.static(distPath, {
      maxAge: "1h",
    }),
  );

  // SPA fallback – serve pre-rendered HTML if available,
  // otherwise fall through to index.html
  app.use("/{*path}", (req, res) => {
    // Try pre-rendered route file first, e.g. /products → /products/index.html
    const routePath = req.path.replace(/\/$/, "");
    const prerendered = path.resolve(distPath, routePath.slice(1), "index.html");
    if (routePath && fs.existsSync(prerendered)) {
      return res.sendFile(prerendered);
    }
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
