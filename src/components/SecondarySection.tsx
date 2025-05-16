"use client";
import Link from "next/link";
import courseData from "../helper/FeaturedProjects.json";
import { BackgroundGradient } from "./ui/background-gradient";
import { Button } from "./ui/moving-border";
interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  isLive: boolean;
  owner: string;
  isFeatured: boolean;
  livelink?: string;
  image?: string;
}

function SecondarySection() {
  const featuredProjects = courseData.featuredprojects.filter(
    (course: Project) => course.isFeatured
  );

  return (
    <div id="featuredprojects" className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className=" text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED PROJECTS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-normal text-white sm:text-4xl">
            Checkout My Work
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredProjects.map(
            (item: Project) =>
              item.isFeatured && (
                <div key={item.id} className="flex justify-center">
                  <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                    {item.image && (
                      <div className="phover flex justify-center items-center p-4">
                        <img
                          className=" rounded-[18px]"
                          src={item.image}
                          width={400}
                          height={225}
                          alt="project image"
                        />
                      </div>
                    )}
                    <div className="p-4 pt-0 sm:p-6 sm:pt-0 flex flex-col items-center text-center flex-grow">
                      <p className="text-lg sm:text-3xl text-black mt-1 mb-2 dark:text-neutral-200">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                        {item.description}
                      </p>
                      <Link className="mt-3" href={`/courses/${item.slug}`}>
                        <Button
                          borderRadius="1.75rem"
                          className="bg-white herobtn dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                          Show Project
                        </Button>
                      </Link>
                    </div>
                  </BackgroundGradient>
                </div>
              )
          )}
        </div>
      </div>
      <div className=" mt-20 text-center">
        <Link
          href={"/projects"}
          className=" px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
}

export default SecondarySection;
