"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

interface CardMemberProps {
  image: string;
  name: string;
  description: string;
  email: string;
}

export function CardMember({ image, name, description, email }: CardMemberProps) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-xs p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={image}
          alt={name}
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {name}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
        <a href={`mailto:${email}`} className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Contact</span>
        </a>
      </BackgroundGradient>
    </div>
  );
}