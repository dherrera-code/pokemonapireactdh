"use client"
import { Pokemon } from "@/lib/pokemonFetch";
import { createContext, ReactNode, useContext, useState } from "react";

export interface PokemonInfoContextType {
    pokemon: Pokemon;
    setPokemon: (pokemon : Pokemon) => void
}

const PokemonContext = createContext<PokemonInfoContextType | undefined>(undefined);

export function ContextProvider({ children } : {children: ReactNode}) {
    const [pokemon, setPokemon] = useState<Pokemon> ("bulbasaur")

    return (
        <PokemonContext.Provider value={{pokemon, setPokemon}}>
            {children}
        </PokemonContext.Provider>
    )
}

export function usePokemon() {
    const context = useContext(PokemonContext);

    if(context === undefined){
        throw new Error("pokemon use contexts not working ");
    }
    return context;
}