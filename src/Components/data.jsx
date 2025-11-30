import { FaReact, FaAngular, FaCss3, FaHtml5 } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

export const certificates = [
  {
    id: 1,
    title: "MEAN Stack Development Scholarship",
    issuer: "Orange Digital Center & AMIT",
    date: "2024",
    image: "/MEAN.webp",
    description:
      "Completed an intensive MEAN stack scholarship covering Angular, Node.js, Express, and MongoDB with real-world projects and assessments.",
    type: "certification",
    skills: ["Angular", "Node.js", "Express", "MongoDB", "REST APIs"],
  },
  {
    id: 2,
    title: "Predictive Modeling in Data Science",
    issuer: "Kayfa Platform",
    date: "2023",
    image: "/kayfa.webp",
    description:
      "Built and evaluated predictive models, learned feature engineering, model selection, and performance metrics.",
    type: "certification",
    skills: ["Data Science", "Modeling", "Python", "Evaluation"],
  },
  {
    id: 3,
    title: "Integrated Embedded Hardware & Software Diploma",
    issuer: "Orange Digital Center & AMIT",
    date: "2022",
    image: "/embedded.webp",
    description:
      "Covered embedded systems fundamentals, firmware, and hardware-software integration through labs and practical projects.",
    type: "certification",
    skills: ["Embedded", "C/C++", "MCUs", "Hardware Integration"],
  },
  {
    id: 4,
    title: "Information Technology Intern",
    issuer: "Hassan Mohammed Allam",
    date: "2023",
    image: "/HassanAllam.webp",
    description:
      "IT internship focusing on systems, documentation, and cross-team collaboration within a corporate environment.",
    type: "internship",
    skills: ["IT Operations", "Documentation", "Collaboration"],
  },
  {
    id: 5,
    title: "Top Performer - ASU Employment Fair'23",
    issuer: "ASU Career Center",
    date: "2023",
    image: "/EF-top-performer.webp",
    description:
      "Recognized as a Top Performer for outstanding contributions and professional communication during ASU Employment Fair.",
    type: "award",
    skills: ["Communication", "Public Relations", "Presentation"],
  },
  {
    id: 6,
    title: "Public Relations Member - AIBE ASU",
    issuer: "AIBE ASU",
    date: "2023",
    image: "/AIBE.webp",
    description:
      "Led on-campus personal selling efforts, conducted presentations, and collaborated within PR teams.",
    type: "award",
    skills: ["PR", "Personal Selling", "Teamwork"],
  },
  {
    id: 7,
    title: "Up Skill - ASU Career Center",
    issuer: "ASU Career Center",
    date: "2023",
    image: "/upSkill.webp",
    description:
      "Training program focused on teamwork, public speaking, and personal selling fundamentals.",
    type: "certification",
    skills: ["Teamwork", "Presentation", "Personal Selling"],
  },
  {
    id: 8,
    title: "RoboTech'22 Workshop Attendee",
    issuer: "RoboTech",
    date: "2022",
    image: "/Ropo.webp",
    description:
      "Attended hands-on workshop on logic programming concepts and their real-world applications.",
    type: "workshop",
    skills: ["Logic Programming", "Problem Solving"],
  },
];

export const Skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "JavaScript (ES6+)",
  "Angular",
  "EmailJS",
  "Figma",
  "SDLC",
  "REST APIs",
  "Git & GitHub",
  "Cypress",
  "UI/UX Principles",
];

