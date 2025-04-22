import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Navbar } from "@/components/ui/Navbar";
import { NavbarSolid } from "@/components/ui/NavbarSolid";

const navbarItems = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Workshops", href: "/workshops" },
  { text: "Contact", href: "/contact" },
  { text: "Join", href: "/join" },
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b`}
      >
        {/* top nav */}
        <Navbar items={navbarItems} />
        {/* solid nav (if you need both) */}
        <NavbarSolid items={navbarItems} />

        {children}
      </body>
    </html>
  );
}
