// In src/Components/FeaturedProjects.jsx
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "My Content Creator Portfolio",
      description:
        "A modern, responsive website built with React and Tailwind CSS featuring smooth animations and a clean design.",
      image: "/content.png",
      tags: ["React", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/MohamedAli1186/cinematic-creator-showcase",
      demo: "https://jimmy-creator-portfolio.vercel.app/",
    },
    {
      id: 2,
      title: "CineWave",
      description:
        "A sleek movie browser built with React and Tailwind CSS, powered by the TMDB API for exploring popular movies and shows.",
      image: "/cinewave.png",
      tags: ["React", "Tailwind CSS", "TMDB API"],
      github: "https://github.com/MohamedAli1186/CineWave",
      demo: "https://cinewavee.vercel.app/",
    },
  ];

  return (
    <section className="py-10 cursor-default">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Some of my recent work that I'm particularly proud of. Each project
          represents a unique challenge and learning experience.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative h-64 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-orange-500/20 text-orange-300 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-300">{project.description}</p>
                    <div className="flex gap-4 pt-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <FaGithub /> Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
