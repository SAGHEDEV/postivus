import React from "react";
import { PiArrowCircleUpRightFill } from "react-icons/pi";

const ServiceCard = ({ title, image, theme }) => {
  return (
    <div
      className={`flex h-[260px] justify-between items-center p-5 md:p-8 border border-b-4 border-black rounded-3xl gap-6 ${
        theme === "green"
          ? "bg-green"
          : theme === "dark"
          ? "bg-black"
          : "bg-white"
      }`}
    >
      <div className="h-full flex flex-col justify-between items-start">
        <h5
          className={`w-fit text-2xl md:text-3xl text-left font-medium rounded-md px-2 max-w-52 lg:max-w-[260px]  ${
            theme === "green"
              ? "bg-white"
              : theme === "light"
              ? "bg-green"
              : "bg-white"
          }`}
        >
          {title}
        </h5>
        <div
          className={`flex gap-2 items-center cursor-pointer group ${
            theme === "dark" ? "text-white" : ""
          }`}
        >
          <span className="group-hover:rotate-[360deg] transition duration-500 ">
            <PiArrowCircleUpRightFill size={40} />
          </span>
          <span className="text-base lg:text-lg group-hover:underline">
            Learn more
          </span>
        </div>
      </div>
      <div className=" h-full flex justify-center items-center relative">
        <img
          src={image}
          alt={title}
          className="hidden lg:block max-w-[150px] max-h-[150px]"
        />
        <img
          src={image}
          alt={title}
          className="block lg:hidden max-w-[120px] lg:max-h-[120px] absolute bottom-8 right-5 md:bottom-2 md:right-3"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
