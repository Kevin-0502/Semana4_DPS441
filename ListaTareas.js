import React, { useState } from 'react';

function ListaTareas() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Aprender React' },
    { id: 2, texto: 'Construir una aplicación' }
  ]);
  const [nuevoTexto, setNuevoTexto] = useState('');

  const agregarTarea = () => {
    if (nuevoTexto.trim() !== '') {
      setTareas([...tareas, { id: tareas.length() + 1, texto: nuevoTexto }]);
      setNuevoTexto('');
    }
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <ul>
        {tareas.map(tarea => (
          <li key={tarea.id}>{tarea.texto}</li>
        ))}
      </ul>
      <input
        type="text"
        value={nuevoTexto}
        onChange={e => setNuevoTexto(e.target.value())}
      />
      <button onClick={agregarTarea}>Agregar Tarea</button>
    </div>
  );
}

export default ListaTareas;
