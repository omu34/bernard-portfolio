import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export function SkillCard({
  title,
  items,
  icon: Icon,
}: {
  title: string;
  items: string[];
  icon: React.ElementType;
}) {
  return (
    <Card className="flex flex-col h-full rounded-3xl bg-white/5 border-white/10 text-white hover:bg-white/10 transition-all duration-300">
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-3">
          <div className="size-10 grid place-items-center rounded-2xl bg-white/10 border border-white/10">
            <Icon className="size-5 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>

        <ul className="mt-2 space-y-2 flex-grow">
          {items.map((i) => (
            <li key={i} className="text-sm text-slate-400">
              {i}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
