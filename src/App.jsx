import './App.css';
import Score from './components/score';
import Cards from './components/cards';
import { useEffect, useState } from 'react';
import organizeData from './api/fetch';

function randomizePokemons(pokemons) {
  return [...pokemons].sort(() => Math.random() - 0.5);
}

function containsDuplicates(pokemons) {
  let hashmap = new Map();

  for (let i = 0; i < pokemons.length; i++) {
    if (hashmap.has(pokemons[i])) {
      return true;
    }
    hashmap.set(pokemons[i], pokemons[i]);
  }
  return false;
}

function App() {
  const [currentPokemons, setCurrentPokemons] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [pokemons, setPokemon] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      const data = await organizeData();
      setPokemon(data);
    }

    loadPokemon();
  }, []);

  function handleShuffle(name) {
    setPokemon(randomizePokemons(pokemons));
    setCurrentPokemons([...currentPokemons, name]);
    if (containsDuplicates(currentPokemons)) {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      setCurrentScore(0);
      setCurrentPokemons([]);
    } else {
      setCurrentScore(currentScore + 1);
    }
  }

  return (
    <>
      <header>
        <h1>PokéMemory</h1>
        <Score score={currentScore} bestScore={bestScore}></Score>
      </header>
      <main>
        <Cards pokemons={pokemons} handleShuffle={handleShuffle}></Cards>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
