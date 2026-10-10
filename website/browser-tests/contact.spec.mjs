import { test, expect } from "@playwright/test";

test("Contact preserves the message on rejection and resets only after confirmed success", async ({
  page,
}) => {
  let providerSuccess = false;
  let requests = 0;
  await page.route("https://api.web3forms.com/submit", async (route) => {
    requests++;
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ success: providerSuccess }),
    });
  });
  await page.goto("/contacto/");
  await expect(page.locator("#contact-form")).toHaveAttribute(
    "data-configured",
    "true",
  );
  await page.getByLabel("Nombre", { exact: true }).fill("Prueba de interfaz");
  await page
    .getByLabel("Correo electrónico", { exact: true })
    .fill("test@example.invalid");
  const message =
    "Prueba simulada: comprobar rechazo y confirmación sin enviar un correo.";
  await page
    .getByLabel("¿Qué te gustaría mejorar?", { exact: true })
    .fill(message);
  const submit = page.getByRole("button", { name: "Enviar mensaje" });
  await submit.click();
  await expect(page.locator("#contact-status")).toHaveAttribute(
    "data-state",
    "error",
  );
  await expect(page.locator("#contact-message")).toHaveValue(message);
  await expect(submit).toBeEnabled();
  expect(requests).toBe(1);
  providerSuccess = true;
  await submit.click();
  await expect(page.locator("#contact-status")).toHaveAttribute(
    "data-state",
    "success",
  );
  await expect(page.locator("#contact-message")).toHaveValue("");
  await expect(submit).toBeEnabled();
  expect(requests).toBe(2);
});
