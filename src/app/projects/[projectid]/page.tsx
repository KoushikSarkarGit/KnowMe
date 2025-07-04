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
    <main className="min-h-screen bg-gray-900 antialiased  bg-grid-white/[0.02]">
      <div className="w-full p-5 md:px-15  py-25 min-h-[40rem] flex flex-col justify-start ">
        {project ? (
          <div className="grid grid-cols-14 gap-4 ">
            <div className="col-span-14 md:col-span-6   ">
              <ThreedCard imgsrc={project.image} projectname={project.title} />
            </div>
            <div className="col-span-14 md:col-span-8 py-20 pr-2 ">
              <h1 className="text-4xl  text-center font-bold pb-7">
                {project.title}
              </h1>
              <div className="pb-7 text-lg">{project.description}</div>
              <div className="pb-10 text-lg">{project.fullDescription}</div>
              <div className="pb-15 flex gap-2">
                <p className=" font-bold break-normal whitespace-nowrap">
                  Skills Used :
                </p>
                <p className="color-[#dacbd9] italic">
                  {project.skillsUsed
                    .map((skill) => {
                      return `${skill}`;
                    })
                    .join(" , ")}
                </p>
              </div>

              <div className=" w-full px-5 flex flex-row justify-around">
                <Link href={project.livelink || ""} target="_blank">
                  <Button
                    borderRadius="1.75rem"
                    className="bg-white herobtn dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                  >
                    Live Demo
                  </Button>
                </Link>

                <Link href={project.githubrepo} target="_blank">
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
        ) : (
          <div className="w-full h-[30rem] flex justify-center items-center">
            <h1 className="text-2xl dark:color-white"> No Page Found</h1>
          </div>
        )}
      </div>
    </main>
  );
}
