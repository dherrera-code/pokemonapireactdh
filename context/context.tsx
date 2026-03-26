"use client"
import { getFromLocalStorage } from "@/lib/localStorageFav";
import { Pokemon } from "@/lib/pokemonFetch";
import { createContext, ReactNode, useContext, useState } from "react";

export interface PokemonInfoContextType {
    pokemon: Pokemon;
    setPokemon: (pokemon : Pokemon) => void
}
interface FavoriteListContextType {
    favoritePokemonList: string[];
    setFavoritePokemonList: (favoritePokemonList: string[]) => void
}

const PokemonContext = createContext<PokemonInfoContextType | undefined>(undefined);
const FavoriteListContext = createContext<FavoriteListContextType | undefined>(undefined);

export function ContextProvider({ children } : {children: ReactNode}) {
    const [pokemon, setPokemon] = useState<Pokemon> ("bulbasaur")
    const [favoritePokemonList, setFavoritePokemonList] = useState<string[]>([])

    return (
        <FavoriteListContext.Provider value={{favoritePokemonList, setFavoritePokemonList}}>
        <PokemonContext.Provider value={{pokemon, setPokemon}}>
            {children}
        </PokemonContext.Provider>
        </FavoriteListContext.Provider>
    )
}

export function usePokemon() {
    const context = useContext(PokemonContext);

    if(context === undefined){
        throw new Error("pokemon use contexts not working ");
    }
    return context;
}
export function useFavoriteList() {
    const context = useContext(FavoriteListContext);
    
    if(context === undefined){
        throw new Error("pokemon use contexts not working ");
    }
    return context;
}