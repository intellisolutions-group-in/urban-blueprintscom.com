import { copyFileSync } from 'fs';
const src = process.argv[2];
const dst = process.argv[3];
copyFileSync(src, dst);
console.log(`Copied: ${src} -> ${dst}`);
