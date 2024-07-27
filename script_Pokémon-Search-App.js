const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonTypes = document.getElementById("types");
const pokemonHp = document.getElementById("hp");
const pokemonAttack = document.getElementById("attack");
const pokemonDefense = document.getElementById("defense");
const pokemonSpecialAttack = document.getElementById("special-attack");
const pokemonSpecialDefense = document.getElementById("special-defense");
const pokemonSpeed = document.getElementById("speed");
const imageContainer = document.getElementById("image-container");

const pokeAPI = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";

const search = () => {
    fetchData(pokeAPI, searchInput.value);
    pokemonTypes.innerHTML = "";
};

const fetchData = async (api, input) => {
    const target = `${api}${input.toLowerCase()}/`;
    try {
        const res = await fetch(target);
        const data = await res.json();
        display(data);
    } catch (err) {
        alert("Pokémon not found");
    }
}

const display = data => {
    const { name, id, weight, height, stats, sprites, types } = data;
    const respectiveStats = [[pokemonHp, "hp"], [pokemonAttack, "attack"], [pokemonDefense, "defense"], [pokemonSpecialAttack, "special-attack"], [pokemonSpecialDefense, "special-defense"], [pokemonSpeed, "speed"]];

    pokemonName.innerText = name;
    pokemonId.innerText = id;
    pokemonWeight.innerText = weight;
    pokemonHeight.innerText = height;
    respectiveStats.forEach(sets=>{
        const baseStat = stats.find(tmp => tmp.stat.name === sets[1]);
        sets[0].innerText = baseStat.base_stat;
    })

    const spriteAPI = sprites.front_default;
    imageContainer.innerHTML = `<img id="sprite" src="${spriteAPI}" />`;

    const allTypes = [...types];
    const nameOfTypes = []
    allTypes.forEach(el => nameOfTypes.push(el.type.name.toUpperCase()));
    nameOfTypes.forEach(el => pokemonTypes.innerHTML+=`<p>${el}</p>`)
}



searchBtn.addEventListener("click", search)