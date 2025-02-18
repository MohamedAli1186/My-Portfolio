import { Link, NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-[#252424] text-white py-4 fixed w-full top-0 z-20 shadow-md">
      <nav className="p-container flex justify-between items-center">
        <Link to="/">
          <img src="/logo.png" alt="logo" className="w-10 h-auto" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `transition ${
                    isActive ? "text-[#f97316]" : "hover:text-[#f97316]"
                  }`
                }
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Sidebar Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-popupBG bg-opacity-50 z-30" />
        )}
        <div
          ref={sidebarRef}
          className={`fixed top-0 right-0 w-64 h-full bg-[#1a1a1a] shadow-lg z-40 transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-white text-2xl"
            onClick={toggleMenu}
          >
            <FaTimes />
          </button>

          {/* Sidebar Links */}
          <ul className="flex flex-col gap-6 text-lg font-medium mt-16 pl-8">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `block py-2 transition ${
                      isActive ? "text-[#f97316]" : "hover:text-[#f97316]"
                    }`
                  }
                  onClick={() => {
                    setMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
