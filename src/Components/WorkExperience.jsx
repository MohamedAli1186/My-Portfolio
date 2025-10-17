import { FaBriefcase } from "react-icons/fa";
import { MdModelTraining } from "react-icons/md";

const WorkExperience = () => {
  return (
    <section className="py-16">
      <h2 className="typing-title text-center">Work Experience</h2>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {/* WaffarX */}
        <div className="rounded-xl border border-gray-800 bg-[#1b1b1b] p-6 hover:border-[#f97316]/50 transition-colors">
          <div className="flex items-start gap-4">
            <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f97316]/15">
              <FaBriefcase className="text-[#f97316] text-xl" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  Front-End Developer • WaffarX
                </h3>
                <span className="text-xs text-[#f97316] bg-[#f97316]/10 px-3 py-1 rounded-full w-max">
                  Oct 2024 – Present
                </span>
              </div>
              <ul className="mt-3 text-gray-300 text-sm space-y-2">
                <li>Developing and maintaining React/Next.js applications.</li>
                <li>
                  Collaborating with UX/UI to deliver seamless user experiences.
                </li>
                <li>Optimizing performance and implementing best practices.</li>
                <li>
                  Proposed and built a progress tracker to boost engagement.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hassan Mohammed Allam */}
        <div className="rounded-xl border border-gray-800 bg-[#1b1b1b] p-6 hover:border-[#f97316]/50 transition-colors">
          <div className="flex items-start gap-4">
            <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f97316]/15">
              <MdModelTraining className="text-[#f97316] text-xl" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  IT Intern • Hassan Mohammed Allam
                </h3>
                <span className="text-xs text-[#f97316] bg-[#f97316]/10 px-3 py-1 rounded-full w-max">
                  Jul 2023 – Aug 2023
                </span>
              </div>
              <ul className="mt-3 text-gray-300 text-sm space-y-2">
                <li>
                  Achieved a performance{" "}
                  <span className="font-semibold">rating of 94%</span> by end of
                  internship.
                </li>
                <li>
                  Supported daily IT operations and assisted across projects.
                </li>
                <li>
                  Provided technical support and troubleshooting to employees.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
