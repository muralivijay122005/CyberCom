import React from "react";

export default function NavBar() {
  return (
    <nav className="w-full py-4 px-6 bg-black flex items-center justify-between">
      <div className="text-2xl font-bold text-blue-600">CyberCom</div>
      <div className="flex items-center gap-6">
        <a
          href="#home"
          className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
        >
          About
        </a>
        <a href="#register">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition">
            Register
          </button>
        </a>
      </div>
    </nav>
  );
}
