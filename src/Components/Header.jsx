import { useLocation, useNavigate } from "react-router-dom";
import { FaHome, FaBriefcase, FaCode, FaEnvelope } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Dock from "../blocks/Components/Dock/Dock";
import { useEffect, useState } from "react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    // Update active item based on current route
    const path = location.pathname;
    if (path === "/") setActiveItem("home");
    else if (path === "/experience") setActiveItem("experience");
    else if (path === "/projects") setActiveItem("projects");
    else if (path === "/contact") setActiveItem("contact");
  }, [location]);

  const handleItemClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const dockItems = [
    {
      icon: (
        <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
      ),
      label: "🌹👀",
      path: "/",
      className:
        "bg-transparent shadow-none hover:bg-gray-800/50 rounded-full p-1",
    },
    {
      icon: <FaHome size={20} />,
      label: "Home",
      path: "/",
      className:
        activeItem === "home"
          ? "border-[#f97316] bg-[#f97316]"
          : "border-transparent",
    },
    {
      icon: <FaBriefcase size={18} />,
      label: "Experience",
      path: "/experience",
      className:
        activeItem === "experience"
          ? "border-[#f97316] bg-[#f97316]"
          : "border-transparent",
    },
    {
      icon: <FaCode size={18} />,
      label: "Projects",
      path: "/projects",
      className:
        activeItem === "projects"
          ? "border-[#f97316] bg-[#f97316]"
          : "border-transparent",
    },
    {
      icon: <FaEnvelope size={18} />,
      label: "Contact",
      path: "/contact",
      className:
        activeItem === "contact"
          ? "border-[#f97316] bg-[#f97316]"
          : "border-transparent",
    },
  ];

  return (
    <header className="fixed w-full top-0 z-50">
      <div className="flex justify-center items-center p-4">
        <Dock
          items={dockItems.map((item) => ({
            ...item,
            onClick: () => handleItemClick(item.path),
          }))}
          className=" backdrop-blur-md border border-gray-800 rounded-full"
          panelHeight={60}
          dockHeight={60}
          baseItemSize={42}
          magnification={48}
          distance={120}
        />
      </div>
    </header>
  );
};

export default Header;
