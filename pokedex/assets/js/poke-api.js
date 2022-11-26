const pokeapi = {};

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name
    
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    
    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
    pokemon.abilities = pokeDetail.abilities.map((abilitySlot) => abilitySlot.ability.name) 
    pokemon.height = pokeDetail.height
    pokemon.weight = pokeDetail.weight

    return pokemon
}

pokeapi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
          .then((response) => response.json())
          .then(convertPokeApiDetailToPokemon)
}

pokeapi.getPokemons = (offset = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeapi.getPokemonDetail))
    .then((detailsRequests) => Promise.all(detailsRequests))
    .then((pokemonDetails) => pokemonDetails)
    .catch((error) => console.error(error))
}

pokeapi.getPokemon = (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`

  return fetch(url)
  .then((response) => response.json())
  .then(convertPokeApiDetailToPokemon)
}

Promise.all({

}).then((results) => {
  console.log(results)
})
