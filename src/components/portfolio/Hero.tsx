'use client';

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/portfolio/Badge";
import { ShowcaseCard } from "@/components/portfolio/ShowcaseCard";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_-10%,rgba(56,189,248,.15),transparent_60%),radial-gradient(800px_circle_at_80%_0%,rgba(99,102,241,.12),transparent_50%)]" />
      <div className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 text-[#ffffff]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Full Stack Developer & Prompt Engineer
          </motion.h1>
          <p className="mt-5 text-slate-300 leading-relaxed max-w-2xl">
            I build scalable, user‑centric web apps with <strong>Laravel</strong>, <strong>Livewire</strong>, <strong>Filament</strong>, and <strong>React/Next.js</strong> —
            from enterprise CMS and real‑time systems to modern e‑commerce. 5+ years shipping clean, maintainable code.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild className="rounded-2xl">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="secondary" className="rounded-2xl">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <Badge>Laravel</Badge>
            <Badge>Livewire</Badge>
            <Badge>Filament</Badge>
            <Badge>React</Badge>
            <Badge>Next.js</Badge>
            <Badge>Flask</Badge>
            <Badge>Socket.IO</Badge>
            <Badge>Shopify</Badge>
          </div>
        </div>
        <div className="lg:col-span-5">
          <ShowcaseCard />
        </div>
      </div>
    </section>
  );
}
