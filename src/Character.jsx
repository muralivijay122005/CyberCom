import React from "react";

export default function Character() {
  return (
    <div className="relative w-full text-white bg-black">
      <div
        className="
          relative z-10 supply-regular 
          grid grid-cols-1 gap-6 px-4 md:grid-cols-[0.1fr_0.7fr_1fr] md:gap-0 md:px-0
        "
      >
        {/* Left Empty Column */}
        <div className="hidden md:block border-t border-e border-neutral-800 p-4"></div>

        {/* Middle Text Column */}
        <div className="p-6 flex flex-col border-t border-neutral-800"></div>

        {/* Right Column with CardStack */}
        <div className="hidden md:block border-s border-t border-neutral-800 p-4 flex justify-center items-start">
          <h1 className="text-md w-fit font-medium bg-sky-500 text-black px-2 uppercase mb-4">
            About The CTF
          </h1>
          <p className="text-white uppercase text-md w-fit text-left">
            Cybercom isn't just a cybersecurity platform, it's an experience.
            Our story-based CTFs unfold in episodes that follow the life of a
            relatable young hacker, blending everyday college life with dark
            twists, hidden secrets, and thrilling cyber mysteries. Each
            challenge is a piece of the story, making you not just a participant
            but a part of the narrative. Solve, explore, and uncover if you
            dare!
          </p>
        </div>
      </div>
    </div>
  );
}
