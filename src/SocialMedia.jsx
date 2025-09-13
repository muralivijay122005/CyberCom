import React from "react";
import { FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white/90 dark:bg-slate-900/80 rounded-2xl shadow-lg text-center">
      <h2 className="text-xl font-bold mb-4">Join Our Community</h2>
      <div className="flex justify-center gap-6 text-3xl text-gray-600 dark:text-gray-300">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition"
        >
          <FaDiscord />
        </a>
      </div>
    </div>
  );
}
