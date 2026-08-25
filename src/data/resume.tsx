import { Icons } from "@/components/icons";
import { FileTextIcon, HomeIcon, LayersIcon } from "lucide-react";

export const DATA = {
  name: "Kushal Kumar",
  initials: "KK",
  // TODO: replace with your real deployed domain before going live.
  // This drives metadataBase, OpenGraph URLs and JSON-LD — link previews on
  // LinkedIn will break silently if it stays a placeholder.
  url: "https://kushalkumar.design",
  location: "Ghaziabad, Delhi NCR",
  locationLink: "https://www.google.com/maps/place/Ghaziabad",
  description:
    "Product Designer at Vayu Guard. I design B2B climate-tech products end to end — web, mobile, and on-device — and shipped Vayu View from zero to one.",
  summary:
    "I'm a product designer working where climate tech meets enterprise software. At [Vayu Guard](https://www.vayuguard.com/) I designed and shipped [Vayu View](/#projects) from zero to one — a B2B platform that turns raw air quality data into decisions a building administrator can actually act on. As the sole designer, I owned all three surfaces: the web dashboard, the mobile app, and the GUI running on the monitoring hardware itself. The platform supports 15+ enterprise clients across real estate, IT, hospitality and commercial property. I'm completing my B.Com at Subharti University, and I'm UX-certified by both Google and Accenture.",
  avatarUrl: "/profile_picturejpeg.jpeg",

  // Grouped rather than a flat wall of chips — scannable, and it signals
  // breadth (research → systems → collaboration → tools) at a glance.
  skills: [
    {
      category: "Design & Research",
      items: [
        "Product UX/UI Design",
        "Information Architecture",
        "User Research",
        "Usability Testing",
        "Heuristic Evaluation",
        "A/B Testing",
        "Metrics-Driven Design",
      ],
    },
    {
      category: "Systems & Prototyping",
      items: ["Design Systems", "Rapid Prototyping", "AI / LLM-Driven Design"],
    },
    {
      category: "Collaboration",
      items: ["Cross-Functional Collaboration", "Stakeholder Management"],
    },
    {
      category: "Tools",
      items: [
        "Figma",
        "Blender 3D",
        "Adobe Premiere Pro",
        "CorelDRAW",
        "Claude",
        "ChatGPT",
      ],
    },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/case-studies", icon: LayersIcon, label: "Case Studies" },
  ],

  // Served straight from /public and opened in a new tab from the dock.
  // Set `enabled: false` to hide the icon if the PDF is ever removed.
  resume: {
    enabled: true,
    href: "/Kushal_Kumar_Resume.pdf",
    icon: FileTextIcon,
    label: "Résumé",
  },

  contact: {
    email: "kushal.ux@outlook.com",
    // Phone deliberately not published — plain-text mobile numbers on public
    // sites get scraped. Reachable via email and LinkedIn instead.
    tel: "",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kushalux/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:kushal.ux@outlook.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Vayu Guard",
      href: "https://www.vayuguard.com/",
      badges: [],
      location: "Ghaziabad, India",
      title: "Product Designer",
      logoUrl: "/vayuguard.jpeg",
      start: "August 2025",
      end: "Present",
      description:
        "Sole product designer for Vayu View, a zero-to-one B2B SaaS platform for indoor air quality intelligence. Designed all three surfaces end to end — the web dashboard, the mobile app, and the GUI running on the air quality monitor itself — working with the CMO as product lead, one engineer and two hardware engineers. Translated raw sensor streams (particulate matter, TVOC, CO₂, humidity) into a decision-making tool for Building Administration Heads, replacing the handheld meters and spreadsheets clients relied on before. Established the product's design system: 10+ components built on defined colour, type and spacing tokens. Vayu View now supports 15+ enterprise clients across real estate, IT, hospitality and commercial property, and underpins ₹25L in platform revenue.",
    },
  ],

  education: [
    {
      school: "Subharti University",
      href: "https://subhartidde.com/",
      degree: "Bachelor of Commerce (B.Com) — Final Year, Expected 2026",
      logoUrl: "/subharti.png",
      // TODO: confirm your actual start year (assumed 3-year B.Com ending 2026).
      start: "2023",
      end: "2026",
    },
    {
      school: "Google",
      href: "https://www.coursera.org/professional-certificates/google-ux-design",
      degree: "UX Design Professional Certificate",
      logoUrl: "/coursera.jpeg",
      start: "2024",
      end: "2024",
    },
    {
      school: "Accenture",
      href: "https://www.accenture.com/",
      degree: "User Experience Certification",
      logoUrl: "/accenture.png",
      start: "2024",
      end: "2024",
    },
  ],

  // Each project links to its full case study at /case-studies/<slug>.
  // Add a hero image per project (public/projects/*.png) to lift these cards
  // from text blocks into a real portfolio grid.
  projects: [
    {
      title: "Vayu View — Web Dashboard",
      href: "/case-studies/vayu-view-dashboard",
      dates: "Aug 2025 - Present",
      active: true,
      description:
        "The core of the platform: a live monitoring dashboard that lets a Building Administration Head answer *“which of my sites has a problem right now?”* across a portfolio of buildings, floors and devices.",
      technologies: [
        "Information Architecture",
        "Data Visualisation",
        "B2B SaaS",
        "Figma",
      ],
      links: [
        {
          type: "Case Study",
          href: "/case-studies/vayu-view-dashboard",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Air Quality Monitor — Device GUI",
      href: "/case-studies/vayu-view-device-gui",
      dates: "Aug 2025 - Present",
      active: true,
      description:
        "The interface running on the physical air quality monitor. Designed for someone walking past it — readable at a glance, from a distance, with no training and no context.",
      technologies: [
        "Embedded UI",
        "Hardware Interface",
        "Glanceable Design",
        "Figma",
      ],
      links: [
        {
          type: "Case Study",
          href: "/case-studies/vayu-view-device-gui",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Vayu View — Mobile App",
      href: "/case-studies/vayu-view-mobile-app",
      dates: "Aug 2025 - Present",
      active: true,
      description:
        "The companion app for administrators who are rarely at a desk — built around alerts and quick checks rather than deep analysis.",
      technologies: ["Mobile UX", "Alerts & Notifications", "Figma"],
      links: [
        {
          type: "Case Study",
          href: "/case-studies/vayu-view-mobile-app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Vayu View — Design System",
      href: "/case-studies/vayu-view-design-system",
      dates: "Aug 2025 - Present",
      active: true,
      description:
        "10+ components on a defined token foundation, built to keep three very different surfaces — web, mobile and embedded — speaking the same language.",
      technologies: [
        "Design Tokens",
        "Component Library",
        "Developer Handoff",
        "Figma",
      ],
      links: [
        {
          type: "Case Study",
          href: "/case-studies/vayu-view-design-system",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
