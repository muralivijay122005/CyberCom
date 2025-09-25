import React from "react";

export default function About() {
  return (
    <div className="relative w-full text-white bg-black">
      <div
        className="
          relative z-10 supply-regular 
          grid grid-cols-1 md:grid-cols-[0.176fr_1fr_1fr_1fr] 
        "
      >
        {/* Left Empty Column */}
        <div className="hidden md:block border-t border-e border-neutral-800 p-4 "></div>

        {/* Box 1 */}
        <div className="p-6 border-t border-neutral-800 py-15">
          {/* Stats Column */}
          <div className="flex flex-col uppercase border-s-20 border-sky-500">
            <div className="border border-neutral-800 text-center p-4">
              <p className="text-3xl ">300+</p>
              <p className="text-lg">Players</p>
            </div>
            <div className="border border-neutral-800 text-center p-4">
              <p className="text-3xl">65+</p>
              <p className="text-lg">Global Countries</p>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="p-6 border-t border-x border-neutral-800 py-15"></div>

        {/* Box 3 */}
        <div className="p-6 border-t border-neutral-800 py-15">
          {/* Stats Column */}
          <div className="flex flex-col uppercase border-e-20 border-sky-500">
            <div className="border border-neutral-800 text-center p-4">
              <p className="text-3xl ">35+</p>
              <p className="text-lg">Challenges</p>
            </div>
            <div className="border border-neutral-800 text-center p-4">
              <p className="text-3xl ">10+</p>
              <p className="text-lg">Tools</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
