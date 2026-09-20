import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
const routes = ["/", "/ia-finanzas/", "/contacto/", "/consolidacion/"];
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
