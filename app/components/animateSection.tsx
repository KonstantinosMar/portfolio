import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {Allura, Montserrat, Lora} from "next/font/google";

const montserrat = Montserrat({subsets: ['latin']})
const lora = Lora({subsets: ['latin']})
const allura = Allura({subsets: ['latin'], weight: '400'})
const AnimateSection = () => {
    const [scrolledMain, setScrolledMain] = useState(false)
    const [scrolledSecondary, setScrolledSecondary] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    let offsetMain: number = 40
    let offsetSecondary: number = 80

    const handleScroll = () => {
        [offsetMain, offsetSecondary].forEach((offset, i) => {
            if (window.scrollY > offset && ![scrolledMain, scrolledSecondary][i]) {
                [setScrolledMain, setScrolledSecondary][i](true);
            }
            if (window.scrollY <= offset && [scrolledMain, scrolledSecondary][i]) {
                [setScrolledMain, setScrolledSecondary][i](false);
            }
        });
    };

    return (
        <>
            <div id="home" className={`main flex-[1] flex flex-col justify-center items-center h-screen sm:h-[calc(100vh_-_90px)] z-[-1] fixed w-[-webkit-fill-available] overflow-hidden bg-[linear-gradient(90deg,#141204_50%,#CBA135_50%)] mr-[25px] sm:mr-[45px] 
             before:absolute before:content-[""] before:bg-[linear-gradient(90deg,#141204_100%,#CBA135_0%)] before:transition-all before:duration-[0.5s] before:ease-[ease-out] before:z-[-1] before:w-6/12 before:inset-0
             ${scrolledMain && 'before:w-full'}`}>
                <h1 className={`text-off-white text-[16vw] leading-[0.8em] sm:text-[13vw] font-extrabold  transition-transform duration-[0.6s] ease-[ease-out] ${montserrat.className} ${scrolledMain && 'translate-x-[100vw] sm:translate-x-[55vw] text-orange'}`}>CON<br/>MARIN<span className="text-dark">.</span>
                </h1>
            </div>
            <div className={`flex-[1] flex flex-col justify-center h-[calc(100vh_-_90px)] z-[-1] fixed w-[-webkit-fill-available] overflow-hidden bg-transparent opacity-0 m-[45px] ${scrolledSecondary && 'opacity-100'}`}>

                <p className={`flex text-off-white items-center text-xl gap-[5px] transition-transform duration-[0.8s] ease-linear ml-4 sm:ml-[50px] scale-y-0 ${allura.className} ${scrolledSecondary && 'scale-y-100'}`}>
                    <Image
                        src="/waves.svg" alt="Waves" width={44} height={6} priority/>Since 1997</p>
                <div className="overflow-hidden ml-4 sm:ml-[50px] mr-0 mt-5 mb-0">
                    <p className={`mb-28 text-off-white relative transition-all duration-[0.8s] ease-[ease-out] h-full text-lg sm:text-3xl top-full ${lora.className} ${scrolledSecondary && '!top-0'}`}>
                        Hello World,<br/> My name is <span className="text-orange">Konstantinos Marinopoulos</span><br/>
                        and I’m a Full Stack Developer.
                    </p>
                </div>
            </div>
        </>
    );
};

export default AnimateSection;