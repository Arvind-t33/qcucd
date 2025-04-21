"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { NavbarButton } from "@/components/ui/navbar-button";

interface NavbarProps {
  items: { text: string }[];
}

export function Navbar({ items }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [topNavVisible, setTopNavVisible] = useState(true);
  const [sideNavVisible, setSideNavVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // First hide the top navbar
        setTopNavVisible(false);
        
        // After a short delay, show the side navbar
        setTimeout(() => {
          setIsScrolled(true);
          setSideNavVisible(true);
        }, 300);
      } else {
        // First hide the side navbar
        setSideNavVisible(false);
        
        // After a short delay, show the top navbar
        setTimeout(() => {
          setIsScrolled(false);
          setTopNavVisible(true);
        }, 300);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top horizontal navbar */}
      <nav
        className={cn(
          "hidden md:flex fixed text-white items-center justify-center transition-all duration-700 ease-in-out",
          "h-16 w-full top-0 left-0"
        )}
        style={{ 
          fontFamily: '"geist-mono", monospace',
          background: 'transparent',
          opacity: topNavVisible ? 1 : 0,
          transform: topNavVisible ? 'translateY(0)' : 'translateY(-20px)',
          pointerEvents: topNavVisible ? 'auto' : 'none',
        }}
      >
        {items.map((item, index) => (
          <div 
            key={index} 
            className="mx-3 my-0 transform transition-all duration-700 ease-in-out"
          >
            <NavbarButton 
              key={index}
              text={item.text}
              href={item.href}
              className="text-base hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </nav>

      {/* Side vertical navbar */}
      <nav
        className={cn(
          "hidden md:flex fixed text-white flex-col items-start p-4 left-0 top-0 h-full w-16 transition-all duration-700 ease-in-out"
        )}
        style={{ 
          fontFamily: '"geist-mono", monospace',
          background: 'rgba(0,0,0,0.3)', // Made this more transparent
          backdropFilter: 'blur(5px)',
          opacity: sideNavVisible ? 1 : 0,
          transform: sideNavVisible ? 'translateX(0)' : 'translateX(-20px)',
          pointerEvents: sideNavVisible ? 'auto' : 'none',
        }}
      >
        {items.map((item, index) => (
          <div 
            key={index} 
            className="my-3 mx-0 transform transition-all duration-500 ease-in-out"
          >
            <NavbarButton 
              key={index}
              text={item.text}
              href={item.href}
              className="text-sm hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </nav>
    </>
  );
}