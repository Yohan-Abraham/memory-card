import '../styles/card.css';

export default function Cards({ pokemons, handleShuffle }) {
  return (
    <section className="cards-container">
      {pokemons.map((pokemon) => {
        return (
          <button
            key={pokemon.id}
            className="card"
            onClick={() => handleShuffle(pokemon.name)}
          >
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
