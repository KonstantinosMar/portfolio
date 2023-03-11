"use client"
import React from "react";

import Header from "@/app/components/header";
import AboutSection from "@/app/components/aboutSection";
import AnimateSection from "@/app/components/animateSection";
import ProjectsSection from "@/app/components/projectsSection";
import Socials from "@/app/components/socials";
import Menu from "@/app/components/menu";
import Footer from "@/app/components/footer";
import StarsCanvas from "@/app/components/canvas/Stars";

export default function Home() {

    return (
        <>
            <Header/>
            <main className="flex">
                <Menu />
                <StarsCanvas />
                <AnimateSection />
                <Socials />
                <div className=" mt-[300vh] w-full bg-dark z-50">
                    <AboutSection />
                    <ProjectsSection />
                </div>
            </main>
            <Footer />
        </>
    )
}
