export const endpoint = "https://api.web3forms.com/submit";

export async function sendContact(formData, fetcher = fetch) {
  if (!formData.get("access_key") || formData.get("botcheck")) {
    return {
      ok: false,
      message: "No se pudo enviar. Puedes contactarme por LinkedIn.",
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
          "El servicio ha alcanzado su límite de envíos. Prueba más tarde o contáctame por LinkedIn.",
      };
    }
    const result = await response.json();
    if (!response.ok || result.success !== true) {
      return {
        ok: false,
        message:
          "No se pudo enviar el mensaje. Conservamos tu texto para que puedas intentarlo de nuevo o contactarme por LinkedIn.",
      };
    }
    return {
      ok: true,
      message:
        "Mensaje enviado. Gracias por contarme tu proyecto; te responderé al correo que indicaste.",
    };
  } catch {
    return {
      ok: false,
      message:
        "No pudimos confirmar el envío. Tu texto sigue aquí. Puedes esperar unos minutos o contactarme por LinkedIn.",
    };
  } finally {
    clearTimeout(timeout);
  }
}
