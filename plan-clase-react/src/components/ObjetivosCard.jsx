import { motion } from "framer-motion";
function ObjetivosCard({ competencia, indicadorLogro }) {
  return (
    <motion.section
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  style={{
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
    </motion.section>
  );
}

export default ObjetivosCard;
