import React from "react";

interface NavLink {
    id: string;
    title: string;
}
export const navLinks: NavLink[] = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    }
];

interface Experience {
    title: string;
    company: string;
    location: string;
    dateFrom: string;
    dateTo: string;
    description: string;
}

export const workingExperience: Experience[] = [
    {
        title: "Full Stack Developer",
        company: "iTrust Digital",
        location: "Thessaloniki, Greece",
        dateFrom: "May 2021",
        dateTo: "Present",
        description: "Providing web development support to agency clients by creating custom websites and e-commerce platforms",
    },
    {
        title: "BSc in Computer Science",
        company: "University of Thessaly",
        location: "Greece",
        dateFrom: "2015",
        dateTo: "2021",
        description: ""
    }
]

interface Projects {
    title: string;
    tags: any;
    description: string;
    image: string;
    url: string;
    github: string;
}

export const myProjects: Projects[] = [
    {
        title: "Lydia Filippisia",
        tags: ['Wordpress', "Woocommerce", "PHP"],
        description: "Woocommerce theme, eshop",
        image: "/lydia.png",
        url: "https://lydiafilippisia.gr",
        github: ""
    },
    {
        title: "Pokemon Pinterest",
        tags: ["Next.js", "API", "SCSS"],
        description: "Pinterest clone with custom masonry layout",
        image: "/pokemon-pinterest.png",
        url: "https://pokemon-pinterest.vercel.app",
        github: "https://github.com/KonstantinosMar/pokemon-pinterest"
    },
    {
        title: "Weatherable",
        tags: ["React", "SCSS"],
        description: "Simple weather app",
        image: "/weatherable.png",
        url: "",
        github: "https://github.com/KonstantinosMar/weatherable"
    }
];