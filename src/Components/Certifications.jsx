import { useState } from "react";
import Popup from "./Popup";
import { certificates } from "./data";

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <article className="my-30 text-center">
      <h2 className="title">Certifications & Achievements</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-8 items-center">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-[#222] p-6 rounded-lg py-10 w-full h-full cursor-pointer hover:bg-[#333] transition"
            onClick={() => setSelectedImage(cert.image)}
          >
            <h3 className="text-xl sm:text-2xl font-semibold">{cert.title}</h3>
            <p className="text-gray-400 text-lg sm:text-xl">{cert.description}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <Popup image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </article>
  );
};

export default Certifications;
