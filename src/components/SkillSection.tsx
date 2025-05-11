"use client";

import { GlowingCards } from "./GlowingCards";
import { skills as SkillList } from "@/helper/skills.json";
import SkillPayload from "@/models/skillpayload";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function SkillSection() {
  const [isall, setIsall] = useState(false);
  const tooggleSkills = () => {
    setIsall(!isall);
  };

  return (
    <div className="w-full min-h-[35rem] h-auto p-5 flex-col justify-center">
      <h1 className="text-center mt-2 mb-9 text-3xl leading-8 font-extrabold tracking-normal text-white sm:text-4xl">
        My Core Skills
      </h1>
      <div className=" w-full size-fit   flex flex-row  gap-3 flex-wrap">
        {SkillList.map((item: SkillPayload, index) => {
          return (
            item.isFeatured && <GlowingCards key={index * 111} payload={item} />
          );
        })}
        <AnimatePresence>
          {isall &&
            SkillList.map((item: SkillPayload, index) => {
              return (
                !item.isFeatured && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <GlowingCards key={index * 111} payload={item} />
                  </motion.div>
                )
              );
            })}
        </AnimatePresence>
      </div>

      <div className=" mt-15 mb-15 w-full flex justify-center">
        <div
          className=" w-28 cursor-pointer text-center  px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          onClick={tooggleSkills}
        >
          {isall ? "See Less" : "View All"}
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
