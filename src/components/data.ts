// All content is sourced from resume/Vinay_Chouhan_Resume_v6.docx.

export type LineId = "laundryos" | "flexpulse" | "mihaan" | "direction";

export const SITE_URL = "https://vinay27590.github.io";
export const RESUME_URL = "/resume/VINAY%20CV.pdf";

export const profile = {
  name: "Vinay Chouhan",
  role: "Java Full-Stack Developer",
  stack: ["Spring Boot", "WebFlux", "PostgreSQL", "Vue", "Angular", "React"],
  location: "Indore, MP, India",
  summary:
    "6+ years in IT, 4+ of them designing and delivering secure, scalable web applications. Currently building two multi-client platforms end to end, from backend to Android, iOS and web.",
};

export const contact = {
  email: "vinay77100@gmail.com",
  phone: "+91 89622 77229",
  phoneHref: "tel:+918962277229",
  linkedin: "https://linkedin.com/in/vinaychouhan275",
  linkedinLabel: "linkedin.com/in/vinaychouhan275",
  github: "https://github.com/vinay27590",
  githubLabel: "github.com/vinay27590",
  hackerrank: "https://hackerrank.com/vinayChouhan",
  hackerrankLabel: "hackerrank.com/vinayChouhan",
};

export type Station = {
  id: string;
  name: string;
  /** Short label for the network map. */
  short: string;
  summary: string;
  points: string[];
  /** Before → after results, quoted from the resume. */
  results?: { label: string; value: string }[];
};

export type Screenshot = {
  src: string;
  alt: string;
  /** Which app and screen, shown under the image. */
  caption: string;
  device: "desktop" | "phone";
  width: number;
  height: number;
  /** Optional crop shown in the page; the full frame opens in the lightbox. */
  thumb?: { src: string; width: number; height: number };
};

export type Line = {
  id: LineId;
  name: string;
  color: string;
  /** In progress lines render as "under construction" (outlined track). */
  inProgress: boolean;
  status: string;
  tagline: string;
  context: string;
  lede: string;
  stations: Station[];
  reliability?: string;
  facts?: { value: string; label: string }[];
  tech: string[];
  /**
   * Screenshots for the gallery. Drop files in /public/projects/<line-id>/
   * and list them here. The first desktop shot leads; phone shots sit beside
   * it at their real proportions. While empty, a short note is shown instead.
   */
  screenshots: Screenshot[];
  /** One honest line about where the screenshots come from. */
  screenshotsNote?: string;
};

