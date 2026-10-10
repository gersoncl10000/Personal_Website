import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
const routes = [
  "/",
  "/ia-finanzas/",
  "/sobre-castillo/",
  "/contacto/",
  "/consolidacion/",
];
const resolve = (route) =>
  path.join("dist", route.endsWith("/") ? `${route}index.html` : route);

test("LinkedIn stays available and generated pages expose no personal recipient", () => {
  for (const route of [...routes, "/404.html"]) {
    const html = readFileSync(resolve(route), "utf8");
    assert.doesNotMatch(html, /mailto:|[\w.+-]+@outlook\.com|"email"\s*:/i);
    assert.match(
      html,
      /https:\/\/www\.linkedin\.com\/in\/gersoncastillolorenzo\//,
    );
  }
});
test("All public pages contain indexable Spanish content and unique metadata", () => {
  const titles = new Set();
  for (const route of routes) {
    const html = readFileSync(resolve(route), "utf8");
    assert.match(html, /<html lang="es"/);
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
    assert.match(html, /<meta name="description"/);
    assert.match(html, /<link rel="canonical"/);
    const title = html.match(/<title>(.*?)<\/title>/)[1];
    assert.ok(!titles.has(title));
    titles.add(title);
  }
});
test("Castillo favicon declarations and legacy icon paths use the supplied symbol", () => {
  const html = readFileSync(resolve("/"), "utf8");
  assert.match(
    html,
    /rel="icon"[^>]+sizes="200x200"[^>]+href="\/images\/castillo-symbol\.png"/,
  );
  assert.match(html, /rel="apple-touch-icon"[^>]+castillo-symbol\.png/);
  assert.match(
    html,
    /"logo":"https:\/\/gersoncastillo\.dev\/images\/castillo-symbol\.png"/,
  );
  assert.match(
    html,
    /property="og:image" content="https:\/\/gersoncastillo\.dev\/images\/castillo-social\.png"/,
  );
  const symbol = readFileSync("dist/images/castillo-symbol.png");
  for (const alias of ["gerson_ico.png", "favicon.png"]) {
    assert.deepEqual(readFileSync(path.join("dist", alias)), symbol, alias);
  }
  const icon = readFileSync("dist/favicon.ico");
  assert.equal(icon.readUInt16LE(0), 0);
  assert.equal(icon.readUInt16LE(2), 1);
  assert.equal(icon.readUInt16LE(4), 1);
  assert.equal(icon[6], 48);
  assert.equal(icon[7], 48);
  assert.equal(icon.readUInt16LE(10), 1);
  assert.equal(icon.readUInt16LE(12), 32);
  const length = icon.readUInt32LE(14);
  const offset = icon.readUInt32LE(18);
  assert.equal(offset, 22);
  assert.equal(offset + length, icon.length);
  const png = icon.subarray(offset);
  assert.deepEqual(
    png.subarray(0, 8),
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
  );
  assert.equal(png.readUInt32BE(16), 48);
  assert.equal(png.readUInt32BE(20), 48);
});

test("Commercial positioning and service deliverables are visible on the homepage", () => {
  const html = readFileSync(resolve("/"), "utf8");
  for (const text of [
    "17 años en Finanzas",
    "Modernización y automatización",
    "de la función financiera.",
    "Qué está frenando a tu equipo financiero.",
    "QUÉ RECIBE EL CLIENTE",
    "Mapa de situación y hoja de ruta con proyectos priorizados.",
    "Solución implantada, pruebas de aceptación y traspaso al equipo.",
    "Hablemos de tu proyecto",
  ]) {
    assert.match(html, new RegExp(text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
  assert.doesNotMatch(
    html,
    /FOCO \/ DATA &amp; AI|TECNOLOGÍA PROPIA \/ EMPRESA SEPARADA|Formulario de contacto/,
  );
});

test("About page contains only the approved academic qualifications", () => {
  const html = readFileSync(resolve("/sobre-castillo/"), "utf8");
  for (const degree of [
    "Licenciatura en Contaduría Pública",
    "Abogado",
    "Máster en Big Data, Data Science e Inteligencia Artificial",
  ]) {
    assert.match(html, new RegExp(degree));
  }
  assert.doesNotMatch(html, /Harvard|INEAF|MOOC|certificaci[oó]n|curso/i);
});

test("Madrid office is presented as Castillo's address", () => {
  for (const route of ["/", "/sobre-castillo/", "/contacto/"]) {
    const html = readFileSync(resolve(route), "utf8");
    assert.match(html, /OFICINA DE CASTILLO EN MADRID/);
    assert.match(html, /Castillo · Transformación Financiera/);
    assert.match(html, /Avalon – PE AVALON/);
    assert.match(html, /Calle Santa Leonor 65/);
    assert.match(html, /28037 Madrid, España/);
    assert.doesNotMatch(html, /OFICINA DE AZHUM EN MADRID/);
  }
  const layout = readFileSync("src/layouts/Layout.astro", "utf8");
  assert.doesNotMatch(layout, /Calle Santa Leonor 65/);
});

test("Generated public copy avoids unsupported team and AI delivery claims", () => {
  for (const route of routes) {
    const html = readFileSync(resolve(route), "utf8");
    assert.doesNotMatch(
      html,
      /nuestro equipo|hemos implantado agentes|agentes en producci[oó]n|clientes como|l[ií]der de mercado/i,
    );
  }
});
test("Internal links, fragments and image assets resolve in the build", () => {
  for (const route of routes) {
    const html = readFileSync(resolve(route), "utf8");
    for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      const href = match[1];
      if (/^(?:https?:|mailto:|data:)/.test(href)) continue;
      const url = new URL(href, "https://local.test" + route);
      const target = resolve(decodeURIComponent(url.pathname));
      assert.ok(existsSync(target), `${route}: ${href}`);
      if (url.hash && target.endsWith(".html")) {
        const targetHtml = readFileSync(target, "utf8");
        assert.ok(
          targetHtml.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),
          href,
        );
      }
    }
  }
});
test("Legacy educational route retains three Power BI reports and presentation", () => {
  const html = readFileSync(resolve("/consolidacion/"), "utf8");
  assert.equal(
    (html.match(/https:\/\/app.powerbi.com\/view/g) || []).length,
    3,
  );
  assert.match(html, /\.pptx/);
});
