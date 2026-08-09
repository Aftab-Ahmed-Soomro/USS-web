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
  let totalReplacements = 0;

  files.forEach((filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    let replaced = false;

    // Match strings ending in .png, .jpg, or .jpeg starting with /assets/
    const regex = /\/assets\/([^"'\`]+?\.(png|jpe?g))/gi;

    content = content.replace(regex, (match, relPath) => {
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
      console.log(`Updated ${path.relative(__dirname, filePath)}`);
    }
  });

  console.log(`\nFinished! Replaced ${totalReplacements} image extensions including files with spaces.`);
}

processCodeFiles();
