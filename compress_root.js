const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const assetsDir = path.join(__dirname, "public", "assets");
const rootFiles = ["Atlanta.png", "Dubai.png", "London.png", "bgMain.png", "hero poster.webp", "hero-poster.webp", "saadiTown.png", "Afro Maya - 1.png", "Agency 8 - 1.png", "Coshe - 1.jpg"];

async function main() {
  for (const f of rootFiles) {
    const filePath = path.join(assetsDir, f);
    if (!fs.existsSync(filePath)) continue;

    const stat = fs.statSync(filePath);
    const originalSize = stat.size;
    const ext = path.extname(filePath).toLowerCase();
    const webpPath = filePath.replace(/\.(png|jpe?g)$/i, ".webp");

    try {
      const meta = await sharp(filePath).metadata();
      let pipeline = sharp(filePath);
      if (meta.width && meta.width > 1920) {
        pipeline = pipeline.resize({ width: 1920, withoutEnlargement: true });
      }

      const webpBuffer = await pipeline.clone().webp({ quality: 80 }).toBuffer();
      fs.writeFileSync(webpPath, webpBuffer);

      let compressedBuffer;
      if (ext === ".png") {
        compressedBuffer = await pipeline.clone().png({ quality: 80, palette: true, compressionLevel: 9 }).toBuffer();
      } else {
        compressedBuffer = await pipeline.clone().jpeg({ quality: 80, mozjpeg: true }).toBuffer();
      }

      if (compressedBuffer.length < originalSize) {
        fs.writeFileSync(filePath, compressedBuffer);
      }

      console.log(`✅ ${f}: ${(originalSize / 1024 / 1024).toFixed(2)} MB -> PNG/JPG: ${(fs.statSync(filePath).size / 1024 / 1024).toFixed(2)} MB | WebP: ${(webpBuffer.length / 1024 / 1024).toFixed(2)} MB`);
    } catch (err) {
      console.error(`Error on ${f}:`, err.message);
    }
  }
}

main();
