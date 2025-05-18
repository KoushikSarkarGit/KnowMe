import { HoverEffect } from "./ui/card-hover-effect";
import AllProjects from "@/helper/AllProjects.json";

export default function HoverCards() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <HoverEffect projects={AllProjects.Projects} />
    </div>
  );
}
