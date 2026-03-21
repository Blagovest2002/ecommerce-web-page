import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { metaImagesPlugin } from "./vite-plugin-meta-images";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    tailwindcss(),
    metaImagesPlugin(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    // Reduce CSS size
    cssMinify: "lightningcss",
    rollupOptions: {
      output: {
        // Route-level and vendor package splitting for smaller first-load chunk
        manualChunks(id) {
          const normalizedId = id.replace(/\\/g, "/");

          if (normalizedId.includes("node_modules")) {
            if (
              normalizedId.includes("/node_modules/react/") ||
              normalizedId.includes("/node_modules/react-dom/") ||
              normalizedId.includes("/node_modules/scheduler/")
            ) {
              return "vendor-react";
            }

            if (
              normalizedId.includes("/node_modules/react-router/") ||
              normalizedId.includes("/node_modules/react-router-dom/")
            ) {
              return "vendor-router";
            }

            if (normalizedId.includes("/node_modules/react-helmet-async/")) {
              return "vendor-seo";
            }

            if (normalizedId.includes("/node_modules/lucide-react/")) {
              return "vendor-icons";
            }

            return "vendor-misc";
          }

          if (
            normalizedId.endsWith("/client/src/App.tsx") ||
            normalizedId.endsWith("/client/src/components/Header.tsx") ||
            normalizedId.endsWith("/client/src/components/Footer.tsx") ||
            normalizedId.endsWith("/client/src/components/SEO.tsx") ||
            normalizedId.endsWith("/client/src/pages/Home.tsx")
          ) {
            return "app-shell";
          }

          return undefined;
        },
      },
    },
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
