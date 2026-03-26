'use client'
import { usePokemon } from '@/context/context'
import { getPokeDataByUrl, getPokemon } from '@/lib/pokemonFetch'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const DisplayMovesLocation = () => {

  const { pokemon } = usePokemon();
  const [movesList, setMovesList] = useState("")
  const [locationList, setLocationList] = useState("")

  const displayMovesAndLocation = async () => {
    const data = await getPokemon(pokemon)
    console.log(data)
    
    let movesString = data.moves[0].move.name;
    for (let i = 1; i < data.moves.length; i++) {
        movesString += ", " + data.moves[i].move.name;
    }
    setMovesList(movesString);
    const locationData = await getPokeDataByUrl(data.location_area_encounters)

    let locationString = "";
    for (let i = 0; i < locationData.length; i++) {
        locationString += locationData[i].location_area.name + ", " ;
    }
    if(locationString === "")
        locationString = "N/A";
    setLocationList(locationString)
  }

  useEffect(() => {
displayMovesAndLocation()

  } , [])
  return (
    <div className='grid gap-7'>
            <div className="bg-[#FAFAFA]/95 border border-current  p-3.5 justify-self-center md:justify-start min-w-100 sm:min-w-150 md:w-155.5 h-71">
            <h2 className="text-2xl pb-1">All Moves</h2>
            <p className="overflow-y-auto h-[185px]">
            {movesList}
            </p>

            </div>
            <div className="bg-[#FAFAFA]/95 border border-current p-3.5 justify-self-center md:justify-start min-w-100 sm:min-w-150 md:w-155.5 h-[168px] ">
                <h2 className="text-2xl pb-1">Locations: </h2>
                <p className="overflow-y-auto h-22.5">
                  {locationList}
                </p>
            </div>
          </div>
  )
}

export default DisplayMovesLocation