export const educationData = [
  {
    icon: "graduation",
    title: "Computer Science major of Information Systems",
    duration: "4Years",
    description: "Ain Shams University, 2024",
  },
  {
    icon: "certificate",
    title: "MEAN Stack Development Scholarship",
    duration: "96Hrs",
    description: "Orange Digital Center & AMIT, 2024",
  },
  {
    icon: "udemy",
    title: "Ultimate React Course",
    subtitle: "Jonas Schmedtmann",
    duration: "84Hrs",
    description: "Udemy, 2024",
  },
  {
    icon: "udemy",
    title: "Cypress End-to-End Testing",
    subtitle: "Maximilian Schwarzmüller",
    duration: "12Hrs",
    description: "Udemy, 2024",
  },
];
export const projects = [
  {
    title: "Chen Style Tai Chi Instructor",
    demo: "https://mohamed-khaled-tai-chi-git-main-mohamed-ali-projects.vercel.app/",
    description:
      "10+ years of experience guiding more than 400 students toward balance, strength, and inner peace through the ancient art of Chen Style Tai Chi.",
    tech: [
      <FaReact key="react" />,
      <SiTailwindcss key="tailwindcss" />,
      <SiTypescript key="typescript" />,
    ],
    github: "https://github.com/MohamedAli1186/chen-flow-zen",
    tag: "New",
  },
  {
    title: "My Content Creator Portfolio",
    demo: "https://jimmy-creator-portfolio.vercel.app/",
    description:
      "My Content Creator Portfolio is a modern, responsive website built with React and Tailwind CSS. It features a clean, minimalist design with smooth animations showcasing my content creation journey.",
    tech: [
      <FaReact key="react" />,
      <SiTailwindcss key="tailwindcss" />,
      <SiTypescript key="typescript" />,
    ],
    github: "https://github.com/MohamedAli1186/cinematic-creator-showcase",
    tag: "New",
  },
  {
    title: "Cine Wave",
    demo: "https://cinewavee.vercel.app/",
    description:
      "CineWave is a sleek, responsive movie browser built with React and Tailwind CSS, powered by the TMDB API. It allows users to explore popular movies, view detailed information, and discover new content in a clean, modern UI",
    tech: [
      <FaReact key="react" />,
      <SiTailwindcss key="tailwindcss" />,
      <SiTypescript key="typescript" />,
      <TbApi key="api" />,
    ],
    github: "https://github.com/MohamedAli1186/CineWave",
    tag: "New",
  },
  {
    title: "Client Portfolio",
    demo: "https://ahmed-salah.vercel.app/",
    description:
      "Ahmed Salah's portfolio is a modern, responsive website built with React and Tailwind CSS. It features a clean, minimalist design with smooth animations and Dark mode and a smooth user experience.",

    tech: [
      <FaReact key="react" />,
      <SiTailwindcss key="tailwindcss" />,
      <SiJavascript key="javascript" />,
    ],
    github: "https://github.com/MohamedAli1186/Salah-s-Portfolio",
  },
  {
    title: "E-Commerce",
    demo: "https://ecommerce-app-sigma-two.vercel.app/",
    description:
      "A website shopping app with user authentication and cart management.",

    tech: [
      <FaReact key="react" />,
      <SiTailwindcss key="tailwindcss" />,
      <SiJavascript key="javascript" />,
    ],
    github: "https://github.com/MohamedAli1186/ecommerce-app",
  },
  {
    title: "E-Learning Management System",
    description:
      "An LMS website that allows students to access courses and submit assignments.",
    tech: [
      <FaAngular key="angular" />,
      <SiJavascript key="javascript" />,
      <FaCss3 key="css" />,
    ],
    github: "https://github.com/MohamedAli1186/E-LMS",
  },
  {
    title: "Small Responsive Website",
    description:
      "A small responsive website built with HTML, CSS, and JavaScript.",
    demo: "https://responsive-website-peach-rho.vercel.app/",
    tech: [
      <FaHtml5 key="html" />,
      <SiJavascript key="javascript" />,
      <FaCss3 key="css" />,
    ],
    github: "https://github.com/MohamedAli1186/E-LMS",
  },
  {
    title: "Food Restaurant App",
    description:
      "A full-stack web app using Angular, MongoDB, Express.js, and Node.js.",
    tech: [
      <FaAngular key="angular" />,
      <SiMongodb key="mongodb" />,
      <FaCss3 key="css" />,
    ],
    github: "https://github.com/MohamedAli1186/Food-Restaurant",
  },
  {
    title: "Mental Health Detection",
    description:
      "AI-based app to detect mental health disorders from social media posts.",
    tech: [
      <FaReact key="react" />,
      <SiNextdotjs key="next.js" />,
      <FaCss3 key="css" />,
    ],
    github:
      "https://github.com/MohamedAli1186/Mental-Health-Detection-from-Social-Media-Text",
  },
];
