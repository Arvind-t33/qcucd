"use client";
import React from "react";
import { MainTextSparkles } from "@/components/main_text_sparkles";
import { SignupFormDemo } from "@/components/sign-up-form";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { MeetTheTeamWithLamp as MeetTheTeam } from "@/components/meet_the_team";
import { useInView } from "framer-motion";

export function HomeContent() {
  // Use Framer Motion's useInView instead of custom hook
  const mainTextRef = React.useRef(null);
  const memberCardRef = React.useRef(null);
  const signupFormRef = React.useRef(null);
  
  // More efficient with threshold and once options
  const mainTextVisible = useInView(mainTextRef, { 
    once: true, 
    amount: 0.2,
    margin: "0px 0px -10% 0px" // Start animation slightly before component is fully in viewport
  });
  
  const memberCardVisible = useInView(memberCardRef, { 
    once: true, 
    amount: 0.2,
    margin: "0px 0px -10% 0px"
  });
  
  const signupFormVisible = useInView(signupFormRef, { 
    once: true, 
    amount: 0.2,
    margin: "0px 0px -10% 0px"
  });
  return (
    <main className="flex flex-col gap-8 mt-16 row-start-2 items-center sm:items-center">
      <div
        ref={mainTextRef}
        className={`mt-16 w-full flex justify-center transition-opacity duration-1000 ${
          mainTextVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <MainTextSparkles />
      </div>
      <div
        ref={memberCardRef}
        className={`mt-16 w-full flex justify-center transition-opacity duration-1000 ${
          memberCardVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <MeetTheTeam />
      </div>
      <div
        ref={signupFormRef}
        className={`mt-16 w-full flex justify-center transition-opacity duration-1000 ${
          signupFormVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <SignupFormDemo />
      </div>
    </main>
  );
}