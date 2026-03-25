import React from 'react'
import FavoritesDrawer from './FavoritesDrawer'
import { Input } from './ui/input'

const TopHeaderComponent = () => {
  return (
    <div className='my-7'>
        <header className="flex justify-between h-10 lg:h-17">
        <FavoritesDrawer key={"left"}></FavoritesDrawer>
        <Input type='text' placeholder="Enter a Pokemon or Pokedex number!" className="bg-white min-w-[50%] sm:max-w-[70%] p-4 h-[55px] " required></Input>
        <div className="flex flex-row me-5">
          <img className="cursor-pointer w-8 sm:w-10 ms-1" src="/assets/shuffle-icon.svg" alt="Shuffle Pokemon" />
          <img className="cursor-pointer w-8 sm:w-10 ms-5 me-5" src="/assets/search-icon.svg" alt="Search Icon" />
        </div>
      </header>
    </div>
  )
}

export default TopHeaderComponent