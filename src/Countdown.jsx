import React, { useEffect, useState } from "react";

export default function CountdownToSept27({ targetYear }) {
  const computeTarget = (yr) => {
    const now = new Date();
    const year = yr ?? now.getFullYear();
    let t = new Date(year, 8, 27, 0, 0, 0);
    if (now > t) t = new Date(year + 1, 8, 27, 0, 0, 0);
    return t;
  };

  const [target, setTarget] = useState(() => computeTarget(targetYear));
  const [timeLeft, setTimeLeft] = useState(() => {
    const diff = computeTarget(targetYear) - new Date();
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
    if (timeLeft === 0)
      setTarget((t) => new Date(t.getFullYear() + 1, 8, 27, 0, 0, 0));
  }, [timeLeft]);

  const totalSeconds = Math.floor(timeLeft / 1000);
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div className="mx-auto text-center h-fit">
      <h2 className="text-sm md:text-xl justify-center mx-auto items-center text-sky-500 w-fit px-3 mb-3 ">
        LAUNCHING IN
      </h2>
      <div className="flex gap-2 md:gap-3 justify-center items-center">
        {[
          { value: hours, label: "HOURS" },
          { value: minutes, label: "MINS" },
          { value: seconds, label: "SECS" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center px-2 md:px-3 rounded-lg"
          >
            <div className="text-2xl md:text-4xl">{pad(item.value)}</div>
            <div className="mt-1 text-lg md:text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
