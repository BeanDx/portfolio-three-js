import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    linux,
    starbucks,
    question,
    carrent,
    jobit,
    tripguide,
    threejs,
    picShareHub,
    webChat,
    numberQuest,
    gta6,
    ipLogger,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Open Source Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "Linux",
        icon: linux,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Front-end developer",
        company_name: "Freelance",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2021 - April 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React/Frontend developer",
        company_name: "Your company / team :)",
        icon: question,
        iconBg: "#E6DEDD",
        date: "? - ?",
        "points": [
            "Developing and maintaining modern web applications using React.js as the primary front-end library.",
            "Implementing responsive and user-friendly UI components to enhance the overall user experience.",
            "Collaborating closely with UX/UI designers to translate design mockups into interactive and functional features.",
            "Utilizing state management libraries such as Redux for efficient data flow within the applications.",
            "Integrating RESTful APIs and third-party services to fetch and manipulate data for dynamic content rendering.",
            "Ensuring cross-browser compatibility and optimizing application performance for a seamless user experience.",
            "Implementing and maintaining unit tests to ensure code quality and identify potential issues early in the development process.",
            "Participating actively in Agile development processes, including sprint planning, daily stand-ups, and retrospectives.",
            // "Conducting code reviews and providing constructive feedback to team members to improve code quality and maintainability.",
            // "Staying updated on the latest front-end technologies, best practices, and industry trends to incorporate them into the development workflow.",
            // "Collaborating with back-end developers to integrate front-end components with server-side logic and databases.",
            // "Troubleshooting and debugging issues to identify and resolve software defects and improve overall system reliability.",
            // "Assisting in the development of documentation for code, processes, and best practices to facilitate knowledge sharing within the team.",
            // "Contributing to the continuous improvement of development workflows and tools to enhance productivity and efficiency.",
            // "Participating in the planning and execution of performance optimization strategies for enhanced user experience.",
            // "Implementing security best practices to safeguard applications against common vulnerabilities.",
            // "Working closely with product managers to understand project requirements and deliver solutions that align with business objectives.",
            // "Providing technical support to other team members and collaborating on problem-solving initiatives.",
            // "Maintaining a strong focus on code quality, scalability, and maintainability to ensure long-term success of the applications."
        ]
    }
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Max proved me wrong.",
        name: "Sara Lee",
        designation: "Customer",
        company: "Freelance",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    // {
    //     testimonial:
    //         "I've never met a web developer who truly cares about their clients' success like Max does.",
    //     name: "Chris Brown",
    //     designation: "Customer",
    //     company: "Freelance",
    //     image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //     testimonial:
    //         "After Max optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //     name: "Lisa Wang",
    //     designation: "Customer",
    //     company: "Freelance",
    //     image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
];

const projects = [
    {
        name: "PicShareHub",
        description:
            "PicShareHub is a straightforward and engaging platform for sharing images with others. Users can easily upload images, and the platform provides a convenient way to share the uploaded image's URL. The project consists of a React frontend for user interaction and a Node.js backend for image handling and storage.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "express",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: picShareHub,
        source_code_link: "https://github.com/BeanDx/PicShareHub",
    },
    {
        name: "Real-Time Web Chat",
        description:
            "This project is a real-time web chat application that enables users to communicate instantly using WebSocket technology provided by Socket.IO.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "socket-io",
                color: "green-text-gradient",
            },
            {
                name: "chadcn",
                color: "pink-text-gradient",
            },
        ],
        image: webChat,
        source_code_link: "https://github.com/BeanDx/web-chat-soket-io",
    },
    {
        name: "NumberQuest",
        description:
            "NumberQuest is a web-based game built with React, challenging players to guess a randomly generated 5-digit number using hints and real-time feedback. The game incorporates React Icons for stylish iconography.            ",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
        ],
        image: numberQuest,
        source_code_link: "https://github.com/BeanDx/number-quest",
    },
    {
        name: "GTA 6 - MERN",
        description:
            "MERN - MongoDB, Express, React, Node.js",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "MongoDB",
                color: "green-text-gradient",
            },
            {
                name: "Express",
                color: "green-text-gradient",
            },
            {
                name: "Node.js",
                color: "green-text-gradient",
            },
        ],
        image: gta6,
        source_code_link: "https://github.com/BeanDx/gta6-MERN",
    },
    {
        name: "TelegramIpLoggerInSite",
        description:
            "This project is a simple web-based tool designed to log information about new users accessing a website and send the data to a designated Telegram channel. It utilizes JavaScript and the Telegram Bot API to capture and communicate user details.",
        tags: [
            {
                name: "Axios",
                color: "blue-text-gradient",
            },
            {
                name: "Telegram Bot API",
                color: "green-text-gradient",
            },
        ],
        image: ipLogger,
        source_code_link: "https://github.com/BeanDx/TelegramIpLoggerInSite/",
    },
];

export { services, technologies, experiences, testimonials, projects };