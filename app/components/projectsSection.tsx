import React from 'react';
import {Montserrat} from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] })

const ProjectsSection = () => {
    return (
        <section id="projects" className="h-[calc(100vh_-_145px)] z-50">
            <h2 className={`w-fit border-y border-yellow py-2 text-yellow font-extrabold text-[64px] leading-[56px] mx-auto mt-8 sm:mt-16 sm:ml-16 ${montserrat.className}`}>PRO<br></br>JECTS</h2>
        </section>
    );
};

export default ProjectsSection;