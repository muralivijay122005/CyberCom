import React from "react";

export default function About() {
  return (
    <div className="relative w-full text-white bg-black ">
      <div
        className="
          relative z-10 supply-regular 
          grid grid-cols-1 md:grid-cols-[0.064fr_auto_0fr_0fr] 
        "
      >
        {/* Left Empty Column */}
        <div className="hidden md:block border-t border-e border-neutral-800 p-4 "></div>

        {/* Sponsors Section */}
        <div className="p-6 border-t border-neutral-800 flex flex-col items-center">
          {/* Title */}
          <h2 className="text-lg uppercase mb-10 text-center">Sponsors</h2>

          {/* Sponsor Boxes */}
          <div className="flex flex-wrap justify-center gap-8">
            {/* Sponsor 1 - zap.png */}
            <div className="w-32 h-32 flex items-center justify-center">
              <img
                src="/Zap.png"
                alt="Zap Sponsor"
                className="max-w-[70%] max-h-[70%] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
