import fs from "fs";

const CLOUD_NAME    = "odokjwiz";
const UPLOAD_PRESET = "uss_unsigned";
const UPLOAD_URL    = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

const blob = new Blob([fs.readFileSync("d:/uss-website/my-app/public/assets/socialGrids/14.webp")], { type: "image/webp" });
const form = new FormData();
form.append("file", blob, "14.webp");
form.append("upload_preset", UPLOAD_PRESET);
form.append("folder", "uss-website/socialGrids");
form.append("public_id", "14");
const res = await fetch(UPLOAD_URL, { method: "POST", body: form });
const data = await res.json();
if (!res.ok) console.error(`❌ ${data.error?.message}`);
else console.log(`✅ 14.webp → ${data.secure_url}`);
