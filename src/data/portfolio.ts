// app/data/portfolio.ts
export const projects = [
  {
    title: "Enterprise CMS Solutions",
    summary:
      "Secure, role-based admin systems for large-scale enterprise data management.",
    tags: ["Laravel", "Livewire", "Filament", "REST APIs"],
    links: [
      { href: "https://newsroom.kplc.co.ke/", label: "Kenya Power CMS" },
      {
        href: "https://vehiclesales.co-opbank.co.ke",
        label: "Co-op Bank Vehicle Auction",
      },
    ],
    iconName: "ShieldCheck",
  },
  {
    title: "Real-Time & Dynamic Apps",
    summary:
      "Live chat + data-sync platforms with Socket.IO and Flask for instant collaboration.",
    tags: ["Flask", "Python", "Socket.IO", "Laravel"],
    links: [
      { href: "https://masika-app-54x8.onrender.com", label: "Masika Law Firm App" },
    ],
    iconName: "MessagesSquare",
  },
  {
    title: "Full-Stack E-Commerce & SaaS",
    summary:
      "Multi-tenant SaaS and custom Shopify builds optimized for checkout and UX.",
    tags: ["Laravel", "Livewire", "Filament", "Shopify"],
    links: [
      { href: "https://raondi-commerce.laravel.cloud", label: "Roundi Commerce" },
      { href: "https://bike-stock-sells.myshopify.com", label: "Bike Stock Sells (Shopify)" },
    ],
    iconName: "ShoppingBag",
  },
  {
    title: "Community & Static Sites",
    summary:
      "Accessible, responsive educational platforms and blogs with modern UI/UX.",
    tags: [
      "Laravel",
      "Livewire",
      "Filament",
      "Tailwind CSS",
      "Alpine.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
    ],
    links: [
      {
        href: "https://smile-for-neurodiversity.netlify.app",
        label: "Smile for Neurodiversity",
      },
      {
        href: "https://smile-organization.laravel.cloud",
        label: "Smile Organization Portal",
      },
      {
        href: "https://react-glossary-application.netlify.app",
        label: "React Glossary App",
      },
    ],
    iconName: "Globe",
  },
];
