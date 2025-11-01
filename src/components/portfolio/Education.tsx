import React from "react";
import { education, certs } from "@/data/portfolio";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-4 py-16">
      <SectionHeading title="Education & Certifications" subtitle="Learning never stops" />
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <Card className="rounded-2xl bg-white/5 border-white/10">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-white">Education</h3>
            <ul className="space-y-3 text-slate-300">
              {education.map((e) => (
                <li key={e.title}>
                  <p className="font-medium text-slate-100">{e.title}</p>
                  <p className="text-sm text-slate-400">{e.org}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="rounded-2xl bg-white/5 border-white/10">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4"><span className="text-white">Certifications</span> </h3>
            <ul className="space-y-3 text-slate-300 list-disc list-inside">
              {certs.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}