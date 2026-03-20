"use client";

import { useState, useEffect, useCallback } from "react";

interface ScrambledTextProps {
  texts: string[];
}

const ScrambledText = ({ texts }: ScrambledTextProps) => {
  const [displayText, setDisplayText] = useState(texts[0] || "");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrambling, setIsScrambling] = useState(false);

  const getRandomChar = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    return chars[Math.floor(Math.random() * chars.length)];
  };

  const scrambleToText = useCallback((targetText: string) => {
    setIsScrambling(true);
    const duration = 800;
    const frameRate = 50;
    const totalFrames = duration / frameRate;
    let currentFrame = 0;

    const interval = setInterval(() => {
      let newText = "";

      for (let i = 0; i < targetText.length; i++) {
        const settleFrame =
          Math.floor((i / targetText.length) * totalFrames * 0.4) +
          totalFrames * 0.6;

        if (currentFrame >= settleFrame) {
          newText += targetText[i];
        } else {
          newText += getRandomChar();
        }
      }

      setDisplayText(newText);
      currentFrame++;

      if (currentFrame >= totalFrames) {
        clearInterval(interval);
        setDisplayText(targetText);
        setIsScrambling(false);
      }
    }, frameRate);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % texts.length;
      setCurrentIndex(nextIndex);
      scrambleToText(texts[nextIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, texts, scrambleToText]);

  return (
    <span
      className={`transition-colors duration-200 ${
        isScrambling ? "text-red-400" : "text-zinc-500"
      }`}
    >
      {displayText}
    </span>
  );
};

export default ScrambledText;
