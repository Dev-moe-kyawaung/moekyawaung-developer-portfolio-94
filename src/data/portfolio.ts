// Retro-Futuristic 2026 Portfolio — Moe Kyaw Aung
// Profile data sourced from provided bio + Cloudinary assets

const CLOUD = "https://res.cloudinary.com/dye5qpwii/image/upload";

export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  screenshot: string;
  repo: string;
}

export interface SkillItem {
  name: string;
  category: string;
  level: number; // 0-100
  years: number;
}

export interface TimelineItem {
  year: string;
  title: string;
  org: string;
  description: string;
  kind: "work" | "learning" | "build";
}

export const PROFILE = {
  name: "Moe Kyaw Aung",
  nameMm: "မိုးကျော်အောင်",
  role: "Senior Android Developer",
  location: "Tachileik, Myanmar ⇄ Bangkok, Thailand",
  status: "Open to work",
  years: "3+",
  shipped: 16,
  certs: 82,
  philosophy: "Code with culture. Build with purpose.",
  phone: "+95 9 889 000 889",
  phoneAlt: "+95 9 666 000 050",
  whatsapp: "https://wa.me/959889000889",
  github: "Dev-moe-kyawaung",
  githubUrl: "https://github.com/Dev-moe-kyawaung",
  gravatar: "https://gravatar.com/moekyawaung2026",
  avatar: `${CLOUD}/v1778527878/IMG_20260430_053105_uef0yr.png`,
  currentBuild: "MoekyawTranslator — on-device AI translation (TFLite · 38ms)",
  roles: [
    "Senior Android Developer",
    "Kotlin · Jetpack Compose",
    "Clean Architecture · MVVM/MVI",
    "On-device AI · TFLite",
  ],
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "social-dashboard",
    name: "Social Dashboard",
    tagline: "Realtime social analytics",
    description:
      "Unified multi-account social analytics with live sentiment tracking, engagement metrics, and push alerting. Built with a single reactive state stream for instant updates.",
    stack: ["Kotlin", "Compose", "Firebase", "MVI"],
    screenshot: `${CLOUD}/v1778795856/copilot_image_1778795000722_eo96gj.png`,
    repo: "https://github.com/moekyawaung-tech/social-dashboard",
  },
  {
    id: "pos-ultimate",
    name: "POS Ultimate Pro Max",
    tagline: "Offline-first commerce platform",
    description:
      "Commercial point-of-sale system with inventory, tax engine, receipt printing, and multi-branch reporting. Uses an outbox pattern so sales are never lost during network loss.",
    stack: ["Kotlin", "Room", "WorkManager", "Outbox"],
    screenshot: `${CLOUD}/v1778795856/copilot_image_1778794626112_ega7kk.png`,
    repo: "https://github.com/moekyawaung-tech/POS-Ultimate-Pro-Max",
  },
  {
    id: "video-player",
    name: "Video Player",
    tagline: "Senior media playback engine",
    description:
      "Production media player with playlists, gesture scrubbing, subtitle tracks, casting, and picture-in-picture. Engineered for smooth 60fps playback and clean audio handoff.",
    stack: ["Kotlin", "Media3", "ExoPlayer", "Compose"],
    screenshot: `${CLOUD}/v1778795847/copilot_image_1778795115579_acfm5j.png`,
    repo: "https://github.com/moekyawaung-tech/video-player",
  },
  {
    id: "game-collection",
    name: "Game Collection",
    tagline: "Arcade mini-game anthology",
    description:
      "A compact arcade anthology with Snake, 2048, and retro titles. Driven by reusable game loops, canvas rendering, and a local high-score system with crisp input response.",
    stack: ["TypeScript", "Canvas", "Game Loop", "Web Audio"],
    screenshot: `${CLOUD}/v1778795822/preview_dzhqvv.webp`,
    repo: "https://github.com/moekyawaung-tech/game-collection",
  },
  {
    id: "pwa-app",
    name: "PWA App",
    tagline: "Installable offline web app",
    description:
      "Progressive web application with service-worker caching and background sync. Boots instantly and stays functional with no network connection, then resyncs quietly.",
    stack: ["TypeScript", "Vite", "Workbox", "PWA"],
    screenshot: `${CLOUD}/v1778795829/copilot_image_1778795000722_okryxj.png`,
    repo: "https://github.com/moekyawaung-tech/pwa-app",
  },
  {
    id: "weather-app",
    name: "Weather App",
    tagline: "Location-aware forecasting",
    description:
      "Forecast app with geolocation, hourly charts, severe-weather alerts, and efficient refresh policies. Optimized to cut battery drain while keeping warnings realtime.",
    stack: ["Kotlin", "Retrofit", "Coroutines", "REST"],
    screenshot: `${CLOUD}/v1778795859/copilot_image_1778794430377_n7xlmz.png`,
    repo: "https://github.com/moekyawaung-tech/Weather-app",
  },
  {
    id: "thailand-travel",
    name: "Thailand Travel",
    tagline: "Cross-border trip planner",
    description:
      "Travel companion for the Myanmar ⇄ Thailand corridor with route planning, local guides, currency tools, and offline-friendly maps for areas with poor signal.",
    stack: ["Kotlin", "Maps", "Room", "Location"],
    screenshot: `${CLOUD}/v1778795856/copilot_image_1778795675037_heh9xk.png`,
    repo: "https://github.com/moekyawaung-tech/thailand-travel",
  },
  {
    id: "job-portal",
    name: "Job Portal App",
    tagline: "Hiring & applicant workflow",
    description:
      "Hiring platform covering role discovery, applicant tracking, authentication, and realtime notifications. Connects candidates and employers with a clean mobile flow.",
    stack: ["Firebase", "Auth", "Realtime", "Android"],
    screenshot: `${CLOUD}/v1778795853/copilot_image_1778794781671_kytvkc.png`,
    repo: "https://github.com/moekyawaung-tech/Job-Portal-App",
  },
];

