import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export function ImpactCard({ kpi, label, desc }: { kpi: string; label: string; desc: string }) {
  return (
    <Card className="rounded-3xl bg-white/5 border-white/10">
      <CardContent className="p-6">
        <p className="text-3xl font-bold">{kpi}</p>
        <p className="text-slate-300">{label}</p>
        <p className="mt-2 text-sm text-slate-400">{desc}</p>
      </CardContent>
    </Card>
  );
}