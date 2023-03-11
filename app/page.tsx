"use client"
import React from "react";
import Image from "next/image";

import Header from "@/app/components/header";
import AboutSection from "@/app/components/aboutSection";
import AnimateSection from "@/app/components/animateSection";
import ProjectsSection from "@/app/components/projectsSection";
import Socials from "@/app/components/socials";
import Menu from "@/app/components/menu";
import Footer from "@/app/components/footer";

export default function Home() {

    return (
        <>
            <Header/>
            <main className="flex">
                <Menu />
                <AnimateSection />
                <Socials />
                <div className=" mt-[300vh] w-full bg-dark">
                    <AboutSection />
                    <ProjectsSection />
                </div>
            </main>
            <Footer />
        </>
    )
}
