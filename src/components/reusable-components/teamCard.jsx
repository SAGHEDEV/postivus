import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

const TeamCard = ({ image, name, post, desc }) => {
  return (
    <div className="rounded-3xl p-8 relative flex flex-col justify-center items-center gap-5 border border-b-4">
      <span className="absolute border border-black cursor-pointer bg-black p-2 rounded-full text-green right-5 hover:text-black hover:bg-white top-5 transition duration-200">
        <FaLinkedinIn />
      </span>
      <div className="w-full flex justify-start items-end gap-3">
        <div class="relative w-20 h-20 border border-r-4 border-b-4 flex items-center justify-center overflow-hidden rounded-full">
          <img
            src={image}
            alt="Profile"
            class="w-full h-full object-cover object-top saturate-0 contrast-150"
          />
          <span className="absolute w-full h-full bg-[#B9FF66] mix-blend-multiply"></span>
        </div>

        <div>
          <p className="text-xl font-medium max-w-36">{name}</p>
          <p>{post}</p>
        </div>
      </div>
      <div className="w-full bg-black p-[0.2px]"></div>
      <div>{desc}</div>
    </div>
  );
};

export default TeamCard;
