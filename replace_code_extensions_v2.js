const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'app');
const publicAssetsDir = path.join(__dirname, 'public', 'assets');

// Build a map of relative webp paths lowercased
function getWebpFiles(dir, baseDir) {
  let map = new Set();
  if (!fs.existsSync(dir)) return map;
  const list = fs.readdirSync(dir);
  for (const item of list) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      const subMap = getWebpFiles(fullPath, baseDir);
      subMap.forEach(v => map.add(v));
    } else if (path.extname(item).toLowerCase() === '.webp') {
      const rel = path.relative(baseDir, fullPath).replace(/\\/g, '/').toLowerCase();
      map.add(rel);
    }
  }
  return map;
}

const webpSet = getWebpFiles(publicAssetsDir, publicAssetsDir);
console.log(`Found ${webpSet.size} webp files in public/assets.`);

function getAllCodeFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getAllCodeFiles(fullPath));
    } else if (['.tsx', '.ts', '.jsx', '.js'].includes(path.extname(file).toLowerCase())) {
      results.push(fullPath);
    }
  }
  return results;
}

const files = getAllCodeFiles(appDir);
let totalUpdates = 0;

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;

  const regex = /\/assets\/([^"'`\s\?#]+\.(png|jpe?g))/gi;

  content = content.replace(regex, (match, relPath) => {
    const webpRel = relPath.replace(/\.(png|jpe?g)$/i, '.webp').toLowerCase();
    if (webpSet.has(webpRel)) {
      updated = true;
      totalUpdates++;
      const actualWebpRelPath = relPath.replace(/\.(png|jpe?g)$/i, '.webp');
      return `/assets/${actualWebpRelPath}`;
    }
    return match;
  });

  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${path.relative(__dirname, filePath)}`);
  }
});

console.log(`\nFinished v2 update! Replaced ${totalUpdates} image extensions.`);
