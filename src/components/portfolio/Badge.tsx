import React from "react";

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
      {children}
    </span>
  );
}