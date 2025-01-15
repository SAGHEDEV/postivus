import React, { useState } from "react";
import { testimonials } from "../global-components/data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GoTriangleUp } from "react-icons/go";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="w-full p-10 bg-black rounded-3xl text-white flex flex-col justify-center items-center gap-10 lg:gap-14">
      <div className="relative w-full mx-auto overflow-hidden">
        {/* Slider Container */}
        <div
          className="w-full flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 text-center flex justify-between flex-col items-center lg:px-36 gap-0 md:gap-8"
            >
              <span className="block font-light border border-green p-6 rounded-3xl ">
                " {testimonial.quote} "
              </span>
              <div className="flex flex-col items-center">
                <GoTriangleUp className="text-green" />
                <span className="font-bold">{testimonial.name}</span>
                <span className="font-light italic text-sm">
                  {testimonial.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex space-x-6 items-center justify-center ">
        <button
          onClick={prevSlide}
          className=" bg-gray-800 text-white rounded-full p-2"
        >
          <FaArrowLeft size={22} />
        </button>

        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/20"
            }`}
          ></button>
        ))}
        <button
          onClick={nextSlide}
          className="bg-gray-800 text-white rounded-full p-2"
        >
          <FaArrowRight size={22} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
