"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  subPoint: Boolean;
  company?: string;
  post?: string;
  jobrole?: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto pt-20 pb-5 px-4 md:px-8 lg:px-10 flex flex-col items-center">
        <h2
          className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl
        text-3xl leading-8 font-extrabold tracking-normal text-white sm:text-4xl
        "
        >
          Work Experience
        </h2>
        <p className="text-neutral-700 text-center   dark:text-neutral-300 text-sm md:text-lg max-w-2lg">
          I&apos;ve been working with PWC India for the past 2 years.
          Here&apos;s a timeline of my journey.
        </p>
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex justify-start  pt-10 ${
              item.subPoint ? "md:pt-20" : "md:pt-35"
            } md:gap-10`}
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-1/2">
              <div
                className={` ${
                  item.subPoint ? "subouter" : "outer"
                } absolute left-3 md:left-3  rounded-full bg-white dark:bg-black flex items-center justify-center dark:shadow-[0px_0px_15px_0px_#2D2D2D]`}
              >
                <div
                  className={`${
                    item.subPoint ? "subpoint" : "point"
                  } rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 `}
                />
              </div>
              <div className="flex flex-col">
                <h3 className="hidden md:block text-xl md:pl-20 md:text-2xl font-bold text-neutral-400 dark:text-neutral-300 ">
                  {item.title}
                </h3>
                {item.company && (
                  <h5 className="hidden md:block text-xs md:pl-20 md:text-xs font-bold text-neutral-500 dark:text-neutral-500 ">
                    {item.company}
                  </h5>
                )}

                {item.post && (
                  <h5 className="hidden md:block text-xs md:pl-20 md:text-xs font-bold text-neutral-500 dark:text-neutral-500 ">
                    {item.post}, ({item.jobrole})
                  </h5>
                )}
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-300">
                {item.title}
              </h3>
              <div
                className={
                  item.subPoint ? "text-sm pl-10 text-slate-300" : "text-lg"
                }
              >
                {item.content}
              </div>{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
