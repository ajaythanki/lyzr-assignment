export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Control Plane", href: "#plane" },
  { label: "Layers", href: "#layers" },
  { label: "Why Lyzr", href: "#why" },
  { label: "Platform", href: "#platform" },
];

export const sources = ["AWS", "Azure", "LangChain", "Agentforce", "Custom"];

export type Layer = { n: string; name: string; desc: string };

export const layers: Layer[] = [
  { n: "01", name: "Connect", desc: "Pull in agents from any cloud or framework — no migration, no rewrites." },
  { n: "02", name: "Model routing", desc: "Run on GPT-4o, Claude, Gemini, Llama or Mistral. Swap without touching the agent." },
  { n: "03", name: "Simulate", desc: "Replay behaviour and edge cases before a single request hits production." },
  { n: "04", name: "Observe", desc: "Trace every call, track cost per agent, from day one." },
  { n: "05", name: "Guard", desc: "Stop hallucinations and PII before they cross the boundary." },
  { n: "06", name: "Govern", desc: "RBAC, SSO and policy — the controls security actually signs off on." },
  { n: "07", name: "Audit", desc: "Immutable logs and a clean trail for every action." },
];

export const models = ["GPT-4o", "Claude", "Gemini", "Llama", "Mistral"];

export type Metric = { label: string } & (
  | { count: number; prefix?: string; suffix?: string }
  | { text: string }
);

export const metrics: Metric[] = [
  { count: 100, prefix: "$", suffix: "M", label: "raised to build it" },
  { count: 85, suffix: "%", label: "faster to production" },
  { count: 7, label: "layers, one plane" },
  { text: "Any", label: "cloud · model · framework" },
];

export type Value = { title: string; body: string };

export const values: Value[] = [
  { title: "No lock-in", body: "Keep the agents, clouds and models you already run. Lyzr sits on top — nothing gets re-platformed." },
  { title: "Your data never leaves", body: "Agents execute in your environment. Your data and IP stay behind your boundary." },
  { title: "Governed from day one", body: "Observability, guardrails and audit are built in — not bolted on after the first incident." },
];

export type Product = { kw: string; title: string; body: string; cta: string; feature?: boolean; dark?: boolean };

export const products: Product[] = [
  { kw: "Flagship", title: "Control Plane", body: "Govern, observe and control every agent — wherever it runs — from one console.", cta: "Access", feature: true },
  { kw: "Build", title: "Agent Studio", body: "Design, test and ship agents in a workspace built for teams.", cta: "Open" },
  { kw: "Design", title: "Architect", body: "Blueprint multi-agent systems and the flows between them.", cta: "Explore" },
  { kw: "Runtime", title: "Agentic OS", body: "The layer agents run on — orchestration, memory and tools.", cta: "Explore" },
  { kw: "Enterprise", title: "Sovereign AI", body: "Self-hosted deployment for regulated teams — banking, gov, healthcare.", cta: "Contact", dark: true },
];

export type FooterColumn = { title: string; links: string[] };

export const footerColumns: FooterColumn[] = [
  { title: "Platform", links: ["Control Plane", "Agent Studio", "Architect", "Agentic OS", "Sovereign AI"] },
  { title: "Solutions", links: ["Banking & Fintech", "Healthcare", "Government", "Customer Service"] },
  { title: "Company", links: ["Customers", "Pricing", "Partners", "Resources"] },
];
