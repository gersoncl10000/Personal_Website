# Revisión comercial — 10 de octubre de 2026

Aplicada la propuesta aprobada: nueva promesa de modernización y automatización, seis problemas concretos, diagnóstico y proyectos con entregables visibles, método en cuatro pasos, Gerson antes de agentes y Azhum, trayectoria específica, contacto con siguiente paso y oficina de Castillo. Se conserva identidad visual, ruta de IA, formulario y arquitectura estática. Imagen social y metadatos actualizados.

- Build Astro correcto: seis páginas estáticas y sitemap.
- 12 pruebas Node aprobadas: formulario, privacidad del destinatario, metadatos, favicon/OG, posicionamiento, titulaciones, oficina, claims, enlaces/fragmentos y recursos educativos.
- 5 pruebas de navegador aprobadas: cinco rutas a 390, 768 y 1440 px, imágenes, desbordamiento, errores JS, teclado, menú, enlaces y capturas.
- Prueba adicional de interfaz del formulario aprobada con respuestas simuladas: rechazo conserva el mensaje; éxito confirmado limpia campos y habilita el botón. La configuración permanece activa y no se modifica el destinatario.
- Axe WCAG 2 A/AA y 2.1 AA: cero infracciones detectadas en las cinco rutas y tres anchos comprobados.
- Capturas revisadas de home, Sobre Castillo, agentes y contacto en 1440 y 390 px; imagen social revisada.
- Lighthouse 13.5.0 sobre preview local: 100 rendimiento, 100 accesibilidad, 100 buenas prácticas y 100 SEO en móvil y escritorio. LCP de laboratorio: 1,5 s móvil y 0,3 s escritorio; CLS 0 y TBT 0 ms. Informes completos sin errores de auditoría. Edge devolvió EPERM al limpiar su perfil temporal después de guardar los informes; los informes válidos se conservaron.
- Prettier y git diff --check correctos.

Capturas e informes locales: C:/Users/gerso/Documents/Codex/2026-09-19/files-pasted-by-the-user-project/outputs/castillo-revision-2026-10-10/.

La autorización actual incluye publicación. Se utiliza el workflow existente Build and deploy Castillo sobre master, con el recurso Azure Static Web Apps que ya sirve gersoncastillo.dev.

---
# Validación local y de producción

## Dominio principal .com — verificación en producción, 2026-10-10

Migración completada y publicada. `https://gersoncastillo.com` es el dominio principal y predeterminado en Azure Static Web Apps. `.com` y `.es` son los únicos dominios personalizados vinculados en el plan Free: ambos Ready y con TLS válido. `gersoncastillo.es` redirige con HTTP 301 a `.com`, conservando ruta y parámetros.

`Astro.site` apunta a `.com`; canonical, Open Graph, Twitter Cards y schema.org heredan esa dirección. Sitemap, robots y los campos de asunto y origen del formulario apuntan también a `.com`, conservando el envío a Web3Forms y su configuración.

