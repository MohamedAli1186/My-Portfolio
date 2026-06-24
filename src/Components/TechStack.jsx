import { useState } from "react";
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

const icons = [
  { component: FaReact, label: "React", color: "#61DBFB" },
  { component: SiNextdotjs, label: "Next.js", color: "#ffffff" },
  { component: FaCss3, label: "CSS3", color: "#1572B6" },
  { component: SiGraphql, label: "GraphQL", color: "#ff0000" },
  { component: SiPostman, label: "Postman", color: "#FF6C37" },
  { component: FaJsSquare, label: "JavaScript", color: "#F7DF1E" },
  { component: SiCypress, label: "Cypress", color: "#69D3A7" },
  { component: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { component: SiMongodb, label: "MongoDB", color: "#4DB33D" },
  { component: SiFigma, label: "Figma", color: "#24A4E2" },
  { component: SiSwagger, label: "Swagger", color: "#27a015" },
  { component: FaHtml5, label: "HTML5", color: "#E44D26" },
  { component: SiTailwindcss, label: "Tailwind CSS", color: "#38B2AC" },
  { component: IoLogoVercel, label: "Vercel", color: "#000000" },
  { component: DiVisualstudio, label: "VS Code", color: "#31AEF3" },
];

const TechIcon = ({ component: Icon, label, color }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onClick={() => setVisible((v) => !v)}
    >
      <Icon size={50} style={{ color }} className="cursor-pointer transition-transform duration-200 hover:scale-110" />
      {visible && (
        <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded shadow-lg whitespace-nowrap z-10 pointer-events-none">
          {label}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800" />
        </div>
      )}
    </div>
  );
};

const TechStack = () => {
  return (
    <section className="mt-10 text-center">
      <div className="flex justify-center flex-wrap gap-6 mt-6 text-4xl">
        {icons.map(({ component, label, color }) => (
          <TechIcon key={label} component={component} label={label} color={color} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
