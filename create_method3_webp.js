const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const assetsDir = path.join(__dirname, 'public', 'assets');
const srcPath = path.join(assetsDir, 'method3.png');
const destPath = path.join(assetsDir, 'method3.webp');

async function main() {
  if (fs.existsSync(srcPath)) {
    await sharp(srcPath).webp({ quality: 80 }).toFile(destPath);
    console.log(`✅ Created method3.webp (${(fs.statSync(destPath).size / 1024).toFixed(1)} KB)`);
  }
}

main();
