import React from "react";
import Subheads from "../../global-components/subheads";
import { FiArrowUpRight } from "react-icons/fi";

const LandingCaseStudy = () => {
  const case_studies = [
    "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  ];
  return (
    <div className="w-full flex flex-col gap-10 lg:gap-20">
      <Subheads
        title={"Case study"}
        desc={
          "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        }
        id={"use-case"}
      />
      <div className="hidden  p-12 bg-black md:flex justify-between items-center text-white rounded-[2.5rem] gap-5">
        {case_studies.map((caseStudy, index) => (
          <div
            key={index}
            className={`p-2 px-8 flex flex-col gap-8 ${
              index < 2 ? "border-r" : ""
            }`}
          >
            <span>{caseStudy}</span>
            <span className="flex gap-3 items-center cursor-pointer text-green hover:text-green-600 group">
              <span className="group-hover:underline">Learn more</span>
              <FiArrowUpRight size={28} className="group-hover:scale-x-125" />
            </span>
          </div>
        ))}
      </div>

      <div className="flex justify-start items-center overflow-x-auto md:hidden w-full max-w-full gap-5 snap-x snap-mandatory">
        {case_studies.map((caseStudy, index) => (
          <div
            key={index}
            className="p-5 flex flex-col justify-between gap-8 rounded-2xl bg-black w-[280px] h-[240px] text-white snap-start shrink-0"
          >
            <span>{caseStudy}</span>
            <span className="flex gap-3 items-center cursor-pointer text-green hover:text-green-600 group">
              <span>Learn more</span>
              <FiArrowUpRight size={28} className="group-hover:scale-x-125" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingCaseStudy;
