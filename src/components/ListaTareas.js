import React, { useState } from 'react';
import ItemTarea from './ItemTarea';


function ListaTareas() {

    const [tareas, setTareas] = useState([
        { 
            id: 1, 
            nombre: 'Aprender React',
            desc:'Instalar NodeJS, npm y Visual Studio code',
            encargado:'Juan'
        },
        { 
            id: 2, 
            nombre: 'Construir una aplicación',
            desc:'Crear por medio de consola un proyecto de React' ,
            encargado:'Luis'
        }
    ]);

    const [nuevoTexto, setNuevoTexto] = useState('');
    const [nuevadesc, setNuevadesc] = useState('');
    const [nuevoencargado, setNuevoencargado] = useState('');

    const agregarTarea = () => {
        if (nuevoTexto.trim() !== '') {
        setTareas([...tareas, { id: tareas.length + 1, nombre: nuevoTexto, desc:nuevadesc, encargado:nuevoencargado }]);
        setNuevoTexto('');
        setNuevadesc('');
        setNuevoencargado('');
        }
    };

    return (
        <div>
        <h1>Lista de Tareas</h1>
        <ul>
            {
            tareas.map(tarea => { 
            return(
                <ItemTarea key={tarea.id} tarea={tarea}/>
            )
                
            }
            )
            }
        </ul>
        <input
            type="nombre"
            value={nuevoTexto}
            onChange={e => setNuevoTexto(e.target.value)}
        />
        <input
            type="desc"
            value={nuevadesc}
            onChange={e => setNuevadesc(e.target.value)}
        />
        <input
            type="encargado"
            value={nuevoencargado}
            onChange={e => setNuevoencargado(e.target.value)}
        />
        <button onClick={agregarTarea}>Agregar Tarea</button>
        </div>
    );
}

export default ListaTareas;
