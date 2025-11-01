"use client";

import React from "react";
import { ProjectCard } from "@/components/portfolio/ProjectCard";

const projects = [
  {
    title: "Enterprise CRM Platform",
    summary:
      "Built a robust, multi-tenant CRM for enterprise clients using Livewire and Filament, significantly reducing manual data entry for sales teams.",
    tags: ["Filament", "Livewire", "Laravel", "PostgreSQL"],
    links: [{ label: "View Case Study", href: "#" }],
    iconName: "Briefcase",
  },
  {
    title: "Real-Time Chat Application",
    summary:
      "Developed a scalable real-time chat service using WebSockets (Socket.IO) and Flask, supporting thousands of concurrent users with fast, reliable messaging.",
    tags: ["Python", "Flask", "Socket.IO", "React"],
    links: [{ label: "GitHub Repo", href: "#" }],
    iconName: "MessageSquare",
  },
  {
    title: "E-Commerce Headless API",
    summary:
      "Designed and implemented a high-performance headless API for a Shopify storefront, providing custom catalog and inventory management features.",
    tags: ["Next.js", "GraphQL", "Shopify API"],
    links: [{ label: "Live Demo", href: "#" }],
    iconName: "ShoppingCart",
  },
  {
    title: "Data Visualization Dashboard",
    summary:
      "Created interactive data visualization dashboards for monitoring server health and performance metrics, utilizing D3.js within a React environment.",
    tags: ["React", "D3.js", "Node.js", "Tailwind CSS"],
    links: [{ label: "Demo", href: "#" }],
    iconName: "AreaChart",
  },
  {
    title: "Enterprise CRM Platform",
    summary:
      "Built a robust, multi-tenant CRM for enterprise clients using Livewire and Filament, significantly reducing manual data entry for sales teams.",
    tags: ["Filament", "Livewire", "Laravel", "PostgreSQL"],
    links: [{ label: "View Case Study", href: "#" }],
    iconName: "Briefcase",
  },
  {
    title: "Real-Time Chat Application",
    summary:
      "Developed a scalable real-time chat service using WebSockets (Socket.IO) and Flask, supporting thousands of concurrent users with fast, reliable messaging.",
    tags: ["Python", "Flask", "Socket.IO", "React"],
    links: [{ label: "GitHub Repo", href: "#" }],
    iconName: "MessageSquare",
  },
  {
    title: "E-Commerce Headless API",
    summary:
      "Designed and implemented a high-performance headless API for a Shopify storefront, providing custom catalog and inventory management features.",
    tags: ["Next.js", "GraphQL", "Shopify API"],
    links: [{ label: "Live Demo", href: "#" }],
    iconName: "ShoppingCart",
  },
  {
    title: "Data Visualization Dashboard",
    summary:
      "Created interactive data visualization dashboards for monitoring server health and performance metrics, utilizing D3.js within a React environment.",
    tags: ["React", "D3.js", "Node.js", "Tailwind CSS"],
    links: [{ label: "Demo", href: "#" }],
    iconName: "AreaChart",
  },
];

export function Projects() {
  return (
    <section id="projects" className="mt-24 max-w-7xl mx-auto px-4 text-white">
      <h2 className="text-3xl font-bold tracking-tight">Recent Projects</h2>
      <p className="mt-2 text-slate-300 max-w-xl">
        A selection of technical projects illustrating my full-stack capabilities, focusing on modern web frameworks and scalable architecture.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
