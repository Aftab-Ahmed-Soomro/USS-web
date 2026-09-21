import fs from "fs";
import path from "path";

const CLOUD_NAME    = "odokjwiz";
const UPLOAD_PRESET = "uss_unsigned";
const ASSET_FOLDER  = "uss-website/socialGrids";
const IMAGES_DIR    = "d:/uss-website/my-app/public/assets/socialGrids";
const UPLOAD_URL    = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

// Regular images 1-13 (excluding 8 which is the special one)
const TO_UPLOAD = [1,2,3,4,5,6,7,9,10,11,12,13];

console.log(`\n🚀 Uploading socialGrids images...\n`);

// Upload regular numbered images
for (const num of TO_UPLOAD) {
  const filePath = path.join(IMAGES_DIR, `${num}.webp`);
  if (!fs.existsSync(filePath)) { console.warn(`⚠️  Skipping ${num}.webp`); continue; }
  const blob = new Blob([fs.readFileSync(filePath)], { type: "image/webp" });
  const form = new FormData();
  form.append("file", blob, `${num}.webp`);
  form.append("upload_preset", UPLOAD_PRESET);
  form.append("folder", ASSET_FOLDER);
  form.append("public_id", String(num));
  const res = await fetch(UPLOAD_URL, { method: "POST", body: form });
  const data = await res.json();
  if (!res.ok) console.error(`❌  ${num}.webp — ${data.error?.message}`);
  else console.log(`✅  ${num}.webp → ${data.secure_url}`);
}

// Upload the special image 8 (v1787352773.webp) with public_id "8"
const specialPath = path.join(IMAGES_DIR, "v1787352773.webp");
if (fs.existsSync(specialPath)) {
  const blob = new Blob([fs.readFileSync(specialPath)], { type: "image/webp" });
  const form = new FormData();
  form.append("file", blob, "8.webp");
  form.append("upload_preset", UPLOAD_PRESET);
  form.append("folder", ASSET_FOLDER);
  form.append("public_id", "8");
  const res = await fetch(UPLOAD_URL, { method: "POST", body: form });
  const data = await res.json();
  if (!res.ok) console.error(`❌  8.webp (special) — ${data.error?.message}`);
  else console.log(`✅  8.webp (special) → ${data.secure_url}`);
}

console.log("\n✨ Done!");
