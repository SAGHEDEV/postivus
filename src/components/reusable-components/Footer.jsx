import { Divider } from "antd";
import React from "react";
import { FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa6";

const routes = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

const Footer = () => {
  return (
    <div className="w-full p-10 bg-black lg:rounded-t-3xl flex flex-col gap-5 lg:gap-10 text-center lg:text-left">
      <div className="w-full flex  flex-col lg:flex-row justify-between items-center gap-10">
        <span>
          <img src="/assets/logo-light.svg" alt="" className="md:w-40" />
        </span>
        <div className="flex justify-center items-center gap-4 lg:gap-6 flex-col lg:flex-row">
          {routes.map((route) => (
            <span className="text-white cursor-pointer hover:underline">
              {route}
            </span>
          ))}
        </div>
        <div className="hidden lg:flex justify-center items-center gap-2">
          <span className="p-2 bg-white text-black rounded-full cursor-pointer hover:bg-gray active:scale-95">
            <FaLinkedinIn size={20} />
          </span>
          <span className="p-2 bg-white text-black rounded-full cursor-pointer hover:bg-gray active:scale-95">
            <FaFacebook size={20} />
          </span>
          <span className="p-2 bg-white text-black rounded-full cursor-pointer hover:bg-gray active:scale-95">
            <FaTwitter size={20} />
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-14">
        <div className="flex flex-col justify-start items-center lg:items-start text-white gap-4 lg:gap-6 lg:max-w-[250px] ">
          <h4 className="bg-green px-3 py-1 rounded font-semibold text-black">
            {" "}
            Contact us
          </h4>
          <p>Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
          <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
        </div>
        <div className=" w-full px-7 py-16 bg-[#292A32] flex flex-col lg:flex-row justify-between gap-5 lg:gap-8 h-fit rounded-3xl">
          <input
            className="bg-transparent py-4 w-full p-4 border border-white rounded-xl"
            placeholder="Email"
          />
          <button className="h-fit px-5 py-4 font-medium bg-green text-black rounded-lg  transition duration-500  !w-full md:w-[240px] active:scale-75 hover:scale-105">
            Suscribe
          </button>
        </div>
      </div>
      <div className="flex lg:hidden justify-center items-center gap-2">
        <span className="p-2 bg-white text-black rounded-full cursor-pointer hover:bg-gray active:scale-95">
          <FaLinkedinIn size={20} />
        </span>
        <span className="p-2 bg-white text-black rounded-full cursor-pointer hover:bg-gray active:scale-95">
          <FaFacebook size={20} />
        </span>
        <span className="p-2 bg-white text-black rounded-full cursor-pointer hover:bg-gray active:scale-95">
          <FaTwitter size={20} />
        </span>
      </div>
      <Divider className="bg-white" />
      <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-3 lg:gap-6 text-white">
        <p>© 2025 Abdulhakeem cloned Positivus. All Rights Reserved.</p>
        <span className="underline cursor-pointer">Privacy Policy</span>
      </div>
    </div>
  );
};

export default Footer;
