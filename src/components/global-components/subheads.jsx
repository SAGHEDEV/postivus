import React from "react";

const Subheads = ({ title, desc }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start gap-6 lg:gap-10">
      <h3 className="w-fit text-4xl font-medium text-center bg-green rounded-md px-2">
        {title}
      </h3>
      <p className="text-base max-w-[560px]">{desc}</p>
    </div>
  );
};

export default Subheads;
