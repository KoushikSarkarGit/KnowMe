"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { Animated_Tooltip_Component } from "./Animated_Tooltip_Component";
import { Text_Generator_Component } from "./Text_Generator_Component";
import React, { lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import { GlowingCards } from "./GlowingCards";
import { AboutMeGlowingCards } from "./AboutMeGlowingCards";

export function Hero_Colorfull_Component() {
  const { ref, inView } = useInView({
    triggerOnce: true, // load only once
    threshold: 0.2, // load when 20% visible
  });

  let LeetcodeData = {
    id: 111,
    title: "Leetcode",
    slug: "leetcode",
    description: "leetcode description",
    isFeatured: true,
    image: "/Skill_Logo/dsa-logo.png",
  };
  let GithubData = {
    id: 111,
    title: "Github",
    slug: "Github",
    description: "Github description",
    isFeatured: true,
    image: "/Skill_Logo/dsa-logo.png",
  };

  return (
    <HeroHighlight>
      <Animated_Tooltip_Component />

      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-15 md:text-2xl lg:text-4xl font-bold text-neutral-700 dark:text-white max-w-8xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        I'm Koushik Sarkar, a{" "}
        <Highlight className="text-black dark:text-white">
          Full-Stack Developer
        </Highlight>{" "}
        with{" "}
        <Highlight className="text-black dark:text-white">
          2+ years of experience
        </Highlight>{" "}
        crafting high-performance applications.
      </motion.h1>

      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="mt-25 text-2xl px-3 md:text-2xl lg:text-3xl font-bold text-neutral-700 dark:text-white max-w-7xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        I specialize in{" "}
        <Highlight className="text-black dark:text-white">
          React.js, Node.js, Next.js, Mendix, and MongoDB
        </Highlight>{" "}
        for full-stack development. I thrive on transforming ideas into sleek,
        scalable products — from real-time social apps to robust e-commerce
        platforms.
      </motion.h1>

      <div className="w-full size-fit   flex flex-row  gap-3 flex-wrap">
        <AboutMeGlowingCards payload={LeetcodeData} />
        <AboutMeGlowingCards payload={GithubData} />
      </div>

      <div ref={ref} className="mt-20 w-full flex justify-center text-center">
        <Suspense fallback={<div style={{ minHeight: 80 }}>Loading...</div>}>
          {inView && <Text_Generator_Component />}
        </Suspense>
      </div>
    </HeroHighlight>
  );
}
