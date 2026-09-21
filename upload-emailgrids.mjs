import fs from "fs";
import path from "path";

const CLOUD_NAME    = "odokjwiz";
const UPLOAD_PRESET = "uss_unsigned";
const ASSET_FOLDER  = "uss-website/emailGrids";
const IMAGES_DIR    = "d:/uss-website/my-app/public/assets/emailGrids";
const UPLOAD_URL    = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
const TO_UPLOAD     = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

console.log(`\n🚀 Uploading ${TO_UPLOAD.length} emailGrids images...\n`);
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
console.log("\n✨ Done!");