export const lines: Line[] = [
  {
    id: "laundryos",
    name: "LaundryOS",
    color: "var(--l-laundryos)",
    inProgress: true,
    status: "In progress, 2026",
    tagline: "Multi-tenant laundry service platform",
    context: "Personal project · Indore",
    lede:
      "A modular monolith serving four clients, with PostgreSQL row-level security enforcing tenant isolation in the database itself, plus role-based access.",
    stations: [
      {
        id: "customer",
        name: "Customer app",
        short: "Customer app",
        summary: "Android app for booking and tracking pickups.",
        points: [
          "Pincode serviceability check and map-based address",
          "Pickup slots, OTP sign-in and weight-based price estimate",
          "Razorpay UPI and online payments",
          "Live order timeline with photos and invoice download",
        ],
      },
      {
        id: "agent",
        name: "Agent app",
        short: "Agent app",
        summary: "Android app for pickup and delivery agents in the field.",
        points: [
          "Pincode-based pickup and delivery assignment",
          "Bag-tag scanning with weight and photos",
          "OTP-confirmed delivery, cash and UPI collection",
          "Route planning with live location; offline mode with auto-sync",
        ],
      },
      {
        id: "admin",
        name: "Admin panel",
        short: "Admin panel",
        summary: "Operations console from booking to delivery.",
        points: [
          "Order board from booking to delivery",
          "Price lists, GST invoicing and automatic agent assignment",
          "Plant-station workflow: intake, quality check, packing",
          "Vendor outsourcing and revenue / collections dashboards",
        ],
      },
      {
        id: "marketing",
        name: "Marketing website",
        short: "Website",
        summary: "The public website for the service.",
        points: ["Built with Astro, deployed on Cloudflare Pages"],
      },
    ],
    reliability:
      "Idempotent APIs, state machines for orders and deliveries, and integer-based money handling.",
    facts: [
      { value: "1,200+", label: "Automated backend tests" },
      { value: "4", label: "Clients on one modular monolith" },
    ],
    tech: [
      "Java 21",
      "Spring Boot 3.5",
      "Spring Modulith",
      "Spring Security",
      "JPA / Hibernate",
      "Flyway",
      "PostgreSQL 16",
      "Vue 3",
      "TypeScript",
      "Quasar",
      "Astro",
      "Capacitor (Android)",
      "Firebase Auth",
      "Razorpay",
      "Google Maps",
      "Cloud Run",
      "Cloud SQL",
      "Cloud Storage",
      "Cloudflare Pages",
      "Docker",
      "GitHub Actions",
    ],
    screenshots: [
      {
        src: "/projects/laundryos/admin-dashboard.jpg",
        alt: "LaundryOS admin dashboard with revenue, orders, average order value, revenue per day and orders per day charts",
        caption: "Admin panel: business dashboard",
        device: "desktop",
        width: 1600,
        height: 686,
      },
      {
        src: "/projects/laundryos/customer-home.jpg",
        alt: "LaundryOS customer app home screen showing an order being cleaned with its timeline, and services with prices per kg",
        caption: "Customer: live order",
        device: "phone",
        width: 386,
        height: 854,
      },
      {
        src: "/projects/laundryos/customer-pickup-map.jpg",
        alt: "LaundryOS customer app choosing a pickup point on a map of Indore",
        caption: "Customer: pickup map",
        device: "phone",
        width: 390,
        height: 852,
      },
      {
        src: "/projects/laundryos/admin-orders.jpg",
        alt: "LaundryOS admin order board with columns for pickup, at the plant, on hold and delivery",
        caption: "Admin panel: order board",
        device: "desktop",
        width: 1600,
        height: 770,
        thumb: { src: "/projects/laundryos/admin-orders-crop.jpg", width: 1200, height: 462 },
      },
      {
        src: "/projects/laundryos/admin-ops.jpg",
        alt: "LaundryOS admin ops board with a live map of field agents in Indore and their status",
        caption: "Admin panel: field agents, live",
        device: "desktop",
        width: 1600,
        height: 770,
        thumb: { src: "/projects/laundryos/admin-ops-crop.jpg", width: 1200, height: 526 },
      },
    ],
    screenshotsNote: "From the staging environment, so the data is test data.",
  },
  {
    id: "flexpulse",
    name: "FlexPulse",
    color: "var(--l-flexpulse)",
    inProgress: true,
    status: "In progress, 2026",
    tagline: "AI-powered fitness and workout platform",
    context: "Personal project",
    lede:
      "A domain-driven modular monolith with Spring Modulith boundary enforcement and role-based access, serving a marketing site, an admin panel and a cross-platform athlete app.",
    stations: [
      {
        id: "athlete",
        name: "Athlete app",
        short: "Athlete app",
        summary: "Android, iOS and web app for training.",
        points: [
          "Offline-first catalog of 1,324 exercises with search and filters",
          "One-tap equipment swap algorithm (sub-50 ms)",
          "SVG muscle-recovery heatmap",
          "Live workout logger with sets, reps, RPE and rest timer",
          "5-step resumable onboarding; 7-day planner with gym and home variants",
        ],
      },
      {
        id: "coach",
        name: "AI coach",
        short: "AI coach",
        summary: "Routine generation with Spring AI and Google Gemini.",
        points: [
          "Workout routines checked by CSCS-based validation advisors",
          "RAG vector search over exercise mechanics",
          "Deterministic fallback splits: Push/Pull/Legs, Upper/Lower, Full Body",
          "Automated BMI and sedentary-risk calculation",
        ],
      },
      {
        id: "admin",
        name: "Admin panel",
        short: "Admin panel",
        summary: "User and system management.",
        points: [
          "User directory with paginated search and active / suspended toggles",
          "Role management (user / admin) and manual user provisioning",
          "Workout-completion analytics and system statistics dashboards",
        ],
      },
      {
        id: "marketing",
        name: "Marketing website",
        short: "Website",
        summary: "Edge-rendered programmatic SEO site.",
        points: [
          "1,324 exercise guide pages in 10 languages",
          "Animated GIF demos and JSON-LD structured data",
          "Pre-launch waitlist email capture via Resend API",
        ],
      },
    ],
    reliability:
      "Defensive null checks, domain-specific exception mapping and zero cyclic dependencies, verified by ArchUnit.",
    facts: [
      { value: "1,324", label: "Exercises, guides in 10 languages" },
      { value: "111, all passing", label: "Automated tests" },
      { value: "sub-50 ms", label: "One-tap equipment swap" },
    ],
    tech: [
      "Java 21",
      "Spring Boot 3.2",
      "Spring Modulith",
      "Spring AI",
      "Google Gemini",
      "RAG vector store",
      "Spring Security",
      "JPA / Hibernate",
      "Flyway",
      "PostgreSQL",
      "Vue 3",
      "TypeScript",
      "Quasar",
      "Pinia",
      "Astro 4",
      "Tailwind CSS",
      "Capacitor (Android / iOS)",
      "Google OAuth",
      "JWT",
      "Resend API",
      "Cloudflare Pages",
      "Docker",
      "GitHub Actions",
    ],
    screenshots: [],
  },
  {
    id: "mihaan",
    name: "Mihaan",
    color: "var(--l-mihaan)",
    inProgress: false,
    status: "Jun 2024 – Jan 2026",
    tagline: "Global trade data distribution and management",
    context: "Software Engineer · Mihaan Information Technology Services",
    lede:
      "Led a team of 3 developers to design and build a multi-tenant, subscription-based platform that centralizes global trade data (RPL, HS, ECCN) and serves client systems through a secure pull-based API.",
    stations: [
      {
        id: "cds",
        name: "Content Distribution System",
        short: "Content Distribution",
        summary: "Event-driven syndication of tenant-specific trade data.",
        points: [
          "Pipeline processes new uploads, generates tenant-specific JSON per subscription and publishes to S3",
          "Preprocessing and normalization flows for consistent ingestion across all content formats",
          "Tuned SQL, restructured batch operations and consolidated multiple DB calls into single queries",
        ],
        results: [
          { label: "Manual release effort", value: "2 h → under 5 min" },
          { label: "Manual file cleanup", value: "−60%" },
          { label: "API performance", value: "+40%" },
          { label: "Large-file ingestion latency", value: "−70%" },
        ],
      },
      {
        id: "gtm",
        name: "Global Trade Management",
        short: "Trade Management",
        summary: "Reactive CRUD APIs with Spring WebFlux and Angular 12.",
        points: [
          "Built and optimized reactive CRUD APIs with Spring WebFlux",
          "Angular 12 front end on PostgreSQL",
        ],
        results: [
          { label: "API response time", value: "+30% faster" },
          { label: "Redundant DB calls", value: "−25%" },
          { label: "Front-end integration", value: "+40% faster" },
        ],
      },
      {
        id: "notifications",
        name: "Notification engine",
        short: "Notifications",
        summary: "Multi-tenant, event-driven email system.",
        points: [
          "Tenants create custom templates for application triggers",
          "Pub/sub with a cron-based dispatcher",
          "Tenant-specific SMTP settings; fully automated notification lifecycle",
        ],
      },
      {
        id: "documents",
        name: "Document engine",
        short: "Document engine",
        summary: "Flexible PDF generation framework on iText.",
        points: [
          "Template Method and Strategy patterns around a core abstract base class",
          "Faster new document templates with consistent branding and data",
        ],
        results: [{ label: "Code duplication", value: "−60%" }],
      },
    ],
    tech: ["Java", "Spring Boot", "Spring WebFlux", "Angular 12", "PostgreSQL", "AWS S3", "iText"],
    screenshots: [],
  },
  {
    id: "direction",
    name: "Direction Software",
    color: "var(--l-direction)",
    inProgress: false,
    status: "Dec 2021 – Mar 2024",
    tagline: "Client application development",
    context: "Associate Software Engineer · Direction Software LLP",
    lede:
      "Secure, scalable REST APIs in Java and Spring Boot with normalized schemas and tuned SQL, and responsive single-page apps in Angular, Vue.js and React.js.",
    stations: [
      {
        id: "audit",
        name: "Audit Management System",
        short: "Audit Management",
        summary: "Java, Angular 12, PostgreSQL.",
        points: [
          "CSR audit workflow",
          "Server-side filtering for large datasets",
          "Custom event calendar used by 500+ users",
        ],
      },
      {
        id: "hrms",
        name: "Human Resource Management",
        short: "HR Management",
        summary: "Java / Jmix, Vue.js / Quasar, PostgreSQL.",
        points: [
          "Attendance tracking and HR configuration modules",
          "Automated email and in-app notifications",
        ],
      },
      {
        id: "woldo",
        name: "Woldo Analytics",
        short: "Woldo Analytics",
        summary: "Java / Jmix, Astro, Vue.js, PostgreSQL.",
        points: [
          "CMS-driven analytics dashboard",
          "Stripe payments",
          "Customizable reporting views",
        ],
      },
      {
        id: "license",
        name: "License Agreement System",
        short: "License Agreements",
        summary: "Java / Jmix, React / Next.js, PostgreSQL.",
        points: [
          "Migrated the front end from AngularJS to Next.js",
          "Licensing, agreement and contract workflows",
        ],
      },
    ],
    facts: [
      { value: "+25%", label: "Data processing efficiency" },
      { value: "+40% faster", label: "Data retrieval" },
      { value: "−30%", label: "Page load times" },
    ],
    tech: ["Java", "Spring Boot", "Jmix", "Angular 12", "Vue.js", "Quasar", "React", "Next.js", "Astro", "PostgreSQL", "Stripe"],
    screenshots: [],
  },
];

