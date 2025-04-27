"use client";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

type AnimationOptions = {
  threshold?: number;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  direction?: "up" | "down" | "left" | "right";
  initiallyVisible?: boolean;
  customEasing?: string;
};

export function useScrollAnimation(options: AnimationOptions = {}) {
  const {
    threshold = 0.05,
    delay = 0.05,
    duration = 0.6, // Longer duration for smoother transition
    distance = 12, // Reduced distance for subtler movement
    once = true,
    direction = "up",
    initiallyVisible = false,
    customEasing = "cubic-bezier(0.33, 1, 0.68, 1)" // Custom easing for smoother motion
  } = options;

  const [hasAnimated, setHasAnimated] = useState(initiallyVisible);
  const ref = useRef(null);
  
  // More forgiving view detection
  const inView = useInView(ref, { 
    once, 
    amount: threshold,
    margin: "0px 0px -5% 0px" // More subtle margin
  });

  // Set hasAnimated when element comes into view
  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  // Calculate transform based on direction
  const getTransform = () => {
    switch (direction) {
      case "up": return { y: distance };
      case "down": return { y: -distance };
      case "left": return { x: distance };
      case "right": return { x: -distance };
    }
  };

  // Animation properties
  const animationProps = {
    ref,
    initial: initiallyVisible ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...getTransform() },
    animate: (inView || hasAnimated) 
      ? { opacity: 1, x: 0, y: 0 } 
      : { opacity: 0, ...getTransform() },
    transition: {
      duration,
      ease: customEasing,
      delay,
      opacity: { duration: duration * 1.2 } // Slightly longer opacity transition for smoother fade
    },
    style: {
      // Preserve layout space even when opacity is 0
      minHeight: "inherit",
      width: "100%",
      // Performance optimization
      willChange: "opacity, transform"
    }
  };

  return { ref, inView: inView || hasAnimated, animationProps };
}