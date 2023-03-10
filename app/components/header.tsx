import React from 'react';
import {Montserrat} from "next/font/google";

const montserrat = Montserrat({subsets: ['latin']})

const Header = () => {

    return (
        <header className="fixed top-0 w-full bg-dark-grey z-[60]">
            <div
                className={`text-off-white flex items-center h-[45px] ${montserrat.className} text-xs sm:text-base`}>Konstantinos
                Marinopoulos •
            </div>
        </header>
    );
};

export default Header;