import React, {ReactNode} from 'react';
import Link from "next/link";
import {navLinks} from "../constants/index"
import {Montserrat} from "next/font/google";

const montserrat = Montserrat({subsets: ['latin']})

type Props = {
    setMenuActive: React.Dispatch<React.SetStateAction<any>>;
    menuActive: boolean;
};
const Nav = ({menuActive, setMenuActive}: Props) => {

    const handleClick = (anchor: string) => {
        setMenuActive(!menuActive)
        if (anchor === 'home') {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        const scrollTo = document.getElementById(anchor);
        if (scrollTo) {
            scrollTo.scrollIntoView({behavior: 'smooth', block: 'center'});
        }
    }

    return (
        <div className="flex flex-col justify-center h-[calc(100vh_-_90px)] ml-24 sm:ml-48 mb-24">
            <ul className="font-bold text-base sm:text-3xl text-off-white flex flex-col gap-0.5 sm:gap-2 ">
                {
                    navLinks.map((navLink) => {
                        return <li key={navLink.id} className={`navItem cursor-pointer ${montserrat.className}`}
                                  onClick={() => handleClick(navLink.id)}>{navLink.title}.</li>
                    })
                }
            </ul>
            <Link className={`mt-5 w-fit text-sm sm:text-base p-2 sm:p-4 bg-orange text-off-white hover:bg-transparent border border-orange rounded-sm hover:text-orange ${montserrat.className}`}
                  href="/Konstantinos-Marinopoulos-CV.pdf" target="_blank">
                Download my Resume.
            </Link>

            <div className={`${montserrat.className} flex flex-col gap-1 mt-9 text-off-white`}>
                <div className="mb-1 text-xs">Thessaloniki, Greece</div>
                <div className="text-sm font-bold">+30 6946197719</div>
                <Link className="text-sm font-bold" href="mailto:kostas.marinopoulos@outlook.com">kostas.marinopoulos@outlook.com</Link>
            </div>
        </div>
    );
};

export default Nav;