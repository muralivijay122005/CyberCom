import React from "react";

export default function Footer() {
  return (
    <div className="relative w-full text-white bg-black">
      {/* First Grid Row */}
      <div
        className="
          relative z-10 supply-regular 
          grid grid-cols-1 md:grid-cols-[0.176fr_1fr_1fr_1fr] 
        "
      >
        {/* Left Empty Column */}
        <div className="hidden md:block border-t border-e border-neutral-800 p-4"></div>

        {/* Box 1 */}
        <div className="p-6 border-t border-neutral-800 flex flex-col items-center">
          {/* Logo and Text */}
          <div className="flex flex-row gap-2 items-center">
            <img
              src="/CyberCom_Logo.svg"
              alt="Cybercom Logo"
              className="w-6 h-auto mb-2"
            />
            <p className="text-lg uppercase mb-3">CYBERCOM</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4">
            <a
              href="https://instagram.com/cybercom.live/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/instagram.svg" alt="Instagram" className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/company/cybercom-live"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
            </a>
            <a
              href="https://discord.gg/dnKBB9Ra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/discord.svg" alt="Discord" className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/CybercomLive"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/x.svg" alt="X" className="w-5 h-5" />
            </a>
          </div>

          {/* White Box */}
          <div className="w-40 h-40 bg-white mt-4"></div>
        </div>

        {/* Box 2 */}
        <div className="p-4 border-t border-x border-neutral-800 flex justify-center items-center">
          <video
            src="/Globe.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-60 h-60 object-cover rounded-full brightness-200 hue-rotate-350 saturate-180"
          />
        </div>

        {/* Box 3 */}
        <div className="p-6 border-t border-neutral-800 flex flex-col items-center">
          {/* Logo */}
          <img
            src="/Dedsec_Logo.svg"
            alt="Dedsec Logo"
            className="w-10 h-auto mb-5"
          />

          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4">
            <a
              href="https://www.instagram.com/dedsec_x01/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/instagram.svg" alt="Instagram" className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/company/dedsec-x01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
            </a>
            <a
              href="https://discord.gg/dnKBB9Ra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/discord.svg" alt="Discord" className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/CybercomLive"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/x.svg" alt="X" className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-red-500 text-center my-10 uppercase">
            Error 404: Limits not found.
          </p>

          {/* Terms and Conditions */}
          <p className="text-sm text-center mb-1 uppercase">
            Terms and Conditions apply.
          </p>
          <p className="text-sm text-center uppercase">
            All rights reserved © 2025
          </p>
        </div>
      </div>

      {/* Second Grid Row with Empty Divs */}
      <div
        className="
          relative z-10 supply-regular 
          grid grid-cols-1 md:grid-cols-[0.176fr_1fr_1fr_1fr]
        "
      >
        <div className="hidden md:block p-4 border-t border-e border-neutral-800"></div>
        <div className="p-6 border-e border-t border-neutral-800"></div>
        <div className="p-6 border-e border-t border-neutral-800"></div>
        <div className="p-6 border-t border-neutral-800"></div>
      </div>
    </div>
  );
}
