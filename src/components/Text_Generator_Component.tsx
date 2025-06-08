"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `With a strong grip on DSA, C++, and modern backend/frontend tools, I focus on performance, real-time features, and clean UI/UX. I also enjoy exploring AI and automation to build smarter applications.

Let’s build something awesome.
`;

export function Text_Generator_Component() {
  return (
    <div className="max-w-7xl whitespace-pre-line">
      <TextGenerateEffect words={words} />
    </div>
  );
}
