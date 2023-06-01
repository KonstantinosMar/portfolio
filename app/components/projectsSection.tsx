import React from 'react';
import Panel from "@/app/components/canvas/Panel";
import {Montserrat} from "next/font/google";
import { textVariant } from "../utils/motion";
import { motion } from 'framer-motion';

import {myProjects} from "@/app/constants";


const montserrat = Montserrat({ subsets: ['latin'] })

const ProjectsSection = () => {
    return (
        <section id="projects" className="h-auto z-50">
            <motion.div variants={textVariant(0.4)}>
                <h2 className={`w-fit border-y border-yellow py-2 text-yellow font-extrabold text-[64px] leading-[56px] mx-auto mt-8 sm:mt-16 sm:ml-16 ${montserrat.className}`}>PRO<br></br>JECTS</h2>
            </motion.div>
            <div className="flex justify-center py-12 gap-6 flex-wrap">
                {
                    myProjects.map((project) => {
                        return (
                            <div key={project.title}>
                                <Panel title={project.title} tags={project.tags} url={project.url} github={project.github} image={project.image} description={project.description}/>
                            </div>
                        )
                    })
                }
            </div>


        </section>
    );
};

export default ProjectsSection;