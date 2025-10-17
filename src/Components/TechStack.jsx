import { DiVisualstudio } from "react-icons/di";
import { FaReact, FaJsSquare, FaHtml5, FaCss3 } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import {
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
  SiCypress,
  SiSwagger,
  SiPostman,
  SiGraphql,
} from "react-icons/si";
const TechStack = () => {
  return (
    <section className="mt-10 text-center">
      <div className="flex justify-center flex-wrap gap-6 mt-6 text-4xl">
        <FaReact size={50} className="text-[#61DBFB]" />
        <SiNextdotjs size={50} className="text-white" />
        <FaCss3 size={50} className="text-[#1572B6]" />
        <SiGraphql size={50} className="text-[#ff0000]" />
        <SiPostman size={50} className="text-[#FF6C37]" />
        <FaJsSquare size={50} className="text-[#F7DF1E]" />
        <SiCypress size={50} className="text-[#69D3A7]" />
        <SiTypescript size={50} className="text-[#3178C6]" />
        <SiMongodb size={50} className="text-[#4DB33D]" />
        <SiFigma size={50} className="text-[#24A4E2]" />
        <SiSwagger size={50} className="text-[#27a015]" />
        <FaHtml5 size={50} className="text-[#E44D26]" />
        <SiTailwindcss size={50} className="text-[#38B2AC]" />
        <IoLogoVercel size={50} className="text-[#000]" />
        <DiVisualstudio size={50} className="text-[#31AEF3]" />
      </div>
    </section>
  );
};

export default TechStack;
