"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import SkillPayload from "@/models/skillpayload";

interface GlowingCardsProps {
  payload: SkillPayload; // Define the type of the payload
}

export function GlowingCards({ payload }: GlowingCardsProps) {
  return (
    <div
      className={`relative my-1   md: w-90  h-[7rem] rounded-2xl  p-2 md:rounded-2xl md:p-2`}
    >
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div className="border-0.75 relative flex h-full  flex-col justify-center   overflow-hidden rounded-xl px-4   dark:shadow-[0px_0px_15px_0px_#2D2D2D]">
        <div className="relative flex flex-1 justify-between items-center gap-1">
          <div className="w-17 h-17 bg-white flex flex-row items-center rounded-lg  ">
            <img
              src={payload.image}
              className="object-cover rounded"
              alt="logo"
            />
          </div>

          <div className=" w-5/7 flex flex-col pt-3 h-full  justify-start ">
            <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-1xl/[1.875rem] dark:text-white">
              {payload.title}
            </h3>
            <p className="pt-[4px] text-gray-500 text-[13px] dark:text-gray-400 ">
              {" "}
              {payload.description}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
