
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3001;

app.get("/api/actividades", async (req, res) => {
  try {
    const response = await fetch(process.env.NOCODB_URL, {
      method: "GET",
      headers: {
        "xc-token": process.env.NOCODB_TOKEN
      }
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error al consultar NocoDB:", error.message);
    res.status(500).json({
      error: "No se pudieron cargar las actividades"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