- Build Astro correcto: seis páginas estáticas y sitemap.
- 13 pruebas Node aprobadas, incluida la coherencia del dominio público en metadatos, datos estructurados, sitemap, robots y formulario, y la ausencia de `.dev` en el HTML generado.
- 6 pruebas de navegador aprobadas sobre producción `https://gersoncastillo.com`: cinco rutas a 390, 768 y 1440 px, sin desbordamiento horizontal ni errores JavaScript; imágenes, navegación, teclado y formulario con respuestas simuladas comprobados.
- Axe WCAG 2 A/AA y 2.1 AA sin infracciones detectadas en las cinco rutas y los tres anchos.
- Símbolo original de Castillo utilizado como favicon verificado: el archivo publicado coincide exactamente con el asset de origen.
- Despliegue [38061514955](https://github.com/gersoncl10000/Personal_Website/actions/runs/38061514955) completado con resultado success.
- No se envió un nuevo correo real ni se modificaron recursos de Azhum. Las auditorías y evidencias anteriores se conservan como historial.

## Voz según el contexto — 2026-10-10

La biografía de Gerson en home y Sobre Castillo utiliza primera persona factual. La autoría de Azhum en Sobre Castillo forma parte de esa presentación; el producto en home e IA mantiene descripción objetiva. Servicios y metodología siguen centrados en el proyecto. Contacto y cierre compartido invitan a escribir directamente a Gerson. Se reduce la repetición de condiciones contractuales en las introducciones y se mantiene la identificación objetiva en privacidad, metadatos y responsabilidades. Sin cambios en diseño, CSS, JavaScript o configuración del formulario.

- Build Astro y 12 pruebas Node aprobados.
- 6 pruebas de navegador aprobadas a 390, 768 y 1440 px; cinco rutas sin overflow ni errores JavaScript, imágenes cargadas, navegación y formulario con respuestas simuladas.
- Axe WCAG 2 A/AA y 2.1 AA sin infracciones detectadas en las rutas y anchos comprobados.
- Capturas revisadas en escritorio y móvil, con nueva captura específica del bloque Gerson para verificar el cambio de voz. Lighthouse no se repite en esta edición de texto.
- Evidencia: C:/Users/gerso/Documents/Codex/2026-09-19/files-pasted-by-the-user-project/outputs/castillo-narrativa-contextual-2026-10-10/.

## Presentación de la actividad — 2026-10-10

Retirada la firma «Práctica independiente · Dirigida por Gerson Castillo» de la apertura. El hero muestra ámbitos de trabajo, y los 17 años se atribuyen a Gerson en el bloque de dirección. La home conserva una síntesis de trayectoria; la formación completa queda en Sobre Castillo. Esta página presenta primero la actividad y el modelo de proyecto, seguidos por la dirección y la experiencia. La responsabilidad se expresa sin prometer ejecución individual de cada tarea ni presentar una plantilla propia. Se retiran estilos de la firma y la formación eliminadas de la home.

- Build Astro y 12 pruebas Node aprobados.
- 6 pruebas de navegador aprobadas a 390, 768 y 1440 px; cinco rutas sin overflow ni errores JavaScript, imágenes cargadas, navegación y formulario con respuestas simuladas.
- Axe WCAG 2 A/AA y 2.1 AA sin infracciones detectadas en las rutas y anchos comprobados.
- Capturas de escritorio y móvil revisadas. No se introduce JavaScript; Lighthouse no se repite en esta edición editorial.
- Evidencia: C:/Users/gerso/Documents/Codex/2026-09-19/files-pasted-by-the-user-project/outputs/castillo-presentacion-2026-10-10/.

## Voz editorial — 2026-10-10

Corregida la presentación personal de la práctica: Servicios y Metodología en navegación; titular nominal de modernización y automatización; alcance y entregables descritos desde el trabajo; experiencia factual en Sobre Castillo; agentes, Azhum y contacto con voz consistente. Se conserva la identidad visual, los enlaces y fragmentos existentes y la configuración del formulario.

- Build Astro correcto y 12 pruebas Node aprobadas.
- 6 pruebas de navegador aprobadas, incluida la interfaz del formulario con respuestas simuladas, sin enviar correos reales.
- Cinco rutas verificadas a 390, 768 y 1440 px: sin desbordamiento horizontal ni errores JavaScript; imágenes cargadas y Axe WCAG A/AA sin infracciones detectadas.
- Capturas de home, Sobre Castillo, agentes y contacto revisadas en escritorio y móvil. Imagen social regenerada y revisada.
- Lighthouse no se repite en esta edición de contenido: las métricas de la revisión comercial anterior no constituyen una nueva medición.
- Evidencia: C:/Users/gerso/Documents/Codex/2026-09-19/files-pasted-by-the-user-project/outputs/castillo-voz-editorial-2026-10-10/.

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
