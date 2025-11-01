import React from "react";

export function Social({ href, label, Icon }: { href: string; label: string; Icon: React.ElementType }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center size-9 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition"
    >
      <Icon className="size-4" />
    </a>
  );
}