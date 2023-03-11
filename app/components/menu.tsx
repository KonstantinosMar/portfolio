import React, {useState} from 'react';
import Image from "next/image";
import Nav from "@/app/components/nav";
import {Lora} from "next/font/google";

const lora = Lora({subsets: ['latin']})
const Menu = () => {
    const [menuActive, setMenuActive] = useState(false)

    return (
        <>
            <div className="mobileMenuButton z-10 fixed top-2 right-4 sm:hidden z-[60]" onClick={() => setMenuActive(!menuActive)}>
                <div className="bg-off-white p-2 rounded-full cursor-pointer">
                    <Image src="/menuMobile.svg" alt="Menu" width={20} height={10} priority/>
                </div>
            </div>
            <div
                className="menuButton z-[70] hidden sm:flex fixed top-1/2 translate-x-0 translate-y-1/2 left-[25px] gap-0.5 cursor-pointer z-10"
                onClick={() => setMenuActive(!menuActive)}>
                <div>
                    <Image src="/menu.svg" alt="Menu" width={25} height={12} priority/>
                </div>
                <div className={`text-off-white text-xs -rotate-90 ${lora.className}`}>Menu</div>
            </div>
            <div
                className={`fixed left-0 w-[25px] sm:w-[45px] h-screen bg-dark-grey translate-x-0 -translate-y-1/2 bottom-[calc(-50vh-45px)] transition-width menuItem z-[60] ${menuActive && 'menuItemActive'}`}>
                <nav
                    className={`relative transition-left duration-[0.8s] left-[-100vw] opacity-0 ${menuActive && '!left-0 opacity-100'}`}>
                    <Nav menuActive={menuActive} setMenuActive={setMenuActive}/>
                </nav>
            </div>
        </>

    );
};

export default Menu;