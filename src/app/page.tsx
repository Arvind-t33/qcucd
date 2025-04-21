import { HomeContent } from "@/components/HomeContent";
import { Navbar } from "@/components/ui/Navbar";
import { NavbarSolid } from "@/components/ui/NavbarSolid";

const navbarItems = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Workshops", href: "/workshops" },
  { text: "Contact", href: "/contact" },
  { text: "Join", href: "/join" },
];

export default function Home() {
  return (
    <div className="min-h-screen pt-16 sm:pt-20 p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar items={navbarItems}/>
      <NavbarSolid items={navbarItems}/>
      <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center">
        <HomeContent />
      </div>
    </div>
  );
}