import { FaGithub, FaDownload, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProfileCard from "../blocks/Components/ProfileCard/ProfileCard";
import RotatingText from "../blocks/Components/RotatingText/RotatingText";

const DEFAULT_BEHIND_GRADIENT =
  "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)";

const DEFAULT_INNER_GRADIENT =
  "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)";

const AboutMe = () => {
  const roles = [
    "Software Engineer",
    "React Developer",
    "Next.js Enthusiast",
    "Video Presenter",
    "Web Developer",
    "Frontend Specialist",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left space-y-6">
            <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6">
              <span className="text-orange-400 text-sm font-medium">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Hi, I'm <span className="text-orange-400 block">Mohamed Ali</span>
            </h1>

            <div className="h-16 md:h-20 flex items-center">
              <RotatingText
                texts={roles}
                auto={true}
                rotationInterval={3000}
                animatePresenceMode="wait"
                splitBy="words"
                className="text-2xl md:text-3xl font-light text-gray-300"
                elementLevelClassName="inline-block"
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 200,
                }}
              />
            </div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              I craft exceptional digital experiences with modern web
              technologies. Specializing in React and Next.js, I build fast,
              responsive, and accessible web applications that deliver real
              value.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/Mohamed-Ali-Resume.pdf"
                download="Mohamed_Ali_CV.pdf"
                className="bg-[#f97316] hover:bg-[#ea580c] flex  text-xl cursor-pointer
                px-6 py-3 rounded-md font-medium transition w-fit text-nowrap"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload className="mr-2" />
                Download CV
              </Link>

              <Link
                to="https://github.com/MohamedAli1186"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-white text-xl  hover:text-black flex 
            justify-center gap-1 items-center cursor-pointer text-nowrap
            px-4 py-3 rounded-md font-medium transition w-[190px]"
              >
                <FaGithub className="mr-2" />
                View GitHub
              </Link>
            </div>
          </div>

          {/* Right Column - Profile Card */}
          <div className="relative">
            <div className="relative z-10 hover:scale-105 transition-transform duration-500">
              <ProfileCard
                name="Mohamed Ali"
                title="Software Engineer"
                handle="MohamedAli1186"
                status="Available for work"
                contactText="Hire Me"
                avatarUrl="/my-photooo.webp"
                miniAvatarUrl="/anaOrange.jpg"
                behindGradient={DEFAULT_BEHIND_GRADIENT}
                innerGradient={DEFAULT_INNER_GRADIENT}
                showUserInfo={true}
                enableTilt={true}
                className="w-full max-w-md mx-auto"
                showBehindGradient={true}
                enableMobileTilt={true}
                onContactClick={() =>
                  (window.location.href = "mailto:your.email@example.com")
                }
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-500/10 rounded-full filter blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full filter blur-3xl -z-10"></div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "1+", label: "Years Experience" },
            { value: "10+", label: "Projects Completed" },
            { value: "25+", label: "Scripted Videos" },
            { value: "24/7", label: "Availability" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-orange-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
