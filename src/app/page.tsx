import { HomeContent } from "@/components/HomeContent";

export default function Home() {
  return (
    <div className="min-h-screen pt-16 sm:pt-20 p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center">
        <HomeContent />
      </div>
    </div>
  );
}