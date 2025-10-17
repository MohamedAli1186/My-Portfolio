import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certificates } from "./data";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? certificates
      : certificates.filter((c) => c.type === activeFilter);

  const filters = [
    { id: "all", label: "All" },
    { id: "certification", label: "Certifications" },
    { id: "award", label: "Awards" },
    { id: "internship", label: "Internships" },
    { id: "workshop", label: "Workshops" },
  ];

  return (
    <section className="py-16" id="certifications">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Validations of my skills and recognition of my growth.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-full text-sm transition-colors cursor-pointer ${
                  activeFilter === f.id
                    ? "bg-orange-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filtered.map((cert) => (
            <motion.div
              key={cert.id}
              className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-700 hover:border-orange-500/50 flex flex-col"
              whileHover={{ y: -4 }}
              onClick={() => setSelectedCert(cert)}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="w-full">
                    <span
                      className={`inline-block px-2.5 py-1 text-xs font-medium rounded-full mb-2 ${
                        cert.type === "certification"
                          ? "bg-blue-500/20 text-blue-300"
                          : cert.type === "award"
                            ? "bg-yellow-500/20 text-yellow-300"
                            : cert.type === "internship"
                              ? "bg-green-500/20 text-green-300"
                              : "bg-purple-500/20 text-purple-300"
                      }`}
                    >
                      {cert.type.charAt(0).toUpperCase() + cert.type.slice(1)}
                    </span>
                    <h3 className="text-lg font-bold text-white line-clamp-2">
                      {cert.title}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <h3 className="font-semibold text-lg mb-1 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3">{cert.issuer}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {cert.skills.slice(0, 3).map((s, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded"
                    >
                      {s}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700/50 text-xs text-gray-500 rounded">
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>
                <div className="mt-auto pt-3 flex items-center justify-between border-t border-gray-700/50">
                  <span className="text-xs text-gray-400">{cert.date}</span>
                  <span className="text-orange-400 text-sm">
                    View Details →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl border border-gray-800"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              layout
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute cursor-pointer top-4 right-4 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 z-10 transition-colors"
                  aria-label="Close"
                >
                  ✕
                </button>
                <div className="p-1">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                      selectedCert.type === "certification"
                        ? "bg-blue-500/20 text-blue-300"
                        : selectedCert.type === "award"
                          ? "bg-yellow-500/20 text-yellow-300"
                          : selectedCert.type === "internship"
                            ? "bg-green-500/20 text-green-300"
                            : "bg-purple-500/20 text-purple-300"
                    }`}
                  >
                    {selectedCert.type.charAt(0).toUpperCase() +
                      selectedCert.type.slice(1)}
                  </span>
                  <span className="text-sm text-gray-400">
                    {selectedCert.date}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  {selectedCert.title}
                </h3>
                <p className="text-lg text-orange-400 mb-4">
                  {selectedCert.issuer}
                </p>
                <p className="text-gray-300 mb-6">{selectedCert.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Skills & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((s, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-gray-800 text-sm text-gray-300 rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
