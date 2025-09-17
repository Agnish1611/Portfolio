"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const BlockchainAnimation = () => {
  const [animationKey, setAnimationKey] = useState(0);

  // Restart animation every 15 seconds (increased from 12s for longer starting duration)
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  // Position variants for each square
  const positions = {
    square1: { top: "35%", left: "35%" },
    square2: { top: "35%", left: "65%" },
    square3: { top: "65%", left: "35%" },
    square4: { top: "65%", left: "65%" }
  };

  // Animation props for each square
  const createSquareAnimation = (position: keyof typeof positions) => ({
    initial: {
      top: "50%",
      left: "50%",
      width: 6,
      height: 6,
      backgroundColor: "#E5E7EB", // All start light gray
      borderRadius: 0,
      x: "-50%",
      y: "-50%",
      boxShadow: "none"
    },
    animate: {
      top: [
        "50%", // 0% - starting position
        "50%", // 20% - stay in center for shorter time
        positions[position].top, // 25% - move to position
        positions[position].top, // 30% - stay in position
        positions[position].top, // 36% - stay in position
        positions[position].top, // 37% - stay in position
        positions[position].top, // 65% - stay in position
        positions[position].top, // 70% - stay in position after connections removed
        "50%", // 75% - return to center (much faster merge)
        "50%"  // 100% - end at center
      ],
      left: [
        "50%", // 0%
        "50%", // 20%
        positions[position].left, // 25%
        positions[position].left, // 30%
        positions[position].left, // 36%
        positions[position].left, // 37%
        positions[position].left, // 65%
        positions[position].left, // 70%
        "50%", // 75% - return to center (much faster merge)
        "50%"  // 100%
      ],
      width: [
        8, // 0% - visible starting size
        8, // 20%
        12, // 25%
        12, // 30%
        12, // 36%
        12, // 37%
        12, // 65%
        12, // 70%
        8, // 75% - return to visible size (much faster merge)
        8  // 100%
      ],
      height: [
        8, // 0% - visible starting size
        8, // 20%
        12, // 25%
        12, // 30%
        12, // 36%
        12, // 37%
        12, // 65%
        12, // 70%
        8, // 75% - return to visible size (much faster merge)
        8  // 100%
      ],
      backgroundColor: [
        "#E5E7EB", // 0% - all start light gray
        "#E5E7EB", // 20% - stay light gray
        "#E5E7EB", // 25% - stay light gray while moving
        "#E5E7EB", // 30% - stay light gray when in position
        "#E5E7EB", // 36% - still light gray when connections start appearing
        position === "square4" ? "#ef4444" : "#E5E7EB", // 37% - bottom right instantly red right after connections appear
        position === "square4" ? "#ef4444" : "#E5E7EB", // 65% - stay red/light gray
        position === "square4" ? "#ef4444" : "#E5E7EB", // 70% - stay red/light gray
        "#E5E7EB", // 75% - all instantly back to light gray when returning to center
        "#E5E7EB"  // 100% - end light gray
      ],
      borderRadius: [
        0, // 0% - keep as squares
        0, // 20%
        0, // 25%
        0, // 30%
        0, // 36%
        0, // 37%
        0, // 65%
        0, // 70%
        0, // 75%
        0  // 100%
      ],
      boxShadow: [
        "none", // 0% - no shadows
        "none", // 20%
        "none", // 25%
        "none", // 30%
        "none", // 36%
        "none", // 37%
        "none", // 65%
        "none", // 70%
        "none", // 75%
        "none"  // 100%
      ]
    },
    transition: {
      duration: 15,
      times: [0, 0.2, 0.25, 0.3, 0.36, 0.37, 0.65, 0.7, 0.75, 1],
      repeat: Infinity
    }
  });

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Squares */}
      <motion.div
        key={`square1-${animationKey}`}
        className="absolute"
        style={{ x: "-50%", y: "-50%" }}
        {...createSquareAnimation("square1")}
      />
      <motion.div
        key={`square2-${animationKey}`}
        className="absolute"
        style={{ x: "-50%", y: "-50%" }}
        {...createSquareAnimation("square2")}
      />
      <motion.div
        key={`square3-${animationKey}`}
        className="absolute"
        style={{ x: "-50%", y: "-50%" }}
        {...createSquareAnimation("square3")}
      />
      <motion.div
        key={`square4-${animationKey}`}
        className="absolute"
        style={{ x: "-50%", y: "-50%" }}
        {...createSquareAnimation("square4")}
      />

      {/* Connection Lines */}
      <motion.div
        key={`h1-${animationKey}`}
        className="absolute bg-[#E5E7EB]"
        style={{
          width: 18,
          height: 1,
          top: "35%",
          left: "50%",
          x: "-50%",
          y: "-50%"
        }}
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: [0, 0, 0, 1, 1, 0, 0, 0]
        }}
        transition={{
          duration: 15,
          times: [0, 0.25, 0.32, 0.35, 0.65, 0.68, 0.7, 1],
          repeat: Infinity
        }}
      />
      <motion.div
        key={`h2-${animationKey}`}
        className="absolute bg-[#E5E7EB]"
        style={{
          width: 18,
          height: 1,
          top: "65%",
          left: "50%",
          x: "-50%",
          y: "-50%"
        }}
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: [0, 0, 0, 1, 1, 0, 0, 0]
        }}
        transition={{
          duration: 15,
          times: [0, 0.25, 0.32, 0.35, 0.65, 0.68, 0.7, 1],
          repeat: Infinity
        }}
      />
      <motion.div
        key={`v1-${animationKey}`}
        className="absolute bg-[#E5E7EB]"
        style={{
          width: 1,
          height: 18,
          top: "50%",
          left: "35%",
          x: "-50%",
          y: "-50%"
        }}
        initial={{ scaleY: 0 }}
        animate={{
          scaleY: [0, 0, 0, 1, 1, 0, 0, 0]
        }}
        transition={{
          duration: 15,
          times: [0, 0.25, 0.32, 0.35, 0.65, 0.68, 0.7, 1],
          repeat: Infinity
        }}
      />
      <motion.div
        key={`v2-${animationKey}`}
        className="absolute bg-[#E5E7EB]"
        style={{
          width: 1,
          height: 18,
          top: "50%",
          left: "65%",
          x: "-50%",
          y: "-50%"
        }}
        initial={{ scaleY: 0 }}
        animate={{
          scaleY: [0, 0, 0, 1, 1, 0, 0, 0]
        }}
        transition={{
          duration: 15,
          times: [0, 0.25, 0.32, 0.35, 0.65, 0.68, 0.7, 1],
          repeat: Infinity
        }}
      />
    </div>
  );
};

export default BlockchainAnimation;
