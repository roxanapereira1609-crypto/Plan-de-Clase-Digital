
function ObjetivosCard({ competencia, indicadorLogro }) {
  return (
    <section style={{
      backgroundColor: '#f0f9ff',
      border: '2px solid #7c3aed',
      borderRadius: '10px',
      padding: '20px',
      marginBottom: '20px'
    }}>
      <h2 style={{ color: '#6d28d9' }}>
        Objetivos de aprendizaje
      </h2>

      <h3 style={{ color: '#334155' }}>
        Competencia
      </h3>
      <p>{competencia}</p>

      <h3 style={{ color: '#334155' }}>
        Indicador de logro
      </h3>
      <p>{indicadorLogro}</p>
    </section>
  );
}

export default ObjetivosCard;
