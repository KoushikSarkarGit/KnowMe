import React from "react";

export default function BlueLine() {
  return (
    <div className="blueline-fix w-full bg-black flex flex-col items-center justify-center overflow-hidden bg-transparent rounded-md">
      <div className="w-full h-auto relative flex  items-center justify-center   ">
        {/* Gradients */}
        <div className="absolute  top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute  top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute  top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent l-50 h-[2px] w-1/4 blur-sm" />
        <div className="absolute l-50 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
      </div>
    </div>
  );
}
