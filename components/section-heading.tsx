import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center mb-10">
      <h2 className="text-3xl font-bold capitalize text-center">{children}</h2>
      <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan"></div>
    </div>
  );
}
