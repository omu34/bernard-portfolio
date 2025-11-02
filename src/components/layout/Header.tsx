import React from "react";
import { Sparkles, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Social } from "@/components/portfolio/Social";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-2xl bg-white/10 grid place-items-center shadow-inner overflow-hidden">
            <Image
  src="/passport.jpg"
  alt="Bernard E. Omuse"
  width={48}
  height={48}
  className="w-full h-full object-cover rounded-2xl"
/>

          </div>

          <span className="font-semibold tracking-tight">Bernard E. Omuse</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#education" className="hover:text-white">Education</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <Social href="https://github.com/Omu34" label="GitHub" Icon={Github} />
          <Social href="https://www.linkedin.com/in/bernard-omuse-638a1236a/" label="LinkedIn" Icon={Linkedin} />
          <a href="Tel:+254727464224" >
            <Button className="rounded-2xl px-4">Hire Me</Button>
          </a>
        </div>
      </div>
    </header>
  );
}