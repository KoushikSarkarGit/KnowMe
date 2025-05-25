"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreedCard({
  imgsrc,
  projectname,
}: {
  imgsrc: string;
  projectname: string;
}) {
  return (
    <CardContainer className="inter-var ">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#6600ff] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold w-full text-center text-neutral-600 dark:text-white"
        >
          {projectname}
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={imgsrc}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-4 text-center dark:text-neutral-200"
        >
          Hover over this card to see a cool effect 😎
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
