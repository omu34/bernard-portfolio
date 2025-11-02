"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/portfolio/ProjectCard";

export function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      id="projects"
      className="mt-24 max-w-7xl mx-auto px-4 text-white"
    >
      <div data-aos="fade-up">
        <h2 className="text-3xl font-bold tracking-tight">Recent Projects</h2>
        <p className="mt-2 text-slate-300 max-w-xl">
          A selection of technical projects illustrating my full-stack
          capabilities, focusing on modern web frameworks and scalable
          architecture.
        </p>
      </div>

      {/* ✅ 2x2 Grid Layout */}
      <div
        className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {projects.slice(0, 4).map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
