import BlueLine from "@/components/BlueLine";
import HoverCards from "@/components/HoverCards";
import IntroSection from "@/components/IntroSection";
import MovingCards from "@/components/MovingCards";
import SecondarySection from "@/components/SecondarySection";
import { SparklesPreview } from "@/components/SparklesPreview";
import { StickyScrollComponent } from "@/components/StickyScrollComponent";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <IntroSection />
        <SecondarySection />
        <StickyScrollComponent />
        <MovingCards />
        <HoverCards />
        <SparklesPreview />
      </main>
    </>
  );
}
