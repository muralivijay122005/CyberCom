import React, { useEffect, useState, useRef } from "react";
import { createRoot } from "react-dom/client";

const phrases = [
  "Global CTF Summit",
  "A New Era of CTF",
  "The Cyber Frontier",
  "Flags Beyond Borders",
];

function RollingText() {
  const [highlightIndex, setHighlightIndex] = useState(0);
  const containerRef = useRef(null);

  // Update highlight index every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % phrases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Calculate total width for seamless looping
  const repeatedPhrases = Array(3).fill(phrases).flat(); // Repeat phrases 3x for smooth looping

  return (
    <div className="overflow-hidden whitespace-nowrap supply-regular uppercase w-full py-10">
      <div
        ref={containerRef}
        className="inline-flex animate-marquee gap-4 text-white text-lg md:text-xl"
      >
        {repeatedPhrases.map((phrase, i) => (
          <React.Fragment key={`phrase-${i}`}>
            <span
              className={
                i % phrases.length === highlightIndex
                  ? "text-sky-500 transition-colors duration-500"
                  : ""
              }
            >
              {phrase}
            </span>
            {i < repeatedPhrases.length - 1 && <span className="mx-2">•</span>}
          </React.Fragment>
        ))}
      </div>

      {/* Tailwind keyframes animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(
              -${100 / 3}%
            ); /* Move by 1/3rd for 3x repeat */
          }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee ${phrases.length * 10}s linear infinite; /* Dynamic duration */
        }
      `}</style>
    </div>
  );
}

export default RollingText;
