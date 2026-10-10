export const endpoint = "https://api.web3forms.com/submit";

export async function sendContact(formData, fetcher = fetch) {
  if (!formData.get("access_key") || formData.get("botcheck")) {
    return {
      ok: false,
      message: "No se pudo enviar. Puedes contactar por LinkedIn.",
    };
  }
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetcher(endpoint, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
      signal: controller.signal,
      credentials: "omit",
    });
    if (response.status === 429) {
      return {
        ok: false,
        message:
          "El servicio ha alcanzado su límite de envíos. Prueba más tarde o contacta por LinkedIn.",
      };
    }
    const result = await response.json();
    if (!response.ok || result.success !== true) {
      return {
        ok: false,
        message:
          "No se pudo enviar el mensaje. Tu texto sigue en el formulario para que puedas intentarlo de nuevo o contactar por LinkedIn.",
      };
    }
    return {
      ok: true,
      message: "Mensaje enviado. Recibirás la respuesta en el correo indicado.",
    };
  } catch {
    return {
      ok: false,
      message:
        "No se ha podido confirmar el envío. Tu texto sigue aquí. Puedes esperar unos minutos o contactar por LinkedIn.",
    };
  } finally {
    clearTimeout(timeout);
  }
}
