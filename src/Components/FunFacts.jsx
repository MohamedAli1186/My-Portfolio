const FunFacts = () => {
  return (
    <article className="my-20 text-center">
      <h2 className="title">Fun Facts & Interests</h2>
      <div className="flex flex-wrap justify-center max-w-3xl mx-auto gap-4 mt-6 cursor-default">
        {[
          "Personal Selling",
          "Scripted Videos",
          "Problem-Solving",
          "Exploring New Frameworks",
          "Building Portfolios",
          "Gym & Fitness",
          "Filming",
          "Video Editing",
          "Freelancing",
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
