import React, { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log("Registered:", email);
    setEmail("");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white/90 dark:bg-slate-900/80 rounded-2xl shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-2">Step into the Story</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-5">
        Register Today to be a Part of a CTF Unlike Anything you have played
        before.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
        >
          Register Now
        </button>
      </form>
      <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
        Your Data Stays Safe. No Spam, Only Mission Update.
      </p>
    </div>
  );
}
