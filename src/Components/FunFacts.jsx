const FunFacts = () => {
  return (
    <article className="my-30 text-center">
      <h2 className="title">Fun Facts & Interests</h2>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {[
          "Tech Enthusiast",
          "Personal Selling",
          "Gaming",
          "Problem-Solving",
          "Reading Tech Blogs",
          "Exploring New Frameworks",
          "Gym & Fitness",
          "ushering",
          "Presenting",
          "Public Relations",
        ].map((interest) => (
          <span
            key={interest}
            className="bg-[#222] hover-effect px-4 py-2 rounded-md text-sm"
          >
            {interest}
          </span>
        ))}
      </div>
    </article>
  );
};

export default FunFacts;
