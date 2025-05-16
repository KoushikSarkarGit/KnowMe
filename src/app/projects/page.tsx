import HoverCards from "@/components/HoverCards";

export default function Projects() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <div className="w-full p-5 pt-40 h-[40rem] flex flex-col justify-center items-center">
          <h1 className="mt-50 text-3xl font-extrabold tracking-normal">
            All Projects
          </h1>

          <HoverCards />
        </div>
      </main>
    </>
  );
}
