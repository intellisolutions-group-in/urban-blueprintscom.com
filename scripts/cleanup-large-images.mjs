import fs from 'fs';
import path from 'path';

const servicesDir = 'd:\\urban-blueprints\\public\\images\\services';

// Helper function to recursively delete a folder
function deleteFolderRecursive(directoryPath) {
  if (fs.existsSync(directoryPath)) {
    fs.readdirSync(directoryPath).forEach((file) => {
      const curPath = path.join(directoryPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(directoryPath);
    console.log(`Deleted directory: ${directoryPath}`);
  }
}

console.log('--- STARTING SERVICES IMAGE SYSTEM CLEANUP ---');

// 1. Handle Transportation subfolder A and files
const transDir = path.join(servicesDir, 'transportation');
const subfolderA = path.join(transDir, 'A');

if (fs.existsSync(subfolderA)) {
  console.log('Handling subfolder A inside transportation engineering...');
  // Move main-transportation.webp from A to parent
  const mainWebpSrc = path.join(subfolderA, 'main-transportation.webp');
  const mainWebpDest = path.join(transDir, 'main-transportation.webp');
  if (fs.existsSync(mainWebpSrc)) {
    fs.copyFileSync(mainWebpSrc, mainWebpDest);
    console.log(`Moved main-transportation.webp to ${mainWebpDest}`);
  }

  // Move hero-transportation.webp from A to parent
  const heroWebpSrc = path.join(subfolderA, 'hero-transportation.webp');
  const heroWebpDest = path.join(transDir, 'hero-transportation.webp');
  if (fs.existsSync(heroWebpSrc)) {
    fs.copyFileSync(heroWebpSrc, heroWebpDest);
    console.log(`Moved hero-transportation.webp to ${heroWebpDest}`);
  }

  // Delete subfolder A recursively
  deleteFolderRecursive(subfolderA);
}

// Rename space-polluted hero-transportation .webp if it exists and clean one doesn't
const spaceHeroPath = path.join(transDir, 'hero-transportation .webp');
const cleanHeroPath = path.join(transDir, 'hero-transportation.webp');
if (fs.existsSync(spaceHeroPath)) {
  if (!fs.existsSync(cleanHeroPath)) {
    fs.renameSync(spaceHeroPath, cleanHeroPath);
    console.log(`Renamed space-polluted hero-transportation .webp to ${cleanHeroPath}`);
  } else {
    fs.unlinkSync(spaceHeroPath);
    console.log(`Deleted duplicate space-polluted hero-transportation .webp`);
  }
}

// 2. Clean up redundant non-webp large files recursively
const subdirs = ['transportation', 'structural', 'water-resources', 'environmental', 'geotechnical'];

subdirs.forEach((sub) => {
  const dir = path.join(servicesDir, sub);
  if (!fs.existsSync(dir)) return;

  // Read all files
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      // If it's a "New folder" or "A", delete it recursively
      if (file.toLowerCase() === 'new folder') {
        deleteFolderRecursive(filePath);
      }
      return;
    }

    const ext = path.extname(file).toLowerCase();
    const nameWithoutExt = path.basename(file, ext);

    // If it's not a webp, check if there's a corresponding webp or if it's a duplicate large file
    if (ext === '.jpg' || ext === '.png' || ext === '.jpeg') {
      const webpSibling = path.join(dir, `${nameWithoutExt}.webp`);
      // Also check standard variations like (nameWithoutExt minus "-new", etc.)
      const baseStandardName = nameWithoutExt.replace(/-new$/, '').replace(/ -new$/, '');
      const alternateWebpSibling = path.join(dir, `${baseStandardName}.webp`);

      if (fs.existsSync(webpSibling) || fs.existsSync(alternateWebpSibling)) {
        fs.unlinkSync(filePath);
        console.log(`Deleted redundant heavy image: ${sub}/${file}`);
      } else {
        // Look for similar named webp files
        // E.g. wastewater-treatment-management.jpg matches wastewater-treatment.webp
        const words = nameWithoutExt.toLowerCase().split(/[\s-_]+/);
        const webpFiles = files.filter(f => f.endsWith('.webp'));
        const matchesWebp = webpFiles.some(wf => {
          const wfName = wf.toLowerCase();
          return words.some(word => word.length > 3 && wfName.includes(word));
        });

        if (matchesWebp) {
          fs.unlinkSync(filePath);
          console.log(`Deleted matched duplicate heavy image: ${sub}/${file}`);
        }
      }
    }
  });
});

console.log('--- CLEANUP COMPLETED SUCCESSFULLY ---');
