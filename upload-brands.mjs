/**
 * upload-brands.mjs
 *
 * Uploads all USSbrands images to Cloudinary using the unsigned preset.
 * Run once: node upload-brands.mjs
 *
 * Requirements: Node 18+ (native fetch built-in)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ─── Config ──────────────────────────────────────────────────────────────────
const CLOUD_NAME    = "odokjwiz";
const UPLOAD_PRESET = "uss_unsigned";
const ASSET_FOLDER  = "uss-website/brands";
const IMAGES_DIR    = path.join(__dirname, "public", "assets", "USSbrands");
const UPLOAD_URL    = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

// ─── Image numbers to upload ─────────────────────────────────────────────────
const TO_UPLOAD = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43,
];

// ─── Upload one image ────────────────────────────────────────────────────────
async function uploadImage(num) {
  const filePath = path.join(IMAGES_DIR, `${num}.webp`);

  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️  Skipping ${num}.webp — file not found`);
    return null;
  }

  const fileBuffer = fs.readFileSync(filePath);
  const blob = new Blob([fileBuffer], { type: "image/webp" });

  const form = new FormData();
  form.append("file", blob, `${num}.webp`);
  form.append("upload_preset", UPLOAD_PRESET);
  form.append("folder", ASSET_FOLDER);
  form.append("public_id", String(num));

  const res = await fetch(UPLOAD_URL, { method: "POST", body: form });
  const data = await res.json();

  if (!res.ok) {
    console.error(`❌  ${num}.webp — ${data.error?.message ?? "Unknown error"}`);
    return null;
  }

  console.log(`✅  ${num}.webp → ${data.secure_url}`);
  return { num, url: data.secure_url, version: data.version };
}

// ─── Main ────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`\n🚀  Uploading ${TO_UPLOAD.length} images to Cloudinary...\n`);

  const results = [];

  for (const num of TO_UPLOAD) {
    const result = await uploadImage(num);
    if (result) results.push(result);
  }

  console.log(`\n✨  Done! ${results.length}/${TO_UPLOAD.length} uploaded successfully.\n`);

  console.log("─── Uploaded URLs ───────────────────────────────────────");
  for (const { num, url } of results) {
    console.log(`  ${String(num).padStart(2, "0")}: ${url}`);
  }
  console.log("─────────────────────────────────────────────────────────\n");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
