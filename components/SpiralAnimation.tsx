"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const SpiralAnimation = () => {
  const [animationKey, setAnimationKey] = useState(0);

  // Restart animation every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  // Create square spiral path points
  const createSquareSpiralPath = () => {
    const points = [];
    const centerX = 50;
    const centerY = 50;
    let currentX = centerX;
    let currentY = centerY;
    
    // Add center point
    points.push({ x: `${currentX}%`, y: `${currentY}%` });
    
    const directions = [
      { dx: 1, dy: 0 },  // Right
      { dx: 0, dy: 1 },  // Down
      { dx: -1, dy: 0 }, // Left
      { dx: 0, dy: -1 }  // Up
    ];
    
    let stepSize = 2.5; // Starting step size (smaller for more rings)
    let directionIndex = 0;
    let stepsInCurrentDirection = 0;
    let maxStepsInDirection = 1;
    let directionChanges = 0;
    
    // Create spiral with controlled bounds - extended for longer spiral
    while (stepSize < 22 && // Increased max step size
           currentX > 10 && currentX < 90 && // Relaxed bounds slightly
           currentY > 10 && currentY < 90) {
      const direction = directions[directionIndex];
      
      // Calculate next position
      const nextX = currentX + direction.dx * stepSize;
      const nextY = currentY + direction.dy * stepSize;
      
      // Check if next position would be out of bounds
      if (nextX < 5 || nextX > 95 || nextY < 5 || nextY > 95) {
        break; // Stop creating spiral if it would go out of bounds
      }
      
      // Move in current direction
      currentX = nextX;
      currentY = nextY;
      points.push({ x: `${currentX}%`, y: `${currentY}%` });
      
      stepsInCurrentDirection++;
      
      // Check if we need to change direction
      if (stepsInCurrentDirection >= maxStepsInDirection) {
        directionIndex = (directionIndex + 1) % 4;
        stepsInCurrentDirection = 0;
        directionChanges++;
        
        // Increase step size every 2 direction changes
        if (directionChanges % 2 === 0) {
          maxStepsInDirection++;
          stepSize += 1.0; // Smaller increment for more rings
        }
      }
    }
    
    return points;
  };

  const spiralPoints = createSquareSpiralPath();

  // Create the square spiral SVG path
  const createSquareSpiralSVGPath = () => {
    if (spiralPoints.length === 0) return '';
    
    const firstPoint = spiralPoints[0];
    let path = `M ${parseFloat(firstPoint.x)} ${parseFloat(firstPoint.y)}`;
    
    for (let i = 1; i < spiralPoints.length; i++) {
      const point = spiralPoints[i];
      path += ` L ${parseFloat(point.x)} ${parseFloat(point.y)}`;
    }
    
    return path;
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Spiral Path */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <motion.path
          key={`spiral-path-${animationKey}`}
          d={createSquareSpiralSVGPath()}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="1"
          initial={{
            pathLength: 0,
            opacity: 0
          }}
          animate={{
            pathLength: [
              0, // 0% - no path
              1, // Draw complete spiral first
              1, // Hold spiral visible while square moves out
              1, // Keep visible until square reaches end
              0, // Spiral unwinds as square returns (erasing effect)
              0  // Gone
            ],
            opacity: [
              0, // 0% - invisible
              1, // Appear with spiral drawing
              1, // Stay visible while square moves
              1, // Stay visible at peak
              1, // Visible during unwinding
              0  // Fade out
            ]
          }}
          transition={{
            duration: 15,
            times: [0, 0.3, 0.5, 0.7, 0.9, 1], // Spiral forms 0-30%, holds 30-70%, unwinds 70-90%
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>

      {/* Center Square */}
      <motion.div
        key={`center-square-${animationKey}`}
        className="absolute"
        initial={{
          top: "50%",
          left: "50%",
          width: 6,
          height: 6,
          backgroundColor: "#E5E7EB", // Light gray
          x: "-50%",
          y: "-50%",
          borderRadius: 1,
          opacity: 1
        }}
        animate={{
          top: [
            "50%", // 0% - center
            "50%", // Stay at center while spiral forms
            "50%", // Stay at center after spiral is complete
            ...spiralPoints.slice(1).map(point => point.y), // Move along spiral path outward
            ...spiralPoints.slice(0, -1).reverse().map(point => point.y), // Move back along spiral path (erasing)
            "50%"  // End at center
          ],
          left: [
            "50%", // 0% - center
            "50%", // Stay at center while spiral forms
            "50%", // Stay at center after spiral is complete
            ...spiralPoints.slice(1).map(point => point.x), // Move along spiral path outward
            ...spiralPoints.slice(0, -1).reverse().map(point => point.x), // Move back along spiral path (erasing)
            "50%"  // End at center
          ],
          backgroundColor: [
            "#E5E7EB", // 0% - light gray
            "#E5E7EB", // Stay light gray while spiral forms
            "#ef4444", // Turn red when spiral is complete
            ...Array(spiralPoints.length - 1).fill("#ef4444"), // Stay red during outward journey
            ...Array(spiralPoints.length - 1).fill("#ef4444"), // Stay red during return journey (erasing)
            "#E5E7EB"  // Turn light gray at end
          ],
          opacity: [
            1, // 0% - visible
            1, // Stay visible while spiral forms
            1, // Stay visible when turning red
            ...Array(spiralPoints.length - 1).fill(1), // Stay visible during outward journey
            ...Array(spiralPoints.length - 1).fill(1), // Stay visible during return journey
            1  // End visible
          ]
        }}
        transition={{
          duration: 15,
          times: (() => {
            const times = [0, 0.3, 0.35]; // 0-30% spiral forms, 30-35% square turns red
            
            // Outward journey timing (35-70%)
            const outwardStart = 0.35;
            const outwardEnd = 0.7;
            const outwardDuration = outwardEnd - outwardStart;
            for (let i = 1; i < spiralPoints.length; i++) {
              times.push(outwardStart + (i / (spiralPoints.length - 1)) * outwardDuration);
            }
            
            // Return journey timing (70-90%) - matches spiral unwinding
            const returnStart = 0.7;
            const returnEnd = 0.9;
            const returnDuration = returnEnd - returnStart;
            for (let i = 0; i < spiralPoints.length - 1; i++) {
              times.push(returnStart + (i / (spiralPoints.length - 2)) * returnDuration);
            }
            
            times.push(1.0); // Final keyframe
            return times;
          })(),
          repeat: Infinity,
          ease: "linear" // Linear for consistent erasing effect
        }}
      />
    </div>
  );
};

export default SpiralAnimation;
