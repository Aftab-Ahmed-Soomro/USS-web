import fs from "fs";
import path from "path";

const CLOUD_NAME    = "odokjwiz";
const UPLOAD_PRESET = "uss_unsigned";
const FOLDER        = "uss-website/360_home";
const VIDEOS_DIR    = "d:/uss-website/my-app/public/assets/DifferentSecVideos";
const UPLOAD_URL    = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/video/upload`;

// Map: filename -> public_id (to keep clean names on Cloudinary)
const FILES = [
  "GALA BEHIND THE SCENE EDIT.webm",
  "Agency 8 Event.webm",
  "3.webm",
  "Interior_Design_Process_for_Vision_Tower.webm",
  "Hot seat 1 updated w_captions.webm",
  "Whats-new.webm",
  "Shortened_version.webm",
  "USS-narrator-updated.webm",
  "Cinnamood BTS shoot.webm",
  "Idea 8 - BTS v2.webm",
  "DIRECTION 3.webm",
];

console.log(`\n🚀 Uploading ${FILES.length} videos to Cloudinary (this will take a while)...\n`);

for (const filename of FILES) {
  const filePath = path.join(VIDEOS_DIR, filename);
  if (!fs.existsSync(filePath)) { console.warn(`⚠️  Skipping: ${filename}`); continue; }
  
  const sizeKB = Math.round(fs.statSync(filePath).size / 1024);
  console.log(`⏳ Uploading: ${filename} (${sizeKB} KB)...`);
  
  const blob = new Blob([fs.readFileSync(filePath)], { type: "video/webm" });
  const form = new FormData();
  form.append("file", blob, filename);
  form.append("upload_preset", UPLOAD_PRESET);
  form.append("folder", FOLDER);
  form.append("public_id", filename.replace(".webm", ""));
  
  const res = await fetch(UPLOAD_URL, { method: "POST", body: form });
  const data = await res.json();
  if (!res.ok) console.error(`❌  ${filename} — ${data.error?.message}`);
  else console.log(`✅  ${filename}\n    → ${data.secure_url}\n`);
}

console.log("✨ All done!");
