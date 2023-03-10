"use client"
import React, {useState} from "react";
import Image from "next/image";

import Header from "@/app/components/header";
import AboutSection from "@/app/components/aboutSection";

import {Lora, Montserrat} from "next/font/google";
import AnimateSection from "@/app/components/animateSection";
import {BsGithub} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import Link from "next/link";
import Nav from "@/app/components/nav";
import ProjectsSection from "@/app/components/projectsSection";

const montserrat = Montserrat({subsets: ['latin']})
const lora = Lora({subsets: ['latin']})
export default function Home() {
    const [menuActive, setMenuActive] = useState(false)

    return (
        <>
            <Header/>
            <main className="flex">
                <div
                    className="menuButton fixed top-1/2 translate-x-0 translate-y-1/2 left-[25px] flex gap-0.5 cursor-pointer z-10"
                    onClick={() => setMenuActive(!menuActive)}>
                    <div>
                        <Image src="/menu.svg" alt="Menu" width={25} height={12} priority/>
                    </div>
                    <div className={`text-off-white text-xs -rotate-90 ${lora.className}`}>Menu</div>
                </div>
                <div className={`fixed left-0 w-[45px] h-screen bg-dark-grey translate-x-0 -translate-y-1/2 bottom-[calc(-50vh-45px)] transition-width menuItem ${menuActive && 'menuItemActive'}`}>
                    <nav className={`relative transition-left duration-[0.8s] left-[-100vw] opacity-0 ${menuActive && '!left-0 opacity-100'}`} >
                        <Nav menuActive={menuActive} setMenuActive={setMenuActive} />
                    </nav>
                </div>
                <AnimateSection />
                <div className="flex gap-3 items-center justify-center flex-col bg-dark-grey fixed right-0 w-[45px] h-screen top-0 transition-width">
                    <Link href="https://github.com/KonstantinosMar" target="_blank"><BsGithub className="text-off-white" /></Link>
                    <Link href="https://www.linkedin.com/in/con-marin/" target="_blank"><BsLinkedin className="text-off-white" /></Link>
                </div>
                <div className=" mt-[300vh] w-full bg-dark">
                    <Image src="/programming-image.jpg" alt="Coding" width="0" height="0" sizes="100vw" className="w-full h-64 object-cover"/>
                    <AboutSection />
                    <ProjectsSection />
                </div>

            </main>
            <footer style={{
                position: 'fixed',
                bottom: '0',
                width: '100%',
                height: '45px',
                left: '0',
                backgroundColor: '#232323'
            }}></footer>

        </>
    )
}
