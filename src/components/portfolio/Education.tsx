"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { education, certs } from "@/data/education";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";

export function Education() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true, // run animation only once
      offset: 100, // distance to trigger animation
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section id="education" className="mx-auto max-w-7xl px-4 py-16 text-white">
      {/* Heading */}
      <div data-aos="fade-up">
        <SectionHeading
          title="Education & Certifications"
          subtitle="Learning never stops"
        />
      </div>

      {/* Cards Grid */}
      <div className="mt-10 grid md:grid-cols-2 gap-8">
        {/* Education Card */}
        <div
          data-aos="fade-right"
          className="flex flex-col h-full"
        >
          <Card className="flex flex-col h-full rounded-2xl bg-white/5 border-white/10 hover:bg-white/10 transition duration-300">
            <CardContent className="flex flex-col p-6 flex-grow">
              <h3 className="text-lg font-semibold mb-4 text-white">
                Education
              </h3>
              <ul className="space-y-3 text-slate-300 flex-grow">
                {education.map((e) => (
                  <li key={e.title}>
                    <p className="font-medium text-slate-100">{e.title}</p>
                    <p className="text-sm text-slate-400">{e.org}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Certifications Card */}
        <div
          data-aos="fade-left"
          data-aos-delay="150"
          className="flex flex-col h-full"
        >
          <Card className="flex flex-col h-full rounded-2xl bg-white/5 border-white/10 hover:bg-white/10 transition duration-300">
            <CardContent className="flex flex-col p-6 flex-grow">
              <h3 className="text-lg font-semibold mb-4 text-white">
                Certifications
              </h3>
              <ul className="space-y-3 text-slate-300 list-disc list-inside flex-grow">
                {certs.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
