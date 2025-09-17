"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const LinesAnimation = () => {
  const [animationKey, setAnimationKey] = useState(0);

  // Restart animation every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  // Create animation for each div based on its index (1-7)
  const createDivAnimation = (divIndex: number) => {
    const divNumber = divIndex + 1; // Convert 0-indexed to 1-7
    
    // Calculate final positions with exact 2px gaps between 8px squares
    let finalYOffset = 0;
    if (divNumber === 1) finalYOffset = -30; // Up 30px from center
    else if (divNumber === 2) finalYOffset = -20; // Up 20px from center  
    else if (divNumber === 3) finalYOffset = -10; // Up 10px from center
    else if (divNumber === 4) finalYOffset = 0; // Center
    else if (divNumber === 5) finalYOffset = 10; // Down 10px from center
    else if (divNumber === 6) finalYOffset = 20; // Down 20px from center
    else if (divNumber === 7) finalYOffset = 30; // Down 30px from center
    
    const isDivSeven = divNumber === 7;
    
    return {
      initial: {
        top: "50%",
        left: "50%",
        width: 6,
        height: 6,
        backgroundColor: "#E5E7EB", // Light gray
        x: "-50%",
        y: "-50%",
        opacity: 1
      },
      animate: {
        // Faster step-by-step Y movement
        top: [
          "50%", // 0% - all at center as squares
          "50%", // 5% - stay at center as squares
          "50%", // 10% - become circles, still at center
          // First movement: 1,2,3 up 10px; 5,6,7 down 10px; 4 stays
          `calc(50% + ${divNumber <= 3 ? (divNumber === 4 ? 0 : -10) : (divNumber >= 5 ? 10 : 0)}px)`, // 15%
          // Second movement: 1,2 up 10 more; 6,7 down 10 more
          `calc(50% + ${divNumber <= 2 ? -20 : (divNumber === 3 ? -10 : (divNumber === 4 ? 0 : (divNumber === 5 ? 10 : 20)))}px)`, // 20%
          // Final movement: 1 up 10 more; 7 down 10 more
          `calc(50% + ${finalYOffset}px)`, // 25% - final positions with exact 2px gaps
          `calc(50% + ${finalYOffset}px)`, // 30% - stretch into lines
          `calc(50% + ${finalYOffset}px)`, // 35% - lines stretched
          `calc(50% + ${finalYOffset}px)`, // 50% - stay as lines longer
          `calc(50% + ${finalYOffset}px)`, // 65% - still as lines
          `calc(50% + ${finalYOffset}px)`, // 70% - shrink back to circles
          // Faster retrace path: final -> second -> first -> center
          `calc(50% + ${divNumber <= 2 ? -20 : (divNumber === 3 ? -10 : (divNumber === 4 ? 0 : (divNumber === 5 ? 10 : 20)))}px)`, // 75%
          `calc(50% + ${divNumber <= 3 ? (divNumber === 4 ? 0 : -10) : (divNumber >= 5 ? 10 : 0)}px)`, // 80%
          "50%", // 85% - back to center, become squares
          "50%" // 100% - end as squares at center
        ],
        left: [
          "50%", // 0-100% - all stay horizontally centered
          "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%"
        ],
        width: [
          8, // 0% - start as squares
          8, // 5% - stay as squares
          8, // 10% - now circles, ready to move
          8, // 15%
          8, // 20%
          8, // 25%
          isDivSeven ? 30 : 60, // 30% - stretch: div 7 = 30px, others = 60px
          isDivSeven ? 30 : 60, // 35%
          isDivSeven ? 30 : 60, // 50% - stay stretched longer
          isDivSeven ? 30 : 60, // 65%
          8, // 70% - shrink back to circles
          8, // 75%
          8, // 80%
          8, // 85% - back to squares
          8 // 100%
        ],
        height: [
          8, // 0% - start as squares
          8, // 5% - stay as squares
          8, // 10% - circles before movement
          8, // 15% - circles during movement
          8, // 20% - circles in final positions
          8, // 25%
          4, // 30% - thin lines when stretching starts
          4, // 35% - stay thin
          4, // 50% - thin lines longer
          4, // 65% - still thin
          8, // 70% - back to circles
          8, // 75%
          8, // 80%
          8, // 85% - back to squares
          8  // 100%
        ],
        borderRadius: [
          0, // 0% - start as squares (no rounding)
          0, // 5% - stay as squares
          4, // 10% - change to circles (50% of 8px) before movement
          4, // 15% - circles during movement
          4, // 20% - circles in final positions
          4, // 25%
          4, // 30% - rounded lines (50% of 8px height)
          4, // 35%
          4, // 50%
          4, // 65%
          4, // 70% - back to rounded squares/circles
          4, // 75%
          4, // 80%
          0, // 85% - back to squares at center
          0  // 100% - end as squares
        ],
        backgroundColor: [
          "#E5E7EB", // 0% - light gray
          "#E5E7EB", // 5%
          "#E5E7EB", // 10%
          "#E5E7EB", // 15%
          "#E5E7EB", // 20%
          "#E5E7EB", // 25%
          "#E5E7EB", // 30% - still light gray when stretching starts
          isDivSeven ? "#ef4444" : "#E5E7EB", // 35% - div 7 turns red AFTER stretching
          isDivSeven ? "#ef4444" : "#E5E7EB", // 50%
          isDivSeven ? "#ef4444" : "#E5E7EB", // 65%
          "#E5E7EB", // 70% - div 7 back to light gray when shrinking
          "#E5E7EB", // 75%
          "#E5E7EB", // 80%
          "#E5E7EB", // 85%
          "#E5E7EB" // 100%
        ],
        // For div 7 left-side stretch and left alignment
        x: isDivSeven ? [
          "-50%", "-50%", "-50%", "-50%", "-50%", "-50%",
          "0%", "0%", "0%", "0%", // 30-65% - left aligned (0% = left edge at center)
          "-50%", "-50%", "-50%", "-50%", "-50%" // Back to center
        ] : [
          "-50%", "-50%", "-50%", "-50%", "-50%", "-50%",
          "-50%", "-50%", "-50%", "-50%", // Both sides stretch, stay centered
          "-50%", "-50%", "-50%", "-50%", "-50%"
        ],
        opacity: [
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 // Always visible
        ]
      },
      transition: {
        duration: 15,
        times: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.5, 0.65, 0.7, 0.75, 0.8, 0.85, 1],
        repeat: Infinity
      }
    };
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Create 7 divs */}
      {[...Array(7)].map((_, index) => (
        <motion.div
          key={`div-${index + 1}-${animationKey}`}
          className="absolute"
          {...createDivAnimation(index)}
        />
      ))}
    </div>
  );
};

export default LinesAnimation;
