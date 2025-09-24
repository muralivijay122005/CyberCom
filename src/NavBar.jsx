import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-5 pt-10 flex supply-regular items-center justify-between bg-transparent relative z-30">
      {/* Logo */}
      <img
        src="/CyberCom_Logo.svg"
        alt="Logo"
        className="w-7 h-7 text-black ms-20"
      />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 text-sm me-10">
        <a href="#home" className="text-white p-2">
          HOME
        </a>
        <a href="#about" className="text-white p-2">
          ABOUT
        </a>
        <a href="#register">
          <button className="text-white border-b-2 border-white p-1 px-3 bg-white/15">
            REGISTER
          </button>
        </a>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 flex flex-col items-center gap-6 py-6 md:hidden">
          <a
            href="#home"
            className="text-white text-lg"
            onClick={() => setIsOpen(false)}
          >
            HOME
          </a>
          <a
            href="#about"
            className="text-white text-lg"
            onClick={() => setIsOpen(false)}
          >
            ABOUT
          </a>
          <a href="#register" onClick={() => setIsOpen(false)}>
            <button className="text-white border-b-2 border-white p-2 px-4 bg-white/15">
              REGISTER
            </button>
          </a>
        </div>
      )}
    </nav>
  );
}
