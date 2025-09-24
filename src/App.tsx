import React, { useMemo, useState } from "react";
import { Sword, Shield, Brain, Map, ScrollText, BookOpen, Compass, Send, Mail, Github, Linkedin, Rocket, Trophy, Star, Flame, Heart, Cog, Cpu } from "lucide-react";

/**
 * RICHARD · RPG PORTFOLIO (Single-File React SPA)
 * -------------------------------------------------
 * • All-English copy
 * • Multi-page feel via client-side router (Tabs)
 * • RPG theming: Character Sheet, Skill Tree, Quest Log, World Map (Vision), Inventory (Certs/Tools), Codex (Projects), Journal (Notes), Contact
 * • Clean, modern UI using Tailwind classes; shadcn/ui not required
 * • Easy to customize: edit DATA below
 */

// ------------------------------
// 1) THEME + SMALL UI PRIMITIVES
// ------------------------------
const Page: React.FC<{ title: string; icon?: React.ReactNode; description?: string; children: React.ReactNode }>=({ title, icon, description, children })=> (
  <section className="max-w-6xl mx-auto px-4 pb-24">
    <header className="flex items-center gap-3 mb-6">
      <div className="text-xl opacity-70">{icon}</div>
      <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">{title}</h1>
    </header>
    {description ? (
      <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{description}</p>
    ) : null}
    {children}
  </section>
);

const Card: React.FC<{ children: React.ReactNode; className?: string }>=({ children, className })=> (
  <div className={`rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 shadow-sm p-5 ${className||""}`}>{children}</div>
);

const Tag: React.FC<{children: React.ReactNode}>=({children})=> (
  <span className="inline-flex items-center gap-1 rounded-full border border-slate-300 dark:border-slate-700 px-2 py-0.5 text-xs text-slate-600 dark:text-slate-300 bg-white/50 dark:bg-slate-800/50">
    {children}
  </span>
);

const Progress: React.FC<{ value: number }>=({ value })=> (
  <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
    <div className="h-full bg-emerald-500" style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
  </div>
);

// ------------------------------
// 2) DATA · EDIT ME
// ------------------------------
const DATA = {
  hero: {
    name: "Richard Chen",
    title: "AI Engineer · Data Analyst · Technical PM",
    tagline: "From blueprints to code — building intelligent systems powered by AI.",
    location: "New York, USA",
    email: "richard.chen3797@gmail.com",
    github: "https://github.com/richard-ai",
    linkedin: "https://linkedin.com/in/richard-chen-26019a237",
  },
  stats: [
    { label: "Focus", value: 82 },
    { label: "Resilience", value: 88 },
    { label: "Systems Thinking", value: 90 },
    { label: "Communication", value: 84 },
    { label: "Shipping Rate", value: 76 },
  ],
  skills: [
    {
      branch: "Core Engineering",
      icon: <Cpu className="w-4 h-4"/>,
      items: [
        { name: "Python", level: 80 },
        { name: "SQL", level: 78 },
        { name: "Git/GitHub", level: 75 },
        { name: "APIs & ETL", level: 70 },
      ],
    },
    {
      branch: "AI & Analytics",
      icon: <Brain className="w-4 h-4"/>,
      items: [
        { name: "Pandas / NumPy", level: 78 },
        { name: "Scikit-learn", level: 65 },
        { name: "LLMs (OpenAI/LangChain)", level: 68 },
        { name: "Power BI / Tableau", level: 72 },
      ],
    },
    {
      branch: "Delivery & Ops",
      icon: <Cog className="w-4 h-4"/>,
      items: [
        { name: "Agile / Scrum", level: 85 },
        { name: "Roadmapping", level: 82 },
        { name: "Stakeholder mgmt", level: 80 },
        { name: "Risk & QA", level: 78 },
      ],
    },
  ],
  inventory: [
    { name: "PMP®", note: "Project Management Professional", icon: <Shield className="w-4 h-4"/> },
    { name: "CS50x (in progress)", note: "Computer Science fundamentals", icon: <BookOpen className="w-4 h-4"/> },
    { name: "Python Toolbelt", note: "Jupyter, FastAPI, Streamlit", icon: <Sword className="w-4 h-4"/> },
    { name: "Data Viz Kit", note: "Power BI, Plotly", icon: <Trophy className="w-4 h-4"/> },
  ],
  projects: [
    {
      title: "NYC Energy Predictor",
      summary: "Predict building energy use and surface actionable insights for retrofits.",
      bullets: ["EDA on NYC Benchmarking dataset", "Regression + feature importance", "Streamlit app for what-ifs"],
      tags: ["Python", "Pandas", "scikit-learn", "Streamlit"],
      link: "#",
    },
    {
      title: "PM AI Copilot",
      summary: "LLM assistant that drafts reports, summarizes meetings, and creates timelines.",
      bullets: ["OpenAI + LangChain", "RAG over project docs", "Role-aware prompts"],
      tags: ["OpenAI", "LangChain", "Embeddings", "RAG"],
      link: "#",
    },
    {
      title: "Telemetry Dashboard",
      summary: "Interactive BI dashboard for ops performance and cost drivers.",
      bullets: ["Power BI semantic model", "DAX KPIs", "Drillthrough & cohort views"],
      tags: ["Power BI", "SQL", "DAX"],
      link: "#",
    },
  ],
  quests: [
    {
      era: "Past",
      items: [
        {
          name: "NYC Infrastructure PM",
          desc: "Led $20M+ projects; coordinated multi-disciplinary teams; delivered under pressure.",
          xp: 100,
          tags: ["Leadership", "Risk mgmt", "Stakeholders"],
        },
        {
          name: "Quality & Safety Ops",
          desc: "Implemented checklists, audits, and variance tracking to cut defects.",
          xp: 80,
          tags: ["QA", "Process", "KPI"],
        },
      ],
    },
    {
      era: "Now",
      items: [
        {
          name: "21-Day Digital Detox (Focus Arc)",
          desc: "Reducing distractions to unlock deep work periods and peak health.",
          xp: 40,
          tags: ["Mindset", "Discipline"],
        },
        {
          name: "Data Analyst Path",
          desc: "Daily reps in SQL/Python + one shipped analysis artifact per week.",
          xp: 35,
          tags: ["SQL", "Python", "Portfolio"],
        },
      ],
    },
    {
      era: "Next",
      items: [
        {
          name: "Ship: Energy Optimizer v2",
          desc: "Forecast savings scenarios; publish case study and walkthrough video.",
          xp: 25,
          tags: ["Modeling", "Storytelling"],
        },
        {
          name: "Hire: Data Analyst / AI Engineer",
          desc: "Target NYC/Remote roles in AI-enabled data teams.",
          xp: 50,
          tags: ["Job Search", "Networking"],
        },
      ],
    },
  ],
  map: [
    { quarter: "Q4 · 2025", beats: ["Ship 2 portfolio projects", "Apply to 15 data roles", "Weekly LinkedIn posts"] },
    { quarter: "Q1 · 2026", beats: ["Join data/AI team", "Own a KPI dashboard end-to-end", "Study for Azure/AWS cert"] },
    { quarter: "Q2 · 2026", beats: ["Lead an ML-assisted analytics feature", "Publish tech blog series"] },
  ],
};

