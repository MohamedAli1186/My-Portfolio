import { useState } from "react";
import Popup from "./Popup";
import { Achievements, certificates } from "./data";
import { Link } from "react-router-dom";

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <article>
      <section className="my-30 text-center">
        <h2 className="title">Certifications</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-8 items-center">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-[#222] p-6 rounded-lg py-10 w-full h-full cursor-pointer hover:bg-[#333] transition"
              onClick={() => setSelectedImage(cert.image)}
            >
              <h3 className="text-xl sm:text-2xl font-semibold">
                {cert.title}
              </h3>
              <p className="text-gray-400 text-lg sm:text-xl">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-30 mb-10 text-center">
        <h2 className="title">Small Achievements</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-8 items-center">
          {Achievements.map((cert, index) => (
            <div
              key={index}
              className="bg-[#222] p-6 rounded-lg py-10 w-full h-full cursor-pointer hover:bg-[#333] transition"
              onClick={() => setSelectedImage(cert.image)}
            >
              <h3 className="text-xl sm:text-2xl font-semibold">
                {cert.title}
              </h3>
              <p className="text-gray-400 text-lg sm:text-xl">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <div className="text-center">
        <Link
          to="/experience"
          className="bg-[#f97316] hover:bg-[#ea580c]  cursor-pointer
        px-6 py-3 rounded-md font-medium text-xl transition  w-[190px]"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          All Courses
        </Link>
      </div>
      {selectedImage && (
        <Popup image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </article>
  );
};

export default Certifications;
