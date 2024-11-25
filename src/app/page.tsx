import { HomeContent } from "@/components/HomeContent";
import { Navbar } from "@/components/ui/Navbar";
import { NavbarSolid } from "@/components/ui/NavbarSolid";

const navbarItems = [
  { text: "Home" },
  { text: "About" },
  { text: "Workshops" },
  { text: "Contact" },
  { text: "Join" },
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