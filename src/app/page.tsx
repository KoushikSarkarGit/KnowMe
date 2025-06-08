import IntroSection from "@/components/IntroSection";

import SecondarySection from "@/components/SecondarySection";
import SkillSection from "@/components/SkillSection";
import { StickyScrollComponent } from "@/components/StickyScrollComponent";
import { TimelineComponent } from "@/components/TimelineComponent";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <IntroSection />
        <SkillSection />
        <SecondarySection />
        {/* <StickyScrollComponent /> */}

        <TimelineComponent />
      </main>
    </>
  );
}
