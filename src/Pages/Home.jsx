import TechStack from "../Components/TechStack";
import Certifications from "../Components/Certifications";
import FunFacts from "../Components/FunFacts";
import FeaturedProjects from "../Components/FeaturedProjects";
import AboutMe from "../Components/AboutMe";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <main className="p-container my-20">
      <section className="w-fit mx-auto text-center py-20">
        <h1
          className="overflow-hidden whitespace-nowrap text-2xl md:text-5xl 
        font-bold animate-[typing_2s_steps(30,end)_forwards]
          after:content-['|'] after:animate-[blink_1s_infinite_2s]"
        >
          Hi, I&apos;m Mohamed Ali
        </h1>
        <AboutMe />
        <h2 className="text-xl md:text-4xl mt-4 font-light mb-10">
          A Front-End Developer at{" "}
          <a
            className="text-[#f97316] font-bold"
            href="https://www.waffarx.com/en-eg"
            target="_blank"
            rel="noopener noreferrer"
          >
            WaffarX
          </a>
          <span className="block mt-1">,React & Next.js Enthusiast</span>
        </h2>
        <div className="max-w-fit mx-auto flex md:flex-row flex-col items-center gap-4">
          <Link
            to="/Mohamed-Ali-Resume.pdf"
            download="Mohamed_Ali_CV.pdf"
            className="bg-[#f97316] hover:bg-[#ea580c]  text-xl cursor-pointer
          px-6 py-3 rounded-md font-medium transition w-[190px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </Link>
          <Link
            to="https://github.com/MohamedAli-WaffarX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-white text-xl  hover:text-black flex 
            justify-center gap-1 items-center cursor-pointer 
            px-4 py-3 rounded-md font-medium transition w-[190px]"
          >
            Open Github
            <FaGithub />
          </Link>
        </div>
      </section>
      <TechStack />
      <Certifications />
      <FeaturedProjects />
      <FunFacts />
    </main>
  );
};

export default Home;
