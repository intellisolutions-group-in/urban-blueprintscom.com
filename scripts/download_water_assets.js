const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
  "hero-water.png": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80",
  "main-water.png": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
  "water-supply.png": "https://images.unsplash.com/photo-1581094288338-2314dddb7eed?w=800&q=80",
  "water-treatment.png": "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
  "wastewater-management.png": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  "flood-control.png": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
  "hydropower-development.png": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  "water-conservation.png": "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=800&q=80"
};

const targetDir = "d:\\urban-blueprints\\public\\images\\services\\water-resources";
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

Object.entries(images).forEach(([filename, url]) => {
  const destPath = path.join(targetDir, filename);
  const file = fs.createWriteStream(destPath);
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Successfully downloaded: ${filename}`);
    });
  }).on('error', (err) => {
    fs.unlink(destPath, () => {});
    console.error(`Error downloading ${filename}:`, err.message);
  });
});
