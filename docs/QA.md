# Validación local

## Formulario de contacto — 2026-09-20

Build correcto y siete pruebas Node aprobadas, repetidas tras configurar la clave propia aportada por el propietario. Incluyen respuestas exitosas y fallidas del proveedor, límite 429, error de red, JSON inválido, bloqueo por falta de clave y honeypot, ausencia de reintentos y conservación del mensaje. Estas pruebas automatizadas simulan peticiones. Comprobación del build sin mailto ni correo personal.

Revisión visual manual en navegador a 390×844 y 1440×1050, con ancho real verificado y sin desbordamiento horizontal. Formulario ahora activo; LinkedIn disponible. Tras corregir el propietario el destinatario en Web3Forms, se envió la segunda prueba `CASTILLO-20260920-02`. Web3Forms aceptó la petición y la interfaz mostró éxito, limpió los campos y habilitó el botón. El propietario confirmó la recepción mediante captura del correo con esa referencia. Cabecera Reply-To no inspeccionada. No se ha repetido Axe. Sin cambios en Azure, Azhum ni workflows.

## Revisión visual 2 — 2026-09-19

Sustituida la dirección beige/serif por navy, blanco y gris frío; fuentes locales Manrope/Inter y gráfico SVG. Build y 3 pruebas estáticas aprobados después del cambio. Revisión mediante capturas reales del navegador de portada, capacidades, IA, contacto, fundador y pie; anchos de 390 y 1440px. Sin desbordamiento horizontal en las comprobaciones finales de inicio (375/390 y 1425/1440px). Fuentes y retrato cargados. Menú móvil abre y cierra con Escape y devuelve el foco. Corregidos titular concatenado en móvil y etiqueta oscura sobre panel navy.

Las cifras de tamaño y el resultado de Axe que figuran debajo pertenecen a la primera versión; no deben interpretarse como una nueva ejecución de Axe sobre esta revisión. Las fuentes ahora son archivos locales de Fontsource; el retrato actualizado pesa aproximadamente 110 KB. Pendiente nueva validación completa de accesibilidad antes de publicación.

## Registro de la primera versión

Entorno: Windows, Node 24.15.0, Astro 7.3.3, Microsoft Edge mediante Playwright.

- Build estático correcto: inicio, IA, contacto, consolidación, 404 y sitemap.
- 3 pruebas del build: metadatos/idioma/H1, resolución de enlaces internos y fragmentos, conservación de informes y descarga de consolidación.
- 5 pruebas de navegador: cuatro rutas en 390, 768 y 1440px; imágenes; ausencia de desbordamiento horizontal y errores JS; menú móvil, Escape, foco de teclado, acordeones y CTA de IA; capturas.
- Axe WCAG 2 A/AA y 2.1 AA sin infracciones detectadas en las páginas y tamaños probados. Corregido contraste de numeración en contacto. No equivale a certificación completa ni prueba exhaustiva con lector de pantalla.
- Capturas revisadas de hero en escritorio y móvil. Retrato original inspeccionado; imágenes lazy comprobadas al entrar en viewport.
- Recursos del build: HTML de inicio ~13 KB; CSS compartido ~15,4 KB; símbolo ~8,7 KB; retrato ~80,3 KB. Sin fuentes remotas, librería UI cliente ni scripts de analítica. Tamaños sin compresión; no representan Core Web Vitals medidos en producción.
- GitHub workflows y aplicación publicada sin cambios. No push, PR ni despliegue.

Pendiente antes de producción: revisión del propietario, confirmar correo heredado y contenido final, staging autorizado con configuración de Azure, comprobación real de cabeceras/dominio/caché/404 y rendimiento sobre red móvil. No se ha enviado ningún mensaje de prueba a terceros.
