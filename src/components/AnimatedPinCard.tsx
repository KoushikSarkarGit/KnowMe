"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
type AnimatedPinCardProps = {
  title: string;
  href: string;
  image: string;
  platform: string;
  iscopy: boolean;
};
export function AnimatedPinCard({
  title,
  href,
  image,
  platform,
  iscopy,
}: AnimatedPinCardProps) {
  return (
    <div className="  flex items-center justify-center ">
      <PinContainer title={title} href={href} iscopy={iscopy}>
        <div
          className={`relative  md: w-90  h-[6rem] rounded-2xl   md:rounded-2xl `}
        >
          <div className="border-0.75 relative flex h-full  flex-col justify-center   overflow-hidden rounded-xl px-4   dark:shadow-[0px_0px_15px_0px_#2D2D2D]">
            <div className="relative flex flex-1 justify-between items-center gap-1">
              <div className="w-17 h-17 dark:bg-black bg-white flex flex-row items-center rounded-lg  ">
                <img
                  src={image}
                  className="object-cover rounded-xl"
                  alt="logo"
                />
              </div>

              <div className=" w-5/7 flex flex-col pt-3 h-full  justify-start ">
                <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-1xl/[1.2rem] dark:text-white">
                  {platform}
                </h3>
                <p className="pt-[4px] text-gray-500 text-[16px] dark:text-gray-400 ">
                  {" "}
                  {title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
