import { ThreedCard } from "@/components/ThreeDCard";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";
import AllProjects from "@/helper/AllProjects.json";
import Project from "@/models/Project";

export default async function ProjectViewPage({
  params,
}: {
  params: { projectid: string };
}) {
  const { projectid } = await params;
  const project = AllProjects.Projects.find(
    (item: Project) => item.id.toString() === projectid
  );

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div className="w-full p-5 md:px-15  py-25 min-h-[40rem] flex flex-col justify-start ">
        {project && (
          <div className="grid grid-cols-14 gap-4 ">
            <div className="col-span-14 md:col-span-6   ">
              <ThreedCard />
            </div>
            <div className="col-span-14 md:col-span-8 py-20 px-2 ">
              <h1 className="text-4xl text-center pb-5">{project.title}</h1>
              <div className="pb-5">{project.description}</div>
              <div className="pb-5">
                {project.skillsUsed
                  .map((skill) => {
                    return `${skill}`;
                  })
                  .join(" , ")}
              </div>

              <div className=" w-full md:w-3/4 flex flex-row justify-between">
                <Link href={""}>
                  <Button
                    borderRadius="1.75rem"
                    className="bg-white herobtn dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                  >
                    Live Demo
                  </Button>
                </Link>

                <Link href={""}>
                  <Button
                    borderRadius="1.75rem"
                    className="bg-white herobtn dark:bg-[#172e5c]  text-black dark:text-white border-neutral-200 dark:border-slate-800"
                  >
                    Github Repo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