// ------------------------------
// 3) PAGES
// ------------------------------
const CharacterPage: React.FC = () => (
  <Page title="Character Sheet" icon={<Shield/>} description="A quick look at the hero behind the builds.">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="md:col-span-2">
  <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-5 items-start">
    {/* 左侧角色形象 */}
    <div className="w-full max-w-[14rem]">
      <img
        src="/assets/images/char-builder.png"
        alt="Character Builder"
        className="w-full rounded-2xl shadow-lg ring-1 ring-black/10 object-cover bg-white"
      />
    </div>

    {/* 右侧文字 */}
    <div>
      <h2 className="text-xl font-bold">{DATA.hero.name}</h2>
      <p className="text-slate-600 dark:text-slate-300">{DATA.hero.title}</p>
      <p className="mt-2 text-sm">{DATA.hero.tagline}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        <Tag><Map className="w-3 h-3"/> {DATA.hero.location}</Tag>
        <a className="no-underline" href={`mailto:${DATA.hero.email}`}><Tag><Mail className="w-3 h-3"/> Email</Tag></a>
        <a className="no-underline" href={DATA.hero.github} target="_blank"><Tag><Github className="w-3 h-3"/> GitHub</Tag></a>
        <a className="no-underline" href={DATA.hero.linkedin} target="_blank"><Tag><Linkedin className="w-3 h-3"/> LinkedIn</Tag></a>
      </div>
    </div>
  </div>
</Card>

      <Card>
        <h3 className="font-semibold mb-3 flex items-center gap-2"><Heart className="w-4 h-4"/> Current Focus</h3>
        <ul className="space-y-2 text-sm">
          <li>• 21-day detox to rebuild deep work habits</li>
          <li>• Daily SQL/Python reps + weekly ship cadence</li>
          <li>• Portfolio projects targeting Data/AI roles</li>
        </ul>
      </Card>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-6">
      {DATA.stats.map((s)=> (
        <Card key={s.label}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-600 dark:text-slate-300">{s.label}</span>
            <span className="text-xs opacity-60">{s.value}</span>
          </div>
          <Progress value={s.value} />
        </Card>
      ))}
    </div>
  </Page>
);

