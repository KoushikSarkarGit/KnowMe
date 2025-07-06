"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import SkillPayload from "@/models/skillpayload";

interface GlowingCardsProps {
  payload: SkillPayload; // Define the type of the payload
}

export function AboutMeGlowingCards({ payload }: GlowingCardsProps) {
  return (
    <div
      className={`relative   w-90 md:w-1/2  h-[19rem] rounded-2xl  p-2 md:rounded-2xl md:p-2`}
    >
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div className="border-0.75 relative flex h-full  flex-col justify-between dark:bg-black  overflow-hidden rounded-xl px-4 py-4   dark:shadow-[0px_0px_15px_0px_#2D2D2D]">
        <div className="flex flex-col  items-center justify-start gap-1">
          <div className="w-full  bg-white  rounded-lg  ">
            <img
              src={payload.image}
              className="object-cover rounded"
              alt="logo"
            />
          </div>

          <div className="  flex flex-col pt-3 h-full  justify-center ">
            <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-1xl/[1.875rem]  dark:text-white">
              {payload.title}
            </h3>
            {/* <p className="pt-[4px] text-gray-500 text-[13px] dark:text-gray-400 ">
              {" "}
              {payload.description}{" "}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
