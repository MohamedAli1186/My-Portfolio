const FeaturedProjects = () => {
  return (
    <section className="my-20">
      <h2 className="title">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 mt-10">
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
    </section>
  );
};

export default FeaturedProjects;
