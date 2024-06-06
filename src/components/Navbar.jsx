import React from 'react'
import { appleImg, bagImg, searchImg } from "../utils"
import { navLists } from "../constants"

const Navbar = () => {
    return (
        <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
            <nav className="flex w-full screen-max-width">
                <div className="cursor-pointer"><img src={appleImg} alt="Apple Logo" width={12} height={14}/></div>

                <div className="flex flex-1 justify-center max-sm:hidden">
                    {navLists.map((nav,
                        i) => (
                        <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
                            {nav}
                        </div>
                    ))}
                </div>

                <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
                    <div className="cursor-pointer"><img src={searchImg} alt="Search Icon" width={18} height={18} /></div>
                    <div className="cursor-pointer"><img src={bagImg} alt="Bag Icon" width={18} height={18} /></div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar