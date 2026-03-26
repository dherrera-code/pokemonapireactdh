'use client'
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
        console.log(evolData.chain.evolves_to.length > 0);
        (evolData.chain.evolves_to.length > 0) ? setBoolSecondEvol(true) : setBoolSecondEvol(false);

        //     for (let i = 0; i < evolData.chain.evolves_to.length; i++) {
        //     const pkmonDiv = document.createElement("div");
        //     const secondEvolImg = document.createElement("img")
        //     secondEvolImg.style = "width: 100px; height: 100px"
        //     secondEvolImg.className = "mx-auto"
        //     secondEvolImg.alt = evolData.chain.evolves_to[i].species.name

        //     let newEvolData = await getPokemon(evolData.chain.evolves_to[i].species.name)

        //     secondEvolImg.src = newEvolData.sprites.other["official-artwork"].front_default;
        //     const secondEvolName = document.createElement('p');
        //     secondEvolName.className = "text-center"
        //     secondEvolName.textContent = evolData.chain.evolves_to[i].species.name;
        //     pkmonDiv.appendChild(secondEvolImg);
        //     pkmonDiv.appendChild(secondEvolName);
        //     displaySecondEvol.appendChild(pkmonDiv);
        // }

    }
    useEffect(() => {
        displayEvolutionLine();
    }, [])
    return (
        <section className="lg:row-start-2 bg-[#FAFAFA]/95 border border-current p-3 justify-center min-w-80 sm:min-w-110 min-h-120">
            <h2 className="text-center text-2xl">Evolution</h2>
            {/* Here we will map out our evolutions here */}
            {/* First evol here */}
            <div>
                <img className="h-25 mx-auto" src={firstEvolList?.src} alt={firstEvolList?.name} />
                <p className="text-center">{firstEvolList?.name}</p>
            </div>
            {/* Second Evol here */}
            <img className={boolSecondEvol ? "mx-auto" : "hidden"} src="/assets/DownArrow.svg" alt="Next evolution" />
            
            
            <img className={boolThirdEvol ? "mx-auto" : "hidden"} src="/assets/DownArrow.svg" alt="Next evolution" />

            {/* <div className="flex flex-wrap justify-evenly"></div> */}
            {/* <div>
                <img className="h-25 mx-auto" src="assets/133Eevee.png" alt="" />
                <p className="text-center">Eevee</p>
            </div> */}
            {/* <div>
                <img className="h-25 mx-auto" src="assets/133Eevee.png" alt="" />
                <p className="text-center">Eevee</p>
            </div> */}

        </section>
    )
}

export default DisplayEvolutions