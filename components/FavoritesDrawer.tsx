import React from 'react'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer'
import { Button } from './ui/button'

const FavoritesDrawer = () => {
    return (
        <div className=''>
            <Drawer direction='left'>
                <DrawerTrigger>
                    <img className='h-[60px] cursor-pointer fill-white ' src="/assets/menu-icon.svg" alt="Toggle Favorites menu" />
                </DrawerTrigger>
                <DrawerContent className='bg-black/60'>
                    <DrawerHeader className='flex flex-row justify-between'>
                        <DrawerTitle className='text-white text-3xl'>Favorites</DrawerTitle>
                        <DrawerClose>
                            <Button variant="outline">Close</Button>
                        </DrawerClose>
                    </DrawerHeader>
                    <div className='overflow-y-auto '>

                    <h1 className='text-white text-2xl ps-5 py-1.5'>Pokemon</h1>
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