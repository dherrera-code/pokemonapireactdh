"use client"
import { useEffect, useState } from 'react'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer'
import { useFavoriteList, usePokemon } from '@/context/context'


const FavoritesDrawer = () => {

    const {favoritePokemonList} = useFavoriteList();
    const {setPokemon} = usePokemon();

    const handleSearchForFavorite = (name: string) => {
        setPokemon(name)
    }
    useEffect(() => {
        console.log("Drawer component is rendering!")
    } ,[])

    return (
        <div className=''>
            <Drawer direction='left'>
                <DrawerTrigger>
                    <svg className='cursor-pointer mx-5 sm:mx-10' width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12H21" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 6H21" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 18H21" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </DrawerTrigger>
                <DrawerContent className='bg-black/60'>
                    <DrawerHeader className='flex flex-row justify-between'>
                        <DrawerTitle className='text-white text-3xl'>Favorites</DrawerTitle>
                        <DrawerClose>
                            {/* <Button variant="outline">Close</Button> */}
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 6L18 18" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </DrawerClose>
                    </DrawerHeader>
                    <div className='overflow-y-auto'>

                        <DrawerDescription className='text-white text-2xl ps-5'></DrawerDescription>
                        {favoritePokemonList.map((name , idx) => (
                            <DrawerDescription key={idx} onClick={() => handleSearchForFavorite(name)} className='text-white text-2xl px-2 ps-5'>{name}</DrawerDescription>
                        ))}

                    </div>
                    <DrawerFooter>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default FavoritesDrawer