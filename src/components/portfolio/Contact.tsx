import React from "react";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 pb-24">
      <SectionHeading title="Let’s work together" subtitle="Have a project in mind? I’d love to hear about it." />
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button asChild className="rounded-2xl">
          <a href="mailto:bernardomuse22@gmail.com"><Mail className="mr-2 size-4" /> Email Me</a>
        </Button>
        <Button asChild variant="secondary" className="rounded-2xl">
          <a href="https://www.linkedin.com/in/bernard-omuse-638a1236a/" target="_blank" rel="noreferrer"><Linkedin className="mr-2 size-4" /> LinkedIn</a>
        </Button>
        <Button asChild variant="secondary" className="rounded-2xl">
          <a href="https://github.com/omu34" target="_blank" rel="noreferrer"><Github className="mr-2 size-4" /> GitHub</a>
        </Button>
      </div>
    </section>
  );
}