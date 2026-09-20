export function GET() {
  return new Response(
    '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
      ["", "ia-finanzas/", "contacto/", "consolidacion/"]
        .map(
          (path) => `<url><loc>https://gersoncastillo.dev/${path}</loc></url>`,
        )
        .join("") +
      "</urlset>",
    { headers: { "Content-Type": "application/xml" } },
  );
}
