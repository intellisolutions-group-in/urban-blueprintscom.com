const fs = require('fs');
const path = require('path');
const https = require('https');

// Define project assets
const generatedAssets = [
  {
    src: "C:/Users/User/.gemini/antigravity-ide/brain/2d0779e1-b975-4f50-b280-52daf8f21ba3/metro_highway_overpass_1780479199131.png",
    dest: "public/images/projects/metro-highway-overpass/cover.png"
  },
  {
    src: "C:/Users/User/.gemini/antigravity-ide/brain/2d0779e1-b975-4f50-b280-52daf8f21ba3/transit_terminal_1780479215909.png",
    dest: "public/images/projects/southern-high-speed-transit/cover.png"
  },
  {
    src: "C:/Users/User/.gemini/antigravity-ide/brain/2d0779e1-b975-4f50-b280-52daf8f21ba3/steel_tower_1780479235030.png",
    dest: "public/images/projects/apex-structural-steel-tower/cover.png"
  },
  {
    src: "C:/Users/User/.gemini/antigravity-ide/brain/2d0779e1-b975-4f50-b280-52daf8f21ba3/glass_hq_1780479250124.png",
    dest: "public/images/projects/vanguard-glass-headquarters/cover.png"
  },
  {
    src: "C:/Users/User/.gemini/antigravity-ide/brain/2d0779e1-b975-4f50-b280-52daf8f21ba3/retention_dam_1780479266087.png",
    dest: "public/images/projects/valley-water-retention-dam/cover.png"
  },
  {
    src: "C:/Users/User/.gemini/antigravity-ide/brain/2d0779e1-b975-4f50-b280-52daf8f21ba3/stormwater_network_1780479283670.png",
    dest: "public/images/projects/regional-stormwater-treatment/cover.png"
  },
  {
    src: "C:/Users/User/.gemini/antigravity-ide/brain/2d0779e1-b975-4f50-b280-52daf8f21ba3/eco_tower_1780479315949.png",
    dest: "public/images/projects/urban-eco-distinction-tower/cover.png"
  }
];

const unsplashAssets = [
  {
    url: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=1200&h=800&q=80",
    dest: "public/images/projects/estuary-soil-restoration/cover.jpg"
  },
  {
    url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&h=800&q=80",
    dest: "public/images/projects/thames-core-foundation-anchor/cover.jpg"
  },
  {
    url: "https://images.unsplash.com/photo-1584467541268-b029fb348227?auto=format&fit=crop&w=1200&h=800&q=80",
    dest: "public/images/projects/west-ridge-retaining-wall/cover.jpg"
  }
];

const baseDir = path.join(__dirname, '..');

async function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 302 || res.statusCode === 301) {
        downloadImage(res.headers.location, destPath).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download: Status Code ${res.statusCode}`));
        return;
      }
      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      fileStream.on('error', (err) => {
        fs.unlink(destPath, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log("Starting project images setup...");

  // 1. Copy generated assets
  for (const asset of generatedAssets) {
    const fullDest = path.join(baseDir, asset.dest);
    const destDir = path.dirname(fullDest);
    fs.mkdirSync(destDir, { recursive: true });

    try {
      if (fs.existsSync(asset.src)) {
        fs.copyFileSync(asset.src, fullDest);
        console.log(`Copied: ${asset.src} -> ${asset.dest}`);
      } else {
        console.error(`Source file not found: ${asset.src}`);
      }
    } catch (err) {
      console.error(`Error copying ${asset.dest}:`, err.message);
    }
  }

  // 2. Download remaining Unsplash assets
  for (const asset of unsplashAssets) {
    const fullDest = path.join(baseDir, asset.dest);
    const destDir = path.dirname(fullDest);
    fs.mkdirSync(destDir, { recursive: true });

    console.log(`Downloading Unsplash asset -> ${asset.dest}...`);
    try {
      await downloadImage(asset.url, fullDest);
      console.log(`Successfully downloaded: ${asset.dest}`);
    } catch (err) {
      console.error(`Error downloading ${asset.dest}:`, err.message);
    }
  }

  console.log("All project images setup completed!");
}

run();
