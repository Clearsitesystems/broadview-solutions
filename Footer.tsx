// Downloads all Readdy-hosted images into public/readdy-assets at build time
// so the deployed site has no runtime dependency on Readdy.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'image-manifest.json'), 'utf8'));
const outDir = path.join(root, 'public', 'readdy-assets');
fs.mkdirSync(outDir, { recursive: true });

const entries = Object.entries(manifest); // [originalUrl, "/readdy-assets/name"]
let ok = 0, skip = 0, fail = 0;
const failures = [];

async function fetchWithRetry(url, tries = 3) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { redirect: 'follow', headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36', 'Accept': 'image/avif,image/webp,image/png,image/jpeg,*/*', 'Referer': 'https://broad-viewsolutions.com/' } });
      if (res.ok) return Buffer.from(await res.arrayBuffer());
    } catch (e) { /* retry */ }
    await new Promise(r => setTimeout(r, 800 * (i + 1)));
  }
  return null;
}

console.log(`[bake-images] ${entries.length} images to fetch...`);
for (const [url, local] of entries) {
  const name = local.replace('/readdy-assets/', '');
  const dest = path.join(outDir, name);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 0) { skip++; continue; }
  const buf = await fetchWithRetry(url);
  if (buf && buf.length > 0) {
    fs.writeFileSync(dest, buf);
    ok++;
  } else {
    fail++; failures.push({ name, url });
  }
}
console.log(`[bake-images] done. downloaded=${ok} skipped=${skip} failed=${fail}`);
if (failures.length) {
  console.warn('[bake-images] FAILED (site will 404 these images):');
  failures.forEach(f => console.warn('  - ' + f.name));
}
