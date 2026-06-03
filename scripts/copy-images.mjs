import { copyFileSync } from 'fs';

try {
  copyFileSync(
    'C:\\Users\\User\\.gemini\\antigravity-ide\\brain\\a4028606-7cee-4887-aa1d-a9c96b36b5de\\construction_trans_1779876310925.png',
    'd:\\urban-blueprints\\public\\images\\services\\transportation\\construction-generated.png'
  );
  console.log('Successfully copied construction image.');
} catch (e) {
  console.error('Failed to copy construction image:', e.message);
}

try {
  copyFileSync(
    'C:\\Users\\User\\.gemini\\antigravity-ide\\brain\\a4028606-7cee-4887-aa1d-a9c96b36b5de\\design_trans_1779876330904.png',
    'd:\\urban-blueprints\\public\\images\\services\\transportation\\design-generated.png'
  );
  console.log('Successfully copied design image.');
} catch (e) {
  console.error('Failed to copy design image:', e.message);
}
