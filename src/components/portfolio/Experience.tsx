import React from "react";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { ImpactCard } from "@/components/portfolio/ImpactCard";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 py-16 ">
      <SectionHeading title="Experience Highlights" subtitle="Impact, at a glance" />
      <div className="mt-8 grid md:grid-cols-3 gap-6 ">
        <ImpactCard 
          kpi={<span className="text-white">5+ yrs</span>}
          label="Full‑stack delivery"
          desc="Shipping enterprise CMS, real‑time tools, and SaaS products."
        />
        <ImpactCard
          kpi={<span className="text-white">3+ yrs</span>}
          label="Prompt Engineering"
          desc="AI integrations with GPT‑4, automation, and content systems."
        />
        <ImpactCard
          kpi={<span className="text-white">40%</span>}
          label="Perf & Scale"
          desc="Process & performance gains via clean architecture & optimization."
        />
      </div>
    </section>
  );
}