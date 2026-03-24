// ─── SITE DATA — single source of truth ───────────────────────────────────────

export const PERSONAL = {
  name:        "Walid Marghata",
  title:       "Senior Full Stack Developer",
  subtitle:    "C#, .NET, Azure & System Integrations",
  tagline:     "Building scalable systems that solve real business problems.",
  location:    "Remote · Brazil · Open to Global Opportunities",
  email:       "walidmarghatadevfullstack@gmail.com",
  phone:       "+55 (31) 92000-9948",
  linkedin:    "https://www.linkedin.com/in/walidmarghata/",
  github:      "https://github.com/WalidMarghata",
  available:   true,
};

export const TYPEWRITER_WORDS = [
  "Senior Full Stack Developer",
  "C# & .NET Specialist",
  "System Integration Expert",
  "Azure Cloud Developer",
  "API Architect",
  "Remote-Ready Engineer",
];

export const STACK_TAGS = [
  "C#", ".NET Core", "Azure", "Java", "React",
  "Node.js", "Angular", "Spring Boot", "SQL", "MongoDB", "REST APIs", "Ionic",
];

export const METRICS = [
  { to: 9,  suffix: "+", label: "Years Experience" },
  { to: 3,  suffix: "",  label: "Companies"        },
  { to: 10, suffix: "+", label: "Integrations"     },
  { to: 5,  suffix: "",  label: "Languages Spoken" },
  { to: 3,  suffix: "",  label: "Degrees"          },
];

export const EXPERIENCES = [
  {
    period:  "2023 — Present",
    company: "MIP Engenharia",
    role:    "Senior Full Stack Developer",
    current: true,
    impact: [
      "Led integration architecture between internal ERP systems and external partners using .NET and Web Services",
      "Automated HR, Planning and Supply Chain workflows, eliminating manual processes across multiple departments",
      "Built and maintained scalable REST APIs consumed by cross-functional teams",
      "Delivered technical support across DP, RH and Suprimentos — reducing resolution time significantly",
    ],
    tags: ["C#", ".NET Core", "ASP.NET Core MVC", "SQL Server", "Web Services", "REST APIs"],
  },
  {
    period:  "2022 — 2023",
    company: "Prodemge",
    role:    "Full Stack Developer",
    current: false,
    impact: [
      "Developed government-grade mobile applications using Ionic and Angular for public-sector clients",
      "Migrated legacy JavaScript components to TypeScript, improving code reliability and maintainability",
      "Optimized front-end performance across multiple Angular modules serving thousands of users",
      "Delivered Java integrations for critical state infrastructure systems",
    ],
    tags: ["Angular", "Java", "Ionic", "TypeScript", "Government"],
  },
  {
    period:  "2021 — 2022",
    company: "Montreal",
    role:    "Full Stack Developer",
    current: false,
    impact: [
      "Built enterprise software solutions using Java, C#, Python and C++ in a software factory model",
      "Implemented two-factor authentication (2FA) and secure API data extraction pipelines",
      "Integrated WS02, Swagger, Postman and FileZilla into production workflows",
      "Collaborated on multi-language front-end development using AngularJS, HTML5 and CSS3",
    ],
    tags: ["Java", "C#", "Python", "AngularJS", "WS02", "2FA"],
  },
];

export const PROJECTS = [
  {
    name:    "Enterprise Integration Platform",
    problem: "Multiple internal systems (HR, Supply Chain, Planning) operated in silos, creating data inconsistencies and heavy manual workload.",
    solution:"Designed and built a centralized integration layer using ASP.NET Core and Web Services, connecting all systems through a unified API gateway.",
    stack:   ["C#", "ASP.NET Core", "SQL Server", "Web Services", "REST APIs"],
    impact:  "Eliminated redundant manual data entry across 4 departments. Reduced process time by connecting previously isolated systems.",
    icon:    "🔗",
    color:   "from-cyan-900/40 to-blue-900/40",
  },
  {
    name:    "Government Mobile App (Prodemge)",
    problem: "Public sector required a cross-platform mobile solution for citizens and internal agents with strict reliability and performance standards.",
    solution:"Built a production-grade mobile application using Ionic + Angular, integrating with government Java backends and real-time data services.",
    stack:   ["Ionic", "Angular", "TypeScript", "Java", "REST APIs"],
    impact:  "Delivered a stable app serving thousands of users in a regulated government environment. Zero critical downtime post-launch.",
    icon:    "📱",
    color:   "from-emerald-900/40 to-cyan-900/40",
  },
  {
    name:    "Automation & Reporting Engine",
    problem: "HR and Supply departments spent excessive hours generating recurring reports and triggering manual operational tasks.",
    solution:"Developed an automation engine using .NET Core that scheduled, generated and dispatched reports automatically based on configurable business rules.",
    stack:   [".NET Core", "C#", "SQL Server", "Procedures", "Task Scheduler"],
    impact:  "Saved significant manual hours per month. Reports now generated and sent automatically with full audit trail.",
    icon:    "⚙️",
    color:   "from-violet-900/40 to-blue-900/40",
  },
];