const SkillsPage: React.FC = () => (
  <Page title="Skill Tree" icon={<Brain/>} description="Allocate points where it matters: data, AI, and delivery.">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* 左侧两列：技能卡 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:col-span-2">
        {DATA.skills.map((b)=> (
          <Card key={b.branch}>
            <div className="flex items-center gap-2 mb-3">
              <span className="opacity-70">{b.icon}</span>
              <h3 className="font-semibold">{b.branch}</h3>
            </div>
            <div className="space-y-4">
              {b.items.map((it)=> (
                <div key={it.name}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span>{it.name}</span>
                    <span className="opacity-60">{it.level}</span>
                  </div>
                  <Progress value={it.level} />
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* 右侧：技能插画 */}
      <div className="flex items-start justify-center">
        <img
          src="/assets/images/skills-sql-pmp.png"
          alt="Skills · SQL · PMP"
          className="w-full max-w-[520px] rounded-2xl shadow-lg ring-1 ring-black/10 object-cover bg-white"
        />
      </div>
    </div>
  </Page>
);

const InventoryPage: React.FC = () => (
  <Page title="Inventory" icon={<Sword/>} description="Certifications and tools carried into every quest.">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {DATA.inventory.map((i)=> (
        <Card key={i.name}>
          <div className="flex items-center gap-3">
            <div className="opacity-70">{i.icon}</div>
            <div>
              <h3 className="font-semibold">{i.name}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{i.note}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </Page>
);

const CodexPage: React.FC = () => (
  <Page title="Project Codex" icon={<BookOpen/>} description="Playable artifacts that prove the build.">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {DATA.projects.map((p)=> (
        <Card key={p.title}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-semibold mb-1">{p.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">{p.summary}</p>
            </div>
            <Rocket className="w-4 h-4 opacity-60"/>
          </div>
          <ul className="text-sm space-y-1 mb-3">
            {p.bullets.map((b,i)=> <li key={i}>• {b}</li>)}
          </ul>
          <div className="flex flex-wrap gap-2 mb-4">
            {p.tags.map((t)=> <Tag key={t}><Star className="w-3 h-3"/> {t}</Tag>)}
          </div>
          <div className="flex justify-end">
            <a className="text-sm underline opacity-80 hover:opacity-100" href={p.link}>View repo/demo</a>
          </div>
        </Card>
      ))}
    </div>
  </Page>
);

const QuestsPage: React.FC = () => (
  <Page title="Quest Log" icon={<ScrollText/>} description="Missions completed, active arcs, and queued objectives.">
    <div className="space-y-8">
      {DATA.quests.map((q)=> (
        <div key={q.era}>
          <h3 className="text-lg font-bold mb-3">{q.era}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {q.items.map((it)=> (
              <Card key={it.name}>
                <div className="flex items-start gap-3">
                  <Flame className="w-4 h-4 mt-1 opacity-70"/>
                  <div className="flex-1">
                    <h4 className="font-semibold">{it.name}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">{it.desc}</p>
                    <div className="mb-2"><Progress value={it.xp}/></div>
                    <div className="flex flex-wrap gap-2">
                      {it.tags.map((t)=> <Tag key={t}>{t}</Tag>)}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Page>
);

const MapPage: React.FC = () => (
  <Page title="World Map" icon={<Compass/>} description="Where the journey is headed next (vision & roadmap).">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {DATA.map.map((m)=> (
        <Card key={m.quarter}>
          <h3 className="font-semibold mb-3">{m.quarter}</h3>
          <ul className="space-y-2 text-sm">
            {m.beats.map((b,i)=> <li key={i}>• {b}</li>)}
          </ul>
        </Card>
      ))}
    </div>
  </Page>
);

const ContactPage: React.FC = () => (
  <Page title="Contact" icon={<Send/>} description="Open to Data Analyst / AI Engineer / Technical PM roles (NYC · Remote)">
    <Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="font-semibold mb-2">Let’s build something intelligent.</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">Fast replies. Thoughtful collaboration. Clear delivery.</p>
          <div className="flex flex-wrap gap-2">
            <a className="no-underline" href={`mailto:${DATA.hero.email}`}><Tag><Mail className="w-3 h-3"/> {DATA.hero.email}</Tag></a>
            <a className="no-underline" href={DATA.hero.github} target="_blank"><Tag><Github className="w-3 h-3"/> GitHub</Tag></a>
            <a className="no-underline" href={DATA.hero.linkedin} target="_blank"><Tag><Linkedin className="w-3 h-3"/> LinkedIn</Tag></a>
          </div>
        </div>
        <div className="rounded-xl border border-dashed border-slate-300 dark:border-slate-700 p-6 text-sm">
          <p className="opacity-80">Want a PDF resume or detailed case study? Ping me and I’ll send over a concise brief and a repo link. References available on request.</p>
        </div>
      </div>
    </Card>
  </Page>
);

// ------------------------------
// 4) ROUTER + SHELL
// ------------------------------
const TABS = [
  { key: "character", label: "Character", icon: <Shield className="w-4 h-4"/>, page: <CharacterPage/> },
  { key: "skills", label: "Skill Tree", icon: <Brain className="w-4 h-4"/>, page: <SkillsPage/> },
  { key: "inventory", label: "Inventory", icon: <Sword className="w-4 h-4"/>, page: <InventoryPage/> },
  { key: "codex", label: "Codex", icon: <BookOpen className="w-4 h-4"/>, page: <CodexPage/> },
  { key: "quests", label: "Quests", icon: <ScrollText className="w-4 h-4"/>, page: <QuestsPage/> },
  { key: "map", label: "Map", icon: <Compass className="w-4 h-4"/>, page: <MapPage/> },
  { key: "contact", label: "Contact", icon: <Send className="w-4 h-4"/>, page: <ContactPage/> },
] as const;

type TabKey = typeof TABS[number]["key"];

export default function App(){
  const [tab, setTab] = useState<TabKey>("character");
  const [dark, setDark] = useState(true);
  const Current = useMemo(()=> TABS.find(t=>t.key===tab)?.page ?? null, [tab]);

  return (
    <div className={dark?"dark":""}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100">
        {/* NAV */}
        <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/50 border-b border-slate-200/60 dark:border-slate-800">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚔️</span>
              <div>
                <div className="text-sm uppercase tracking-widest opacity-70">RPG Portfolio</div>
                <div className="font-extrabold -mt-0.5">{DATA.hero.name}</div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-1">
              {TABS.map((t)=> (
                <button
                  key={t.key}
                  onClick={()=>setTab(t.key)}
                  className={`px-3 py-2 rounded-xl text-sm flex items-center gap-2 hover:bg-slate-100/70 dark:hover:bg-slate-800/70 transition ${tab===t.key?"bg-slate-900 text-white dark:bg-white dark:text-slate-900":""}`}
                >
                  <span className="opacity-80">{t.icon}</span>{t.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <a href={DATA.hero.github} target="_blank" className="hidden md:inline-flex items-center gap-1 text-sm underline opacity-80 hover:opacity-100"><Github className="w-4 h-4"/> GitHub</a>
              <button aria-label="Toggle theme" onClick={()=>setDark(d=>!d)} className="px-3 py-2 rounded-xl text-sm border border-slate-300 dark:border-slate-700">
                {dark?"Light":"Dark"}
              </button>
            </div>
          </div>
          {/* Mobile tabs */}
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 overflow-x-auto">
            <div className="flex gap-2 px-3 py-2">
              {TABS.map((t)=> (
                <button key={t.key} onClick={()=>setTab(t.key)} className={`px-3 py-1.5 rounded-full text-xs flex items-center gap-1 border ${tab===t.key?"bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-transparent":"border-slate-300 dark:border-slate-700"}`}>
                  {t.icon}<span>{t.label}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* HERO */}
        <header className="relative py-14">
          <div className="absolute inset-0 pointer-events-none select-none [mask-image:linear-gradient(to_bottom,black,transparent)]">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] bg-emerald-400/10 blur-3xl rounded-full"/>
          </div>
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] items-center gap-8">
              <div className="flex items-center justify-center">
  <img
    src="/assets/images/hero-pmp.png"
    alt="Richard holding PMP sword"
    className="w-28 h-28 md:w-32 md:h-32 rounded-2xl shadow-xl ring-1 ring-black/10 object-cover bg-white/60"
  />
</div>

              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">{DATA.hero.title}</h1>
                <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-3xl">{DATA.hero.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Tag><Shield className="w-3 h-3"/> PMP®</Tag>
                  <Tag><Brain className="w-3 h-3"/> AI/Analytics</Tag>
                  <Tag><Map className="w-3 h-3"/> NYC · Remote</Tag>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* CURRENT PAGE */}
        <main>
          {Current}
        </main>

        {/* FOOTER */}
        <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 py-10">
          <div className="max-w-6xl mx-auto px-4 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="opacity-70">© {new Date().getFullYear()} {DATA.hero.name}. All builds are work-in-progress — always shipping.</div>
            <div className="flex gap-3">
              <a href={DATA.hero.github} target="_blank" className="underline opacity-80 hover:opacity-100">GitHub</a>
              <a href={DATA.hero.linkedin} target="_blank" className="underline opacity-80 hover:opacity-100">LinkedIn</a>
              <a href={`mailto:${DATA.hero.email}`} className="underline opacity-80 hover:opacity-100">Email</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
