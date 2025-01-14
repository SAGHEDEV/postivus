import React from "react";
import Subheads from "../../global-components/subheads";
import TestimonialCarousel from "../testimonialCarousel";

const TestimonialSection = () => {
  return (
    <div className="w-full flex flex-col gap-10 lg:gap-20">
      <Subheads
        title={"Testimonials"}
        desc={
          "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        }
      />
      <TestimonialCarousel />
    </div>
  );
};

export default TestimonialSection;
