import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <section className="w-fit mx-auto text-center py-20">
      <h1
        className="overflow-hidden whitespace-nowrap text-2xl md:text-5xl 
        font-bold animate-[typing_2s_steps(30,end)_forwards]
          after:content-['|'] after:animate-[blink_1s_infinite_2s]"
      >
        Hi, I&apos;m Mohamed Ali
      </h1>
      <section className="m-10 text-center">
        <img
          src="/my-photooo.webp"
          alt="my photo"
          className="w-70 h-auto inline rounded-full"
        />
        <h2 className="text-xl md:text-4xl mt-4 font-light">
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
      </section>
      <p className="text-gray-300 mt-4 mb-5 max-w-3xl mx-auto">
        I&apos;m a passionate front-end developer with expertise in React,
        Next.js, and Cypress. I love crafting high-performance, user-friendly
        web applications and always strive and works to improve my skills.
      </p>
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
          to="https://github.com/MohamedAli1186"
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
  );
};

export default AboutMe;
