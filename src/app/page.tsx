import { HomeContent } from "@/components/HomeContent";

export default function Home() {
  return (
    <div className="min-h-screen pt-28 flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <HomeContent />
      </div>
    </div>
  );
}