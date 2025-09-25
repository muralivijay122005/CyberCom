import React from "react";
import CardStack from "./CardStack";
import GlitchOnHover from "./GlitchOnHover.jsx";

export default function About() {
  return (
    <div className="relative w-full text-white bg-black">
      <div className="relative z-10 supply-regular grid grid-cols-1 gap-6 px-4 md:grid-cols-[0.1fr_0.7fr_1fr] md:gap-0 md:px-0">
        {/* Left Empty Column */}
        <div className="hidden md:block border-t border-e border-neutral-800 p-4"></div>

        {/* Middle Text Column */}
        <div className="p-6 flex flex-col">
          <h1 className="text-md w-fit font-medium bg-sky-500 text-black px-2 uppercase mb-4">
            <GlitchOnHover text="About The CTF" textColor="text-black" />
          </h1>
          <p className="text-white uppercase text-md w-full text-left leading-relaxed break-normal">
            <GlitchOnHover
              text="Cybercom isn't just a cybersecurity platform, it's an experience. Our story-based CTFs unfold in episodes that follow the life of a relatable young hacker, blending everyday college life with dark twists, hidden secrets, and thrilling cyber mysteries. Each challenge is a piece of the story, making you not just a participant but a part of the narrative. Solve, explore, and uncover if you dare!"
              glitchRadius={5} // Increased glitch radius for more range
            />
          </p>
        </div>

        {/* Right Column with CardStack */}
        <div className="hidden md:block border-s border-t border-neutral-800 pb-10">
          <CardStack />
        </div>
      </div>
    </div>
  );
}
