"use client";
import { useState, useEffect, useContext } from "react";
import { MyContext } from "../context/MyContext";

export default function prueba() {
  const [pokemonSprite, setPokemonSprite] = useState(null);
  const [tipoSprite, setTipoSprite] = useState(0);
  const [nombrePokemon, setNombrePokemon] = useState();
  const [sobre, setSobre] = useState([]);
  const { setColeccionPoke, coleccionPoke } = useContext(MyContext);
  const [stickers, setStickers] = useState(0);
  const [sobreComprado, setSobreComprado] = useState(false);

  useEffect(() => {
    if (nombrePokemon) {
      obtenerPokemonAleatorio();
    }
  }, [nombrePokemon]);

  const obtenerNombrePoke = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=905")
      .then((response) => response.json())
      .then((data) => {
        const pokemonNames = data.results.map((pokemon) => pokemon.name);
        setNombrePokemon(
          pokemonNames[Math.floor(Math.random() * pokemonNames.length)]
        );
      });
  };

  const obtenerPokemonAleatorio = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
      .then((response) => response.json())
      .then((pokemon) => {
        let spriteUrl = "";
        if (tipoSprite === "normal") {
          spriteUrl = pokemon.sprites.front_default;
        } else if (tipoSprite === "shiny") {
          spriteUrl = pokemon.sprites.front_shiny;
        }
        const pokemonInfo = {
          nombre: pokemon.name.toUpperCase(),
          tipos: pokemon.types.map((tipo) => tipo.type.name),
          sprite: spriteUrl,
        };
        setPokemonSprite(spriteUrl);
        setColeccionPoke([...coleccionPoke, pokemonInfo]);
        setSobre([...coleccionPoke, pokemonInfo]);
        //Aquí tenemos que agregar las imágenes del sobre
      });
  };

  const abrirSobre = () => {
    if ((tipoSprite === "normal") & (stickers > 0)) {
      obtenerNombrePoke("normal");
      setStickers(stickers - 1);
    } else if ((tipoSprite === "shiny") & (stickers > 0)) {
      obtenerNombrePoke("shiny");
      setStickers(stickers - 1);
    }
  };

  const comprarSobre = (valor) => {
    const normal = "normal";
    const shiny = "shiny";
    //Hacer una función que desde aquí ya sepa cuál tipo de sprite será.
    if (valor === normal) {
      setStickers(2);
      setSobreComprado(true);
      abrirSobre(normal);
      setTipoSprite(valor);
    } else if (valor === shiny) {
      setStickers(1);
      setSobreComprado(true);
      abrirSobre(shiny);
      setTipoSprite(valor);
    }
  };

  return (
    <div>
      {sobreComprado === false ? (
        <>
          <p>Compra un sobre.</p>
          <button onClick={() => comprarSobre("normal")}>
            {" "}
            Sobre de 2 stickers normales
          </button>
          <button onClick={() => comprarSobre("shiny")}>
            {" "}
            Sobre de 1 stickers shiny
          </button>
        </>
      ) : (
        <>
          <button onClick={() => abrirSobre(tipoSprite)}>
            Obtener un Pokémon aleatorio
          </button>
          <ul>
            {sobre.map((pokemon, index) => (
              <li key={index}>
                <img src={pokemon.sprite} alt={pokemon.nombre} />
                <p>{pokemon.nombre}</p>
              </li>
            ))}
          </ul>
 
        </>
      )}
    </div>
  );
}
