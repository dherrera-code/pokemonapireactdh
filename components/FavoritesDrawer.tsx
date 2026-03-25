"use client"
import React from 'react'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer'
import { Button } from './ui/button'

const FavoritesDrawer = () => {
    return (
        <div className=''>
            <Drawer direction='left'>
                <DrawerTrigger>
                    {/* <img className='h-[60px] cursor-pointer mx-5 sm:mx-10  ' src="/assets/menu-icon.svg" alt="Toggle Favorites menu" /> */}
                    <svg className='cursor-pointer mx-5 sm:mx-10' width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12H21" stroke="#FFFFFF" strokeWidth="3" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3 6H21" stroke="#FFFFFF" strokeWidth="3" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3 18H21" stroke="#FFFFFF" strokeWidth="3" stroke-linecap="round" stroke-linejoin="round" />
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
                    <div className='overflow-y-auto '>

                        <DrawerDescription className='text-white text-2xl ps-5 py-1.5'>Pokemon</DrawerDescription>
                        <h1 className='text-white text-2xl ps-5 py-1.5'>Eevee</h1>
                        <h1 className='text-white text-2xl ps-5 py-1.5'>Pokemon</h1>

                        <h1 className='text-white text-2xl ps-5 py-1.5'>Pokemon</h1>

                        <h1 className='text-white text-2xl ps-5 py-1.5'>Pokemon</h1>
                        <h1 className='text-white text-2xl ps-5 py-1.5'>Pokemon</h1>
                    </div>
                    <DrawerFooter>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default FavoritesDrawer