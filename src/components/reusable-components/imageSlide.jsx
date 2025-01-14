// ContinuousImageSlider.js
import React from "react";

const ImageSlider = ({ images, speed = 20 }) => {
  return (
    <div className="overflow-hidden relative">
      {/* Scrolling container */}
      <div
        className="flex w-max animate-scroll"
        style={{
          animation: `scroll ${speed}s linear infinite`,
        }}
      >
        {/* Duplicate images to create seamless loop */}
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="h-16 w-32 flex-shrink-0 mx-4 flex items-center justify-center"
          >
            <img
              src={image}
              alt={`Logo ${index}`}
              className="h-full w-auto object-contain saturate-0"
            />
          </div>
        ))}
      </div>

      {/* Custom CSS for animation */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
