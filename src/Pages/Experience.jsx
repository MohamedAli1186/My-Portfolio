import { FaGraduationCap, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import WorkExperience from "../Components/WorkExperience";
import { SiUdemy } from "react-icons/si";
import { Skills, educationData } from "../Components/data";

const Experience = () => {
  const getIcon = (iconType) => {
    switch (iconType) {
      case "graduation":
        return <FaGraduationCap className="text-[#f97316] text-2xl" />;
      case "certificate":
        return <FaCheckCircle className="text-[#f97316] text-2xl" />;
      case "udemy":
        return <SiUdemy className="text-[#f97316] text-2xl" />;
      default:
        return null;
    }
  };

  return (
    <main className="p-container my-20">
      {/* Work Experience Section */}
      <WorkExperience />

      <section className="py-16 text-center">
        <h2 className="title">Skills & Expertise</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6 max-w-3xl mx-auto">
          {Skills.map((skill) => (
            <span
              key={skill}
              className="bg-[#222] hover-effect px-4 py-2 rounded-md text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <article className="py-16 text-center ">
        <h2 className="title">Education & Certifications</h2>
        <section className="mt-6 grid md:grid-cols-2 gap-8">
          {educationData.map((item, index) => (
            <div key={index} className="bg-[#222] p-6 rounded-lg">
              <div className="flex flex-col items-center gap-4">
                {getIcon(item.icon)}
                <div>
                  <h3 className="text-xl font-semibold">
                    {item.title}
                    {item.subtitle && <p>{item.subtitle}</p>}
                  </h3>
                  <span className="text-[#f97316] text-lg">{item.duration}</span>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </article>

      <div className="text-center my-10">
        <Link
          to="/"
          className="bg-[#f97316] hover:bg-[#ea580c] px-6 py-3 rounded-md font-medium transition"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default Experience;
