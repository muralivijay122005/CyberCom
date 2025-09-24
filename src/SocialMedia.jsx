import React from "react";

export default function SocialMedia() {
  return (
    <div className="mx-auto">
      <h2 className="text-sm mb-4">JOIN OUR COMMUNITY</h2>

      <div className="flex gap-3 ">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6 " />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" />
        </a>

        {/* Discord */}
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
          <img src="/discord.svg" alt="Discord" className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
