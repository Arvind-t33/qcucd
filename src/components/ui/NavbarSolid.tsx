"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { NavbarButton } from "@/components/ui/navbar-button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavbarSolidProps {
  items: { text: string }[];
}

export function NavbarSolid({ items }: NavbarSolidProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
        "md:hidden fixed top-0 left-0 w-full text-white flex items-center justify-center transition-all duration-300 ease-in-out",
        isScrolled ? "h-16 shadow-md" : "h-16",
        "md:bg-black"
      )}
      style={{ fontFamily: '"geist-mono", monospace', zIndex: 50 }}
    >
      <div className="hidden md:flex space-x-5">
        {items.map((item, index) => (

          <NavbarButton key={index} text={item.text} />
        ))}
        {/* <NavbarButton text="Home" />
        <NavbarButton text="About" />
        <NavbarButton text="Services" />
        <NavbarButton text="Contact" /> */}
      </div>
      <div className="md:hidden flex justify-between items-center w-full p-4">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div
          className="md:hidden flex flex-col space-y-1 absolute top-16 left-4 text-sm"
          style={{ transform: 'translateY(-0.5rem)' }}
        >
          {items.map((item, index) => (
            <NavbarButton
            key={index}
            text={item.text}
            href={item.href}
            className="transition-transform duration-300 hover:scale-110"
          />
          ))}
        </div>
      )}
    </nav>
  );
}