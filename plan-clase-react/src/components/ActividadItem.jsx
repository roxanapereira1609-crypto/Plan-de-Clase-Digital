
import React, { useState } from 'react';

function ActividadItem({ titulo, tiempo, tipo, onCambioEstado }) {
  const [completada, setCompletada] = useState(false);
  const [mostrarBienvenida, setMostrarBienvenida] = useState(false);

const cambiarEstado = () => {
  const nuevoEstado = !completada;
  setCompletada(nuevoEstado);

  if (onCambioEstado) {
    onCambioEstado(nuevoEstado);
  }
};
  return (
    <div style={{
      border: '1px solid #cbd5e1',
      padding: '15px',
      borderRadius: '8px',
      marginBottom: '10px',
      background: completada ? '#dcfce7' : '#f8fafc'
    }}>
      <span style={{
        background: '#0ea5e9',
        color: 'white',
        padding: '2px 8px',
        borderRadius: '4px',
        fontSize: '0.8em'
      }}>
        {tipo}
      </span>

      <h4 style={{
        margin: '8px 0 4px 0',
        color: '#0f172a'
      }}>
        {titulo}
      </h4>

      <p style={{
        margin: 0,
        fontSize: '0.85em',
        color: '#64748b'
      }}>
        ⏱️ Duración: {tiempo}
      </p>

      <button
        onClick={cambiarEstado}
        style={{
          marginTop: '12px',
          padding: '8px 12px',
          backgroundColor: completada ? '#16a34a' : '#7c3aed',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        {completada ? '✓ Completada' : 'Marcar como completada'}
      </button>
      <button
  onClick={() => setMostrarBienvenida(!mostrarBienvenida)}
  style={{
    marginTop: '12px',
    marginLeft: '10px',
    padding: '8px 12px',
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }}
>
  {mostrarBienvenida ? 'Cerrar actividad' : 'Entrar a la actividad'}
</button>
{mostrarBienvenida && (
  <div style={{
    marginTop: '15px',
    padding: '20px',
    backgroundColor: '#ede9fe',
    borderRadius: '10px',
    textAlign: 'center',
    border: '1px solid #c4b5fd'
  }}>
    <h3 style={{ color: '#6a35c2' }}>
      ¡Bienvenido a {titulo}!
    </h3>

    <p style={{ color: '#475569' }}>
      Este espacio está preparado para que próximamente
      descubras nuevas experiencias de aprendizaje.
    </p>
  </div>
)}
    </div>
  );
}

export default ActividadItem;
