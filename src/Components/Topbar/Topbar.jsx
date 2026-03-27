import React from "react";
import { FiBell, FiSettings } from "react-icons/fi";
import './Topbar.css'

function Topbar() {
  return (
    <header className="w-full h-20 bg-[#f7f8f5] flex justify-between items-center px-7.5 border-b border-[#e3e3e3]">
      {/* Left */}
      <div className="flex items-center gap-7.5">
        <a
          href="#"
          className="no-underline text-[#4f5b4f] font-semibold text-xs md:text-sm"
        >
          Dashboard
        </a>
        <a
          href="#"
          className="no-underline text-[#4f5b4f] font-semibold text-xs md:text-sm"
        >
          Analytics
        </a>
        <a
          href="#"
          className="no-underline text-[#4f5b4f] font-semibold text-xs md:text-sm"
        >
          Reports
        </a>
      </div>
      <div className="flex items-center gap-4.5">
        <FiBell className="text-xs md:text-sm text-[#333] cursor-pointer" />
        <FiSettings className="text-xs md:text-sm text-[#333] cursor-pointer" />

        <div className=" w-5 h-5 md:w-10 md:h-10 text-xs md:text-sm rounded-full bg-[#f4c6a7] flex items-center justify-center font-bold text-[#1a1a1a]">
          A
        </div>

        {/* Right */}
      </div>
    </header>
  );
}

export default Topbar;
