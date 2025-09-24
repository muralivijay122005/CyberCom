import React from "react";

export default function NavBar() {
  return (
    <nav className="w-full px-10 py-8 flex supply-regular items-center justify-between">
      <img
        src="/CyberCom_Logo.svg"
        alt="Logo"
        className="w-7 h-7 text-black ms-15"
      />
      <div className="flex items-center gap-6 text-sm">
        <a href="#home" className="text-white p-2">
          HOME
        </a>
        <a href="#about" className="text-white p-2">
          ABOUT
        </a>
        <a href="#register">
          <button className=" text-white border-b-2 border-white p-2 px-3 bg-white/15">
            REGISTER
          </button>
        </a>
      </div>
    </nav>
  );
}
