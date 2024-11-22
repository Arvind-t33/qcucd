import Image from "next/image";
import { MainTextSparkles } from "@/components/main_text_sparkles";
import { MemberCardList } from "@/components/member_card_list";
import { SignupFormDemo } from "@/components/sign-up-form";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 mt-16 row-start-2 items-center sm:items-center">
        <div className="mt-16 w-full flex justify-center"> {/* Add margin-top and center align */}
          <MainTextSparkles />
        </div>
        <div className="mt-16 w-full flex justify-center"> {/* Add margin-top and center align */}
          <MemberCardList />
        </div>
        <div className="mt-16 w-full flex justify-center"> {/* Add margin-top and center align */}
          <SignupFormDemo />
        </div>
      </main>
    </div>
  );
}