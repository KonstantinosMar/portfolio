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
    bullets?: string[];
}

export const workingExperience: Experience[] = [
    {
        title: "Full Stack Developer",
        company: "Elegento",
        location: "Athens, Greece",
        dateFrom: "Jul 2023",
        dateTo: "Present",
        description: "Working on full stack applications applied on ecommerce solutions and developing custom back-office web applications using Next.js, React, TypeScript and Laravel.",
        bullets: [
            "Supporting Headless Magento 2 e-commerce solutions utilizing technologies like React and Redux for Progressive Web App (PWA) support and GraphQL",
            "Contributing to the development of custom back-office web applications using Next.js, React, TypeScript and Laravel enhancing internal processes for client management.",
            "Utilizing Next.js to implement Headless WordPress websites with GraphQL, ensuring seamless integration and efficient content management.",
            "Assisting in the development and bug fixing of a dynamic questionnaire application using TypeScript, React, and Node.js, ensuring smooth functionality and user experience.",
            "Building search web tool using Alpine.js, Laravel and integrate with OpenSearch",
            "Providing support on existing Magento 2 e-commerce solutions for both front-end and backend implementations",
            "Communicating with clients on the progress of current projects and the application of newly developed company solutions"
        ]
    },
    {
        title: "Full Stack Developer",
        company: "iTrust Digital",
        location: "Thessaloniki, Greece",
        dateFrom: "May 2021",
        dateTo: "Jul 2023",
        description: "Providing web development support to agency clients by creating custom websites and e-commerce platforms",
        bullets: [
            "Improving UX/UI for clients’ websites and e-commerce platforms through front-end solutions",
            "Developing custom applications on top of WordPress sites using React",
            "Deploying WordPress Sites with custom themes built from scratch and custom Gutenberg blocks",
            "Collaborating with SEO and creative teams to optimize user experience for each client’s websites",
            "Incorporating web accessibility best practices in projects to ensure all users can access and use websites",
            "Designing and developing API endpoints to synchronize and send data between websites ensuring accurate and up-to-date information for clients",
            "Optimizing mobile applications to improve performance and user experience (React Native)",
            "Handling the day-to-day client communication and providing feedback about ongoing tasks",
            "Providing guidance to interns through training sessions",
        ]
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
        description: "Woocommerce website for a bookstore in Greece",
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
    }
];
