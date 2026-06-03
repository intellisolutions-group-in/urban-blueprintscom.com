import { copyFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const srcDir = 'C:\\Users\\User\\.gemini\\antigravity-ide\\brain\\a4028606-7cee-4887-aa1d-a9c96b36b5de';
const destBaseDir = 'd:\\urban-blueprints\\public\\images\\services';

const copyOperations = [
  // --- Water Resources Engineering ---
  { src: 'water_hero_1779880031482.png', destSub: 'water-resources', name: 'hero-water.webp' },
  { src: 'water_hero_1779880031482.png', destSub: 'water-resources', name: 'hero-water.png' },
  { src: 'water_main_1779880051636.png', destSub: 'water-resources', name: 'main-water.webp' },
  { src: 'water_main_1779880051636.png', destSub: 'water-resources', name: 'main-water.png' },
  { src: 'water_supply_1779880173610.png', destSub: 'water-resources', name: 'water-supply.webp' },
  { src: 'water_supply_1779880173610.png', destSub: 'water-resources', name: 'water-supply.png' },
  { src: 'water_treatment_1779880071688.png', destSub: 'water-resources', name: 'water-treatment.webp' },
  { src: 'water_treatment_1779880071688.png', destSub: 'water-resources', name: 'water-treatment.png' },
  { src: 'water_waste_1779880092954.png', destSub: 'water-resources', name: 'wastewater-management.webp' },
  { src: 'water_waste_1779880092954.png', destSub: 'water-resources', name: 'wastewater-management.png' },
  { src: 'water_flood_1779880113076.png', destSub: 'water-resources', name: 'flood-control.webp' },
  { src: 'water_flood_1779880113076.png', destSub: 'water-resources', name: 'flood-control.png' },
  { src: 'water_hydro_1779880134243.png', destSub: 'water-resources', name: 'hydropower-development.webp' },
  { src: 'water_hydro_1779880134243.png', destSub: 'water-resources', name: 'hydropower-development.png' },
  { src: 'water_conserve_1779880153316.png', destSub: 'water-resources', name: 'water-conservation.webp' },
  { src: 'water_conserve_1779880153316.png', destSub: 'water-resources', name: 'water-conservation.png' },

  // --- Transportation Engineering ---
  { src: 'construction_trans_1779876310925.png', destSub: 'transportation', name: 'construction.webp' },
  { src: 'construction_trans_1779876310925.png', destSub: 'transportation', name: 'construction-new.jpg' },
  { src: 'construction_trans_1779876310925.png', destSub: 'transportation', name: 'construction.png' },
  { src: 'design_trans_1779876330904.png', destSub: 'transportation', name: 'design.webp' },
  { src: 'design_trans_1779876330904.png', destSub: 'transportation', name: 'design-new.jpg' },
  { src: 'design_trans_1779876330904.png', destSub: 'transportation', name: 'design.png' }
];

console.log('Starting visual asset import...');

for (const op of copyOperations) {
  const srcPath = join(srcDir, op.src);
  const destDir = join(destBaseDir, op.destSub);
  const destPath = join(destDir, op.name);

  try {
    mkdirSync(destDir, { recursive: true });
    copyFileSync(srcPath, destPath);
    console.log(`Successfully imported: ${op.src} -> ${op.destSub}/${op.name}`);
  } catch (error) {
    console.error(`Failed to import ${op.src} to ${op.destSub}/${op.name}: ${error.message}`);
  }
}

console.log('Visual asset import completed!');
