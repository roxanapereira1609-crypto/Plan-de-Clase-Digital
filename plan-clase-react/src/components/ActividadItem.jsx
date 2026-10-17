
import React, { useState } from 'react';

function ActividadItem({ titulo, tiempo, tipo }) {
  const [completada, setCompletada] = useState(false);

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
        onClick={() => setCompletada(!completada)}
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
    </div>
  );
}

export default ActividadItem;
