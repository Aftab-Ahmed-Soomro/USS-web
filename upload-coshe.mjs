import fs from "fs";

const CLOUD_NAME    = "odokjwiz";
const UPLOAD_PRESET = "uss_unsigned";
const UPLOAD_URL    = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

const filePath = "d:/uss-website/my-app/public/assets/Coshe Email.png";
const blob = new Blob([fs.readFileSync(filePath)], { type: "image/png" });
const form = new FormData();
form.append("file", blob, "Coshe Email.png");
form.append("upload_preset", UPLOAD_PRESET);
form.append("folder", "uss-website");
form.append("public_id", "Coshe Email");

const res = await fetch(UPLOAD_URL, { method: "POST", body: form });
const data = await res.json();
if (!res.ok) console.error(`❌ ${data.error?.message}`);
else console.log(`✅ Coshe Email.png → ${data.secure_url}`);
