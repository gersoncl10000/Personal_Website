import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const logo = join(root, "public", "images", "castillo-symbol.png");
const output = join(root, "public", "images", "castillo-social.png");

const typography = Buffer.from(`
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="#081327"/>
    <rect x="80" y="492" width="1040" height="1" fill="#344055"/>
    <rect x="80" y="545" width="28" height="3" fill="#dcb574"/>
    <text x="270" y="160" fill="#dcb574" font-family="Arial, sans-serif" font-size="18" font-weight="700" letter-spacing="4">CASTILLO</text>
    <text x="270" y="212" fill="#ffffff" font-family="Arial, sans-serif" font-size="50" font-weight="600">Transformación Financiera</text>
    <text x="80" y="355" fill="#ffffff" font-family="Arial, sans-serif" font-size="58" font-weight="600">Modernización y automatización</text>
    <text x="80" y="430" fill="#dcb574" font-family="Arial, sans-serif" font-size="62" font-weight="600">de la función financiera.</text>
    <text x="125" y="554" fill="#c1ccda" font-family="Arial, sans-serif" font-size="18">Diagnóstico · Sistemas · Automatización · Implantación</text>
  </svg>
`);

const resizedLogo = await sharp(logo).resize(140, 140).png().toBuffer();

await sharp(typography)
  .composite([{ input: resizedLogo, left: 80, top: 95 }])
  .png({ compressionLevel: 9 })
  .toFile(output);

console.log(output);
