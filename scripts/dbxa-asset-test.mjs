import { existsSync, readFileSync, readdirSync } from "node:fs";
import { extname, join, relative } from "node:path";

const root = process.cwd();
const publicDir = join(root, "public");
const roots = ["app", "components"].map((dir) => join(root, dir));
const sourceExts = new Set([".ts", ".tsx", ".js", ".jsx", ".css"]);
const assetPattern = /["'](\/[^"'\s?]+\.(?:png|jpe?g|svg|gif|webp|ico|avif))(?:\?[^"']*)?["']/gi;
const missing = [];

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (!sourceExts.has(extname(entry.name))) continue;

    const source = readFileSync(full, "utf8");
    for (const match of source.matchAll(assetPattern)) {
      const asset = match[1];
      const diskPath = join(publicDir, asset.slice(1));
      if (!existsSync(diskPath)) {
        missing.push({ file: relative(root, full), asset });
      }
    }
  }
}

for (const dir of roots) walk(dir);

if (missing.length) {
  console.error("Missing public assets:");
  for (const item of missing) console.error(`- ${item.asset} referenced by ${item.file}`);
  process.exit(1);
}

console.log("Asset check passed.");
