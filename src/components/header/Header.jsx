import React, { useState } from "react";
import { navLinks } from "../pages/home/navlinks";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const navBtn = () => {
    document.querySelector(".mobile-navbar").classList.toggle("hidden");
  };

  return (
    <div>
      {/* Nav-container */}
      <header className="w-[100%] py-10 lg:w-[80%] m-auto p-4">
        <div className="contain-nav flex justify-between">
          <div className="logo cursor-none">
            <img src="./image/Group 11.png" alt="" className="w-30" />
          </div>
          {/* Navbar desktop*/}
          <nav className="">
            <ul className="hidden lg:flex justify-between ml-60 lg:w-[100%]  pr-[10rem] text-offWhite">
              {navLinks.map((link) => (
                <li
                  className={
                    location.pathname === link.href
                      ? "border-b border-b-slate-900 border-t border-t-slate-900 w-20  text-center "
                      : ""
                  }
                >
                  <NavLink className="uppercase" to={link.href}>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="">
            <button
              onClick={navBtn}
              className="text-5xl  btn items-end   md:text-5xl lg:hidden"
            >
              <i class="bx bx-menu"></i>
            </button>
          </div>
        </div>
      </header>
      {/* Navbar mobile */}
      <div className="relative">
        <div className=" mobile-navbar hidden absolute md:left-[65%]  w-60 rounded-3xl p-6 bg-[#2C2C2C]  lg:hidden align-middle z-10 right-4 text-center">
          <ul className="flex flex-col gap-3 text-white">
            {navLinks.map((link) => (
              <li
                className={
                  location.pathname === link.href
                    ? "active  border-b border-b-white border-t border-t-white p-2 text-center m-auto"
                    : ""
                }
              >
                <NavLink className="uppercase  " to={link.href}>
                  {link.name}{" "}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
