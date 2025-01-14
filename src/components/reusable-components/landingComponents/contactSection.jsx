import React from "react";
import Subheads from "../../global-components/subheads";
import RadioButtons from "../radioButtons";

const ContactSection = () => {
  return (
    <div className="flex flex-col w-full gap-10 lg:gap-20">
      <Subheads
        title={"Contact us"}
        desc="Connect with Us: Let's Discuss Your Digital Marketing Needs"
      />
      <div className="w-full flex justify-between items-center gap-16 rounded-3xl bg-gray p-10 overflow-hidden">
        <div className="w-full flex flex-col justify-center items-start gap-10">
          <RadioButtons
            options={["Say Hi", "Get a Quote"]}
            name={"contact"}
            direction={"row"}
          />
          <form action="#" className="w-full flex flex-col gap-5">
            <div className="w-full flex justify-start items-start flex-col gap-1">
              <label htmlFor="name" className="font-semibold">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="w-full h-10 lg:h-14 rounded-xl border bg-white p-3 text-sm"
              />
            </div>
            <div className="w-full flex justify-start items-start flex-col gap-1">
              <label
                htmlFor="email"
                className="font-semibold text-sm md:text-base"
              >
                Email *
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="w-full h-10 lg:h-14 rounded-xl border bg-white p-3 text-sm"
              />
            </div>
            <div className="w-full flex justify-start items-start flex-col gap-1">
              <label
                htmlFor="message"
                className="font-semibold text-sm md:text-base"
              >
                Message *
              </label>
              <textarea
                placeholder="Message"
                name="email"
                rows={6}
                className="w-full rounded-xl border bg-white p-3 text-sm"
              />
            </div>
            <button className=" px-5 py-4 font-medium border-[0.5px] bg-black text-white rounded-lg  transition duration-500  w-full  active:scale-75 hover:scale-105">
              Send Message
            </button>
          </form>
        </div>
        <div className="hidden w-full h-full lg:flex justify-end items-end">
          <img
            src="/assets/contact-image.svg"
            alt="Contact us"
            className="h-3/5 max-h-[450px] relative -right-[45%]"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
