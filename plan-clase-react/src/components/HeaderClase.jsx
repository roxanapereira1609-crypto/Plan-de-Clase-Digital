
function HeaderClase({ tituloTema, nombreDocente, horario }) {
  return (
    <header style={{
      backgroundColor: '#7c3aed',
      color: 'white',
      padding: '25px',
      borderRadius: '10px',
      textAlign: 'center',
      marginBottom: '20px'
    }}>
      <h1 style={{
        color: 'white',
        fontSize: '2rem',
        lineHeight: '1.2',
        margin: '0 0 15px 0'
      }}>
        {tituloTema}
      </h1>

      <h3>Docente: {nombreDocente}</h3>
      <p>Horario: {horario}</p>
    </header>
  );
}

export default HeaderClase;