export const SKILLS: SkillItem[] = [
  { name: "Kotlin", category: "Language", level: 98, years: 4 },
  { name: "Jetpack Compose", category: "UI", level: 96, years: 3 },
  { name: "Clean Architecture", category: "Architecture", level: 95, years: 3 },
  { name: "MVVM / MVI", category: "State", level: 96, years: 3 },
  { name: "Room / SQLite", category: "Data", level: 94, years: 3 },
  { name: "Coroutines / Flow", category: "Async", level: 96, years: 3 },
  { name: "Firebase", category: "Backend", level: 92, years: 3 },
  { name: "REST / Retrofit", category: "Network", level: 96, years: 3 },
  { name: "TypeScript / React", category: "Web", level: 91, years: 3 },
  { name: "TFLite / On-device AI", category: "AI", level: 87, years: 2 },
  { name: "GitHub Actions", category: "DevOps", level: 91, years: 3 },
  { name: "Cybersecurity", category: "Security", level: 85, years: 2 },
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2026",
    title: "Building MoekyawTranslator",
    org: "Current focus",
    description:
      "Engineering an on-device AI translation app with a quantized TFLite model — 4MB footprint, 38ms inference, zero cloud dependency for private translation.",
    kind: "build",
  },
  {
    year: "2025",
    title: "Senior Android Engineer",
    org: "Production systems",
    description:
      "Delivered high-performance Android applications using Kotlin, Jetpack Compose, MVVM/MVI and Clean Architecture, backed by Firebase and automated CI/CD pipelines.",
    kind: "work",
  },
  {
    year: "2024",
    title: "82+ Certifications",
    org: "Programming Hub",
    description:
      "Completed 82+ certificates across nine domains including mobile, web, databases, AI/ML, security, DevOps, and software engineering alongside the Google Developers Launchpad.",
    kind: "learning",
  },
  {
    year: "2023",
    title: "First production apps",
    org: "Career start",
    description:
      "Shipped early JavaScript and Android applications, establishing a habit of shipping small, learning fast, and building interfaces people can trust.",
    kind: "build",
  },
];

export const NAV_SECTIONS = [
  { id: "hero", label: "Home", index: "01" },
  { id: "projects", label: "Projects", index: "02" },
  { id: "skills", label: "Skills", index: "03" },
  { id: "timeline", label: "Journey", index: "04" },
  { id: "contact", label: "Contact", index: "05" },
];
