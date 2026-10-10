import sharp from "sharp";
import { copyFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const publicDirectory = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "public",
);
const symbol = join(publicDirectory, "images", "castillo-symbol.png");

// Keep legacy URLs available for crawlers that still have the old portrait icon.
for (const filename of ["gerson_ico.png", "favicon.png"]) {
  await copyFile(symbol, join(publicDirectory, filename));
}

// An ICO directory can contain a PNG. Resize the supplied mark without redrawing it.
const size = 48;
const png = await sharp(symbol)
  .resize(size, size)
  .ensureAlpha()
  .png()
  .toBuffer();
const directory = Buffer.alloc(22);
directory.writeUInt16LE(1, 2); // Icon type.
directory.writeUInt16LE(1, 4); // One image.
directory[6] = size;
directory[7] = size;
directory.writeUInt16LE(1, 10); // Color planes.
directory.writeUInt16LE(32, 12); // Bits per pixel.
directory.writeUInt32LE(png.length, 14);
directory.writeUInt32LE(directory.length, 18);
await writeFile(
  join(publicDirectory, "favicon.ico"),
  Buffer.concat([directory, png]),
);

console.log(
  "Generated gerson_ico.png, favicon.png and favicon.ico from the Castillo symbol.",
);
