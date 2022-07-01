import React, { useRef } from "react";
import WebLogo from "../../../assets/images/logo.png";
const Header = () => {
  const checkboxRef = useRef();
  return (
    <div className="h-32 bg-red-400 mb-10 display flex flex-row items-center px-10 font-bold text-white nav-container">
      <label className="absolute md:hidden">
        <input
          className="checkbox hidden"
          type="checkbox"
          ref={checkboxRef}
        />
        <div
          className="hamburger-lines inline"
          onClick={() => {
            checkboxRef.current.checked = !checkboxRef.current.checked
            checkboxRef.current.click()
          }}
        >
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
      </label>

      <span className="mx-auto md:mx-10">
        <img alt="" src={WebLogo} className="object-cover h-28" />
      </span>
      <div className="ml-auto flex-row gap-10 mr-20 hidden md:flex">
        <a
          className="cursor-pointer link-underline link-underline-black transition-all"
          href="localhost:3000"
        >
          Home
        </a>
        <a
          className="cursor-pointer link-underline link-underline-black transition-all"
          href="localhost:3000"
        >
          Menu
        </a>
        <a
          className="cursor-pointer link-underline link-underline-black transition-all"
          href="localhost:3000"
        >
          Recipes
        </a>
        <a
          className="cursor-pointer link-underline link-underline-black transition-all"
          href="localhost:3000"
        >
          Service
        </a>
        <a
          className="cursor-pointer link-underline link-underline-black transition-all"
          href="localhost:3000"
        >
          Our Story
        </a>
      </div>
      <span className=" absolute right-5 md:relative cursor-pointer relative">
        User
        <i
          className="fa fa-chevron-down absolute top-1 left-100 ml-1 text-sm"
          aria-hidden="true"
        ></i>
      </span>
    </div>
  );
};

export default Header;
