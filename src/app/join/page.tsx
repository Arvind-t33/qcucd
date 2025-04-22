"use client";

import React from "react";
import { SignupFormDemo } from "@/components/sign-up-form";

export default function Join() {
  return (
    <div className="min-h-screen pt-10 flex flex-col items-center">
      <div className="min-h-screen flex flex-col items-center px-4 py-16">  {/* removed pt-32, added py-16 */}
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Join the Club
        </h1>

        <div className="max-w-2xl text-white/80 text-lg">
          <p className="mb-6">
            We welcome all UC Davis students interested in quantum computing,
            regardless of prior experience.
          </p>

          <h2 className="text-2xl font-semibold mb-2 text-white">
            Membership Benefits
          </h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">
              Access to workshop materials and recordings
            </li>
            <li className="mb-2">
              Networking opportunities with industry professionals
            </li>
            <li className="mb-2">
              Hands-on experience with quantum computing technologies
            </li>
            <li className="mb-2">
              Collaborative research projects
            </li>
          </ul>

          {/* instead of full‑screen centering, just give it some top margin */}
          <div className="mt-8 bg-black/50 backdrop-blur-sm p-4 rounded-md">
            <SignupFormDemo />
          </div>
        </div>
      </div>
    </div>
  );
}