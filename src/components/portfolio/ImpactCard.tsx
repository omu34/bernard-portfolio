// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";

// export function ImpactCard({ kpi, label, desc }: { kpi: string; label: string; desc: string }) {
//   return (
//     <Card className="rounded-3xl bg-white/5 border-white/10">
//       <CardContent className="p-6">
//         <p className="text-3xl font-bold">{kpi}</p>
//         <p className="text-slate-300">{label}</p>
//         <p className="mt-2 text-sm text-slate-400">{desc}</p>
//       </CardContent>
//     </Card>
//   );
// }


// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";

// export function ImpactCard({
//   kpi,
//   label,
//   desc,
// }: {
//   kpi: React.ReactNode; // ✅ was string
//   label: string;
//   desc: string;
// }) {
//   return (
//     <Card className="rounded-3xl bg-white/5 border-white/10 text-white">
//       <CardContent className="p-6 text-center space-y-2">
//         <h3 className="text-3xl font-bold">{kpi}</h3>
//         <p className="text-sm font-medium uppercase opacity-80">{label}</p>
//         <p className="text-sm opacity-70">{desc}</p>
//       </CardContent>
//     </Card>
//   );
// }



import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export function ImpactCard({
  kpi,
  label,
  desc,
}: {
  kpi: string;
  label: string;
  desc: string;
}) {
  return (
    <Card className="flex flex-col h-full rounded-2xl bg-white/5 border-white/10 hover:bg-white/10 transition duration-300">
      <CardContent className="p-6 flex flex-col flex-grow text-white">
        <h3 className="text-3xl font-bold text-primary-400">{kpi}</h3>
        <p className="mt-1 text-lg font-semibold">{label}</p>
        <p className="mt-2 text-slate-300 flex-grow">{desc}</p>
      </CardContent>
    </Card>
  );
}

