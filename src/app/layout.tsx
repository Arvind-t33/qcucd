import type { Metadata } from "next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Navbar } from "@/components/ui/Navbar";
import { NavbarSolid } from "@/components/ui/NavbarSolid";
import { AuroraBackground } from "@/components/ui/aurora-background";

const navbarItems = [
  { text: "Home", href: "/" },
  { text: "Join", href: "/join" },
  { text: "Hackathons", href: "/hackathons" },
  
  { text: "Workshops", href: "/workshops" },
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" },
];


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Quantum Computing @ UCD",
  description: "UCD Quantum Computing Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ 
          overscrollBehaviorY: "auto", 
          backgroundColor: "#18181b" // same as bg-zinc-900
        }}
      >
        <AuroraBackground>
          <div className="relative z-10">
            {/* top nav */}
            <Navbar items={navbarItems} />
            {/* solid nav (for mobile) */}
            <NavbarSolid items={navbarItems} />

            {children}
            
            {/* Footer spacer to allow scrolling past content */}
            <div className="h-24"></div>
          </div>
        </AuroraBackground>
      </body>
    </html>
  );
}
