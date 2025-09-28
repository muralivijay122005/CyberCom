import React from "react";

export default function SocialMedia() {
  return (
    <div className="mx-auto text-center">
      <h2 className="text-xs md:text-sm mb-4">JOIN OUR COMMUNITY</h2>

      <div className="flex gap-4 justify-center opacity-40">
        {/* LinkedIn */}
        <a
          href="https://linkedin.com/company/cybercom-live"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5 " />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/cybercom.live/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/instagram.svg" alt="Instagram" className="w-5 h-5" />
        </a>

        {/* Discord */}
        <a
          href="https://discord.gg/dnKBB9Ra"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/discord.svg" alt="Discord" className="w-6 h-6" />
        </a>

        {/* X (Twitter) */}
        <a
          href="https://x.com/CybercomLive"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/x.svg" alt="X" className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
