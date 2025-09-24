import React from "react";

export default function Register() {
  return (
    <div className="w-full h-full mx-auto text-left bg-black/5 backdrop-blur-xl">
      {/* Top Bar */}
      <div className="bg-neutral-800 p-2 px-4 flex justify-between items-center">
        <h2 className="text-sm md:text-md uppercase">Step Into the Story</h2>
        <img src="/Close.svg" alt="Close" className="w-4 h-4 cursor-pointer" />
      </div>

      {/* Content */}
      <div className="py-6 md:py-6 flex flex-col gap-6 px-4 md:px-15">
        {/* Text */}
        <p className="text-sm md:text-md text-white text-center leading-relaxed">
          Register Today to be a Part of a CTF Unlike Anything you have Played
          Before.
        </p>

        {/* Button */}
        <button
          type="submit"
          className="flex items-center gap-2 mx-auto bg-neutral-800 border-1 border-e-5 border-b-5 border-white text-white px-4 py-1 text-sm md:text-md hover:bg-neutral-700 transition"
        >
          REGISTER
          <img src="/Arrow.svg" alt="Arrow" className="w-3 h-3 md:w-4 md:h-4" />
        </button>
      </div>
    </div>
  );
}
