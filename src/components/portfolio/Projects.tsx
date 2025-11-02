"use client";

import React from "react";
import { projects } from "@/data/portfolio"; // ✅ imported shared data
import { ProjectCard } from "@/components/portfolio/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="mt-24 max-w-7xl mx-auto px-4 text-white">
      <h2 className="text-3xl font-bold tracking-tight">Recent Projects</h2>
      <p className="mt-2 text-slate-300 max-w-xl">
        A selection of technical projects illustrating my full-stack capabilities,
        focusing on modern web frameworks and scalable architecture.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
