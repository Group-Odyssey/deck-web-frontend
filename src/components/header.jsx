import NavLink from "./NavLink";

export default function Header(){
    return (
        <div className="mx-12 p-8 relative flex justify-between">
            <div>
                <p className="fraiche text-2xl text-[#12454C]">Deck</p>
            </div>
            <div className="flex justify-evenly items-center">
                <NavLink text="Download"/>
                <NavLink text="Explore"/>
                <NavLink text="Login"/>
                <NavLink text="Get Started!" isButton={true}/>
            </div>
        </div>
    );
}