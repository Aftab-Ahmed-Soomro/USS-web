const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const assetsDir = path.join(__dirname, "public", "assets");

async function optimizeSingleFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext)) return;

  const stat = fs.statSync(filePath);
  const originalSize = stat.size;

  // Create .webp version
  const webpPath = filePath.replace(/\.(png|jpe?g)$/i, ".webp");

  try {
    const meta = await sharp(filePath).metadata();
    let pipeline = sharp(filePath);
    if (meta.width && meta.width > 1920) {
      pipeline = pipeline.resize({ width: 1920, withoutEnlargement: true });
    }

    // Write WebP version
    const webpBuffer = await pipeline.clone().webp({ quality: 80 }).toBuffer();
    fs.writeFileSync(webpPath, webpBuffer);

    // Also compress the original file in-place if PNG/JPG
    let compressedBuffer;
    if (ext === ".png") {
      compressedBuffer = await pipeline.clone().png({ quality: 80, palette: true, compressionLevel: 9 }).toBuffer();
    } else {
      compressedBuffer = await pipeline.clone().jpeg({ quality: 80, mozjpeg: true }).toBuffer();
    }

    if (compressedBuffer.length < originalSize) {
      fs.writeFileSync(filePath, compressedBuffer);
      console.log(
        `✅ ${path.basename(filePath)}: ${(originalSize / 1024 / 1024).toFixed(2)} MB -> PNG: ${(compressedBuffer.length / 1024 / 1024).toFixed(2)} MB | WebP: ${(webpBuffer.length / 1024 / 1024).toFixed(2)} MB`
      );
    }
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
  }
}

async function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  const items = fs.readdirSync(dirPath);
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (stat.isFile()) {
      if (stat.size > 200 * 1024) {
        await optimizeSingleFile(fullPath);
      }
    }
  }
}

async function main() {
  console.log("🚀 Compressing images in public/assets...");
  await processDirectory(assetsDir);
  console.log("🎉 Compression finished!");
}

main();
