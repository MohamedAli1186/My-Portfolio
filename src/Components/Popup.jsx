import { useEffect } from "react";
import PropTypes from "prop-types";

const Popup = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-popupBG bg-opacity-80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white p-2 rounded-lg shadow-lg max-w-[80%]  md:max-w-[50%] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={image} alt="Certificate" className="w-full rounded-lg" />
      </div>
    </div>
  );
};

Popup.propTypes = {
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Popup;
