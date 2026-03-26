"use client"

import { usePokemon } from '@/context/context'
import { getFromLocalStorage, removePokemonFromLocalStorage, savePokemonToLocalStorage } from '@/lib/localStorageFav'
import { getPokeDataByUrl, getPokemon, Pokemon } from '@/lib/pokemonFetch'
import React, { useEffect, useRef, useState } from 'react'

interface ImageData {
    src: string,
    alt: string
}

const DisplayMainPokemon = () => {

    // Create function to toggle pokemon to local storage (Key: "Favorite")

    const [currentPokemon, setCurrentPokemon] = useState("")
    const [pokemonImage, setPokemonImage] = useState<string | undefined>(undefined);
    const [pokemonShiny, setPokemonShiny] = useState<string | undefined>(undefined)
    const [pokemonCry, setPokemonCry] = useState<string | undefined>(undefined)
    

    const audioRef = useRef<HTMLAudioElement | null>(null);

    const [isHaveSecondType, setIsHaveSecondType] = useState<boolean>(false)
    const [isCurrentFavorite, setIsCurrentFavorite] = useState(false)
    const [firstType, setFirstType] = useState<ImageData | null>(null)
    const [secondType, setSecondType] = useState<ImageData | null>(null)

    const { pokemon, setPokemon } = usePokemon();

    const getPokemonDetail = async (name: Pokemon) => {
        const data = await getPokemon(name);
        console.log(data);
        setCurrentPokemon(data.name);
        setPokemon(data.name);
        setPokemonImage(data.sprites.other["official-artwork"].front_default);
        setPokemonShiny(data.sprites.other["official-artwork"].front_shiny)
        setPokemonCry(data.cries.latest);
        console.log(data.types.length);

        (data.types.length > 1) ? setIsHaveSecondType(true) : setIsHaveSecondType(false);

        const elementData = await getPokeDataByUrl(data.types[0].type.url)
        setFirstType({src : elementData.sprites["generation-ix"]["scarlet-violet"]["name_icon"],
             alt: elementData.name} );
        if(data.types.length > 1){
            const element2 = await getPokeDataByUrl(data.types[1].type.url)
            setSecondType({src: element2.sprites["generation-ix"]["scarlet-violet"]["name_icon"], alt: element2.name})
        }
        checkIsFav(data.name);
    }  
    
    const handleCry = () => {
        // console.log(audioRef.current)
        audioRef.current?.play()
    }
    const checkIsFav = async (pokemonCurrent: string) => {
        const favoriteList = await getFromLocalStorage();
        console.log(favoriteList);
        for(let i = 0; i < favoriteList.length; i++){
            if(pokemonCurrent === favoriteList[i]){
                setIsCurrentFavorite(true);
                return;
            }
        }
        setIsCurrentFavorite(false)
    }

    const handleFavoriteToggle = async () => {
        console.log("HandleFav function is envoked!")
        const favoriteList = await getFromLocalStorage();
        console.log(favoriteList);
        for(let i = 0; i < favoriteList.length; i++){
            if(pokemon === favoriteList[i]){
                // if pokemon is in favorites list, 
                await removePokemonFromLocalStorage(currentPokemon)
                setIsCurrentFavorite(false);
                // 
                return;
            }
        }
        // lets add to favorites and change bool to true
        await savePokemonToLocalStorage(currentPokemon)
        setIsCurrentFavorite(true);

    }

    useEffect(() => {
        getPokemonDetail(pokemon) // On load, we will load in our main pokemon!

    } , [pokemon] )

    return (
        <div className="bg-[#FAFAFA]/95 border border-current p-3 justify-center min-w-50 sm:w-110">
            <div className="flex">
                <h1 className="pe-4 text-[40px]">{pokemon}</h1>

                <svg className='cursor-pointer' onClick={handleFavoriteToggle} width="60" height="60" viewBox="0 0 24 24" fill={isCurrentFavorite ? "yellow" : "none"} xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="square" strokeLinejoin="round" />
                </svg>

                <img onClick={handleCry} className="h-[60px] ms-auto" src="/assets/volume2-icon.svg" alt="Play Pokemon Cry" />
                <audio ref={audioRef} src={pokemonCry} />
            </div>
            {/* Display Pokemon and Shiny */}
            <div className="grid grid-cols-2 mb-9">
                <img className="w-40" src={pokemonImage} alt="Pokemon Called" />
                <img className="w-40" src={pokemonShiny} alt="Shiny Pokemon Called" />
            </div>
            {/* Display pokemon's element typings */}
            <div className="flex gap-2.5 w-full h-auto">
                <img className='w-44 h-full' src={firstType?.src} alt={secondType?.alt} />
                {isHaveSecondType ? (<img className='w-44 h-full' src={secondType?.src} alt={secondType?.alt}></img>) : ""}
                
            </div>
        </div>
    )
}

export default DisplayMainPokemon