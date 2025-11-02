"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { SkillCard } from "@/components/portfolio/SkillCard";

export function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-4 py-16 text-white"
    >
      <SectionHeading
        title="Skills"
        subtitle="A balanced stack across frontend, backend, AI, and DevOps"
      />

      <motion.div
        className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {skills.map((s) => (
          <motion.div
            key={s.title}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white/5 border border-white/10 py-4 px-3 rounded-xl text-center hover:bg-white/10"
          >
            <SkillCard {...s} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