export const HOW_I_WORK = [
  {
    icon: "🏗️",
    title: "Architecture First",
    desc:  "I think in systems, not just features. Every solution starts with scalability and integration in mind.",
  },
  {
    icon: "🔌",
    title: "Integration Expert",
    desc:  "From REST to Web Services to legacy systems — I connect things that weren't meant to talk to each other.",
  },
  {
    icon: "📈",
    title: "Business-Oriented",
    desc:  "I write code that solves real problems. Every feature is tied to a business outcome.",
  },
  {
    icon: "🌍",
    title: "Remote-Ready",
    desc:  "Fluent in English and French. Experienced in async communication and international team dynamics.",
  },
];

export const SKILL_CATS = [
  { icon: "💻", title: "Languages",   pills: ["C#", "Java", "JavaScript", "TypeScript", "Python", "C++", "PHP"] },
  { icon: "⚙️", title: "Frameworks",  pills: ["ASP.NET Core", ".NET Framework", "Spring Boot", "React", "Node.js", "Angular", "Ionic"] },
  { icon: "🗄️", title: "Databases",  pills: ["SQL Server", "MySQL", "Oracle", "MongoDB", "Procedures"] },
  { icon: "☁️", title: "Cloud & Tools",pills: ["Azure", "Swagger", "Postman", "WS02", "REST APIs", "2FA Auth"] },
  { icon: "🌐", title: "Front-end",   pills: ["React", "Angular", "HTML5", "CSS3", "Ionic", "AngularJS"] },
  { icon: "🧠", title: "Soft Skills", pills: ["System Design", "Team Leadership", "Communication", "Planning", "Emotional IQ"] },
];

export const EDUCATION = [
  { icon: "🎓", type: "Post-Graduation", course: "Software Engineering",              school: "Estácio", period: "2023–2024" },
  { icon: "🖥️", type: "Bachelor's",      course: "Computer Science",                  school: "Estácio", period: "2020–2023" },
  { icon: "📐", type: "Degree",          course: "Systems Analysis & Development",    school: "Estácio", period: "2018–2020" },
];

export const COURSES = [
  { name: "ILifelong Learning",                               provider: "Certiprof"          },
  { name: "Gremlin Certified Chaos Engineering — GCCEP",     provider: "Gremlin"            },
  { name: "Advanced Applications with Angular",               provider: "DIO"                },
  { name: "Back-end Architecture with .NET Core",             provider: "DIO"                },
  { name: "Integrated Testing Suite in .NET Core",            provider: "DIO"                },
  { name: "Agile Projects with Scrum",                        provider: "DIO"                },
  { name: "Introduction to Data Science 2.0",                 provider: "Alura"              },
  { name: "Big Data Fundamentals 2.0",                        provider: "Data Science Academy"},
];

export const LANGS = [
  { flag: "🇸🇦", name: "Arabic",     level: "Native",   pct: 100 },
  { flag: "🇫🇷", name: "French",     level: "Fluent",   pct: 95  },
  { flag: "🇬🇧", name: "English",    level: "Fluent",   pct: 95  },
  { flag: "🇧🇷", name: "Portuguese", level: "Fluent",   pct: 95  },
  { flag: "🇷🇺", name: "Russian",    level: "Advanced", pct: 75  },
];
