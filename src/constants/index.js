import { Cisco, oro, twowaits, C, CPP, Hbase, Hadoop, MySQL, Python, PyTorch, Tensorflow, Kafka, Redis } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript

} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: C,
        name: "C",
        type: "Programming Language",
    },
    {
        imageUrl: CPP,
        name: "CPP",
        type: "Programming Language",
    },
    {
        imageUrl: Hbase,
        name: "Hbase",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: Hadoop,
        name: "Hadoop",
        type: "Big Data",
    },

    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: MySQL,
        name: "MySQL",
        type: "Database",

    },
    {
        imageUrl: Python,
        name: "Python",
        type: "Programming Language",

    },
    {
        imageUrl: Tensorflow,
        name: "Tensorflow",
        type: "Python DL Library",

    },
    {
        imageUrl: PyTorch,
        name: "PyTorch",
        type: "Python DL Library",

    },
    {
        imageUrl: Kafka,
        name: "Kafka",
        type: "Kafka",

    },
    {
        imageUrl: Redis,
        name: "Redis",
        type: "DataBase",

    },
];


export const experiences = [
    {
        title: "SWE Intern",
        company_name: "Cisco",
        icon: Cisco,
        iconBg: "#A5FF33",
        date: "Jan 2024 - Present",
        points: [
            "Joined Cisco as a SWE intern in Distributed Systems Department",
        ],
    },

    {
        title: "SDE Intern",
        company_name: "Orocorp Technologies Private Limited",
        icon: oro,
        iconBg: "#a2d2ff",
        date: "May 2023-July 2023",
        points: [
            "Contributed in admin dashboard revamp project where I designed the whole activity log section and also did contributions in fixes. Worked with API and it's integration to the frontend.",
            "Contributed in Paisa dashboard project. The closure friction experiment where I worked on pre closure charges.",
            "Made valuable contributions in disbursement centre project. Worked with API's and graphQL. Also designed a filter to sieve out all DC visits from all visit.",
            "Worked on release visit revamp. Designed third party details card where the major work was converting unsigned url off the image to signed url and rendering it to screen.",
            "I have gained valuable skills from this role such as git gitHub , React , CSS , Tailwind CSS , TypeScript , GraphQl.",
        ],
    },
    {
        title: "DSA Scholar Intern",
        company_name: "Two Waits Technology",
        icon: twowaits,
        iconBg: "#fbc3bc",
        date: "July 2022-August 2022",
        points: [
            "It was a self learning internship with TwoWaits where I have learned new concepts Data Structures and Algorithms.",
            " I have solved good problems of medium and hard level on leetcode.",
            "I have watched tutorials and learnt about various data structures and algorithms concepts",

        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/devanshikapla',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/devanshi-kapla-2b0898201/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Integrated Interview System for Deaf and Dumb',
        description: 'Sign language to speech conversion involves using computer vision and machine learning to recognize sign language gestures, translating them into text, and converting the text into audible speech for effective communication between sign language users and those who communicate verbally.',
        link: 'https://github.com/devanshikapla/Sign-language-to-speech-and-text',
    },

    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Self Driving Car Simulator',
        description: 'Self-driving car simulation coded in JavaScript, which is powered by neural networks to drive autonomously.Neural networks act in a manner similar to the human brain.',
        link: 'https://github.com/devanshikapla/Self-Driving-Car',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Image Compression',
        description: 'Image compression is a algorithmic based project where an image is directly converted into Huffman codes. It uses Entropy Com- pression, Run-length Coding, Huffman Cod- ing, Sampling, Conversion of components from RGBA to YCbCr, Quantization.',

    },

];