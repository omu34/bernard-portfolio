import { ShieldCheck, MessagesSquare, ShoppingBag, Globe, Sparkles, Code2, Cpu, CloudLightning } from "lucide-react";

export const projects = [
  {
    title: "Enterprise CMS Solutions",
    summary:
      "Secure, role-based admin systems for large-scale enterprise data management.",
    tags: ["Laravel", "Livewire", "Filament", "REST APIs"],
    links: [
      { href: "https://kplc.co.ke", label: "Kenya Power CMS" },
      { href: "https://vehiclesales.co-opbank.co.ke", label: "Co-op Bank Vehicle Auction" },
    ],
    icon: ShieldCheck,
  },
  {
    title: "Real-Time & Dynamic Apps",
    summary:
      "Live chat + data-sync platforms with Socket.IO and Flask for instant collaboration.",
    tags: ["Flask", "Python", "Socket.IO", "Laravel"],
    links: [
      { href: "https://masika-app-54x8.onrender.com", label: "Masika Law Firm App" },
      { href: "https://smile-organization.laravel.cloud", label: "Smile Organization Portal" },
    ],
    icon: MessagesSquare,
  },
  {
    title: "Full-Stack E‑Commerce & SaaS",
    summary:
      "Multi-tenant SaaS and custom Shopify builds optimized for checkout and UX.",
    tags: ["Laravel", "Livewire", "Filament", "Shopify"],
    links: [
      { href: "https://raondi-commerce.laravel.cloud", label: "Roundi Commerce" },
      { href: "https://bike-stock-sells.myshopify.com", label: "Bike Stock Sells (Shopify)" },
    ],
    icon: ShoppingBag,
  },
  {
    title: "Community & Static Sites",
    summary:
      "Accessible, responsive educational platforms and blogs with modern UI/UX.",
    tags: ["React", "Tailwind", "Static CMS (B12)"],
    links: [
      { href: "https://smile-for-neurodiversity.netlify.app", label: "Smile for Neurodiversity" },
      { href: "https://react-glossary-application.netlify.app", label: "React Glossary App" },
    ],
    icon: Globe,
  },
];

export const skills = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Alpine.js", "JavaScript (ES6+)", "HTML5", "CSS3"],
    icon: Sparkles,
  },
  {
    title: "Backend",
    items: ["Laravel", "Livewire", "Filament", "Flask", "Python", "PHP", "REST APIs", "MySQL", "PostgreSQL"],
    icon: Code2,
  },
  {
    title: "AI & Real‑Time",
    items: ["Prompt Engineering (3+ yrs)", "GPT-4 Integrations", "Socket.IO", "Automation"],
    icon: Cpu,
  },
  {
    title: "DevOps & Tools",
    items: ["Git/GitHub","Laravel Cloud","Heroku", "Docker", "Netlify", "Render", "AWS (Concepts)", "Vercel"],
    icon: CloudLightning,
  },
];

export const education = [
  {
    title: "BSc in Computer Science (In Progress – 2nd Year)",
    org: "University of the People, USA",
  },
  {
    title: "Associate Degree in Agri‑Ecology & Sustainable Agriculture (2012)",
    org: "University of Eldoret, Kenya",
  },
  { title: "Diploma in Project Management", org: "Alison College, Ireland" },
];

export const certs = [
  "Full Stack Development & Project Management — Simplilearn",
  "Machine Learning, Data Analysis, & Front‑End Libraries — FreeCodeCamp",
  "AI‑Powered App Building & GPT‑4 Foundations — LinkedIn Learning",
];