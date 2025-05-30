"use client";

import React from "react";
import { SignupFormDemo } from "@/components/sign-up-form";

export default function Contact() {
  return (
    <div className="min-h-screen pt-28 flex flex-col items-center">
      <div className="min-h-screen flex flex-col items-center px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Contact Us
        </h1>
{/* /** placeholder until i replace them with icons and links */ */}
        <p className="max-w-2xl text-white/80 text-lg mb-6 text-center">
          Find us on Linkedin and Instagram!
          Have questions about the Quantum Computing Club at UC Davis? 
         Join our Discord community to ask questions, get support, and connect with members:
        </p>

        <div className="mt-8 backdrop-blur-sm p-4 rounded-md">
          <SignupFormDemo />
        </div>
      </div>
    </div>
  );
}
