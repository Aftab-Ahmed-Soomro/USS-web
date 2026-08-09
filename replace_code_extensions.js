const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'app');
const publicDir = path.join(__dirname, 'public');

function getAllFiles(dir, exts = ['.tsx', '.ts']) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(filePath, exts));
    } else {
      if (exts.includes(path.extname(file).toLowerCase())) {
        results.push(filePath);
      }
    }
  });
  return results;
}

function processCodeFiles() {
  const files = getAllFiles(appDir);
  console.log(`Checking ${files.length} code files in app/ for .png and .jpg references...`);

  let modifiedCount = 0;
  let totalReplacements = 0;

  files.forEach((filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    let replaced = false;

    // Pattern to match /assets/.../*.png or *.jpg or *.jpeg
    const regex = /\/assets\/([^"'`\s\?#]+\.(png|jpe?g))/gi;

    content = content.replace(regex, (match, relPath, ext) => {
      const webpRelPath = relPath.replace(/\.(png|jpe?g)$/i, '.webp');
      const webpDiskPath = path.join(publicDir, 'assets', webpRelPath);

      if (fs.existsSync(webpDiskPath)) {
        replaced = true;
        totalReplacements++;
        return `/assets/${webpRelPath}`;
      }
      return match;
    });

    if (replaced) {
      fs.writeFileSync(filePath, content, 'utf8');
      modifiedCount++;
      console.log(`Updated ${path.relative(__dirname, filePath)}`);
    }
  });

  console.log(`\nFinished! Updated ${totalReplacements} image paths across ${modifiedCount} code files.`);
}

processCodeFiles();
