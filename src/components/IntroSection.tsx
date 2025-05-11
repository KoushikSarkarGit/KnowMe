import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function IntroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md: py-0">
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="blue" />
      <div className="p-4 relative mt-10 z-10 w-full text-center">
        <h1 className="mt-20 md:pb-2  md:mt-0 text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Crafting Scalable Solutions & Elegant Interfaces
        </h1>
        <p className="mt-5 font-normal text-base md:text-lg text-neutral-300 max-w-4xl mx-auto">
          Hi, I am a full stack developer specializing in building performant
          microservices, intuitive UIs, and secure APIs. Let’s turn complex
          problems into clean, efficient code.
        </p>
        <div className="mt-15">
          <Link href={"#featuredprojects"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white herobtn dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Go To Projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
