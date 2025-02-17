import TechStack from "../Components/TechStack";
import Certifications from "../Components/Certifications";
import FunFacts from "../Components/FunFacts";
import FeaturedProjects from "../Components/FeaturedProjects";
import AboutMe from "../Components/AboutMe";

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
        <h2 className="text-xl md:text-4xl mt-4 font-light mb-10">
          Front-End Developer, React & Next.js Enthusiast
        </h2>
        <a
          href="src\assets\Mohamed-Ali-Resume.pdf"
          download="Mohamed_Ali_CV.pdf"
          className="mt-6 bg-[#f97316] hover:bg-[#ea580c] cursor-pointer
          px-6 py-3 rounded-md font-medium transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </section>
      <TechStack />
      <Certifications />
      <FeaturedProjects />
      <FunFacts />
      <AboutMe />
    </main>
  );
};

export default Home;
