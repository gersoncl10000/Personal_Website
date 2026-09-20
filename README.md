# Castillo · Transformación Financiera

Rediseño local en `redesign/castillo-transformacion`. Aplicación nueva en `website/`; proyecto Blazor anterior conservado. Producción y workflows no modificados.

## Instalar y ejecutar

Requisito: Node.js 24 (desarrollo verificado con 24.15.0).

```powershell
cd C:\Users\gerso\Code\castillo-web\website
npm ci
npm run dev
```

Abrir http://127.0.0.1:4321 . Si está ocupado, Astro mostrará el puerto disponible.

## Compilar y comprobar

```powershell
npm run build
npm test
npm run preview
```

El resultado estático se genera en `website/dist`. `npm test` requiere build previo y comprueba rutas y enlaces internos del resultado. Ver documentación de QA para revisión de navegador.

Pruebas de navegador con Microsoft Edge instalado y el servidor local activo:

```powershell
npm run test:browser
```

Para comprobar el build con preview en 4322: establecer `$env:TEST_BASE_URL = 'http://127.0.0.1:4322'` antes de ejecutar las pruebas. En sistemas sin Edge, cambiar el canal de Playwright e instalar el navegador correspondiente.

## Organización

- `docs/`: auditoría, posicionamiento, claims, diseño y plan.
- `website/src/data/`: contenido y enlaces heredados.
- `website/src/pages/`: inicio, IA, contacto, consolidación, 404 y sitemap.
- `website/src/styles/tokens.css`: colores con procedencia documentada.
- `website/public/images/castillo-symbol.png`: archivo original aportado por el propietario, sin redibujar.

LinkedIn es el contacto principal. El formulario alternativo usa Web3Forms directamente desde el navegador, sin publicar el correo destinatario ni requerir un backend de Azure. Copiar `website/.env.example` a `website/.env.local` y definir `PUBLIC_WEB3FORMS_ACCESS_KEY` con la clave del formulario Castillo tras comprobar su destinatario. Reiniciar desarrollo o reconstruir el sitio después de cambiarla. Sin clave, el formulario permanece deshabilitado y LinkedIn sigue disponible. Ver `docs/CONTACT_FORM.md`.

## Publicación

El workflow de GitHub compila con Node 24, ejecuta las pruebas y publica `website/dist` en `ProfessionalWebsite`, el único Azure Static Web App que sirve `gersoncastillo.dev` y `www.gersoncastillo.dev`. La clave pública de Web3Forms se incorpora durante el build desde el secreto `PUBLIC_WEB3FORMS_ACCESS_KEY`; no se versiona `.env.local`. Los cinco workflows históricos de otros recursos se retiraron para impedir despliegues duplicados. No se requiere cambiar DNS.
