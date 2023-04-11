'use client'
import { useContext } from "react"
import { MyContext } from "../context/MyContext"


export default function PruebaDos () {
  const { coleccionPoke } = useContext(MyContext);




  return (

    <div>
      <h2>Lista de Pokémon capturados:</h2>
      <ul>
        {coleccionPoke.map(pokemon => (
          <li key={pokemon.nombre}>
            <p>Nombre: {pokemon.nombre}</p>
            <img src={pokemon.sprite} alt={`Sprite de ${pokemon.name}`} />
          </li>
        ))}
      </ul>
    </div>
  )
}
