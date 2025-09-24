import React from "react";
import CloseIcon from "/Close.svg"; // replace if necessary

export default function CardStack() {
  return (
    <div className="relative w-full h-[300px] flex items-center justify-center">
      {/* Lower Card */}
      <div className="absolute w-72 h-56 bg-black border border-neutral-800 transform translate-x-12 translate-y-12 z-10">
        {/* Text on Right End */}
        <div className="absolute bottom-20 left-68 h-full flex items-center">
          <span className="text-white text-sm rotate-90 origin-top-left whitespace-nowrap">
            WE WERE ALWAYS HERE
          </span>
        </div>

        {/* Text on Lower End */}
        <div className="absolute bottom-4 left-4 text-white text-sm">
          WE ARE INEVITABLE
        </div>
      </div>

      {/* Upper Card */}
      <div className="relative w-72 bg-sky-500 z-20 border border-sky-500">
        {/* Header */}
        <div className="flex justify-between items-center bg-black mt-2 px-4">
          <h2 className="text-white text-sm">DEDSEC.EXE</h2>
          <img src={CloseIcon} alt="Close" className="w-4 h-4" />
        </div>

        {/* Not responding text */}
        <div className="px-4 text-black text-sm">NOT RESPONDING</div>

        {/* Image */}
        <div className="">
          <img
            src="/Eye_Halftone.png"
            alt="Eye Halftone"
            className="w-full h-32 object-cover"
          />
        </div>

        {/* Black Text Box */}
        <div className="bg-black text-white px-4 py-2 text-sm uppercase">
          Cybercom CTF isn’t for the faint-hearted.
        </div>
      </div>
    </div>
  );
}
