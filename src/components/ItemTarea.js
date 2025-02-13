import React from 'react'
import { Accordion } from 'reactstrap'

function ItemTarea(props) {
    return (
        
            <div>
                <h4>{props.tarea.nombre}<input type="checkbox"/></h4>
                <p>Descripción: {props.tarea.desc}</p>
                <p>Encargado: {props.tarea.encargado} </p>
            </div> 
        
            
        
    )
}

export default ItemTarea
