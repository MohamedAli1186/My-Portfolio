import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "../Components/data";

const Projects = () => {
  return (
    <main className="p-container my-10">
      <section className="text-center py-16">
        <h1 className="typing-title">My Projects</h1>
        <p className="text-gray-300 mt-4">
          A collection of my best works, showcasing my expertise in modern web
          development.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative rounded-xl border border-gray-800 bg-[#1b1b1b] p-6 hover:border-[#f97316]/50 transition-colors"
          >
            {project.tag && (
              <span className="absolute top-3 right-3 bg-[#f97316]/15 text-[#f97316] border border-[#f97316]/30 px-2 py-0.5 rounded-full text-xs">
                {project.tag}
              </span>
            )}

            <div className="flex items-start justify-between gap-3">
              <h3 className="text-2xl font-semibold leading-snug">
                {project.title}
              </h3>
            </div>

            <p className="text-gray-400 mt-2 text-sm leading-relaxed">
              {project.description}
            </p>

            {project.tech && project.tech.length > 0 && (
              <div className="flex flex-wrap items-center gap-3 mt-4 text-xl text-gray-300">
                {project.tech}
              </div>
            )}

            <div className="mt-5 flex items-center gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-200 hover:text-white px-3 py-2 rounded-md border border-gray-700 hover:border-[#f97316]/50"
                >
                  <FaGithub className="text-base" /> Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-200 hover:text-white px-3 py-2 rounded-md border border-gray-700 hover:border-[#f97316]/50"
                >
                  <FaExternalLinkAlt className="text-base" /> Live Demo
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
