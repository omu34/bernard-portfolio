// import React from "react";
// import { skills } from "@/data/skills";
// import { SectionHeading } from "@/components/portfolio/SectionHeading";
// import { SkillCard } from "@/components/portfolio/SkillCard";

// export function Skills() {
//   return (
//     <section id="skills" className="mx-auto max-w-7xl px-4 py-16">
//       <SectionHeading title="Skills" subtitle="A balanced stack across frontend, backend, AI, and DevOps" />
//       <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {skills.map((s) => (
//           <SkillCard key={s.title} {...s} />
//         ))}
//       </div>
//     </section>
"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { SkillCard } from "@/components/portfolio/SkillCard";

export function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true, // only animate once
      offset: 100, // trigger offset
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 py-16 text-white">
      {/* Heading */}
      <div data-aos="fade-up">
        <SectionHeading
          title="Skills"
          subtitle="A balanced stack across frontend, backend, AI, and DevOps"
        />
      </div>

      {/* Skill Cards */}
      <div
        className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {skills.map((s, i) => (
          <div
            key={s.title}
            data-aos="zoom-in-up"
            data-aos-delay={100 + i * 100} // small stagger for sequence
            className="flex flex-col h-full"
          >
            <SkillCard {...s} />
          </div>
        ))}
      </div>
    </section>
  );
}








//   );
// }