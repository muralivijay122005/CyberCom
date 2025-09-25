import React, { useEffect, useState } from "react";

export default function GlitchText({
  text,
  textColor = "text-white",
  delay = 0,
}) {
  const [displayedText, setDisplayedText] = useState("");
  const chars =
    "abcdefghijkilmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"; // cryptic characters

  useEffect(() => {
    let timeout;
    let frame = 0;

    const scramble = () => {
      const scrambled = text
        .split("")
        .map((char, i) =>
          i < frame ? char : chars[Math.floor(Math.random() * chars.length)]
        )
        .join("");

      setDisplayedText(scrambled);

      if (frame <= text.length) {
        frame++;
        timeout = setTimeout(scramble, 70); // speed of scrambling
      }
    };

    const start = setTimeout(scramble, delay);

    return () => {
      clearTimeout(start);
      clearTimeout(timeout);
    };
  }, [text, delay]);

  return (
    <span
      className={`${textColor} font-normal`}
      style={{
        display: "inline-block", // keeps text in one place
        minWidth: `${text.length}ch`, // reserve horizontal space
        whiteSpace: "pre", // preserve spacing
        lineHeight: "1em", // fix height to font size
        height: "1em", // prevent vertical expansion
      }}
    >
      {displayedText}
    </span>
  );
}
