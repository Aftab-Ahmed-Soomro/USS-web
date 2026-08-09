const fs = require('fs');
const path = require('path');

const publicAssetsDir = path.join(__dirname, 'public', 'assets');

function cleanUnusedImages(dir) {
  let deletedCount = 0;
  let deletedBytes = 0;

  if (!fs.existsSync(dir)) return { deletedCount, deletedBytes };

  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      const res = cleanUnusedImages(fullPath);
      deletedCount += res.deletedCount;
      deletedBytes += res.deletedBytes;
    } else {
      const ext = path.extname(item).toLowerCase();
      if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
        const webpPath = fullPath.replace(/\.(png|jpe?g)$/i, '.webp');
        if (fs.existsSync(webpPath)) {
          const fileSize = stat.size;
          fs.unlinkSync(fullPath);
          deletedCount++;
          deletedBytes += fileSize;
          console.log(`Deleted redundant: ${path.relative(publicAssetsDir, fullPath)} (${(fileSize / 1024 / 1024).toFixed(2)} MB)`);
        }
      }
    }
  }

  return { deletedCount, deletedBytes };
}

console.log("🧹 Cleaning up redundant PNG/JPG files that have WebP versions...\n");
const result = cleanUnusedImages(publicAssetsDir);
console.log(`\n🎉 Done! Deleted ${result.deletedCount} redundant files. Freed up ${(result.deletedBytes / 1024 / 1024).toFixed(2)} MB of disk space!`);
