// Entry: copy POST.json (the X post's address) to /output.
import * as fs from "node:fs";
import * as path from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
const src = path.join(import.meta.dirname, "POST.json");
if (!fs.existsSync(src)) throw new Error(`missing ${src}`);
fs.copyFileSync(src, path.join(outDir, "POST.json"));
console.log("POST.json written:", fs.statSync(path.join(outDir, "POST.json")).size, "bytes");
