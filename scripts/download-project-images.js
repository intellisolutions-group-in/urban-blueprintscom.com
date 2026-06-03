const fs = require('fs');
const path = require('path');
const https = require('https');

const projects = [
  {
    slug: "metro-highway-overpass",
    images: {
      cover: "photo-1542362567-b07eac790acd",
      "gallery-1": "photo-1518005020951-eccb494ad742",
      "gallery-2": "photo-1485088478177-d75406d09cbb",
      "gallery-3": "photo-1590486803833-ffc475d4a17c"
    }
  },
  {
    slug: "southern-high-speed-transit",
    images: {
      cover: "photo-1532103054090-334e6e60ab29",
      "gallery-1": "photo-1474487548417-781cb71495f3",
      "gallery-2": "photo-1558449028-b53a39d100fc",
      "gallery-3": "photo-1515165504669-423068d480d5"
    }
  },
  {
    slug: "apex-structural-steel-tower",
    images: {
      cover: "photo-1504307651254-35680f356dfd",
      "gallery-1": "photo-1581094288338-2314dddb7ecc",
      "gallery-2": "photo-1486406146926-c627a92ad1ab",
      "gallery-3": "photo-1513694203232-719a280e022f"
    }
  },
  {
    slug: "vanguard-glass-headquarters",
    images: {
      cover: "photo-1486406146926-c627a92ad1ab",
      "gallery-1": "photo-1497366216548-37526070297c",
      "gallery-2": "photo-1454165804606-c3d57bc86b40",
      "gallery-3": "photo-1507679799987-c73779587ccf"
    }
  },
  {
    slug: "valley-water-retention-dam",
    images: {
      cover: "photo-1470071459604-3b5ec3a7fe05",
      "gallery-1": "photo-1541888946425-d81bb19240f5",
      "gallery-2": "photo-1508962914676-134849a727f0",
      "gallery-3": "photo-1468476396571-4d6f2a427ee7"
    }
  },
  {
    slug: "regional-stormwater-treatment",
    images: {
      cover: "photo-1581094288338-2314dddb7ecc",
      "gallery-1": "photo-1504307651254-35680f356dfd",
      "gallery-2": "photo-1518709268805-4e9042af9f23",
      "gallery-3": "photo-1541888946425-d81bb19240f5"
    }
  },
  {
    slug: "urban-eco-distinction-tower",
    images: {
      cover: "photo-1584622650111-993a426fbf0a",
      "gallery-1": "photo-1466611653911-95081537e5b7",
      "gallery-2": "photo-1532601224476-15c79f2f7a51",
      "gallery-3": "photo-1448375240586-882707db888b"
    }
  },
  {
    slug: "estuary-soil-restoration",
    images: {
      cover: "photo-1441974231531-c6227db76b6e",
      "gallery-1": "photo-1500627869374-13cd993b1115",
      "gallery-2": "photo-1470071459604-3b5ec3a7fe05",
      "gallery-3": "photo-1502082553048-f009c37129b9"
    }
  },
  {
    slug: "thames-core-foundation-anchor",
    images: {
      cover: "photo-1541888946425-d81bb19240f5",
      "gallery-1": "photo-1590069261209-f8e9b8642343",
      "gallery-2": "photo-1504307651254-35680f356dfd",
      "gallery-3": "photo-1581094288338-2314dddb7ecc"
    }
  },
  {
    slug: "west-ridge-retaining-wall",
    images: {
      cover: "photo-1590069261209-f8e9b8642343",
      "gallery-1": "photo-1541888946425-d81bb19240f5",
      "gallery-2": "photo-1518005020951-eccb494ad742",
      "gallery-3": "photo-1504307651254-35680f356dfd"
    }
  }
];

const destBase = path.join(__dirname, '..', 'public', 'images', 'projects');

async function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 302 || res.statusCode === 301) {
        // Handle redirect
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
  console.log("Starting image downloads...");
  for (const project of projects) {
    const projectDir = path.join(destBase, project.slug);
    fs.mkdirSync(projectDir, { recursive: true });

    for (const [key, photoId] of Object.entries(project.images)) {
      const url = `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1200&h=800&q=80`;
      const filename = `${key}.jpg`;
      const destPath = path.join(projectDir, filename);

      console.log(`Downloading ${project.slug}/${filename}...`);
      try {
        await downloadImage(url, destPath);
        console.log(`Successfully saved ${project.slug}/${filename}`);
      } catch (err) {
        console.error(`Error downloading ${project.slug}/${filename}:`, err.message);
      }
    }
  }
  console.log("All image downloads completed!");
}

run();
