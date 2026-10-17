
import React from 'react';
import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ActividadItem from './components/ActividadItem';

function App() {
  return (
    <div style={{
      maxWidth: '700px',
      margin: '20px auto',
      padding: '20px',
      fontFamily: 'Segoe UI, sans-serif'
    }}>

      <HeaderClase
        tituloTema="Componentes y Props en React"
        nombreDocente="Roxana Pereira"
        horario="Sesión de 60 minutos"
      />

      <ObjetivosCard
        competencia="Desarrolla interfaces web utilizando componentes reutilizables en React."
        indicadorLogro="Identifica componentes, utiliza props y comprende el manejo de estados."
      />

      <h2 style={{ color: '#0f4c81' }}>
        Secuencia Didáctica - Plan de Clase
      </h2>

      <ActividadItem
        titulo="Trivia Rápida Interactiva"
        tiempo="5 minutos"
        tipo="Diagnóstica"
      />

      <ActividadItem
        titulo="Taller Guiado de Componentes"
        tiempo="25 minutos"
        tipo="Construcción"
      />

      <ActividadItem
        titulo="Pruebas de Estado con useState"
        tiempo="25 minutos"
        tipo="Aplicación"
      />

    </div>
  );
}

export default App;
