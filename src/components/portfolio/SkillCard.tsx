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
    
    <Card className="rounded-3xl bg-white/5 border-white/10 text-white animate-blink">
      <CardContent className="p-6">
        <div className="flex items-center gap-3">
          <div className="size-10 grid place-items-center rounded-2xl bg-white/10 border border-white/10">
            <Icon className="size-5 text-white hover:bg-gray-200" />
          </div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <ul className="mt-4 grid gap-2">
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
