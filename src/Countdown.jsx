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
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div className="max-w-sm mx-auto p-6 bg-white/90 dark:bg-slate-900/80 rounded-2xl shadow-lg text-center">
      <h2 className="text-lg font-semibold mb-3">Launching in</h2>
      <div className="flex gap-3 justify-center items-center text-sm">
        <div className="flex flex-col items-center px-3 py-2 rounded-lg">
          <div className="text-3xl font-bold">{days}</div>
          <div className="mt-1 text-xs">days</div>
        </div>
        <div className="flex flex-col items-center px-3 py-2 rounded-lg">
          <div className="text-3xl font-bold">{pad(hours)}</div>
          <div className="mt-1 text-xs">hours</div>
        </div>
        <div className="flex flex-col items-center px-3 py-2 rounded-lg">
          <div className="text-3xl font-bold">{pad(minutes)}</div>
          <div className="mt-1 text-xs">minutes</div>
        </div>
        <div className="flex flex-col items-center px-3 py-2 rounded-lg">
          <div className="text-3xl font-bold">{pad(seconds)}</div>
          <div className="mt-1 text-xs">seconds</div>
        </div>
      </div>
    </div>
  );
}
