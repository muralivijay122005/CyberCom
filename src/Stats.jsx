import React from "react";

export default function Stats() {
  return (
    <div className="relative w-full text-white bg-black uppercase">
      <div
        className="
          relative z-10 supply-regular 
          grid grid-cols-1 md:grid-cols-[0.176fr_1fr_1fr_1fr] 
        "
      >
        {/* Left Empty Column */}
        <div className="hidden md:block border-t border-e border-neutral-800 p-4"></div>

        {/* Box 1 - Stats */}
        <div className="p-6 border-t border-neutral-800 py-15 flex flex-col">
          <div className="border-s-20 border-sky-500">
            <div className="border border-neutral-800 text-center p-4 ">
              <p className="text-3xl">300+</p>
              <p className="text-lg">Players</p>
            </div>
            <div className="border border-neutral-800 text-center p-4">
              <p className="text-3xl">65+</p>
              <p className="text-lg">Global Countries</p>
            </div>
          </div>
        </div>

        {/* Box 2 - Sponsors */}
        <div className="p-6 border-t border-x border-neutral-800 py-15 flex flex-col items-center justify-center">
          <h2 className="text-lg uppercase mb-10 text-center">Sponsors</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Zap Sponsor */}
            <div className="w-32 h-32 flex items-center justify-center">
              <img
                src="/Zap.png"
                alt="Zap Sponsor"
                className="max-w-[70%] max-h-[70%] object-contain"
              />
            </div>
          </div>
        </div>

        {/* Box 3 - Stats */}
        <div className="p-6 border-t border-neutral-800 py-15 flex flex-col gap-4">
          <div className="border-e-20 border-sky-500">
            <div className="border border-neutral-800 text-center p-4">
              <p className="text-3xl">35+</p>
              <p className="text-lg">Challenges</p>
            </div>
            <div className="border border-neutral-800 text-center p-4">
              <p className="text-3xl">10+</p>
              <p className="text-lg">Tools</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
