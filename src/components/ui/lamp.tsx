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
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto h-0.5 w-[30rem] -translate-y-[7rem] bg-purple-700 z-10"
        />
      </div>

    {/* your “Meet the Team” content */}
    <div className="relative z-30 -translate-y-80 flex flex-col items-center px-5">
      {children}
    </div>
  </div>
);
