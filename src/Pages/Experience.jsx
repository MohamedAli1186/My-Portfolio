import { FaGraduationCap, FaCheckCircle } from "react-icons/fa";
import WorkExperience from "../Components/WorkExperience";
import { SiUdemy } from "react-icons/si";
import { educationData, Skills } from "../Components/data";

const Experience = () => {
  const getIcon = (iconType) => {
    switch (iconType) {
      case "graduation":
        return <FaGraduationCap className="text-[#f97316] text-xl" />;
      case "certificate":
        return <FaCheckCircle className="text-[#f97316] text-xl" />;
      case "udemy":
        return <SiUdemy className="text-[#f97316] text-xl" />;
      default:
        return null;
    }
  };

  return (
    <main className="p-container my-10">
      <WorkExperience />

      <section className="py-10">
        <h2 className="title text-center">Skills & Expertise</h2>
        <div className="mt-6 mx-auto max-w-4xl rounded-xl border border-gray-800 bg-[#181818]/70 backdrop-blur-sm p-6">
          <div className="flex flex-wrap justify-center gap-3">
            {Skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full text-sm bg-[#222] border border-gray-700/70 hover:border-[#f97316]/60 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <h2 className="title text-center">Education</h2>
        <div className="mt-10 max-w-4xl mx-auto">
          <div className="relative border-l border-gray-800 pl-6">
            {educationData.map((item, index) => (
              <div key={index} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[10px] top-1 w-5 h-5 rounded-full bg-[#111] border border-gray-700 flex items-center justify-center">
                  {getIcon(item.icon)}
                </span>
                <div className="rounded-xl bg-[#1c1c1c] border border-gray-800 p-5 hover:border-[#f97316]/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-lg font-semibold">
                      {item.title}
                      {item.subtitle && (
                        <span className="block text-sm font-normal text-gray-400">
                          {item.subtitle}
                        </span>
                      )}
                    </h3>
                    <span className="text-[#f97316] text-sm font-medium bg-[#f97316]/10 px-3 py-1 rounded-full w-max">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Experience;
