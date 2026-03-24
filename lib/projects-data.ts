// ─── MIP ENGENHARIA — REAL PROJECT DATA ───────────────────────────────────────

export type ProjectStatus = "production" | "active" | "maintained";
export type ProjectType   = "web" | "api" | "desktop" | "integration";

export interface Project {
  id:          string;
  name:        string;
  type:        ProjectType;
  status:      ProjectStatus;
  tags:        string[];
  icon:        string;
  color:       string;
  summary:     string;
  description: string;
  impact:      string[];
  tech:        string[];
  category:    string;
}

export const PROJECTS_DATA: Project[] = [
  /* ── INTEGRATIONS ── */
  {
    id:       "integrador-erp",
    name:     "IntegradorERP",
    type:     "integration",
    status:   "production",
    tags:     ["ERP", "TOTVS", "Folha de Pagamento", "eSocial"],
    icon:     "🔗",
    color:    "from-cyan-900/50 to-blue-900/40",
    category: "ERP & Integrations",
    summary:  "Core integration between internal systems and TOTVS ERP Payroll.",
    description:
      "Windows Forms integration system connecting internal HR processes with TOTVS Folha de Pagamento ERP. Handles bulk employee ID changes, payroll reprocessing (period 10000), integration with Portal do Fornecedor and full payroll import pipeline.",
    impact: [
      "Automated bulk payroll processing eliminating manual data entry for hundreds of employees",
      "Seamless TOTVS ERP integration reducing HR processing time significantly",
      "Connected Portal do Fornecedor to payroll system for unified financial data flow",
    ],
    tech: ["C#", ".NET", "Windows Forms", "TOTVS API", "SQL Server", "Web Services"],
  },
  {
    id:       "integrador-klassmatt",
    name:     "IntegradorKlassmatt",
    type:     "integration",
    status:   "production",
    tags:     ["ERP", "TOTVS", "SASCAR", "Almoxarifado", "Rastreamento"],
    icon:     "🔄",
    color:    "from-blue-900/50 to-indigo-900/40",
    category: "ERP & Integrations",
    summary:  "Multi-system integration hub: ERP, vehicle tracking and supply chain.",
    description:
      "Central integration system connecting multiple third-party platforms with MIP's ERP. Feeds ERP with new products from Klassmatt, syncs vehicle tracking data from SASCAR, enables bulk product registration, powers the intelligent warehouse requisition module and automates supplier creation via payroll.",
    impact: [
      "Unified 4 external systems (Klassmatt, SASCAR, ERP, Almoxarifado) into a single integration layer",
      "Automated vehicle tracking data sync, eliminating manual fleet management updates",
      "Bulk product registration reduced warehouse team workload dramatically",
    ],
    tech: ["C#", ".NET", "Windows Forms", "TOTVS API", "SASCAR API", "SQL Server", "REST APIs"],
  },
  {
    id:       "rede-inteligente",
    name:     "RedeInteligente",
    type:     "integration",
    status:   "production",
    tags:     ["Active Directory", "FLUIG", "Office365", "RH", "Automação"],
    icon:     "🌐",
    color:    "from-violet-900/50 to-blue-900/40",
    category: "ERP & Integrations",
    summary:  "Intelligent user lifecycle management across AD, FLUIG and Office 365.",
    description:
      "Automated user provisioning system integrated with MIP's Active Directory, FLUIG and Office 365. Handles the full employee lifecycle: account creation, blocking (vacation/leave/dismissal) and reactivation. Also controls overtime alerts, unregistered accounts, medical certificates and sends IQF performance indicators to suppliers.",
    impact: [
      "Zero manual AD account management — fully automated by HR events (hire, fire, leave)",
      "Integrated FLUIG + Office 365 notifications for instant onboarding communication",
      "Automated IQF supplier indicator dispatch, replacing manual email processes",
    ],
    tech: ["C#", ".NET", "Active Directory", "FLUIG API", "Office 365 API", "SQL Server", "SMTP"],
  },
  {
    id:       "soc-api",
    name:     "SOC_API",
    type:     "api",
    status:   "production",
    tags:     ["SOC", "Saúde Ocupacional", "Medicina do Trabalho", "API"],
    icon:     "🏥",
    color:    "from-emerald-900/50 to-cyan-900/40",
    category: "APIs & Backend",
    summary:  "REST API automating occupational health & safety processes with SOC system.",
    description:
      "Backend REST API that fully automates MIP Construtora's integration with the SOC system — the platform responsible for all occupational health and workplace safety processes. Handles employee health records, medical exams, safety documentation and compliance reporting.",
    impact: [
      "Eliminated manual SOC data entry for occupational health records across all construction sites",
      "Automated safety compliance reporting, ensuring regulatory requirements are met without manual effort",
    ],
    tech: ["C#", "ASP.NET Core", "REST API", "SOC API", "SQL Server", "Swagger"],
  },
  {
    id:       "efetivo-api",
    name:     "Efetivo_API",
    type:     "api",
    status:   "production",
    tags:     ["API", "Headcount", "Obras", "Sede"],
    icon:     "👷",
    color:    "from-orange-900/40 to-yellow-900/30",
    category: "APIs & Backend",
    summary:  "Real-time headcount API for construction sites and headquarters.",
    description:
      "REST API providing real-time daily headcount data for both construction sites and the headquarters. Consumed by dashboards and management tools across the organization, enabling accurate workforce visibility at any moment.",
    impact: [
      "Real-time workforce visibility for all construction sites — consumed by Power BI dashboards",
      "Replaced manual daily headcount spreadsheets with automated API-driven reporting",
    ],
    tech: ["C#", "ASP.NET Core", "REST API", "SQL Server", "TOTVS Integration"],
  },
  {
    id:       "gestao-equipamentos-api",
    name:     "GestaoEquipamentos_API",
    type:     "api",
    status:   "production",
    tags:     ["API", "Equipamentos", "Guindastes", "Atividades"],
    icon:     "🏗️",
    color:    "from-yellow-900/40 to-orange-900/30",
    category: "APIs & Backend",
    summary:  "API for equipment activities and crane operations management.",
    description:
      "REST API providing data on work activities (AtividadesTrabalho) and crane assembly daily logs (DiarioGuindasteMontagem) for MIP's heavy equipment operations on construction sites.",
    impact: [
      "Centralized equipment operation data for real-time project management decisions",
      "Crane operation logs now digitally tracked, improving safety and compliance reporting",
    ],
    tech: ["C#", "ASP.NET Core", "REST API", "SQL Server"],
  },
  {
    id:       "mobilizacao-api",
    name:     "Mobilizacao_API",
    type:     "api",
    status:   "production",
    tags:     ["API", "Contratação", "Obras", "RH"],
    icon:     "📋",
    color:    "from-cyan-900/40 to-teal-900/30",
    category: "APIs & Backend",
    summary:  "API exposing the full hiring and mobilization pipeline for construction sites.",
    description:
      "REST API that queries and exposes the entire employee hiring and mobilization process for construction sites. Provides visibility into contract stages, resource allocation and workforce mobilization status across all active projects.",
    impact: [
      "Full hiring pipeline visibility via API — consumed by management dashboards and HR tools",
      "Eliminated isolated data silos between HR and construction site management",
    ],
    tech: ["C#", "ASP.NET Core", "REST API", "SQL Server", "TOTVS Integration"],
  },
  {
    id:       "gestao-atividades",
    name:     "GestaoDeAtividades",
    type:     "api",
    status:   "production",
    tags:     ["API", "Check-in", "Check-out", "Planejamento"],
    icon:     "✅",
    color:    "from-teal-900/40 to-emerald-900/30",
    category: "APIs & Backend",
    summary:  "Check-in/check-out API for planning activity tracking.",
    description:
      "REST API managing the check-in and check-out lifecycle of planning-related activities across MIP's projects. Enables real-time tracking of task progress and workforce attendance tied directly to the planning module.",
    impact: [
      "Real-time activity progress tracking replacing manual planning spreadsheets",
      "Check-in/out data feeds directly into planning dashboards for project managers",
    ],
    tech: ["C#", "ASP.NET Core", "REST API", "SQL Server"],
  },
  {
    id:       "almoxi-api",
    name:     "AlmoxAPI",
    type:     "api",
    status:   "production",
    tags:     ["API", "Almoxarifado", "Mobile", "Estoque"],
    icon:     "📦",
    color:    "from-amber-900/40 to-orange-900/30",
    category: "APIs & Backend",
    summary:  "Backend API powering the Intelligent Warehouse mobile application.",
    description:
      "Full-featured REST API backend for the Almoxarifado Inteligente (Intelligent Warehouse) mobile app. Handles the complete material lifecycle: stock requests, requisition approval/rejection, editing, separation, withdrawal and return of materials to site inventory.",
    impact: [
      "Powered a mobile-first warehouse solution eliminating paper-based stock requisitions on sites",
      "Full material lifecycle (request → approve → separate → withdraw → return) in a single API",
      "Real-time inventory visibility for construction site managers",
    ],
    tech: ["C#", "ASP.NET Core", "REST API", "SQL Server", "Swagger", "Mobile Integration"],
  },
  /* ── WEB SYSTEMS ── */
  {
    id:       "sigtin",
    name:     "PesquisaFuncionarios (SIGTIN)",
    type:     "web",
    status:   "production",
    tags:     ["Web", "TI", "Inventário", "Empréstimos", "Telefonia"],
    icon:     "💻",
    color:    "from-blue-900/50 to-cyan-900/40",
    category: "Web Systems",
    summary:  "Complete IT asset management and employee digital services platform.",
    description:
      "Full web platform (SIGTIN) for digital management of IT asset loans (notebooks, phones, modems, tablets), machine tracking, telephony management by cost center, inventory control of rented equipment, and full automation of HR events: admission, dismissal, leave and vacation.",
    impact: [
      "Digitized all IT asset loans — eliminated paper forms and manual tracking spreadsheets",
      "Automated IT actions for HR events (admission, dismissal, leave) saving hours of manual work per week",
      "Telephony costs managed by cost center with full visibility for financial team",
      "Complete rented equipment inventory with automated lifecycle tracking",
    ],
    tech: ["C#", "ASP.NET Core", "SQL Server", "JavaScript", "HTML5", "CSS3", "Active Directory"],
  },
  {
    id:       "portal-fornecedor",
    name:     "PortalFornecedor",
    type:     "web",
    status:   "production",
    tags:     ["Web", "Fornecedores", "Financeiro", "SISPAG", "Hapvida"],
    icon:     "🤝",
    color:    "from-green-900/50 to-teal-900/40",
    category: "Web Systems",
    summary:  "Self-service supplier portal reducing financial team response time.",
    description:
      "Supplier self-service web portal that dramatically reduces the financial team's workload. Suppliers can access payment vouchers, update their registration, open support tickets, view employee payment confirmations via SISPAG and reconcile Hapvida health insurance invoices — all without contacting the finance team.",
    impact: [
      "Drastically reduced financial team response time by enabling supplier self-service",
      "Integrated SISPAG for automated employee payment confirmation access",
      "Hapvida health insurance invoice reconciliation directly in the portal",
      "Supplier registration updates without manual finance team intervention",
    ],
    tech: ["C#", "ASP.NET Core", "SQL Server", "SISPAG API", "Hapvida Integration", "JavaScript"],
  },
  {
    id:       "portal-inovacao",
    name:     "PortalInovação",
    type:     "web",
    status:   "production",
    tags:     ["Web", "Inovação", "BSC", "SGI", "Gestão"],
    icon:     "💡",
    color:    "from-purple-900/50 to-violet-900/40",
    category: "Web Systems",
    summary:  "Innovation management platform that replaced a R$30K/year third-party system.",
    description:
      "Internal innovation management platform that fully replaced an expensive third-party system (R$30,000/year). Features spontaneous and induced innovation management, idea documentation and ranking, internal communications, gift management, BSC goal monitoring, lessons-learned knowledge base and SGI (management system) integration.",
    impact: [
      "Replaced a R$30,000/year third-party platform — full ROI from day one",
      "Centralized innovation pipeline with spontaneous and company-driven idea management",
      "BSC goal tracking visible across all management levels",
      "Lessons-learned knowledge base improving project quality over time",
    ],
    tech: ["C#", "ASP.NET Core", "SQL Server", "JavaScript", "HTML5", "CSS3", "SGI Integration"],
  },
  {
    id:       "portal-manutencao",
    name:     "PortalManutenção",
    type:     "web",
    status:   "production",
    tags:     ["Web", "Manutenção", "Power BI", "FLUIG", "Aprovação Digital"],
    icon:     "🔧",
    color:    "from-orange-900/50 to-red-900/30",
    category: "Web Systems",
    summary:  "Digital operations portal for maintenance projects with multi-system integration.",
    description:
      "Comprehensive web portal for digital management of maintenance projects. Features digital ADC (Daily Construction Report), embedded Power BI dashboards, resource apportionment, SEO vs. Timesheet reconciliation, electronic client approval workflow, and deep integration with MIP's core systems: RM, FLUIG, PIM and Power BI.",
    impact: [
      "Digitized ADC reports — eliminated all paper-based construction daily reports",
      "Electronic client approval workflow reducing approval cycle from days to hours",
      "Multi-system integration: RM + FLUIG + PIM + Power BI in a single portal",
      "SEO vs. Timesheet reconciliation automated, previously done manually",
    ],
    tech: ["C#", "ASP.NET Core", "SQL Server", "Power BI Embedded", "FLUIG API", "RM Integration", "PIM Integration"],
  },
  {
    id:       "arquivo-fisico",
    name:     "ArquivoFisico",
    type:     "web",
    status:   "production",
    tags:     ["Web", "Documentos", "Contratos", "Digitalização"],
    icon:     "📁",
    color:    "from-stone-900/50 to-zinc-900/40",
    category: "Web Systems",
    summary:  "Digital catalog for physical document management (contracts, folders, files).",
    description:
      "Web system for the digital cataloging and management of physical documents including printed contracts, folders, employee files and stored physical records. Enables searchable tracking, location management and lifecycle control of all physical documentation.",
    impact: [
      "Digitally cataloged all physical documents — search in seconds instead of manual archive search",
      "Contract and folder lifecycle tracking with location and status management",
    ],
    tech: ["C#", "ASP.NET Core", "SQL Server", "JavaScript", "HTML5"],
  },
  /* ── DESKTOP ── */
  {
    id:       "ler-xml",
    name:     "LerXML",
    type:     "desktop",
    status:   "production",
    tags:     ["eSocial", "TOTVS", "Fiscal", "Vale", "NACT"],
    icon:     "📄",
    color:    "from-indigo-900/50 to-blue-900/40",
    category: "Desktop & Automation",
    summary:  "eSocial event generator integrated with TOTVS for Vale's NACT reporting.",
    description:
      "Windows Forms desktop application integrated with TOTVS Folha de Pagamento ERP to generate eSocial events specifically destined to Vale's NACT (Núcleo de Apoio à Construção e Tecnologia). Handles government-required payroll fiscal compliance data generation.",
    impact: [
      "Automated eSocial event generation, eliminating manual fiscal compliance data preparation",
      "Direct integration with TOTVS ensuring data accuracy for government reporting",
      "Meets Vale's NACT specific requirements for construction projects",
    ],
    tech: ["C#", ".NET", "Windows Forms", "TOTVS API", "SQL Server", "eSocial Schema"],
  },
  {
    id:       "ws-agent",
    name:     "WSAgent",
    type:     "desktop",
    status:   "production",
    tags:     ["Agent", "Inventário", "SIGTIN", "Máquinas"],
    icon:     "🖥️",
    color:    "from-slate-900/50 to-gray-900/40",
    category: "Desktop & Automation",
    summary:  "Silent agent collecting machine hardware data and feeding SIGTIN inventory.",
    description:
      "Lightweight Windows agent application that silently collects hardware and software information from user machines and automatically feeds the SIGTIN IT management system. Enables automated, always-up-to-date IT asset inventory without manual data collection.",
    impact: [
      "Automated IT inventory — machine specs always current without manual audits",
      "SIGTIN inventory populated in real-time from all machines across the company",
      "Reduced IT audit time from days to zero — data collected automatically",
    ],
    tech: ["C#", ".NET", "Windows Forms", "WMI", "SQL Server", "SIGTIN API"],
  },
];

// ── CATEGORIES ──────────────────────────────────────────────────────────────
export const CATEGORIES = [
  "All",
  "ERP & Integrations",
  "APIs & Backend",
  "Web Systems",
  "Desktop & Automation",
] as const;

export type Category = typeof CATEGORIES[number];

// ── STATS ────────────────────────────────────────────────────────────────────
export const PROJECT_STATS = [
  { value: "16",  label: "Systems Built",       icon: "🚀" },
  { value: "8",   label: "REST APIs",            icon: "⚡" },
  { value: "5",   label: "Web Portals",          icon: "🌐" },
  { value: "R$30K", label: "Saved / Year",       icon: "💰" },
  { value: "4+",  label: "ERP Integrations",     icon: "🔗" },
  { value: "100%", label: "In Production",       icon: "✅" },
];
