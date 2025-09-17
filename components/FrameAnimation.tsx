"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const FrameAnimation = () => {
  const [animationKey, setAnimationKey] = useState(0);

  // Restart animation every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  // 4x4 grid positions (16 squares total) - increased gaps
  const gridPositions = [
    // Row 1
    { row: 1, col: 1, top: "30%", left: "30%" },
    { row: 1, col: 2, top: "30%", left: "43%" },
    { row: 1, col: 3, top: "30%", left: "57%" },
    { row: 1, col: 4, top: "30%", left: "70%" },
    // Row 2
    { row: 2, col: 1, top: "43%", left: "30%" },
    { row: 2, col: 2, top: "43%", left: "43%" },
    { row: 2, col: 3, top: "43%", left: "57%" },
    { row: 2, col: 4, top: "43%", left: "70%" },
    // Row 3
    { row: 3, col: 1, top: "57%", left: "30%" },
    { row: 3, col: 2, top: "57%", left: "43%" },
    { row: 3, col: 3, top: "57%", left: "57%" },
    { row: 3, col: 4, top: "57%", left: "70%" },
    // Row 4
    { row: 4, col: 1, top: "70%", left: "30%" },
    { row: 4, col: 2, top: "70%", left: "43%" },
    { row: 4, col: 3, top: "70%", left: "57%" },
    { row: 4, col: 4, top: "70%", left: "70%" },
  ];

  // Define which squares belong to which expansion phase
  const getExpansionPhase = (row: number, col: number) => {
    // Phase 1: Center 4 squares (positions 2,2 2,3 3,2 3,3)
    if ((row === 2 && col === 2) || (row === 2 && col === 3) || 
        (row === 3 && col === 2) || (row === 3 && col === 3)) {
      return 1;
    }
    // Phase 2: Corner squares (positions 1,1 1,4 4,1 4,4)
    if ((row === 1 && col === 1) || (row === 1 && col === 4) || 
        (row === 4 && col === 1) || (row === 4 && col === 4)) {
      return 2;
    }
    // Phase 3: First set of edge squares (top and bottom edges: 1,2 1,3 4,2 4,3)
    if ((row === 1 && (col === 2 || col === 3)) || 
        (row === 4 && (col === 2 || col === 3))) {
      return 3;
    }
    // Phase 4: Second set of edge squares (left and right edges: 2,1 2,4 3,1 3,4)
    if (((row === 2 || row === 3) && (col === 1 || col === 4))) {
      return 4;
    }
    return 4; // Fallback
  };

  // Create square animation based on position and phase
  const createSquareAnimation = (position: typeof gridPositions[0], index: number) => {
    const phase = getExpansionPhase(position.row, position.col);
    
    // Define timing based on phase for expansion and contraction
    let expandAppear, expandMove, holdStart, contractStart, contractMove, contractEnd;
    if (phase === 1) { // Center 4 squares
      expandAppear = 0.05;
      expandMove = 0.15;
      holdStart = 0.4;
      contractStart = 0.8;
      contractMove = 0.9;
      contractEnd = 1.0;
    } else if (phase === 2) { // Corner squares
      expandAppear = 0.2;
      expandMove = 0.3;
      holdStart = 0.4;
      contractStart = 0.75;
      contractMove = 0.85;
      contractEnd = 0.95;
    } else if (phase === 3) { // First set of edge squares (top/bottom)
      expandAppear = 0.35;
      expandMove = 0.4;
      holdStart = 0.4;
      contractStart = 0.7;
      contractMove = 0.8;
      contractEnd = 0.9;
    } else { // Phase 4 - Second set of edge squares (left/right)
      expandAppear = 0.4;
      expandMove = 0.45;
      holdStart = 0.45;
      contractStart = 0.65;
      contractMove = 0.75;
      contractEnd = 0.85;
    }

    return {
      initial: {
        top: "50%", // Start from center
        left: "50%",
        width: 6,
        height: 6,
        backgroundColor: "#E5E7EB", // Light gray
        x: "-50%",
        y: "-50%",
        borderRadius: 1,
        opacity: 0
      },
      animate: {
        top: [
          "50%", // 0% - all start at center
          "50%", // Wait until expand appear time
          position.top, // Move to final position
          position.top, // Hold at position
          "50%", // Contract back to center
          "50%"  // End at center
        ],
        left: [
          "50%", // 0% - all start at center
          "50%", // Wait until expand appear time
          position.left, // Move to final position
          position.left, // Hold at position
          "50%", // Contract back to center
          "50%"  // End at center
        ],
        opacity: [
          0, // 0% - invisible
          1, // Appear
          1, // Stay visible during expansion
          1, // Hold visibility
          1, // Stay visible during contraction
          0  // Fade out at end
        ]
      },
      transition: {
        duration: 15,
        times: [0, expandAppear, expandMove, holdStart, contractStart, contractEnd],
        repeat: Infinity
      }
    };
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Starting center square */}
      <motion.div
        key={`center-start-${animationKey}`}
        className="absolute"
        initial={{
          top: "50%",
          left: "50%",
          width: 6,
          height: 6,
          backgroundColor: "#E5E7EB",
          x: "-50%",
          y: "-50%",
          borderRadius: 1,
          opacity: 1
        }}
        animate={{
          opacity: [
            1, // 0% - visible
            1, // Stay visible until center squares emerge
            0, // Fade out when center 4 squares appear
            0, // Stay invisible
            0, // Still invisible during contraction
            1  // Reappear at the end for next cycle
          ]
        }}
        transition={{
          duration: 15,
          times: [0, 0.05, 0.1, 0.95, 0.98, 1],
          repeat: Infinity
        }}
      />
      
      {/* 4x4 Grid squares */}
      {gridPositions.map((position, index) => (
        <motion.div
          key={`grid-square-${index}-${animationKey}`}
          className="absolute"
          {...createSquareAnimation(position, index)}
        />
      ))}
    </div>
  );
};

export default FrameAnimation;
