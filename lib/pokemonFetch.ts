export type Pokemon = string | number

export const getPokemon = async (pokemon: Pokemon) => {
    console.log( await `https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await response.json();
    console.log( await data);
    return data;
}

export const getPokeDataByUrl = async (url: string) => {
    const response = await fetch(url);
    try{
        const data = await response.json();
        return data;
    }
    catch{
        console.log("Error: Invalid URL Fetch")
        return null;
    }
}

export const getPokeEvolURL = async (pokemon :Pokemon) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`)
    const data = await response.json()
    return data.evolution_chain.url;
}