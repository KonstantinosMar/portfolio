import React from 'react';
import Link from "next/link";
import {BsGithub, BsLinkedin} from "react-icons/bs";

const Socials = () => {
    return (
        <div className="flex gap-3 items-center justify-center flex-col bg-dark-grey fixed right-0 w-[45px] h-screen top-0 transition-width">
            <Link href="https://github.com/KonstantinosMar" target="_blank"><BsGithub className="text-off-white" /></Link>
            <Link href="https://www.linkedin.com/in/con-marin/" target="_blank"><BsLinkedin className="text-off-white" /></Link>
        </div>
    );
};

export default Socials;