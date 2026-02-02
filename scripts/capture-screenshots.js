/**
 * Puppeteer script to capture HTML preview files as PNG screenshots.
 * Run: node capture-screenshots.js
 * Requires: npm install puppeteer
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const PREVIEWS_DIR = path.join(__dirname, '..', 'previews');
const OUTPUT_DIR = path.join(__dirname, '..', 'assets', 'images');

const PREVIEWS = [
  { file: 'settings-preview.html', output: 'settings-full.png', viewport: { width: 800, height: 900 } },
  { file: 'checkout-preview.html', output: 'checkout-full.png', viewport: { width: 800, height: 700 } },
  { file: 'product-detail-preview.html', output: 'product-detail-full.png', viewport: { width: 900, height: 800 } },
];

async function capture() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await puppeteer.launch({ headless: 'new' });

  for (const p of PREVIEWS) {
    const htmlPath = path.join(PREVIEWS_DIR, p.file);
    if (!fs.existsSync(htmlPath)) {
      console.warn('Skip (not found):', p.file);
      continue;
    }
    const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');
    const page = await browser.newPage();
    await page.setViewport(p.viewport || { width: 800, height: 600 });
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    const outPath = path.join(OUTPUT_DIR, p.output);
    await page.screenshot({ path: outPath, fullPage: true });
    await page.close();
    console.log('Captured:', p.output);
  }

  await browser.close();
  console.log('Done.');
}

capture().catch((err) => {
  console.error(err);
  process.exit(1);
});
