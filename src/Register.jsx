import React from "react";
import GlitchText from "./GlitchText.jsx";

export default function Register() {
  return (
    <div className="w-full h-full mx-auto text-left bg-black/5 backdrop-blur-xl">
      {/* Top Bar */}
      <div className="bg-neutral-800 p-2 px-4 flex justify-between items-center">
        <h2 className="text-sm md:text-md uppercase">
          <GlitchText
            text="Step Into the Story"
            textColor="text-white"
            delay={500}
          />
        </h2>
        <img src="/Close.svg" alt="Close" className="w-4 h-4 cursor-pointer" />
      </div>

      {/* Content */}
      <div className="py-6 md:py-6 flex flex-col justify-center items-center gap-6 px-4 md:px-15">
        {/* Text split into two lines */}
        <p className="text-sm md:text-md max-w-xs text-white text-center  leading-relaxed">
          <GlitchText
            text="Register Today to be a Part of a CTF"
            textColor="text-white"
            delay={500}
          />
          <br />
          <GlitchText
            text="Unlike Anything you have Played Before."
            textColor="text-white"
            delay={700}
          />
        </p>

        {/* Button */}
        <button
          type="submit"
          className="flex items-center gap-2 mx-auto bg-neutral-800 border-1 border-e-5 border-b-5 border-white text-white px-4 py-1 text-sm md:text-md hover:bg-neutral-700 transition"
        >
          <GlitchText text="REGISTER" textColor="text-white" delay={1500} />
          <img src="/Arrow.svg" alt="Arrow" className="w-3 h-3 md:w-4 md:h-4" />
        </button>
      </div>
    </div>
  );
}
