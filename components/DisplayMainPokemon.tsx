"use client"

import React from 'react'

const DisplayMainPokemon = () => {


    return (
        <div className="bg-[#FAFAFA]/95 border border-current p-3 justify-center min-w-50 sm:w-110">
            <div className="flex">
                <h1 className="pe-4 text-[40px]">Eevee</h1>
                {/* <img className="fill-yellow-300" src="/assets/star-icon.svg" alt="Toggle Favorite Pokemon" /> */}
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <img className="h-[60px] ms-auto" src="/assets/volume2-icon.svg" alt="Play Pokemon Cry" />
            </div>
            {/* Display Pokemon and Shiny */}
            <div className="grid grid-cols-2 mb-9">
                <img className="w-40" src="/assets/133Eevee.png" alt="Pokemon Called" />
                <img className="w-40" src="/assets/133Shiny.png" alt="Shiny Pokemon Called" />
            </div>

            <div className="flex gap-2.5 w-full h-auto">
                {/* Here we will map out our evolution images Here! */}
                <img className='w-44 h-full' src="/assets/normalType.png" alt="First pokemon's typing" />
                <img className='w-44 h-full' src="/assets/normalType.png" alt="Second typing"></img>
            </div>
        </div>
    )
}

export default DisplayMainPokemon