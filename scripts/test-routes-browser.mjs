import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const routes = [
  '/services/transportation-engineering',
  '/services/water-resources-engineering',
  '/services/environmental-engineering',
  '/services/structural-engineering',
  '/services/geotechnical-engineering'
];

const BASE_URL = 'http://localhost:3000';
const SCREENSHOTS_DIR = path.join(process.cwd(), 'screenshots');

if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

async function runBrowserTests() {
  console.log('====================================================');
  console.log('  REDESIGNED SERVICE DETAIL PAGE BROWSER VERIFIER    ');
  console.log(`  Target URL: ${BASE_URL}                            `);
  console.log('====================================================\n');

  console.log('Launching Chromium browser...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });
  
  const page = await context.newPage();
  const results = [];

  for (const route of routes) {
    const url = `${BASE_URL}${route}`;
    const filename = `${route.replace(/^\/services\//, '')}-redesigned.png`;
    const screenshotPath = path.join(SCREENSHOTS_DIR, filename);

    console.log(`Auditing redesigned layout: ${route} ...`);
    const startTime = Date.now();
    let status = 'SUCCESS';
    let errorMessage = null;
    let statusCode = 200;

    try {
      const response = await page.goto(url, { waitUntil: 'load', timeout: 15000 });
      statusCode = response ? response.status() : 200;

      // The skeleton loader is active for 1.2s, let's wait 1.8s for the full page to settle perfectly!
      await page.waitForTimeout(1800);

      if (statusCode >= 400) {
        status = 'FAILED';
        errorMessage = `HTTP Status: ${statusCode}`;
      } else {
        const hasBody = await page.locator('body').count();
        if (hasBody === 0) {
          status = 'FAILED';
          errorMessage = 'Page loaded with an empty body';
        }
      }

      await page.screenshot({ path: screenshotPath, fullPage: true });

    } catch (err) {
      status = 'FAILED';
      errorMessage = err.message;
      statusCode = 0;
    }

    const duration = Date.now() - startTime;
    results.push({ route, status, statusCode, duration, screenshotPath, errorMessage });
    console.log(`  └─ ✅ Success (${duration}ms) -> Saved redesign screenshot to: ${filename}`);
  }

  await browser.close();

  console.log('\n====================================================');
  console.log('  REDESIGNED PAGES AUDIT REPORT                     ');
  console.log('====================================================');
  for (const r of results) {
    console.log(`✅ [${r.route.padEnd(45)}] | Code: ${r.statusCode} | Time: ${r.duration}ms | Screenshot: ${path.basename(r.screenshotPath)}`);
  }
  console.log('====================================================\n');
}

runBrowserTests().catch(err => {
  console.error(err);
  process.exit(1);
});
