const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "public", "assets", "pre and post");

async function convert() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith(".jpg") || file.endsWith(".png")) {
      const full = path.join(dir, file);
      const webpPath = full.replace(/\.(png|jpe?g)$/i, ".webp");
      
      console.log(`Converting ${file}...`);
      await sharp(full)
        .webp({ quality: 80 })
        .toFile(webpPath);
      console.log(`Done ${webpPath}`);
    }
  }
}
convert();
