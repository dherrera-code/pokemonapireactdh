
export const getFromLocalStorage = async () => {
    let pokemonNames = localStorage.getItem("FavoritesList")

    if(pokemonNames === null) return [];
    return JSON.parse(pokemonNames);
}

export const savePokemonToLocalStorage = async (pokemonName: string) => {
    let pokemonList = await getFromLocalStorage();

    if(!pokemonList.includes(pokemonName)){
        pokemonList.unshift(pokemonName)
    }
    localStorage.setItem("FavoritesList", JSON.stringify(pokemonList))
}

export const removePokemonFromLocalStorage = async (pokemonName: string) => {
    let pokemonList = await getFromLocalStorage();
    let pokemonNameIndex = pokemonList.indexof(pokemonName);

    pokemonList.splice(pokemonNameIndex, 1);
    localStorage.setItem("FavoritesList", JSON.stringify(pokemonList));
}