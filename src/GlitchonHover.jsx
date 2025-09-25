import React, { useState } from "react";

export default function GlitchonHover({
  text,
  textColor = "text-white",
  glitchRadius = 2,
}) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

  // Split text into words to preserve word boundaries
  const words = text.split(" ");

  return (
    <span
      className={`inline-block ${textColor}`}
      style={{ whiteSpace: "pre-wrap", wordBreak: "normal" }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {word.split("").map((char, charIndex) => (
            <HoverChar
              key={`${wordIndex}-${charIndex}`}
              char={char}
              chars={chars}
              index={`${wordIndex}-${charIndex}`}
              glitchRadius={glitchRadius}
            />
          ))}
          {wordIndex < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

function HoverChar({ char, chars, index, glitchRadius }) {
  const [display, setDisplay] = useState(char);

  const handleMouseEnter = () => {
    let frame = 0;
    const scrambleFrames = 8;
    const interval = setInterval(() => {
      if (frame < scrambleFrames) {
        setDisplay(chars[Math.floor(Math.random() * chars.length)]);
        frame++;
      } else {
        setDisplay(char);
        clearInterval(interval);
      }
    }, 30);

    // Affect surrounding characters
    for (let offset = -glitchRadius; offset <= glitchRadius; offset++) {
      if (offset === 0) continue;
      const sibling = document.querySelector(
        `[data-char-index='${index.split("-")[0]}-${
          parseInt(index.split("-")[1]) + offset
        }']`
      );
      if (sibling) {
        let f = 0;
        const siblingInterval = setInterval(() => {
          if (f < scrambleFrames) {
            sibling.textContent =
              chars[Math.floor(Math.random() * chars.length)];
            f++;
          } else {
            sibling.textContent = sibling.dataset.char;
            clearInterval(siblingInterval);
          }
        }, 30);
      }
    }
  };

  return (
    <span
      className="inline-block"
      data-char={char}
      data-char-index={index}
      onMouseEnter={handleMouseEnter}
      style={{ display: "inline-block" }}
    >
      {display}
    </span>
  );
}
