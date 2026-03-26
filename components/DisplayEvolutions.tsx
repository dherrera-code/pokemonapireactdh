'use client'
import Image from 'next/image';

import { usePokemon } from '@/context/context'
import { getPokeDataByUrl, getPokeEvolURL, getPokemon } from '@/lib/pokemonFetch'
import React, { useEffect, useState } from 'react'
interface EvolutionData {
    name: string,
    src: string
}
const DisplayEvolutions = () => {

    const [firstEvolList, setFirstEvolList] = useState<EvolutionData | null>(null)
    const [boolSecondEvol, setBoolSecondEvol] = useState<boolean>(false)
    const [boolThirdEvol, setBoolThirdEvol] = useState<boolean>(false)

    const [secondEvolList, setSecondEvolList] = useState<EvolutionData[] | null>(null)
    const [thirdEvolList, setThirdEvolList] = useState<EvolutionData[] | null>(null)
    const { pokemon } = usePokemon();

    const displayEvolutionLine = async () => {

        const evolUrl = await getPokeEvolURL(pokemon)
        console.log(evolUrl)
        const evolData = await getPokeDataByUrl(evolUrl);
        console.log(evolData)
        const firstEvolData = await getPokemon(evolData.chain.species.name);

        setFirstEvolList({
            name: evolData.chain.species.name,
            src: firstEvolData.sprites.other["official-artwork"].front_default
        });
        
        (evolData.chain.evolves_to.length > 0) ? setBoolSecondEvol(true) : setBoolSecondEvol(false);

        // Logic for displaying second evol!
        let evolutionArr: EvolutionData[] = [];

        for (let i = 0; i < evolData.chain.evolves_to.length; i++) {
            const secondEvolData = await getPokemon(evolData.chain.evolves_to[i].species.name);

            let pkmon: EvolutionData = {
                name: evolData.chain.evolves_to[i].species.name,
                src: secondEvolData.sprites.other["official-artwork"].front_default
            };
            evolutionArr.push(pkmon) //insert pokemon object here       
        }
        console.log(evolutionArr)
        setSecondEvolList(evolutionArr);
        // If there are no evolutions beyond this point, this method will flag our evolutions false then return.
        if(evolData.chain.evolves_to.length === 0){
            setBoolThirdEvol(false);
            setBoolSecondEvol(false);
            return;
        }
        // Third evolution if exist!
        // (evolData.chain.evolves_to[0].evolves_to.length > 0) ? setBoolThirdEvol(true) : setBoolThirdEvol(false)
        if (evolData.chain.evolves_to[0].evolves_to.length > 0) setBoolThirdEvol(true)
        else {
            setBoolThirdEvol(false);
            return;
        }

        let thirdEvolArray: EvolutionData[] = [];
        for (let i = 0; i < evolData.chain.evolves_to[0].evolves_to.length; i++) {
            const thirdEvolData = await getPokemon(evolData.chain.evolves_to[0].evolves_to[i].species.name);

            let pkmon: EvolutionData = {
                name: evolData.chain.evolves_to[0].evolves_to[i].species.name,
                src: thirdEvolData.sprites.other["official-artwork"].front_default
            };
            thirdEvolArray.push(pkmon) //insert pokemon object here       
        }
        setThirdEvolList(thirdEvolArray)
    }
    useEffect(() => {
        displayEvolutionLine();
    }, [pokemon])
    
    return (
        <section className="lg:row-start-2 bg-[#FAFAFA]/95 border border-current p-3 justify-center min-w-86 sm:min-w-110 max-h-120 lg:min-h-120">
            <h2 className="text-center text-2xl">Evolution</h2>
            {/* Here we will map out our evolutions here */}
            {/* First evol here */}
            <div>
                <img className="h-25 mx-auto" src={firstEvolList?.src} alt={firstEvolList?.name} />
                <p className="text-center">{firstEvolList?.name}</p>
            </div>
            {/* Second Evol here */}
            <img className={boolSecondEvol ? "mx-auto" : "hidden"} src="/assets/DownArrow.svg" alt="Next evolution" />
            {boolSecondEvol ? (
                <div className='flex flex-wrap justify-evenly'>
                {secondEvolList?.map((pokemon, index) => (
                    <div key={index}>
                        <img className='w-25 h-25' src={pokemon.src} alt={pokemon.name} />
                        <p className='text-center'>{pokemon.name}</p>
                    </div>
                ))}
            </div>
            ) : ""}
            
            {/* Third evolution line here */}
            <img className={boolThirdEvol ? "mx-auto" : "hidden"} src="/assets/DownArrow.svg" alt="Next evolution" />
            {/* <Image src="/assets/DownArrow.svg" className='' width={25} height={25} alt='Arrow Evolution' priority /> */}
            {boolThirdEvol ? (
                <div className='flex flex-wrap justify-evenly'>
                {thirdEvolList?.map((pokemon, index) => (
                    <div key={index}>
                        <img className='w-25 h-25' src={pokemon.src} alt={pokemon.name} />
                        <p className='text-center'>{pokemon.name}</p>
                    </div>
                ))}
            </div>
            ) : "" }
            
        </section>
    )
}

export default DisplayEvolutions