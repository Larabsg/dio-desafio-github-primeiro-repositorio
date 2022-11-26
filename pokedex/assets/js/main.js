const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
const content = document.getElementById("contentModal");
var modal = document.getElementById("myModal");
//var span = document.getElementsByClassName("close")[0];

let offset = 0;
const limit = 10;
const maxRecords = 151;



function loadPokemonDetail(id) {
    pokeapi.getPokemon(id).then((pokemon) => {
        const newHtml = `
        <div class="teste">
        <div class="card ${pokemon.type}">
    <div class="container">
    <span class="close" onClick=modal.style.display="none">&times;</span>
    <div class="up">
    <h4 class="pokemonName"><b>${pokemon.name}</b></h4>
    <ol class="typesDetail">
              ${pokemon.types
                  .map((type) => `<li class="typeDetail ${type}">${type}</li>`)
                  .join("")}
            </ol>
            </div>
            </div>
            </div>
            <div class="down">
            <img class="pokemonPhoto" src="${pokemon.photo}" alt="${pokemon.name}">
                <p>Height <span class="text">${pokemon.height}</span></p>
                <p>Height <span class="text">${pokemon.weight}</span></p>
                <p>Abilities <span class="text">${pokemon.abilities}</span></p>
                </div>
        </div> 
    `;
        content.innerHTML = newHtml;

        return modal.style.display = "block"
    });
}

function loadPokemonItems(offset, limit) {
    pokeapi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons
            .map(
                (pokemon) => `
    <li id="${pokemon.number}" class="pokemon ${pokemon.type}" onClick="loadPokemonDetail(this.id)">
          <span class="number">${pokemon.number}</span>
          <span class="name">${pokemon.name}</span>

          <div class="detail">
            <ol class="types">
              ${pokemon.types
                  .map((type) => `<li class="type ${type}">${type}</li>`)
                  .join("")}
            </ol>
            <img
              src="${pokemon.photo}"
              alt="${pokemon.name}"
            />
          </div>
        </li>
    `
            )
            .join("");
        pokemonList.innerHTML += newHtml;
    });
}



loadPokemonItems(offset, limit);

loadMoreButton.addEventListener("click", () => {
    offset += limit;

    const qtRecordNextPage = offset + limit;

    if (qtRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItems(offset, newLimit);

        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonItems(offset, limit);
    }
});
