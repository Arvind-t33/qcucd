"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { IconBrandDiscord } from "@tabler/icons-react";

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="max-w-2xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-transparent bg-opacity-75 hover:bg-opacity-80 dark:bg-black">
      <div className="flex flex-col items-center text-center">
        <h2 className="font-bold text-3xl bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
          Sign up for the Club
        </h2>
        <p className="text-sm max-w-sm mt-2 bg-gradient-to-r from-white via-slate-300 to-white bg-clip-text text-transparent">
          With Quantum Computing being one of the most transformative technologies of the modern age, join the movement to learn, build, and grow with us.
        </p>
      </div>

      <form className="my-8" onSubmit={handleSubmit}>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group/discord-btn transform transition-transform duration-500 hover:scale-105"
            onClick={() => window.open('https://discord.gg/J8BXEersk8', '_blank', 'noopener,noreferrer')}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#5865F2] px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl relative">
              <span className="group-hover/discord-btn:opacity-0 text-center transition duration-500">
                Discord
              </span>
              <div className="opacity-0 group-hover/discord-btn:opacity-100 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                <IconBrandDiscord className="h-4 w-4 text-white" />
              </div>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};