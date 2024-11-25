"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { NavbarButton } from "@/components/ui/navbar-button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "hidden md:flex fixed top-0 left-0 w-full bg-transparent text-white items-center justify-center transition-all duration-300 ease-in-out",
        isScrolled ? "h-full w-16 flex-col items-start p-4" : "h-16 w-full"
      )}
      style={{ fontFamily: '"geist-mono", monospace' }}
    >
      <div className="p-4 transform transition-transform hover:scale-110">
        <NavbarButton text="Home" />
      </div>
      <div className="p-4 transform transition-transform hover:scale-110">
        <NavbarButton text="About" />
      </div>
      <div className="p-4 transform transition-transform hover:scale-110">
        <NavbarButton text="Services" />
      </div>
      <div className="p-4 transform transition-transform hover:scale-110">
        <NavbarButton text="Contact" />
      </div>
    </nav>
  );
}