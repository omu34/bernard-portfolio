"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { ImpactCard } from "@/components/portfolio/ImpactCard";

export function Experience() {
  useEffect(() => {
    AOS.init({
      duration: 800, // smooth timing
      once: true, // only animate once
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 py-16 text-white">
      {/* Heading */}
      <div data-aos="fade-up">
        <SectionHeading
          title="Experience Highlights"
          subtitle="Impact, at a glance"
        />
      </div>

      {/* Cards Grid */}
      <div
        className="mt-10 grid md:grid-cols-3 gap-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div data-aos="zoom-in-up" data-aos-delay="100" className="flex flex-col h-full">
          <ImpactCard
            kpi="5+ yrs"
            label="Full-stack delivery"
            desc="Shipping enterprise CMS, real-time tools, and SaaS products."
          />
        </div>

        <div data-aos="zoom-in-up" data-aos-delay="200" className="flex flex-col h-full">
          <ImpactCard
            kpi="3+ yrs"
            label="Prompt Engineering"
            desc="AI integrations with GPT-4, automation, and content systems."
          />
        </div>

        <div data-aos="zoom-in-up" data-aos-delay="300" className="flex flex-col h-full">
          <ImpactCard
            kpi="40%"
            label="Perf & Scale"
            desc="Process & performance gains via clean architecture & optimization."
          />
        </div>
      </div>
    </section>
  );
}
