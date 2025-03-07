'use client'
import NavLink from "./NavLink";

export default function Footer(){
    return (
        <div className="bg-[#D9D9D9] text-[#6D6D6D] flex flex-col justify-start px-12">
            <p className="text-2xl font-bold pt-8">Contact Us</p>
            <div className="flex">
                <div className="w-32"></div>
                <div className="flex flex-col text-[#">
                    <NavLink text="Download"/>
                    <NavLink text="Explore"/>
                    <NavLink text="Login" href="/login"/>
                    <NavLink text="Terms of Service"/>
                    <NavLink text="Privacy Policy"/>
                </div>
            </div>
            <p>©2025 Odyssey. All rights reserved.</p>
        </div>
    );
}