import React from "react";

const RadioButtons = ({ options, name, direction, onChange }) => {
  return (
    <div className={`flex flex-${direction} justify-start items-start gap-5`}>
      {options.map((option, index) => (
        <label
          key={index}
          htmlFor={`${name}-${option}`}
          className="flex justify-start items-center gap-2 relative cursor-pointer overflow-hidden"
        >
          <div className="h-4 w-4 md:w-6 md:h-6 border rounded-full flex justify-center items-center">
            <div className="h2 w-2 lg:w-4 lg:h-4 rounded-full opacity-0 bg-green-500 peer-checked:opacity-100"></div>

            <input
              type="radio"
              name={name}
              id={`${name}-${option}`}
              value={option}
              className="absolute w-full h-full z-10 opacity-0 peer cursor-pointer"
              //   onChange={() => onChange(option)}
            />
          </div>
          {/* Label Text */}
          <span className="hover:underline text-sm md:text-base">{option}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButtons;
