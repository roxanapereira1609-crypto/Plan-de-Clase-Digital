
import React, { useState } from 'react';
import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ActividadItem from './components/ActividadItem';

function App() {
  const [actividadesCompletadas, setActividadesCompletadas] = useState(0);
  const totalActividades = 3;
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
<div style={{
  backgroundColor: '#f3efff',
  padding: '18px',
  borderRadius: '12px',
  marginTop: '20px',
  marginBottom: '20px'
}}>
  <h3 style={{ color: '#6a35c2', marginTop: 0 }}>
    Mi progreso de aprendizaje
  </h3>

 <p>
  <strong>
    {Math.round((actividadesCompletadas / totalActividades) * 100)}% de progreso
  </strong>
</p>

  <div style={{
    backgroundColor: '#ddd6fe',
    borderRadius: '20px',
    height: '18px',
    overflow: 'hidden'
  }}>
    <div style={{
      width: `${(actividadesCompletadas / totalActividades) * 100}%`,
      backgroundColor: '#22a06b',
      height: '100%',
      borderRadius: '20px',
      transition: 'width 0.4s ease'
    }} />
  </div>
</div>

      <h2 style={{ color: '#0f4c81' }}>
        Secuencia Didáctica - Plan de Clase
      </h2>

      <ActividadItem
  titulo="Trivia Rápida Interactiva"
  tiempo="5 minutos"
  tipo="Diagnóstica"
  onCambioEstado={(completada) =>
    setActividadesCompletadas((anterior) =>
      anterior + (completada ? 1 : -1)
    )
  }
/>

      <ActividadItem
        titulo="Taller Guiado de Componentes"
        tiempo="25 minutos"
        tipo="Construcción"
        onCambioEstado={(completada) =>
    setActividadesCompletadas((anterior) =>
      anterior + (completada ? 1 : -1)
     )
  }
/>

      <ActividadItem
        titulo="Pruebas de Estado con useState"
        tiempo="25 minutos"
        tipo="Aplicación"
  onCambioEstado={(completada) =>
    setActividadesCompletadas((anterior) =>
      anterior + (completada ? 1 : -1)
     )
  }
/>

    </div>
  );
}

export default App;
