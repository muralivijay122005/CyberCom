import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import GlitchText from "./GlitchText.jsx";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="w-full px-6 py-5 pt-10 flex supply-regular items-center justify-between bg-transparent relative z-30">
      {/* Logo */}
      <img
        src="/CyberCom_Logo.svg"
        alt="Logo"
        className="w-7 h-7 text-black ms-20 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 text-sm me-10">
        {/* HOME */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-2 border-b-2 border-transparent hover:border-white transition"
        >
          <GlitchText text="HOME" textColor="text-white" delay={500} />
        </button>

        {/* ABOUT */}
        <button
          onClick={() => handleScroll("about")}
          className="p-2 border-b-2 border-transparent hover:border-white transition"
        >
          <GlitchText text="ABOUT" textColor="text-white" delay={500} />
        </button>

        {/* REGISTER */}
        <a
          href="https://ctf.cybercom.live"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="p-1 px-3 bg-white/15 border-b-2 border-white">
            <GlitchText text="REGISTER" textColor="text-white" delay={500} />
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
          <button
            className="text-lg border-b-2 border-transparent hover:border-white transition"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" }) ||
              setIsOpen(false)
            }
          >
            <GlitchText text="HOME" textColor="text-white" delay={500} />
          </button>

          <button
            className="text-lg border-b-2 border-transparent hover:border-white transition"
            onClick={() => handleScroll("about")}
          >
            <GlitchText text="ABOUT" textColor="text-white" delay={500} />
          </button>

          <a
            href="https://ctf.cybercom.live"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            <button className="p-2 px-4 bg-white/15 border-b-2 border-white">
              <GlitchText text="REGISTER" textColor="text-white" delay={500} />
            </button>
          </a>
        </div>
      )}
    </nav>
  );
}
