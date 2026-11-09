
export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({
      error: "Método no permitido"
    });
  }

  const url = process.env.NOCODB_URL;
  const token = process.env.NOCODB_TOKEN;

  if (!url || !token) {
    return res.status(500).json({
      error: "Configuración del servidor incompleta"
    });
  }

  try {
    const respuesta = await fetch(url, {
      method: "GET",
      headers: {
        "xc-token": token
      }
    });

    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    const datos = await respuesta.json();

    return res.status(200).json(datos);
  } catch (error) {
    console.error("Error al consultar NocoDB:", error.message);

    return res.status(500).json({
      error: "No se pudieron cargar las actividades"
    });
  }
}
