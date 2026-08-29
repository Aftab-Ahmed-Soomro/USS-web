const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Cloudinary credentials
const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || 'wda6rtn3';
const API_KEY = process.env.CLOUDINARY_API_KEY || '';
const API_SECRET = process.env.CLOUDINARY_API_SECRET || '';
const FOLDER = 'uss-website/brands';

const ASSETS_DIR = path.join(__dirname, 'public', 'assets', 'newAssets');

async function uploadFile(filePath) {
  const filename = path.basename(filePath);
  const publicId = path.parse(filename).name; // e.g. "8", "20"
  const timestamp = Math.floor(Date.now() / 1000).toString();

  // Params to sign (alphabetical order)
  const paramsToSign = {
    folder: FOLDER,
    overwrite: 'true',
    public_id: publicId,
    timestamp: timestamp,
  };

  const sortedKeys = Object.keys(paramsToSign).sort();
  const signatureString = sortedKeys.map(k => `${k}=${paramsToSign[k]}`).join('&') + API_SECRET;
  const signature = crypto.createHash('sha1').update(signatureString).digest('hex');

  const fileBuffer = fs.readFileSync(filePath);
  const base64Data = `data:image/webp;base64,${fileBuffer.toString('base64')}`;

  const formData = new FormData();
  formData.append('file', base64Data);
  formData.append('folder', FOLDER);
  formData.append('public_id', publicId);
  formData.append('overwrite', 'true');
  formData.append('timestamp', timestamp);
  formData.append('api_key', API_KEY);
  formData.append('signature', signature);

  console.log(`Uploading ${filename} as public_id: ${FOLDER}/${publicId}...`);

  try {
    const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    if (res.ok) {
      console.log(`✅ Success: ${data.secure_url}`);
    } else {
      console.error(`❌ Failed (${filename}):`, data.error?.message || data);
    }
  } catch (err) {
    console.error(`❌ Error uploading ${filename}:`, err.message);
  }
}

async function main() {
  if (!API_KEY || !API_SECRET) {
    console.error('❌ Error: CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET are required.\n');
    console.log('To run this script, set your API key & secret:');
    console.log('PowerShell command:');
    console.log('  $env:CLOUDINARY_API_KEY="YOUR_KEY"; $env:CLOUDINARY_API_SECRET="YOUR_SECRET"; node upload_to_cloudinary.js\n');
    process.exit(1);
  }

  if (!fs.existsSync(ASSETS_DIR)) {
    console.error(`❌ Assets directory not found: ${ASSETS_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(ASSETS_DIR).filter(f => f.endsWith('.webp') || f.endsWith('.png') || f.endsWith('.jpg'));
  console.log(`Found ${files.length} images to upload to Cloudinary (${CLOUD_NAME} -> ${FOLDER}):\n`);

  for (const file of files) {
    await uploadFile(path.join(ASSETS_DIR, file));
  }
}

main().catch(console.error);
