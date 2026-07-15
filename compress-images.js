/**
 * compress-images.js
 * Converts all PNG/JPG images used on the home page to WebP
 * using sharp with quality=80, preserving originals.
 * Run once: node compress-images.js
 */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ASSETS = path.join(__dirname, "public", "assets");

// Directories used on the home page
const TARGETS = [
  // Brand card marquee (37 images, some are 27MB uncompressed!)
  path.join(ASSETS, "brands", "brands"),
  // Testimonial images
  path.join(ASSETS, "Testimonels"),
  // Team member images
  path.join(ASSETS, "team"),
  // ECW logos (remote, skip)
  // Map / world
  path.join(ASSETS), // for Group 16.png and map.png specifically
];

// Individual files at root level to convert
const ROOT_FILES = [
  "Group 16.png",
  "map.png",
  "sections/numbers-space.jpg",
];

async function convertFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext)) return;

  const webpPath = filePath.replace(/\.(png|jpe?g)$/i, ".webp");

  // Skip if already converted
  if (fs.existsSync(webpPath)) {
    const originalSize = fs.statSync(filePath).size;
    const webpSize = fs.statSync(webpPath).size;
    const savings = Math.round((1 - webpSize / originalSize) * 100);
    console.log(
      `  ⚡ SKIP (exists): ${path.basename(webpPath)} — ${savings}% smaller`
    );
    return;
  }

  try {
    const originalSize = fs.statSync(filePath).size;
    await sharp(filePath)
      .webp({ quality: 82, effort: 4 })
      .toFile(webpPath);
    const webpSize = fs.statSync(webpPath).size;
    const savings = Math.round((1 - webpSize / originalSize) * 100);
    const savedMB = ((originalSize - webpSize) / 1024 / 1024).toFixed(1);
    console.log(
      `  ✅ ${path.basename(filePath)} → ${path.basename(webpPath)} | ${savings}% smaller | saved ${savedMB}MB`
    );
  } catch (err) {
    console.error(`  ❌ Failed: ${filePath}`, err.message);
  }
}

async function convertDirectory(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`  ⚠️  Dir not found: ${dir}`);
    return;
  }
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isFile()) {
      await convertFile(full);
    }
  }
}

async function main() {
  console.log("🚀 Converting home page images to WebP...\n");

  // Convert brand card images
  console.log("📁 brands/brands/");
  await convertDirectory(path.join(ASSETS, "brands", "brands"));

  // Convert testimonial images  
  console.log("\n📁 Testimonels/");
  await convertDirectory(path.join(ASSETS, "Testimonels"));

  // Convert team images
  console.log("\n📁 team/");
  await convertDirectory(path.join(ASSETS, "team"));

  // Convert root-level files used on home page
  console.log("\n📁 Root assets:");
  for (const f of ROOT_FILES) {
    await convertFile(path.join(ASSETS, f));
  }

  console.log("\n✨ Done!");
}

main().catch(console.error);
