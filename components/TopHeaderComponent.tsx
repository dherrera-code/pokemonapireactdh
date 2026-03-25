import React from 'react'
import FavoritesDrawer from './FavoritesDrawer'
import { Input } from './ui/input'

const TopHeaderComponent = () => {
  return (
    <div>
        <header className="flex justify-around pt-6 h-10">
        <FavoritesDrawer key={"left"}></FavoritesDrawer>
        <Input placeholder="Enter a Pokemon or Pokedex number!" className="bg-white w-5xl h-[55px] "></Input>
        <div className="flex gap-5 me-5">
          <img className="cursor-pointer h-12.5" src="/assets/shuffle-icon.svg" alt="Shuffle Pokemon" />
          <img className="cursor-pointer h-12.5" src="/assets/search-icon.svg" alt="Search Icon" />
        </div>
      </header>
    </div>
  )
}

export default TopHeaderComponent