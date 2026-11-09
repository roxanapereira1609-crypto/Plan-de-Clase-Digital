
import { useEffect, useState } from "react";

function ListaActividades() {
  const [actividades, setActividades] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/actividades")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudieron obtener las actividades");
        }
        return respuesta.json();
      })
      .then((datos) => {
        const registros = (datos.records || []).filter(
          (item) => item.fields?.Titulo
        );
        setActividades(registros);
      })
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <p>Cargando actividades...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section>
      <h2>Actividades desde NocoDB</h2>

      {actividades.map((item) => (
        <article key={item.id}>
          <h3>{item.fields.Titulo}</h3>
          <p>{item.fields["Descripción"]}</p>
          <p>Duración: {item.fields["Duración"]} minutos</p>
          <p>Estado: {item.fields.Estado}</p>
        </article>
      ))}
    </section>
  );
}

export default ListaActividades;
