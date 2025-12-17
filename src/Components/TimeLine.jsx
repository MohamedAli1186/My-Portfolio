import { projects } from "./data";

const TimeLine = () => {
  return (
    <section className="h-full relative">
      <div className="-translate-x-1/2 from-amber-950  via-amber-100 to-amber-950 bg-gradient-to-b w-1 h-full absolute top-0 left-1/2" />
      {projects.map((project, i) => {
        return (
          <div
            className={`flex mt-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} w-full`}
            key={i}
          >
            <div className="bg-[#222] hover-effect px-4 py-2 rounded-md text-sm w-2/5 h-[100px] border-emerald-700 border-2">
              {project.title}
            </div>
            <div className="w-5 rounded-full h-5 z-2 bg-white border-amber-200 border-4 mx-auto my-auto"></div>
            <div className="w-2/5"></div>
          </div>
        );
      })}
    </section>
  );
};

export default TimeLine;
