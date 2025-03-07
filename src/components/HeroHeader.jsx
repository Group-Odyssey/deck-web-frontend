'use client'
import Image from 'next/image'
import NavLink from "./NavLink";

export default function Header(){
    return (
        <div className="mx-12 p-8 relative flex justify-between">
            <div className='flex justify-center items-center'>
                <Image src="/deck_assets/Deck-Branding7.png" width={'90'} height={'90'} alt=""/>
                <p className="ml-2 fraiche text-4xl text-[#12454C]">Deck</p>
            </div>
            <div className="flex justify-evenly items-center">
                <NavLink text="Download"/>
                <NavLink text="Explore"/>
                <NavLink text="Login" href="/authentication"/>
                <NavLink text="Get Started!" isButton={true}/>
            </div>
        </div>
    );
}