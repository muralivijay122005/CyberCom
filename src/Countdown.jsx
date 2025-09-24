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
    <div className=" mx-auto text-center h-fit">
      <h2 className="text-lg justify-center mx-auto items-center text-black w-fit px-3 mb-3 bg-sky-500">
        LAUNCHING IN
      </h2>
      <div className="flex gap-3 justify-center items-center">
        <div className="flex flex-col items-center px-3 py-2 rounded-lg">
          <div className="text-4xl">{pad(days)}</div>
          <div className="mt-1 text-md">DAYS</div>
        </div>
        <div className="flex flex-col items-center px-3 py-2 rounded-lg">
          <div className="text-4xl">{pad(hours)}</div>
          <div className="mt-1 text-md">HOURS</div>
        </div>
        <div className="flex flex-col items-center px-3 py-2 rounded-lg">
          <div className="text-4xl ">{pad(minutes)}</div>
          <div className="mt-1 text-md">MINS</div>
        </div>
        <div className="flex flex-col items-center px-3 py-2 rounded-lg">
          <div className="text-4xl ">{pad(seconds)}</div>
          <div className="mt-1 text-md">SECS</div>
        </div>
      </div>
    </div>
  );
}
