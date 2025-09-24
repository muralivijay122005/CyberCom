import React from "react";

export default function Register() {
  return (
    <div className="w-full h-full mx-auto text-left bg-black">
      {/* Top Bar with Close.svg */}
      <div className="bg-neutral-800 p-1 px-4 flex justify-between items-center">
        <h2 className="text-md">Step Into the Story</h2>
        <img src="/Close.svg" alt="Close" className="w-5 h-5 cursor-pointer" />
      </div>

      {/* Content */}
      <div className=" py-8 flex flex-col gap-6">
        {/* Info + Text in same row */}
        <div className="flex items-center gap-4">
          <img src="/Info.svg" alt="Info" className="w-10 h-10 mx-12 mt-4" />
          <p className="text-md text-white pe-5 ">
            Register Today to be a Part of a CTF Unlike Anything you have Played
            Before.
          </p>
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="flex text-md items-center gap-2 mx-auto bg-neutral-800 border-2 border-white text-white px-4 py-1 w-fit"
        >
          REGISTER
          <img src="/Arrow.svg" alt="Arrow" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
