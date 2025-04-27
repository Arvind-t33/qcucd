// components/ui/sparkles.tsx
"use client";
import dynamic from "next/dynamic";
import { useId } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Particles = dynamic(
  () => import("@tsparticles/react").then((m) => m.default),
  { ssr: false, loading: () => null }
);

export const SparklesCore = ({
  id,
  className,
  background = "transparent",
  minSize = 0.6,
  maxSize = 1.2,
  speed = 4,
  particleColor = "#ffffff",
  particleDensity = 60,
}: {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
}) => {
  const generatedId = useId();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn(className)}
    >
      <Particles
        id={id || generatedId}
        options={{
          fpsLimit: 60,
          background: { color: { value: background } },
          fullScreen: { enable: false },
          particles: {
            number: { value: particleDensity, density: { enable: true } },
            color: { value: particleColor },
            opacity: {
              value: { min: 0.1, max: 1 },
              animation: { enable: true, speed },
            },
            size: {
              value: { min: minSize, max: maxSize },
            },
            move: { enable: true, speed: { min: 0.1, max: 1 } },
          },
        }}
      />
    </motion.div>
  );
};
