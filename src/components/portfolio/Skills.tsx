import React from "react";
import { skills } from "@/data/portfolio";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { SkillCard } from "@/components/portfolio/SkillCard";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 py-16">
      <SectionHeading title="Skills" subtitle="A balanced stack across frontend, backend, AI, and DevOps" />
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((s) => (
          <SkillCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  );
}