import React from "react";

const RadioButtons = ({ options, name, direction, onChange }) => {
  return (
    <div className={`flex flex-${direction} justify-start items-start gap-5`}>
      {options.map((option, index) => (
        <label
          key={index}
          htmlFor={`${name}-${option}`}
          className="flex justify-start items-center gap-2 relative cursor-pointer"
        >
          <div className="h-6 w-6 border rounded-full flex justify-center items-center">
            <input
              type="radio"
              name={name}
              id={`${name}-${option}`}
              value={option}
              className="absolute w-full h-full opacity-0 peer cursor-pointer text-green bg-green"
              onChange={() => onChange && onChange(option)}
            />
            <div className="h-4 w-4 rounded-full bg-green opacity-0  peer-checked:opacity-100 transition"></div>
          </div>

          <span className="hover:underline text-sm md:text-base">{option}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButtons;
