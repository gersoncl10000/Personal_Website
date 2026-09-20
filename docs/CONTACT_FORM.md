# Contacto: LinkedIn y Web3Forms

LinkedIn sigue como canal principal. El formulario ofrece nombre, correo, empresa opcional y mensaje, con etiquetas, validación nativa, estados accesibles y protección honeypot. El correo destinatario no aparece en HTML ni JavaScript.

## Configuración

1. En la cuenta existente de Web3Forms, crear un formulario propio llamado Castillo y comprobar que entrega al buzón personal solicitado por el propietario. Una clave independiente permite separar ajustes e historial de Azhum; no presupone una cuota gratuita independiente.
2. Copiar `website/.env.example` a `website/.env.local`, establecer `PUBLIC_WEB3FORMS_ACCESS_KEY` y reiniciar Astro. Es una clave pública de encaminamiento, no una credencial secreta. Nunca colocar el correo destinatario en esa variable.
3. En un despliegue futuro, la variable debe estar disponible durante `npm run build`. Astro la incorpora al HTML estático. No se han modificado workflows ni ajustes de Azure.
4. Verificar una entrega real y su Reply-To con el propietario antes de publicar. Los tests locales simulan respuestas; no envían correos reales.

Sin configuración se presenta el formulario deshabilitado con alternativa LinkedIn. No se simula éxito. El formulario funciona con POST nativo sin JavaScript cuando tiene clave; Web3Forms mostrará su página de respuesta. Con JavaScript mantiene al visitante en la web, bloquea duplicados durante el envío, limita la espera a 15 segundos y conserva el texto ante errores. No hay reintentos automáticos ni almacenamiento local de datos.

## Separación de Azhum

El código de Azhum combina Web3Forms con su función Azure de captación. Castillo envía exclusivamente a `https://api.web3forms.com/submit`, con asunto `[Castillo] Nueva consulta · gersoncastillo.dev`. No utiliza la función, colas ni configuración de Azhum.

Castillo utiliza la clave propia aportada por el propietario el 20/09/2026, configurada en `website/.env.local` (ignorado por Git). La clave y ajustes de Azhum permanecen intactos. Para reforzar protección más adelante, añadir hCaptcha y exigirlo en el formulario independiente de Castillo de manera coordinada.

## Servicio y límites

La página oficial de precios consultada el 19/09/2026 anuncia formularios y dominios ilimitados, 250 envíos mensuales y un destinatario por formulario en Free. No se ha verificado el plan ni consumo de la cuenta. No se han contratado servicios ni ampliaciones.

El honeypot y los filtros del proveedor reducen spam, no lo eliminan. El proveedor recibe y puede conservar las consultas según su política; el formulario enlaza esa política y explica la finalidad de respuesta. No se promete ausencia de almacenamiento, residencia europea ni protección total.

Fuentes: https://web3forms.com/pricing · https://docs.web3forms.com/getting-started/api-reference · https://web3forms.com/privacy

Activado localmente el 20/09/2026. Tras corregir el propietario el destinatario en Web3Forms, se envió desde el navegador una segunda prueba, `CASTILLO-20260920-02`. La API respondió con éxito, la interfaz confirmó el envío, vació los campos y reactivó el botón. El propietario aportó una captura del correo recibido con esa referencia: recepción real confirmada. La captura no muestra las cabeceras Reply-To; ese detalle no se ha comprobado. La clave también está configurada como secreto de GitHub para incorporarla al build de producción.
