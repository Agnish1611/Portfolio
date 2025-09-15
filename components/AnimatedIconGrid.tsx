"use client";

import { useState, useEffect } from "react";

const AnimatedIconGrid = () => {
  const [currentPattern, setCurrentPattern] = useState(0);

  const patterns = [
    [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPattern((prev) => (prev + 1) % patterns.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [patterns.length]);

  return (
    <div className="bg-[#eb3030] h-12 w-12 rounded-lg p-2 grid grid-cols-5 gap-[1px]">
      {patterns[currentPattern].map((dot, index) => (
        <div
          key={index}
          className={`h-1 w-1 rounded-sm transition-colors duration-500 ${
            dot === 1 ? "bg-white" : "bg-red-400"
          }`}
        />
      ))}
    </div>
  );
};

export default AnimatedIconGrid;
