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
    .getByRole("link", { name: "Capacidades" })
    .click();
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await page.locator("summary").first().click();
  await expect(page.locator("details").first()).toHaveAttribute("open", "");
  await page.goto("/");
  await expect(
    page.getByRole("link", { name: "Formulario de contacto" }).first(),
  ).toHaveAttribute("href", "/contacto/#message-heading");
  await page.goto("/ia-finanzas/");
  await expect(
    page.getByRole("link", { name: "Hablemos de IA por LinkedIn" }),
  ).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/gersoncastillolorenzo/",
  );
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
    await page.goto("/");
    for (const img of await page.locator("img").all()) {
      await img.scrollIntoViewIfNeeded();
      await expect
        .poll(() => img.evaluate((el) => el.complete && el.naturalWidth > 0))
        .toBeTruthy();
    }
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.screenshot({
      path: `test-results/home-${width}.png`,
      fullPage: true,
    });
    await page.screenshot({ path: `test-results/hero-${width}.png` });
  }
});
