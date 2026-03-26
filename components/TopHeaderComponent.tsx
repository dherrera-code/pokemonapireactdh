"use client"
import { KeyboardEvent, useState } from 'react';
import FavoritesDrawer from './FavoritesDrawer'
import { Input } from './ui/input'
import { usePokemon } from '@/context/context';
import { getPokemon } from '@/lib/pokemonFetch';

const TopHeaderComponent = () => {
  const [pokemonInput, setPokemonInput] = useState("");
  const { setPokemon } = usePokemon(); 

const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
  if (e.key === "Enter") {
    e.preventDefault();
    console.log(pokemonInput)
    handleSubmit();
  }
}

const handleSubmit = async () => {
  try{
    const newData = await getPokemon(pokemonInput)
    console.log(newData);
    setPokemon(pokemonInput)
    
  }
  catch{
    setPokemonInput("")
    alert("Input Invalid");
  }
}

  return (
    <div className='my-7'>
      <header className="flex justify-between h-10 lg:h-17">
        <FavoritesDrawer key={"left"}></FavoritesDrawer>
        <Input value={pokemonInput} onKeyDown={(event) => handleKeyDown(event)} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPokemonInput(e.target.value)} type='text' placeholder="Enter a Pokemon or Pokedex number!" className="bg-white min-w-[50%] sm:max-w-[70%] p-4 h-[55px] " required /> 
        <div className="flex flex-row me-5">
          <img className="cursor-pointer w-8 sm:w-10 ms-1" src="/assets/shuffle-icon.svg" alt="Shuffle Pokemon" />
          <img className="cursor-pointer w-8 sm:w-10 ms-5 me-5" src="/assets/search-icon.svg" alt="Search Icon" />
        </div>
      </header>
    </div>
  )
}
export default TopHeaderComponent