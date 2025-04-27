"use client";
import React from "react";
import { MainText } from "@/components/main_text";
import { SignupFormDemo } from "@/components/sign-up-form";
import { MeetTheTeamWithLamp as MeetTheTeam } from "@/components/meet_the_team";
import { useInView } from "framer-motion";

export function HomeContent() {
  // Use Framer Motion's useInView for efficient animations
  const mainTextRef = React.useRef(null);
  const memberCardRef = React.useRef(null);
  const signupFormRef = React.useRef(null);
  
  const mainTextVisible = useInView(mainTextRef, { 
    once: true, 
    amount: 0.2,
    margin: "0px 0px -10% 0px"
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
        className="mt-16 w-full flex justify-center transition-opacity duration-1000"
        style={{
          opacity: mainTextVisible ? 1 : 0,
          transform: mainTextVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 1000ms, transform 800ms'
        }}
      >
        <MainText />
      </div>
      <div
        ref={memberCardRef}
        className="mt-16 w-full flex justify-center transition-opacity duration-1000"
        style={{
          opacity: memberCardVisible ? 1 : 0,
          transform: memberCardVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 1000ms, transform 800ms'
        }}
      >
        <MeetTheTeam />
      </div>
      <div
        ref={signupFormRef}
        className="mt-16 w-full flex justify-center transition-opacity duration-1000"
        style={{
          opacity: signupFormVisible ? 1 : 0,
          transform: signupFormVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 1000ms, transform 800ms'
        }}
      >
        <SignupFormDemo />
      </div>
      
      {/* Bottom spacing to ensure scrollability */}
      <div className="h-24 w-full"></div>
    </main>
  );
}