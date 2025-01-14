import React from "react";
import Subheads from "../../global-components/subheads";
import Dropdown from "../Dropdown";

const LandingWorkProcess = () => {
  const workProcess = [
    {
      title: "Consultation",
      desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      title: "Research and Strategy Development",
      desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      title: "Implementation",
      desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      title: "Monitoring and Optimization",
      desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      title: "Reporting and Communication",
      desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      title: "Continual Improvement",
      desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
  ];
  return (
    <div className="flex flex-col w-full gap-10 lg:gap-20">
      <Subheads
        title="Our Working Process"
        desc={"Step-by-Step Guide to Achieving Your Business Goals"}
      />
      <div className="w-full flex flex-col gap-6">
        {workProcess.map((process, index) => (
          <Dropdown
            number={index + 1}
            title={process.title}
            desc={process.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingWorkProcess;
