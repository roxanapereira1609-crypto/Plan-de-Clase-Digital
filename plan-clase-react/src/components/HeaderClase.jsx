import { motion } from "framer-motion";
function HeaderClase({ tituloTema, nombreDocente, horario }) {
  return (
    <motion.header
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  style={{
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
    </motion.header>
  );
}

export default HeaderClase;
