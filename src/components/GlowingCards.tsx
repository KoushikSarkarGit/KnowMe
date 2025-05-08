"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";

export function GlowingCards({
  height,
  width,
}: {
  height?: Number | 10;
  width?: Number | 40;
}) {
  return (
    <div
      className={`relative w-[${width}rem]  h-[${height}rem] rounded-2xl  p-2 md:rounded-3xl md:p-2`}
    >
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
        <div className="relative flex flex-1 justify-between gap-3">
          <div className="w-fit rounded-lg border border-gray-600 p-2">abs</div>

          <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
            title
          </h3>
        </div>
      </div>
    </div>
  );
}

// interface GridItemProps {
//   area: string;

//   title: string;
//   description: React.ReactNode;
// }

// const GridItem = ({ area, title, description }: GridItemProps) => {
//   return (
//     <li className={`min-h-[14rem] list-none ${area}`}>
//       <div className="relative h-full rounded-2xl  p-2 md:rounded-3xl md:p-2">
//         <GlowingEffect
//           spread={40}
//           glow={true}
//           disabled={false}
//           proximity={64}
//           inactiveZone={0.01}
//         />
//         <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
//           <div className="relative flex flex-1 justify-between gap-3">
//             <div className="w-fit rounded-lg border border-gray-600 p-2">
//               abs
//             </div>
//             <div className="space-y-3">
//               <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
//                 {title}
//               </h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </li>
//   );
// };
