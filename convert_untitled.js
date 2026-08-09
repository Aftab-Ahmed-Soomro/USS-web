const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const assetsDir = path.join(__dirname, 'public', 'assets');
const src = path.join(assetsDir, 'Untitled design - 2.png');
const dest = path.join(assetsDir, 'Untitled design - 2.webp');

async function main() {
  if (fs.existsSync(src)) {
    await sharp(src).webp({ quality: 80 }).toFile(dest);
    console.log(`✅ Converted Untitled design - 2.png to WebP (${(fs.statSync(dest).size / 1024).toFixed(1)} KB)`);
  }
}

main();
