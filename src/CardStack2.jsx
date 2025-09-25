import React from "react";

export default function CardStack2() {
  return (
    <div className="relative w-72  z-20 border border-neutral-700">
      {/* Header */}
      <div className="flex justify-between items-center bg-sky-500 m-2 ps-4 pe-2">
        <h2 className="text-black text-sm">ASHER.EXE</h2>
        <img src="/Close_B.svg" alt="Close" className="w-4 h-4" />
      </div>

      {/* Image */}
      <div className="mx-2">
        <img
          src="/CTF.jpg"
          alt="Eye Halftone"
          className="w-full h-32 object-cover"
        />
      </div>

      {/* Black Text Box */}
      <div className="bg-black text-white px-4 py-2 text-sm uppercase">
        Step into Asher’s World, Solve the Impossible.
      </div>
    </div>
  );
}
