"use client";
import { MainTextSparkles } from "@/components/main_text_sparkles";
import { MemberCardList } from "@/components/member_card_list";
import { SignupFormDemo } from "@/components/sign-up-form";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { MeetTheTeamWithLamp as MeetTheTeam } from "@/components/meet_the_team";

export function HomeContent() {
  const [mainTextRef, mainTextVisible] = useIntersectionObserver();
  const [memberCardRef, memberCardVisible] = useIntersectionObserver();
  const [signupFormRef, signupFormVisible] = useIntersectionObserver();

  return (
    <main className="flex flex-col gap-8 mt-16 row-start-2 items-center sm:items-center">
      <div
        ref={mainTextRef}
        className={`mt-16 w-full flex justify-center transition-opacity duration-1000 ${
          mainTextVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <MainTextSparkles />
      </div>
      <div
        ref={memberCardRef}
        className={`mt-16 w-full flex justify-center transition-opacity duration-1000 ${
          memberCardVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/*<MemberCardList />*/}
        <MeetTheTeam />
      </div>
      <div
        ref={signupFormRef}
        className={`mt-16 w-full flex justify-center transition-opacity duration-1000 ${
          signupFormVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <SignupFormDemo />
      </div>
    </main>
  );
}