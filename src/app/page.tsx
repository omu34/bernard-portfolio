import React from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/layout/Footer";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white ">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}