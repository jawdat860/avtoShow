import React, { useState } from "react";
import logo from "../assets/logo.png";
import "../App.css"; // Ensure to import the CSS file

function HeaderHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleIconClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="bg-black flex flex-row text-[#FBF6E8] justify-between items-center py-2.5 px-5 md:px-20 border-b border-[#E25A1D] relative">
        <div className="flex items-center p-2.5">
          <i className="fa-solid fa-phone text-2xl hover:cursor-pointer hover:text-[#E25A1D] transition-all duration-300"></i>
          <span className="hidden lg:inline text-lg hover:cursor-pointer ml-1 font-bold hover:text-[#E25A1D] transition-all duration-300">
            +7 (978) 99-90-088
          </span>
        </div>
        <img
          src={logo}
          alt="icon"
          className="hover:cursor-pointer w-[100px] md:w-[150px] mx-auto"
        />
        <p className="text-sm md:text-lg hover:cursor-pointer font-bold p-2.5 text-center md:text-left max-w-[200px] hidden lg:inline hover:text-[#E25A1D] transition-all duration-300">
          Севастополь, ул.Стахановцев,3
        </p>
        <div className="w-[24px] inline lg:hidden">
          <i
            className={`fa-solid text-2xl hover:cursor-pointer hover:text-[#E25A1D] transition-all duration-300 transform ${
              isMenuOpen ? "fa-xmark rotate-180" : "fa-bars rotate-0"
            }`}
            onClick={handleIconClick}
          ></i>
          <div
            className={`absolute right-0 top-full w-[100%] bg-black opacity-[60%] text-[#FBF6E8] border border-[#E25A1D] rounded-b-md shadow-lg ${
              isMenuOpen ? "slide-down" : "slide-up"
            }`}
          >
            <ul className="flex flex-col">
              <li className="hover:cursor-pointer p-[10px] border-b border-[#E25A1D] hover:pl-4 hover:text-[#E25A1D] transition-all duration-300">
                Home
              </li>
              <li className="hover:cursor-pointer p-[10px] border-b border-[#E25A1D] hover:pl-4 hover:text-[#E25A1D] transition-all duration-300">
                About
              </li>
              <li className="hover:cursor-pointer p-[10px] border-b border-[#E25A1D] hover:pl-4 hover:text-[#E25A1D] transition-all duration-300">
                Our advantages
              </li>
              <li className="hover:cursor-pointer p-[10px] border-b border-[#E25A1D] hover:pl-4 hover:text-[#E25A1D] transition-all duration-300">
                Feedback
              </li>
              <li className="hover:cursor-pointer p-[10px] hover:text-[#E25A1D]  hover:pl-4 transition-all duration-300">
                Contacts
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-5 text-[#FBF6E8] bg-black text-[18px] hidden lg:block">
        <ul className="flex justify-between">
          <li className="hover:cursor-pointer p-[10px] border-b-2 border-transparent hover:text-[#E25A1D] hover:border-[#E25A1D] transition-all duration-300">
            Home
          </li>
          <li className="hover:cursor-pointer p-[10px] border-b-2 border-transparent hover:text-[#E25A1D] hover:border-[#E25A1D] transition-all duration-300">
            About
          </li>
          <li className="hover:cursor-pointer p-[10px] border-b-2 border-transparent hover:text-[#E25A1D] hover:border-[#E25A1D] transition-all duration-300">
            Our advantages
          </li>
          <li className="hover:cursor-pointer p-[10px] border-b-2 border-transparent hover:text-[#E25A1D] hover:border-[#E25A1D] transition-all duration-300">
            Feedback
          </li>
          <li className="hover:cursor-pointer p-[10px] border-b-2 border-transparent hover:text-[#E25A1D] hover:border-[#E25A1D] transition-all duration-300">
            Contacts
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderHome;
