// components/ui/lamp.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-transparent w-full rounded-md",
      className
    )}
  >
    <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center">
      {[
        { start: 70,   // right-half cone
          gradient: "from-purple-500 via-transparent to-transparent",
          position: "right-1/2" },
        { start: 290,  // left-half cone
          gradient: "from-transparent via-transparent to-purple-500",
          position: "left-1/2" },
      ].map(({ start, gradient, position }) => (
        <motion.div
          key={start}
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className={cn(
            "absolute inset-auto h-56 w-[30rem] bg-gradient-conic text-white",
            position,
            // apply the correct Tailwind gradient stops
            gradient.split(" ").map((g) => `bg-gradient-${g}`).join(" ")
          )}
          style={{
            // keep your conic-gradient setup
            backgroundImage: `conic-gradient(from ${start}deg at center top, var(--tw-gradient-stops))`,
            // this mask does _all_ the fading in one shot:
            maskImage: "radial-gradient(ellipse at center top, white 20%, transparent 80%)",
            maskMode: "alpha",
            WebkitMaskImage: "radial-gradient(ellipse at center top, white 20%, transparent 80%)",
            WebkitMaskMode: "alpha",
          }}
        />
      ))}

      {/* the rest of your glows, unchanged */}
      <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-transparent blur-2xl" />
      <div className="absolute top-1/2 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
      <div className="absolute inset-auto h-36 w-[28rem] -translate-y-1/2 rounded-full bg-navy-500 opacity-50 blur-3xl" />
      <motion.div
        initial={{ width: "8rem" }}
        whileInView={{ width: "16rem" }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-auto h-36 w-64 -translate-y-[6rem] rounded-full bg-navy-500 blur-2xl"
      />
      <motion.div
        initial={{ width: "15rem" }}
        whileInView={{ width: "30rem" }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-auto h-0.5 w-[30rem] -translate-y-[7rem] bg-navy-500"
      />
    </div>

    {/* your “Meet the Team” etc. */}
    <div className="relative flex -translate-y-80 flex-col items-center px-5">
      {children}
    </div>
  </div>
);
