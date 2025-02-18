import TechStack from "../Components/TechStack";
import Certifications from "../Components/Certifications";
import FunFacts from "../Components/FunFacts";
import FeaturedProjects from "../Components/FeaturedProjects";
import AboutMe from "../Components/AboutMe";

const Home = () => {
  return (
    <main className="p-container my-20">
      <AboutMe />
      <TechStack />
      <Certifications />
      <FeaturedProjects />
      <FunFacts />
    </main>
  );
};

export default Home;
