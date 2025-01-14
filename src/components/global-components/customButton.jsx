import React from "react";

const CustomButton = ({ text }) => {
  return (
    <button className=" px-5 py-4 font-medium border-[0.5px] bg-black text-white rounded-lg  transition duration-500  w-full md:w-[264px] active:scale-75 hover:scale-105 hover:shadow-lg shadow-black">
      {text}
    </button>
  );
};

export default CustomButton;
