import React from "react";

const LandingWelcomeComponent = () => {
  return (
    <div className="flex flex-col gap-y-6 lg:flex-row justify-between items-start md:items-center lg:items-start">
      <div className="flex flex-col gap-9 max-w-[531px]">
        <h2 className="font-medium text-4xl md:text-6xl md:text-center lg:text-left">
          Navigating the digital landscape for success
        </h2>
        <p className="text-base hidden lg:block ">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <button className="hidden lg:block px-5 py-4 font-medium border-[0.5px] bg-black text-white rounded-md  transition duration-500  w-full md:w-[264px] active:scale-75 hover:scale-105">
          Book a Consultation
        </button>
      </div>
      <img
        src="/assets/Illustration.svg"
        alt="Navigating the digital landscape for success"
        width={500}
        height={500}
      />
      <p className="text-base lg:hidden md:text-center lg:text-left">
        Our digital marketing agency helps businesses grow and succeed online
        through a range of services including SEO, PPC, social media marketing,
        and content creation.
      </p>
      <button className="lg:hidden px-5 py-4 font-medium border-[0.5px] bg-black text-white rounded-lg  transition duration-500  w-full md:w-[264px] active:scale-75 hover:scale-105">
        Book a Consultation
      </button>
    </div>
  );
};

export default LandingWelcomeComponent;
