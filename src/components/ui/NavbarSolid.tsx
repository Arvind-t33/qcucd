"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { NavbarButton } from "@/components/ui/navbar-button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavbarSolidProps {
  items: { text: string; href: string }[];
}

export function NavbarSolid({ items }: NavbarSolidProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "md:hidden fixed top-0 left-0 w-full transition-all duration-300 ease-in-out z-50",
        isScrolled ? "bg-black/90 shadow-md" : "bg-transparent",
        "text-white"
      )}
      style={{ fontFamily: '"geist-mono", monospace' }}
    >
      <div className="flex items-center h-16 px-4">
        {/* menu items: occupies all space to left of toggle, scrolls only if overflow */}
        <div
          className={cn(
            "flex-1 flex overflow-x-auto whitespace-nowrap space-x-4 no-scrollbar transition-opacity duration-200",
            isMenuOpen 
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {items.map((item, idx) => (
            <NavbarButton
              key={idx}
              text={item.text}
              href={item.href}
              className="inline-block text-sm hover:scale-105 transition-transform"
            />
          ))}
        </div>

        {/* toggle button always visible on right */}
        <button onClick={() => setIsMenuOpen((o) => !o)}>
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
    </nav>
  );
}