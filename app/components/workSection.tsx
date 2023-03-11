import React from 'react';
import {Allura, Lora, Montserrat} from "next/font/google";

import {workingExperience} from "@/app/constants";

const montserrat = Montserrat({ subsets: ['latin'] })
const lora = Lora({subsets: ['latin']})
const allura = Allura({subsets: ['latin'], weight: '400'})

const WorkSection = () => {
    return (
        <section id="work" className="h-auto z-50">
            <h2 className={`w-fit border-y border-yellow py-2 text-yellow font-extrabold text-[64px] leading-[56px] mx-auto mt-8 sm:mt-16 sm:ml-16 ${montserrat.className}`}>W<br></br>ORK</h2>

            {
                workingExperience.map(work => {
                    return (
                        <div key={work.company} className={`w-9/12 m-auto mt-12 text-off-white ${lora.className}`}>
                            <p className={`text-center text-2xl ${allura.className}`}>{work.dateFrom} - {work.dateTo}</p>
                            <h3 className="text-xl">- <strong>{work.company}</strong> - {work.title} / {work.location} </h3>
                            <h4 className="text-base">{work.description}</h4>
                        </div>
                    )
                })
            }
        </section>
    );
};

export default WorkSection;