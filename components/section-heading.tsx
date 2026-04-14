import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  subtitle?: string;
};

export default function SectionHeading({
  children,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center mb-14">
      <h2 className="text-3xl sm:text-4xl font-bold capitalize text-center tracking-tight">
        {children}
      </h2>
      <div className="mt-4 flex items-center gap-1.5">
        <div className="h-1 w-3 rounded-full bg-accent-violet/50"></div>
        <div className="h-1 w-14 rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan animate-gradient-flow"></div>
        <div className="h-1 w-3 rounded-full bg-accent-cyan/50"></div>
      </div>
      {subtitle && (
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 max-w-md text-center">
          {subtitle}
        </p>
      )}
    </div>
  );
}
