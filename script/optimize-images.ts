import fs from "fs/promises";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const ATTACHED = path.join(ROOT, "attached_assets");
const CLIENT_IMAGES = path.join(ROOT, "client", "src", "assets", "images");
const OUT_DIR = path.join(ROOT, "client", "public", "images");

type SourceItem = {
  src: string;
  outName: string;
  fallbackExt: "jpg" | "png";
};

const sources: SourceItem[] = [
  { src: path.join(ATTACHED, "IMG_7466_1772385908982.jpeg"), outName: "hero", fallbackExt: "jpg" },
  { src: path.join(ATTACHED, "IMG_7461_1772361053130.jpeg"), outName: "product-1", fallbackExt: "jpg" },
  { src: path.join(ATTACHED, "IMG_7462_1772361053131.jpeg"), outName: "product-2", fallbackExt: "jpg" },
  { src: path.join(ATTACHED, "IMG_7463_1772361053130.jpeg"), outName: "product-3", fallbackExt: "jpg" },
  { src: path.join(ATTACHED, "IMG_7460_1772361053129.jpeg"), outName: "product-4", fallbackExt: "jpg" },
  { src: path.join(ATTACHED, "IMG_7466.jpeg"), outName: "promo-1", fallbackExt: "jpg" },
  { src: path.join(ATTACHED, "IMG_7467.jpeg"), outName: "promo-2", fallbackExt: "jpg" },
  { src: path.join(ATTACHED, "IMG_7463_1772361053130.jpeg"), outName: "promo-3", fallbackExt: "jpg" },
  { src: path.join(ATTACHED, "IMG_7468.jpeg"), outName: "promo-4", fallbackExt: "jpg" },
  { src: path.join(CLIENT_IMAGES, "logo.png"), outName: "logo", fallbackExt: "png" },
];

async function ensureOutDir() {
  await fs.mkdir(OUT_DIR, { recursive: true });
}

async function optimizeOne(item: SourceItem) {
  const input = sharp(item.src).rotate();

  // Resize hero image to match actual display dimensions (max ~640px wide on mobile 2x)
  const pipeline = item.outName === "hero"
    ? input.clone().resize({ width: 640, withoutEnlargement: true })
    : input.clone();
  const pipeline2 = item.outName === "hero"
    ? input.clone().resize({ width: 640, withoutEnlargement: true })
    : input.clone();
  const pipeline3 = item.outName === "hero"
    ? input.clone().resize({ width: 640, withoutEnlargement: true })
    : input.clone();

  await pipeline
    .avif({ quality: 50, effort: 4 })
    .toFile(path.join(OUT_DIR, `${item.outName}.avif`));

  await pipeline2
    .webp({ quality: 75, effort: 4 })
    .toFile(path.join(OUT_DIR, `${item.outName}.webp`));

  if (item.fallbackExt === "jpg") {
    await pipeline3
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(path.join(OUT_DIR, `${item.outName}.jpg`));
  } else {
    await pipeline3
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toFile(path.join(OUT_DIR, `${item.outName}.png`));
  }

  // Generate smaller mobile variant for hero image
  if (item.outName === "hero") {
    const smWidth = 400;
    await input.clone().resize({ width: smWidth, withoutEnlargement: true })
      .avif({ quality: 50, effort: 4 })
      .toFile(path.join(OUT_DIR, "hero-sm.avif"));
    await input.clone().resize({ width: smWidth, withoutEnlargement: true })
      .webp({ quality: 75, effort: 4 })
      .toFile(path.join(OUT_DIR, "hero-sm.webp"));
    console.log("  → generated hero-sm (mobile) variants");
  }
}

async function run() {
  await ensureOutDir();

  for (const source of sources) {
    await optimizeOne(source);
    console.log(`optimized: ${source.outName}`);
  }

  console.log("image optimization complete");
}

run().catch((error) => {
  console.error("image optimization failed:", error);
  process.exit(1);
});