export const lineById = Object.fromEntries(lines.map((l) => [l.id, l])) as Record<LineId, Line>;

export type Job = {
  period: string;
  company: string;
  role: string;
  place: string;
  /** Route colour for the timetable; grey when no line on the map. */
  color: string;
  /** One headline outcome, quoted from the resume. */
  outcome?: string;
  lines?: LineId[];
};

export const timetable: Job[] = [
  {
    period: "2026 – now",
    company: "Independent",
    role: "Building LaundryOS and FlexPulse end to end",
    outcome: "Two multi-client platforms, from backend to Android, iOS and web apps.",
    place: "Indore",
    color: "rgb(var(--on-enamel))",
    lines: ["laundryos", "flexpulse"],
  },
  {
    period: "Jun 2024 – Jan 2026",
    company: "Mihaan Information Technology Services Pvt. Ltd.",
    role: "Software Engineer",
    place: "Indore, MP · Remote",
    outcome: "Led a team of 3. Release effort cut from 2 h to under 5 min; API performance up 40%.",
    color: "var(--l-mihaan)",
    lines: ["mihaan"],
  },
  {
    period: "Dec 2021 – Mar 2024",
    company: "Direction Software LLP",
    role: "Associate Software Engineer",
    place: "Indore, MP · Remote",
    outcome: "Four client systems on Spring Boot. Data retrieval 40% faster; page loads down 30%.",
    color: "var(--l-direction)",
    lines: ["direction"],
  },
  {
    period: "May 2019 – Sep 2021",
    company: "Rockfort Technosys India Pvt. Ltd.",
    role: "Technical Support Executive",
    place: "Indore, MP",
    color: "var(--l-rockfort)",
  },
];

