import { GlowingCards } from "./GlowingCards";

function SkillSection() {
  return (
    <div className="w-full h-[40rem] flex ">
      <div className=" w-full p-2 flex  gap-3">
        <GlowingCards />
        <GlowingCards />
        <GlowingCards />
        <GlowingCards />
      </div>
    </div>
  );
}

export default SkillSection;
