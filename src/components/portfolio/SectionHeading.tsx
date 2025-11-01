import React from "react";

export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-400">{subtitle}</p>}
    </div>
  );
}