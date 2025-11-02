"use client";

import React from "react";
import {
  ArrowUpRight,
  ShieldCheck,
  MessagesSquare,
  ShoppingBag,
  Globe,
  Briefcase,
  MessageSquare,
  ShoppingCart,
  AreaChart,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/portfolio/Badge";

interface Project {
  title: string;
  summary: string;
  tags: string[];
  links: { href: string; label: string }[];
  iconName: string;
}

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const iconMap: Record<string, React.ElementType> = {
    ShieldCheck,
    MessagesSquare,
    ShoppingBag,
    Globe,
    Briefcase,
    MessageSquare,
    ShoppingCart,
    AreaChart,
  };

  const Icon = iconMap[project.iconName] ?? Briefcase;

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-delay={index * 100}
      className="h-full flex flex-col"
    >
      <Card className="h-full flex flex-col rounded-3xl bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition">
        <CardContent className="p-6 flex flex-col flex-grow text-white">
          {/* Icon + Title */}
          <div className="flex items-center gap-3">
            <div className="size-10 grid place-items-center rounded-2xl bg-white/10 border border-white/10">
              <Icon className="size-5 text-white/80" />
            </div>
            <h3 className="text-lg font-semibold text-white">
              {project.title}
            </h3>
          </div>

          {/* Summary */}
          <p className="mt-3 text-slate-300 flex-grow">{project.summary}</p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          {/* Links */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 hover:bg-white/10 transition"
              >
                {l.label} <ArrowUpRight className="size-3" />
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
