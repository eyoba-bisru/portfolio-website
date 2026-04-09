import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold capitalize text-center tracking-tight">
        {children}
      </h2>
      <div className="mt-4 flex items-center gap-1.5">
        <div className="h-1 w-3 rounded-full bg-accent-violet/60"></div>
        <div className="h-1 w-12 rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan animate-gradient-flow"></div>
        <div className="h-1 w-3 rounded-full bg-accent-cyan/60"></div>
      </div>
    </div>
  );
}
