import './App.css';
import { useEffect } from 'react';
import Score from './components/score';
import organizeData from './api/fetch';

function App() {
  useEffect(() => {
    organizeData();
  }, []);
  return (
    <>
      <header>
        <h1>PokéMemory</h1>
        <Score></Score>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}

export default App;
