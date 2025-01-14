import React from "react";
import CustomButton from "../global-components/customButton";

const LandingRequest = () => {
  return (
    <div className="w-full bg-gray p-8 flex justify-between md:justify-center lg:justify-between items-center rounded-3xl relative">
      <div className="flex flex-col justify-start md:items-center lg:items-start items-start gap-6 max-w-[500px]">
        <h5
          className={`w-fit text-2xl md:text-3xl text-left font-medium rounded-md px-2 md:text-center lg:text-left`}
        >
          Let's make things happen
        </h5>
        <p className="md:text-center lg:text-left">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <CustomButton text={"Get your free proposal"} />
      </div>
      <div className="">
        <img
          src="/assets/lproposal.svg"
          alt="Proposal"
          className="hidden lg:block absolute right-20 -top-10 w-80 lg:w-[360px]"
        />
      </div>
    </div>
  );
};

export default LandingRequest;
