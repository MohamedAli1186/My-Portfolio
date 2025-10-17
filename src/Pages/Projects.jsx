import {
  FaReact,
  FaAngular,
  FaExternalLinkAlt,
  FaGithub,
  FaCss3,
  FaHtml5,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const projects = [
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
    title: "Ahmed Salah's portfolio",
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

const Projects = () => {
  return (
    <main className="p-container my-10">
      <section className="text-center py-16">
        <h1 className="typing-title">My Projects</h1>
        <p className="text-gray-300 mt-4">
          A collection of my best works, showcasing my expertise in web
          development.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mt-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#222] p-6 rounded-lg relative">
            {project.tag && (
              <span className="bg-[#f97316] text-white px-2 py-1 absolute top-2 right-2 rounded-full text-sm">
                {project.tag}
              </span>
            )}
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <div className="flex gap-4 mt-3 text-2xl">{project.tech}</div>
            <div className="flex gap-4 mt-4">
              <a
                href={project.github}
                target="_blank"
                className="text-white hover:text-[#f97316] flex items-center gap-1"
              >
                <FaGithub /> Code
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  className="text-white hover:text-[#f97316] flex items-center gap-1"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Projects;
