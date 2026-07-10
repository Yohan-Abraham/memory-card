import './App.css';
import Score from './components/score';
import Cards from './components/cards';

function App() {
  return (
    <>
      <header>
        <h1>PokéMemory</h1>
        <Score></Score>
      </header>
      <main>
        <Cards></Cards>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
