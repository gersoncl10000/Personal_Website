import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
for (const width of [390, 768, 1440]) {
  test(`Routes, layout and accessibility at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 960 });
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    for (const route of [
      "/",
      "/ia-finanzas/",
      "/sobre-castillo/",
      "/contacto/",
      "/consolidacion/",
    ]) {
      await page.goto(route);
      await expect(page.locator("h1")).toBeVisible();
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBeTruthy();
      for (const img of await page.locator("img").all()) {
        await img.scrollIntoViewIfNeeded();
        await expect
          .poll(() => img.evaluate((el) => el.complete && el.naturalWidth > 0))
          .toBeTruthy();
      }
      const scan = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(scan.violations).toEqual([]);
    }
    expect(errors).toEqual([]);
  });
}
test("Mobile menu, details, AI contact and keyboard", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Saltar al contenido" }),
  ).toBeFocused();
  const menu = page.getByRole("button", { name: /Menú/ });
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(menu).toBeFocused();
  await menu.click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Servicios" })
    .click();
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator("#servicios")).toBeInViewport();
  await menu.click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Metodología" })
    .click();
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator("#como-trabajo")).toBeInViewport();
  await page.goto("/");
  await expect(
    page.getByRole("link", { name: "Hablemos de tu proyecto" }).first(),
  ).toHaveAttribute("href", "/contacto/#message-heading");
  await expect(page.getByText("QUÉ RECIBE EL CLIENTE")).toHaveCount(2);
  await page.goto("/ia-finanzas/");
  await expect(
    page.getByRole("link", { name: "Hablemos de tu caso" }).first(),
  ).toHaveAttribute("href", "/contacto/#message-heading");
  await page.goto("/sobre-castillo/");
  await expect(
    page.getByRole("heading", { name: "Sobre Castillo", level: 1 }),
  ).toBeVisible();
  await expect(
    page.getByText("Licenciatura en Contaduría Pública"),
  ).toBeVisible();
  await page.goto("/contacto/");
  await expect(page.locator("#linkedin-cta")).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/gersoncastillolorenzo/",
  );
  await expect(page.locator('a[href^="mailto:"]')).toHaveCount(0);
});
test("Capture review screenshots", async ({ page }) => {
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const [name, route] of [
      ["home", "/"],
      ["sobre-castillo", "/sobre-castillo/"],
      ["agentes", "/ia-finanzas/"],
      ["contacto", "/contacto/"],
    ]) {
      await page.goto(route);
      await page.evaluate(() => document.fonts.ready);
      for (const img of await page.locator("img").all()) {
        await img.scrollIntoViewIfNeeded();
        await expect
          .poll(() => img.evaluate((el) => el.complete && el.naturalWidth > 0))
          .toBeTruthy();
      }
      await page.evaluate(() =>
        window.scrollTo({ top: 0, behavior: "instant" }),
      );
      await page.screenshot({
        path: `test-results/${name}-${width}.png`,
        fullPage: true,
      });
      if (name === "home") {
        await page.screenshot({ path: `test-results/hero-${width}.png` });
      }
    }
  }
});
