"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/ui/Navbar";
import { NavbarSolid } from "@/components/ui/NavbarSolid";

interface NavigationProps {
  items: { text: string; href: string }[];
}

export function ConditionalNavigation({ items }: NavigationProps) {
  const pathname = usePathname();
  const isHackathonsPage = pathname === '/hackathons';

  return (
    <>
      {/* Only show normal Navbar if not on hackathons page */}
      {!isHackathonsPage && <Navbar items={items} />}
      
      {/* Show NavbarSolid on mobile OR if on hackathons page */}
      <NavbarSolid 
        items={items} 
        forceShow={isHackathonsPage}
      />
    </>
  );
}