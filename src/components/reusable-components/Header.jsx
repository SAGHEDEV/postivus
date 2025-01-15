import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";

const routes = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="z-20 w-full flex justify-between items-center py-8 sticky mt-0 top-0 bg-white/95 backdrop-blur-[120px] px-3 lg:container m-auto">
      <img
        src="/assets/logo-dark.svg"
        alt="Postivus"
        width={200}
        height={56}
        className="cursor-pointer hidden md:block"
      />
      <img
        src="/assets/logo-dark.svg"
        alt="Postivus"
        width={150}
        height={56}
        className="cursor-pointer md:hidden"
      />

      <div className="hidden lg:flex justify-end items-center gap-8 ">
        {routes.map((route) => (
          <span className="relative flex justify-start items-center group cursor-pointer">
            <span className="text-base">{route}</span>
            <span className="absolute w-0 opacity-0 p-[1px] -bottom-1 rounded-full bg-black group-hover:w-full group-hover:opacity-100  transition duration-500"></span>
          </span>
        ))}
        <button className="px-5 py-3 border-[0.5px] border-black rounded-md hover:bg-black hover:text-white transition duration-500 font-medium">
          Request a Quote
        </button>
      </div>
      <div className="lg:hidden ">
        <span
          onClick={() => setOpen((prev) => (prev = !prev))}
          className="w-fit block p-2 rounded-[100%] hover:bg-gray cursor-pointer"
        >
          {!open ? <IoMenu size={34} /> : <MdOutlineCancel size={34} />}
        </span>
        {open && (
          <div className="w-full bg-white absolute left-0 top-24 p-10">
            <div className="w-full flex flex-col justify-end items-center gap-8 text-black">
              {routes.map((route) => (
                <span className="relative flex justify-start items-center group cursor-pointer">
                  <span className="text-base">{route}</span>
                  <span className="absolute w-0 opacity-0 p-[1px] -bottom-1 rounded-full bg-black group-hover:w-full group-hover:opacity-100  transition duration-500"></span>
                </span>
              ))}
              <button className="w-full px-5 py-3 border-[0.5px] border-black rounded-md hover:bg-black hover:text-white transition duration-500 font-medium">
                Request a Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
