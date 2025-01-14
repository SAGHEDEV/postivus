import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Dropdown = ({ number, title, desc }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`w-full text-black border border-b-4 border-black flex flex-col justify-center items-center gap-5 p-6 rounded-3xl  ${
        open ? "bg-green" : "bg-white"
      }`}
    >
      <div className="w-full flex justify-between items-center gap-4 ">
        <span className="text-2xl lg:text-5xl font-medium flex items-center gap-5">
          0{number}. <span className="text-lg lg:text-2xl mr-2">{title}</span>
        </span>
        <span
          className="bg-white border p-3 rounded-full cursor-pointer hover:bg-gray"
          onClick={() => setOpen((prev) => (prev = !prev))}
        >
          {open ? <FaMinus /> : <FaPlus />}
        </span>
      </div>
      {open && (
        <div className="w-full p-[0.5px] bg-black  transition delay-500"></div>
      )}
      {open && (
        <div className="text-sm md:text-base w-full transition delay-500">
          {desc}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
