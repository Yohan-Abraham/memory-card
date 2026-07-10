async function fetchPokemonData() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function fetchPokemonImage(name) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const result = await response.json();
    return result.sprites.front_default;
  } catch (error) {
    console.log(error);
  }
}

function createPokemonObject(id, name, image) {
  return {
    id: id,
    name: name,
    image: image,
  };
}

export default async function organizeData() {
  const data = await fetchPokemonData();
  const pokemons = await Promise.all(
    data.results.map(async (element, index) => {
      const image = await fetchPokemonImage(element.name);

      return createPokemonObject(index, element.name, image);
    }),
  );
  console.log(pokemons); //remove line when done
  return pokemons;
}
