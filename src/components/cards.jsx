import '../styles/card.css';
import { useEffect, useState } from 'react';
import organizeData from '../api/fetch';

function randomizePokemons(pokemons) {
  return [...pokemons].sort(() => Math.random() - 0.5);
}

export default function Cards() {
  const [pokemons, setPokemon] = useState([]);

  useEffect(() => {
    async function loadPokemon() {
      const data = await organizeData();
      setPokemon(data);
    }

    loadPokemon();
  }, []);

  function handleShuffle() {
    setPokemon(randomizePokemons(pokemons));
  }

  return (
    <section className="cards-container">
      {pokemons.map((pokemon) => {
        return (
          <button key={pokemon.id} className="card" onClick={handleShuffle}>
            <div className="img-container">
              <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <h3>{pokemon.name}</h3>
          </button>
        );
      })}
    </section>
  );
}
