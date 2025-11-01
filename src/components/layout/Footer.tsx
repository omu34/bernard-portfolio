import React from "react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 text-center text-xs text-slate-400">
      © {new Date().getFullYear()} Bernard E. Omuse — Built with Next.js, Tailwind, shadcn/ui, and Framer Motion.
    </footer>
  );
}