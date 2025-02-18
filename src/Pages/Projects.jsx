import {
  FaReact,
  FaAngular,
  FaExternalLinkAlt,
  FaGithub,
  FaCss3,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

const projects = [
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
    title: "E-Commerce",
    demo: "",
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
    title: "Car Showcase Website",
    description: "A website that displays a list of cars with their details.",
    tech: [
      <FaReact key="react" />,
      <SiTailwindcss key="tailwindcss" />,
      <SiTypescript key="typescript" />,
    ],
    github: "https://github.com/MohamedAli1186/car_showcase",
  },
];

const Projects = () => {
  return (
    <main className="p-container my-20">
      <section className="text-center py-16">
        <h1 className="typing-title">My Projects</h1>
        <p className="text-gray-300 mt-4">
          A collection of my best works, showcasing my expertise in web
          development.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mt-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#222] p-6 rounded-lg">
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
