"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { NavbarButton } from "@/components/ui/navbar-button";
import { ChevronRightIcon } from "@heroicons/react/24/outline";


interface NavbarProps {
  items: { text: string; href: string }[];
}

export function Navbar({ items }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    // Debounce scroll handler for better performance
    let scrollTimer: ReturnType<typeof setTimeout>;
    
    const handleScroll = () => {
      if (scrollTimer) clearTimeout(scrollTimer);
      
      scrollTimer = setTimeout(() => {
        setIsScrolled(window.scrollY > 100);
      }, 10); // Small timeout for smoother state changes
    };

    // Use passive listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (scrollTimer) clearTimeout(scrollTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top horizontal navbar */}
      <nav
        className={cn(
          "hidden md:flex fixed text-black items-center justify-center will-change-transform",
          "h-16 w-full top-0 left-0 z-50"
        )}
        style={{ 
          fontFamily: '"geist-mono", monospace',
          background: 'transparent',
          transition: 'transform 400ms ease-out, opacity 400ms ease-out',
          opacity: isScrolled ? 0 : 1,
          transform: isScrolled ? 'translateY(-20px)' : 'translateY(0)',
          pointerEvents: isScrolled ? 'none' : 'auto',
        }}
      >
        {items.map((item, index) => (
          <div 
            key={index} 
            className="mx-3 my-0"
          >
            <NavbarButton 
              text={item.text}
              href={item.href}
              className="text-base hover:scale-105 transition-transform text-black"
            />
          </div>
        ))}
      </nav>

      {/* Side vertical navbar */}
      <nav
        className={cn(
          "hidden md:flex fixed text-black flex-col items-start p-4 left-0 top-0 h-full w-16 z-50 will-change-transform"
        )}
        style={{ 
          fontFamily: '"geist-mono", monospace',
          background: 'transparent', // Completely transparent background
          transition: 'transform 400ms ease-out, opacity 400ms ease-out',
          opacity: isScrolled ? 1 : 0,
          transform: isScrolled ? 'translateX(0)' : 'translateX(-20px)',
          pointerEvents: isScrolled ? 'auto' : 'none',
        }}
      >
        {items.map((item, index) => (
          <div 
            key={index} 
            className="my-3 mx-0"
          >
            <NavbarButton 
              text={item.text}
              href={item.href}
              className="text-sm hover:scale-105 transition-transform text-black"
            />
          </div>
        ))}
        
        {/* Subtle down arrow indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-60">
          <ChevronRightIcon 
            className="h-4 w-4 text-black animate-pulse-gentle rotate-90" 
            aria-hidden="true" 
          />
        </div>
      </nav>
    </>
  );
}