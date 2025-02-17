import { DiVisualstudio } from "react-icons/di";
import { FaReact, FaJsSquare, FaHtml5, FaCss3 } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
  SiCypress,
} from "react-icons/si";
const TechStack = () => {
  return (
    <section className="mb-30 py-15 text-center">
      <h2 className="title">Tech Stack</h2>
      <div className="flex justify-center flex-wrap gap-6 mt-6 text-4xl">
        <FaReact size={50} className="text-[#61DBFB]" />
        <SiNextdotjs size={50} className="text-white" />
        <FaCss3 size={50} className="text-[#1572B6]" />
        <FaJsSquare size={50} className="text-[#F7DF1E]" />
        <SiCypress size={50} className="text-[#69D3A7]" />
        <SiTypescript size={50} className="text-[#3178C6]" />
        <SiMongodb size={50} className="text-[#4DB33D]" />
        <SiFigma size={50} className="text-[#24A4E2]" />
        <FaHtml5 size={50} className="text-[#E44D26]" />
        <SiTailwindcss size={50} className="text-[#38B2AC]" />
        <DiVisualstudio size={50} className="text-[#31AEF3]" />
      </div>
    </section>
  );
};

export default TechStack;
