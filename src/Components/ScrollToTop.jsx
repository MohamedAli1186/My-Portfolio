import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        if (isVisible !== window.scrollY > 200) {
          setIsVisible(window.scrollY > 200);
        }
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={scrollToTop}
      className={`bg-blue fixed bottom-36 left-1 sm:left-4 h-10 transition
        w-10  rounded-full animate-bounce cursor-pointer hover:text-[#f97316] 
        ${isVisible ? "" : "hidden"} `}
      aria-label="Scroll to top"
      data-cy="scroll-to-top-btn"
      type="button"
    >
      <FaArrowCircleUp className="w-full h-fit" />
    </button>
  );
};

export default ScrollToTop;
