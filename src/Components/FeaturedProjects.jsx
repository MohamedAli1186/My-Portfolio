import { Link } from "react-router-dom";

const FeaturedProjects = () => {
  return (
    <section className="my-20">
      <h2 className="title">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 mt-10 mb-10">
        <div className="bg-[#222] p-6 rounded-lg hover-effect transition">
          <h3 className="text-2xl font-semibold">Food Restaurant App</h3>
          <p className="text-gray-400 mt-2">
            A full-stack web app using Angular, MongoDB, Express.js, and
            Node.js.
          </p>
        </div>
        <div className="bg-[#222] p-6 rounded-lg hover-effect transition">
          <h3 className="text-2xl font-semibold">Mental Health Detection</h3>
          <p className="text-gray-400 mt-2">
            AI-based app to detect mental health disorders from social media
            posts.
          </p>
        </div>
      </div>
      <div className="text-center">
        <Link
          to="/projects"
          className="mt-6 bg-[#f97316] hover:bg-[#ea580c] w-[190px] cursor-pointer
        px-6 py-3 rounded-md font-medium text-xl transition"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          All projects
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjects;
