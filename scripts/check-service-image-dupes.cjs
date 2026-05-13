/**
 * Flags duplicate `/images/services/…` string literals within the same source file.
 * Run: npm run check:image-dupes
 *
 * Heuristic only (string literals); dynamic URLs are not analyzed.
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const roots = ["app", "components", "lib"].map((d) => path.join(root, d));
const exts = new Set([".tsx", ".ts", ".jsx", ".js"]);

const URL_RE = /\/images\/services\/[^"'`\s)]+\.(?:jpg|jpeg|png|webp|gif|JPG|PNG|mp4)/g;

function walk(dir, out) {
  if (!fs.existsSync(dir)) return;
  for (const name of fs.readdirSync(dir)) {
    if (name === "node_modules" || name === ".next") continue;
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walk(full, out);
    else if (exts.has(path.extname(name))) out.push(full);
  }
}

const files = [];
for (const d of roots) walk(d, files);

let failures = 0;
for (const file of files.sort()) {
  const text = fs.readFileSync(file, "utf8");
  const matches = text.match(URL_RE);
  if (!matches || matches.length < 2) continue;
  const counts = new Map();
  for (const m of matches) counts.set(m, (counts.get(m) ?? 0) + 1);
  const dupes = [...counts.entries()].filter(([, n]) => n > 1);
  if (dupes.length) {
    failures += 1;
    const rel = path.relative(root, file);
    console.log(`\n${rel}`);
    for (const [url, n] of dupes.sort((a, b) => b[1] - a[1])) {
      console.log(`  ×${n}  ${url}`);
    }
  }
}

if (failures) {
  console.error(`\n${failures} file(s) with repeated /images/services/ literals (see above).`);
  process.exit(1);
}
console.log("No duplicate /images/services/ literals within single files (checked app, components, lib).");
