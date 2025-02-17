import { FaEnvelope } from "react-icons/fa";
import SocialLinks from "./SocialLinks";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#121212] py-12 px-6 md:px-16">
      <div className="max-w-6xl flex flex-wrap justify-evenly gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 ">Mohamed Ali</h3>
          <p className="text-gray-400 text-sm max-w-90">
            Front-End Developer specializing in React, Next.js, and modern web
            technologies. Passionate about building scalable, high-performance
            applications.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="flex items-center gap-3 text-gray-300 hover:text-[#f97316] transition cursor-pointer">
            <FaEnvelope size={18} className="text-[#f97316]" />
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              mohameedaallii10@gmail.com
            </Link>
          </p>
        </div>

        {/* Quick Links & Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
          <SocialLinks />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Mohamed Ali. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
