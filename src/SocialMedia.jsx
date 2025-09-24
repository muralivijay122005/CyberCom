import React from "react";

export default function SocialMedia() {
  return (
    <div className="mx-auto text-center">
      <h2 className="text-xs md:text-sm mb-4">JOIN OUR COMMUNITY</h2>

      <div className="flex gap-4 justify-center opacity-40">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/linkedin.svg"
            alt="LinkedIn"
            className="w-5 h-5 md:w-6 md:h-6"
          />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/instagram.svg"
            alt="Instagram"
            className="w-5 h-5 md:w-6 md:h-6"
          />
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
          <img
            src="/discord.svg"
            alt="Discord"
            className="w-5 h-5 md:w-6 md:h-6"
          />
        </a>
      </div>
    </div>
  );
}
