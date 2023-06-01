import { Tilt } from 'react-tilt'
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import React from "react";
import Image from "next/image";
import {BsGithub, BsGlobe} from "react-icons/bs";
import Link from 'next/link';


const defaultOptions = {
    reverse:        true,
    max:            35,
    perspective:    1500,
    scale:          1.1,
    speed:          1000,
    transition:     true,
    axis:           null,
    reset:          true,
    easing:         "cubic-bezier(.03,.98,.52,.99)",
}

type Props = {
    title: string;
    tags: any;
    description: string;
    image: string;
    url: string;
    github: string;
};

const Panel = ({title, tags, description, image, url, github }: Props) => {

    return (
        <Tilt options={defaultOptions} style={{ width: 370 }}>
            <motion.div
                variants={fadeIn("right", "spring", 0.5, 0.75)}
                className='w-full yellow-black-gradient p-[1px] rounded-[20px] shadow-card overflow-hidden'
            >
                <Image
                    src={image}
                    alt={title}
                    width="0"
                    height="0"
                    sizes="100"
                    className='w-full h-64 object-cover rounded-[20px] object-top'
                />
                <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex items-center flex-col'>
                    <h3 className='text-white text-[20px] font-bold text-center'>
                        {title}
                    </h3>
                    <div className="flex gap-2 mt-2">
                        {
                            tags.map((tag: string) => (
                                <div className="bg-dark-grey text-white py-1 px-4 rounded-[20px]">{tag}</div>
                            ))
                        }
                    </div>

                    <div className="flex-grow py-4">{description}</div>

                    <div className="flex gap-3">
                        {
                            github && <Link target="_blank" href={github}><BsGithub className="text-off-white" size={20} /></Link>
                        }
                        {
                            url && <Link target="_blank" href={url}><BsGlobe className="text-off-white" size={20} /></Link>
                        }
                    </div>

                </div>
            </motion.div>
        </Tilt>
    );
};

export default Panel;
