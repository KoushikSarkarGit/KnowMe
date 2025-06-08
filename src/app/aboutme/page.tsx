import { Hero_Colorfull_Component } from "@/components/Hero_Colorfull_Component";
import { Text_Generator_Component } from "@/components/Text_Generator_Component";

export default function AboutMe() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96]  antialiased bg-grid-white/[0.02]">
        <div className="w-full min-h-screen  flex flex-col justify-center items-center ">
          <div className="mt-20">
            <Hero_Colorfull_Component />
          </div>
        </div>
      </main>
    </>
  );
}
