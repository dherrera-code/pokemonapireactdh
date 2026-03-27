export type Pokemon = string | number

export const getPokemon = async (pokemon: Pokemon) => {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
        cache: "force-cache"
    });
    const data = await response.json();
    return data;
}

export const getPokeDataByUrl = async (url: string) => {
    const response = await fetch(url);
    try{
        const data = await response.json();
        return data;
    }
    catch{
        return null;
    }
}

export const getPokeEvolURL = async (pokemon :Pokemon) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`)
    const data = await response.json()
    return data.evolution_chain.url;
}