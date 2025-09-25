import React from "react";
import GlitchonHover from "./GlitchonHover.jsx";
import CardStack2 from "./CardStack2.jsx";

export default function Character() {
  return (
    <div className="relative w-full text-white bg-black">
      <div className="relative z-10 supply-regular grid grid-cols-1 gap-6 px-4 md:grid-cols-[0.1fr_0.7fr_1fr] md:gap-0 md:px-0">
        {/* Left Empty Column */}
        <div className="hidden md:block border-t border-e border-neutral-800 p-4"></div>

        {/* Middle Column with CardStack2 */}
        <div className="p-6 flex flex-col justify-center items-center border-t border-neutral-800">
          <CardStack2 />
        </div>

        {/* Right Column with Text */}
        <div className=" md:block border-s border-t border-neutral-800 p-6 flex flex-col justify-center items-start">
          {/* Title */}
          <h1 className="text-md w-fit font-medium bg-sky-500 text-black px-2 uppercase mb-4">
            <GlitchonHover text="Character CTF" textColor="text-black" />
          </h1>

          {/* Paragraph */}
          <p className="text-white uppercase max-w-lg text-md w-full text-left leading-relaxed break-words">
            <GlitchOnHover
              text="Meet Asher - the face of Cybercom. Brilliant when he wants to be, mischievous when he shouldn’t be, and curious about everything he’s not supposed to touch. Following Asher isn’t just about playing a CTF it’s stepping into his chaotic, thrilling world. He may be a menace, but you’ll see a bit of yourself in him, curious, restless, and always ready to break the rules."
              textColor="text-white"
              glitchRadius={5}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
