// components/ui/lamp.tsx

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPrefersReducedMotion(
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      );
    }
  }, []);
  
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-visible bg-transparent w-full rounded-md",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center">

        {/* soft under-glow */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-zinc-900/50 blur-3xl" />

        {/* thin highlight line */}
        <motion.div
          initial={{ width: "15rem", opacity: 0 }}
          whileInView={{ width: "30rem", opacity: 1 }}
          viewport={{ 
            once: true,  // Run animation only once
            margin: "0px 0px -200px 0px" // Trigger earlier
          }}
          transition={{ 
            delay: prefersReducedMotion ? 0 : 0.3, 
            duration: prefersReducedMotion ? 0 : 0.6, // Reduced from 0.8s
            ease: "easeOut" // Simplified from easeInOut
          }}
          className="absolute inset-auto h-0.5 w-[30rem] -translate-y-[7rem] bg-sky-600 z-10"
          style={{ 
            willChange: "width, opacity",
            contain: "layout"
          }}
        />
      </div>

      {/* your "Meet the Team" content */}
      <div className="relative z-30 -translate-y-80 flex flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};