import { useEffect, useState } from 'react';
import '../styles/card.css';
import organizeData from '../api/fetch';
import Card from './card';

export default function Cards() {
  const [pokemons, setPokemon] = useState([]);

  useEffect(() => {
    async function loadPokemon() {
      const data = await organizeData();
      setPokemon(data);
    }

    loadPokemon();
  }, []);

  return (
    <section className="cards-container">
      {pokemons.map((pokemon) => {
        return <Card image={pokemon.image} name={pokemon.name}></Card>;
      })}
    </section>
  );
}
