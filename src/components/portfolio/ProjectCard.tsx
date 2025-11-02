"use client";

import React from "react";
import { motion } from "framer-motion";
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

export function ProjectCard({ project, index }: { project: Project; index: number }) {
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
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Card className="h-full rounded-3xl bg-white/5 border-white/10 backdrop-blur-md">
        <CardContent className="p-6 text-white">
          <div className="flex items-center gap-3">
            <div className="size-10 grid place-items-center rounded-2xl bg-white/10 border border-white/10">
              <Icon className="size-5 text-white/80 hover:bg-gray-100" />
            </div>
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          </div>

          <p className="mt-3 text-slate-300">{project.summary}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

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
    </motion.div>
  );
}
