import React, { useEffect, useState } from "react";

export default function GlitchRevealText({
  text,
  bg = "bg-black",
  textColor = "text-white",
  delay = 0,
  className = "",
}) {
  const [displayedText, setDisplayedText] = useState("");
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      let result = "";
      for (let i = 0; i < text.length; i++) {
        if (i < frame) {
          result += text[i]; // reveal real char
        } else {
          result += characters[Math.floor(Math.random() * characters.length)];
        }
      }
      setDisplayedText(result);

      frame++;
      if (frame > text.length) clearInterval(interval);
    }, 85);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span
      className={`relative inline-block px-2 overflow-hidden ${bg} ${textColor} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Background Wipe */}
      <span className="absolute inset-0 bg-current animate-wipe"></span>

      {/* Text */}
      <span className="relative z-10">{displayedText}</span>
    </span>
  );
}