export const education = [
  {
    title: "Bachelor of Engineering, Information Technology (not completed)",
    place: "Shri Vaishnav Institute of Technology and Science, Indore",
  },
  { title: "Higher Secondary (PCM)", place: "Talent Higher Secondary School, Indore" },
];

export const certifications = [{ title: "Oracle Java Explorer", place: "Oracle" }];

export type Skill = { name: string; lines: LineId[] };

const L: LineId = "laundryos";
const F: LineId = "flexpulse";
const M: LineId = "mihaan";
const D: LineId = "direction";

export const skillGroups: { group: string; skills: Skill[] }[] = [
  {
    group: "Languages",
    skills: [
      { name: "Java", lines: [L, F, M, D] },
      { name: "JavaScript / TypeScript", lines: [L, F, M, D] },
      { name: "Go", lines: [] },
    ],
  },
  {
    group: "Backend",
    skills: [
      { name: "Spring Boot", lines: [L, F, M, D] },
      { name: "Spring WebFlux", lines: [M] },
      { name: "Spring Security (JWT)", lines: [L, F] },
      { name: "Spring Data JPA / Hibernate", lines: [L, F] },
      { name: "Spring Modulith", lines: [L, F] },
      { name: "Spring AI (Gemini, RAG)", lines: [F] },
      { name: "Flyway", lines: [L, F] },
      { name: "Jmix", lines: [D] },
      { name: "Gin", lines: [] },
      { name: "NestJS", lines: [] },
    ],
  },
  {
    group: "Frontend & mobile",
    skills: [
      { name: "Angular 12", lines: [M, D] },
      { name: "Vue.js (Quasar, Nuxt.js)", lines: [L, F, D] },
      { name: "React.js (Next.js)", lines: [D] },
      { name: "Astro", lines: [L, F, D] },
      { name: "Pinia", lines: [F] },
      { name: "Tailwind CSS", lines: [F] },
      { name: "Android / iOS via Capacitor", lines: [L, F] },
    ],
  },
  {
    group: "Database",
    skills: [
      { name: "PostgreSQL (row-level security)", lines: [L, F, M, D] },
      { name: "MySQL", lines: [] },
      { name: "MongoDB", lines: [] },
    ],
  },
  {
    group: "Testing",
    skills: [
      { name: "JUnit 5", lines: [L, F] },
      { name: "Mockito", lines: [L, F] },
      { name: "@WebMvcTest / @DataJpaTest", lines: [L, F] },
      { name: "ArchUnit", lines: [F] },
      { name: "Integration tests", lines: [L, F] },
    ],
  },
  {
    group: "DevOps & cloud",
    skills: [
      { name: "AWS (S3)", lines: [M] },
      { name: "Google Cloud (Run, SQL, Storage)", lines: [L] },
      { name: "Cloudflare Pages", lines: [L, F] },
      { name: "Docker", lines: [L, F] },
      { name: "GitHub Actions (CI/CD)", lines: [L, F] },
      { name: "Git", lines: [] },
      { name: "Bitbucket", lines: [] },
    ],
  },
  {
    group: "Integrations",
    skills: [
      { name: "Razorpay", lines: [L] },
      { name: "Stripe", lines: [D] },
      { name: "Firebase Auth", lines: [L] },
      { name: "Google OAuth", lines: [F] },
      { name: "Resend", lines: [F] },
      { name: "Google Maps", lines: [L] },
    ],
  },
];
