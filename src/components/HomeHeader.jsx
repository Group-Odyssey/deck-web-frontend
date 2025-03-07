'use client'
import Image from 'next/image'

export default function HomeHeader() {
    return (
        <div className="mx-12 p-8 relative flex justify-between">
            <div className='flex justify-center items-center'>
                <Image src="/deck_assets/Deck-Branding7.png" width={'70'} height={'70'} alt=""/>
                <p className="ml-2 fraiche text-3xl text-[#12454C]">Deck</p>
            </div>
            <div className="flex justify-evenly items-center">
                
                <div className="w-12 h-12 rounded-full bg-gray-200"></div>
            </div>
        </div>
    )
}