import { error } from "console";
import { createContext, ReactNode, useContext, useState } from "react";


export interface PokemonInfo {
    name: string
}
export interface PokemonInfoContextType {
    pokemon: PokemonInfo;
    setPokemon: (pokemon : PokemonInfo) => void
}

const PokemonContext = createContext<PokemonInfoContextType | undefined>(undefined);

export function ContextProvider({ children } : {children: ReactNode}) {
    const [pokemon, setPokemon] = useState<PokemonInfo> ({name :"bulbasaur"})

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