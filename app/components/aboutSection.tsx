import React from 'react';
import {Lora, Montserrat} from "next/font/google";

import {FaCss3, FaDocker, FaGit, FaHtml5, FaJs, FaNode, FaPhp, FaReact, FaSass, FaWordpress} from "react-icons/fa"
import {SiMongodb, SiNextdotjs, SiTailwindcss, SiTypescript} from "react-icons/si";
import Image from "next/image";

const lora = Lora({subsets: ['latin']})
const montserrat = Montserrat({subsets: ['latin']})

const AboutSection = () => {

    return (
        <section id="about" className="h-auto z-50 bg-dark">
            <Image
                src="/programming-image.jpg"
                alt="Coding"
                width="0"
                height="0"
                sizes="100vw"
                className={`w-full h-64 object-cover`}
            />
            <h2 className={`w-fit border-y border-yellow py-2 text-yellow font-extrabold text-[64px] leading-[56px] mx-auto mt-8 sm:mt-16 sm:ml-16 ${montserrat.className}`}>AB<br></br>OUT
            </h2>
            <div className={`w-9/12 m-auto mt-5 text-off-white ${lora.className}`}>
                <p>Organised, dedicated and ambitious Full Stack Developer, working efficiently in a team which provides
                    support with front-end processes and back-end solutions. Keen to work with new technologies,
                    resourcefulness and innovation. Passionate about writing clean and functional code while following
                    design patterns with strong attention to detail.
                </p>
                <div className="flex flex-col sm:flex-row mt-12">
                    <p className="text-2xl text-center mb-4">Tech:</p>
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                        <FaHtml5 className="hover:text-[#E96328]" size={40}/>
                        <FaCss3 className="hover:text-[#3595D0]" size={40}/>
                        <FaSass className="hover:text-[#C76494]" size={40}/>
                        <SiTailwindcss className="hover:text-[#37B7F1]" size={40}/>
                        <FaJs className="hover:text-[#E8D44E]" size={40}/>
                        <SiTypescript className="hover:text-[#2F74C0]" size={36}/>
                        <FaReact className="hover:text-[#27D1F6]" size={40}/>
                        <SiNextdotjs className="hover:text-[#6ACCC9]" size={36}/>
                        <FaNode className="hover:text-[#86BF04]" size={40}/>
                        <SiMongodb className="hover:text-[#4CAC3E]" size={36}/>
                        <FaPhp className="hover:text-[#858FB9]" size={40}/>
                        <FaWordpress className="hover:text-[#207196]" size={40}/>
                        <FaDocker className="hover:text-[#2491E5]" size={40}/>
                        <FaGit className="hover:text-[#E94E31]" size={40}/>
                    </div>
                </div>

            </div>

        </section>

    );
};

export default AboutSection;