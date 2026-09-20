# Arquitectura actual y decisión de migración

Auditoría: 2026-09-19. Rama local: `redesign/castillo-transformacion`.

## Estado observado
- Blazor WebAssembly, .NET 7; paquetes WebAssembly/DevServer 7.0.10 y Localization 9.0.8. Bootstrap 5.2.3 incorporado al repositorio. Sass y configuración de compilación local.
- Proyecto: `GersonCastillo_Pro/Client`. Arranque en navegador, localización es-ES/en-US con recursos RESX y localStorage. HttpClient registrado; no se encontró backend de contacto.
- Rutas: `/` y `/consolidacion`. La segunda publica un ejercicio académico, una presentación descargable y tres vistas de Power BI.
- Azure Static Web Apps `ProfessionalWebsite`, grupo `GersonCastilloProfesional_group`, suscripción personal terminada en `4fc4`. Dominios confirmados por Azure: gersoncastillo.dev y www.gersoncastillo.dev. Repositorio Personal_Website, rama master.
- Seis workflows Azure históricos en `.github/workflows`. Todos escuchan master y PR hacia master. El correspondiente a agreeable-cliff coincide con el hostname actual. Los otros destinos no se han validado. No abrir PR ni hacer push durante la fase local.
- Workflow actual: app_location GersonCastillo_Pro/Client, api_location Api (directorio no encontrado), output_location wwwroot. Compilación .NET delegada al servicio de build de Azure.
- Secretos esperados: GITHUB_TOKEN y tokens de despliegue referenciados por nombre en workflows. No se han leído valores. La aplicación no contiene una necesidad identificada de variables de entorno de servidor.
- Contacto: enlaces mailto a gerson.profesional@outlook.com, LinkedIn y Instagram. No existe envío de formulario.
- SEO: título inicial genérico; descripción y título localizados inyectados por JavaScript. Documento lang=en aunque el idioma predeterminado es español. No se encontró sitemap/canonical/datos estructurados ni instrumentación propia de analytics. Existen scripts externos de LinkedIn, Google Fonts y Power BI.
- Assets: fotografías personales, fondos, iconos tecnológicos, recursos educativos y presentación. Marca anterior: negro #000000, rojo #BF0413 y naranja #F27405 en bootstrap.custom.scss. El logo Castillo de tres barras y sus colores originales NO se encontraron. No se reconstruirá ni se confundirá esta paleta anterior con la nueva marca.

## Decisión documentada antes de implementar
Crear `website/` con Astro estático. HTML generado en build, CSS propio y JavaScript mínimo para navegación móvil. Evitar runtime .NET en el navegador para una web cuyo contenido es principalmente editorial. Conservar el proyecto anterior durante la revisión y el historial Git para reversión.

Impacto: migrar contenido y rutas, no trasladar automáticamente todo el CV ni logos de empresas. Mantener `/consolidacion/` y sus recursos como ejercicio, no como caso de cliente. Separar datos de contenido para futura traducción; no anunciar inglés antes de traducirlo.

Azure: build Node 24 con npm ci y npm run build en website; publicar website/dist al mismo recurso Static Web Apps tras aprobación. No requiere modificar DNS. La configuración estática reemplazará el fallback SPA por páginas reales, 404 y normalización de URLs. Antes de publicar, consolidar workflows antiguos y comprobar secretos, preview, cabeceras y reversión. No se modifica CI/CD en esta fase.

Riesgos abiertos: marca original pendiente, validar correo de contacto heredado, revisar enlaces externos y contenido de experiencia con el propietario, comprobar comportamiento real de Azure en staging. No afirmar resultados de rendimiento antes de medir.

Referencias: https://docs.astro.build/en/reference/configuration-reference/ y https://learn.microsoft.com/en-us/azure/static-web-apps/configuration (consultadas 2026-09-19).
