'use client';
import { useState } from "react";

export default function AgregarTareas() {


  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [dificultad, setDificultad] = useState(1);
//   const experienciaTotal = 

  const agregarTarea = () => {
    setTareas([...tareas, { tarea: nuevaTarea, dificultad: dificultad }]);
    setNuevaTarea("");
    setDificultad(1);
  };

  
  return (
    <div>
      <form>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Ingresa una tarea."
        />
        <select value={dificultad} onChange={(e) => setDificultad(e.target.value)}>
          <option value="1">Fácil</option>
          <option value="2">Intermedia</option>
          <option value="3">Difícil</option>
        </select>
        <button type="button" onClick={agregarTarea}>
          Guardar Tarea
        </button>
      </form>
      
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            Tarea: {tarea.tarea} &nbsp;
            Valor: {tarea.dificultad}
          </li>
        ))}
      </ul>
    </div>
  );
}





