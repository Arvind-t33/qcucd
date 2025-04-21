#!/usr/bin/env bash
set -e

# 1. Remove unused imports / vars
sed -i '' '/SparklesCore/d' src/app/layout.tsx
sed -i '' '/MemberCardList/d' src/components/HomeContent.tsx
sed -i '' '/useState/d' src/components/blocks/cards-demo-3.tsx
sed -i '' '/TextGenerateEffect/d' src/components/main_text_sparkles.tsx
sed -i '' '/TextGenerateEffectDemo/d' src/components/main_text_sparkles.tsx
sed -i '' '/toast/d' src/components/sign-up-form.tsx
sed -i '' '/Toaster/d' src/components/sign-up-form.tsx
sed -i '' '/ButtonsCard/d' src/components/sign-up-form.tsx
sed -i '' '/isScrolled/d' src/components/ui/Navbar.tsx
sed -i '' '/useMemo/d' src/components/ui/sparkles.tsx

# 2. Swap any remaining @ts-ignore to @ts-expect-error
grep -rl "// *@ts-ignore" src/ \
  | xargs sed -i '' 's@// *@ts-ignore@// @ts-expect-error@g'

# 3. Replace all “: any” with “: unknown” project‑wide
grep -rl ": any" src/ \
  | xargs sed -i '' 's/: any/: unknown/g'

# 4. Fix React hook deps
#    cards-demo-3.tsx: add [sequence]
sed -i '' 's/useEffect(\(.*\), \[\])/useEffect(\1, [sequence])/' src/components/blocks/cards-demo-3.tsx
#    text-generate-effect.tsx: add [animate, duration, filter]
sed -i '' 's/useEffect(\(.*\), \[\])/useEffect(\1, [animate, duration, filter])/' src/components/ui/text-generate-effect.tsx
#    typewriter-effect.tsx: add [animate]
sed -i '' 's/useEffect(\(.*\), \[\])/useEffect(\1, [animate])/' src/components/ui/typewriter-effect.tsx

# 5. Disable Next.js <img> lint in meet_the_team.tsx
sed -i '' '31i\  {/* eslint-disable-next-line @next/next/no-img-element */}' src/components/meet_the_team.tsx

# 6. Replace unsafe Function type in animated-modal.tsx
sed -i '' 's/: Function/: () => void/g' src/components/ui/animated-modal.tsx

# 7. Drop empty interfaces in input.tsx
sed -i '' '/interface .* {}$/d' src/components/ui/input.tsx

# 8. Patch useIntersectionObserver to capture ref.current
#    (insert “const current = ref.current;” and swap uses)
sed -i '' '34i\    const current = ref.current;' src/hooks/useIntersectionObserver.tsx
sed -i '' 's/ref.current/current/g' src/hooks/useIntersectionObserver.tsx

# 9. Re-run build
npm run build
