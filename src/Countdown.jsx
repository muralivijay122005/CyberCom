import React, { useEffect, useState } from "react";

// GlitchNumber Component
function GlitchNumber({ value }) {
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    let frame = 0;
    const chars = "0123456789";
    const scrambleFrames = 10; // number of random frames before showing correct number
    const interval = setInterval(() => {
      if (frame < scrambleFrames) {
        setDisplay(
          String(value)
            .split("")
            .map(() => chars[Math.floor(Math.random() * chars.length)])
            .join("")
        );
        frame++;
      } else {
        setDisplay(String(value).padStart(2, "0"));
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <span className="supply-regular text-2xl md:text-4xl text-white">
      {display}
    </span>
  );
}

// Countdown Component
export default function CountdownToFeb1() {
  const computeTarget = () => new Date(2026, 1, 1, 0, 0, 0); // Feb 1, 2026

  const [target, setTarget] = useState(() => computeTarget());
  const [timeLeft, setTimeLeft] = useState(() => {
    const diff = computeTarget() - new Date();
    return diff > 0 ? diff : 0;
  });

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft((prev) => {
        const newDiff = target - new Date();
        return newDiff > 0 ? newDiff : 0;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  useEffect(() => {
    if (timeLeft === 0) setTarget(computeTarget());
  }, [timeLeft]);

  const totalSeconds = Math.floor(timeLeft / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div className="mx-auto text-center h-fit">
      <h2 className="text-sm md:text-xl justify-center mx-auto items-center text-sky-500 w-fit px-3 mb-3">
        LAUNCHING IN
      </h2>
      <div className="flex gap-2 md:gap-3 justify-center items-center">
        {[
          { value: days, label: "DAYS" },
          { value: hours, label: "HOURS" },
          { value: minutes, label: "MINS" },
          { value: seconds, label: "SECS" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center px-2 md:px-3 rounded-lg"
          >
            <GlitchNumber value={pad(item.value)} />
            <div className="mt-1 text-lg md:text-lg text-white">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
