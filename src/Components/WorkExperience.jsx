import { FaBriefcase } from "react-icons/fa";
import { MdModelTraining } from "react-icons/md";

const WorkExperience = () => {
  return (
    <section className="py-16">
      <h2 className="typing-title">Work Experience</h2>
      <div className="mt-8">
        <div className="bg-[#222] p-10 rounded-lg max-w-200 mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <FaBriefcase className="text-[#f97316] text-2xl" />
            <div>
              <h3 className="text-xl font-semibold">
                Front-End Developer - WaffarX
              </h3>
              <p className="text-gray-400 text-sm">Oct 2024 - Present</p>
            </div>
          </div>
          <ul className="mt-3 text-gray-300 text-sm list-disc list-inside">
            <li>
              Developing & maintaining web applications using React and Next.js.
            </li>
            <li>
              Collaborating with UX/UI designers to create seamless user
              experiences.
            </li>
            <li>
              Optimizing website performance and implementing best practices.
            </li>
            <li>
              Proposed & developed a progress tracker feature to boost user
              engagement.
            </li>
          </ul>
        </div>
        <div className="bg-[#222] p-10 rounded-lg max-w-200 my-10 mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <MdModelTraining size={30} className="text-[#f97316] text-2xl" />
            <div>
              <h3 className="text-xl font-semibold">
                Information Technology Intern - Hassan Mohammed Allam
              </h3>
              <p className="text-gray-400 text-sm">July 2023 - Aug 2023</p>
            </div>
          </div>
          <ul className="mt-3 text-gray-300 text-sm list-disc list-inside">
            <li>
              Achieved a performance{" "}
              <span className="font-bold">rating of 94% </span>
              at the end of the internship.
            </li>
            <li>
              Worked closely with IT team members to support daily operations
              and projects.
            </li>
            <li>Provided technical support and troubleshooting to employees</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
