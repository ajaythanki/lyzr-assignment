export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Platform", href: "#platform" },
  { label: "Control Plane", href: "#stack" },
  { label: "Why Lyzr", href: "#why" },
  { label: "Products", href: "#products" },
];

export type Layer = { n: string; name: string; desc: string };

export const layers: Layer[] = [
  { n: "01", name: "Connect from anywhere", desc: "Bring in agents from AWS, Azure, LangChain, Agentforce, or your own code — no migration required." },
  { n: "02", name: "Run on any LLM", desc: "Route across GPT-4o, Claude, Gemini, Llama, and Mistral, and swap models without rewriting a single agent." },
  { n: "03", name: "Simulation engine", desc: "Test behaviour and edge cases before anything reaches production." },
  { n: "04", name: "Observability", desc: "Full trace logging and per-agent cost tracking, from the first call onward." },
  { n: "05", name: "Hallucination & PII guard", desc: "Catch unsafe output and sensitive data before it ever leaves the boundary." },
  { n: "06", name: "Access & governance", desc: "Role-based access, SSO, and policy — the controls security teams actually ask for." },
  { n: "07", name: "Audit & compliance", desc: "Immutable logs and a clean trail for every action, ready for the auditor." },
];

export const models = ["GPT-4o", "Claude", "Gemini", "Llama", "Mistral"];

export type Metric = { label: string } & (
  | { count: number; prefix?: string; suffix?: string }
  | { text: string }
);

export const metrics: Metric[] = [
  { count: 100, prefix: "$", suffix: "M", label: "raised to build the agent control plane" },
  { count: 85, suffix: "%", label: "faster path from prototype to production" },
  { count: 7, label: "layers of governance, in one plane" },
  { text: "Any", label: "cloud, framework, or model — no lock-in" },
];

export type Value = { title: string; body: string };

export const values: Value[] = [
  { title: "No lock-in", body: "Works with the agents, clouds, and models you already run. Adopt Lyzr without re-platforming a thing." },
  { title: "Your data stays yours", body: "Agents run in your environment. Your data and IP never leave your boundary — you keep full control." },
  { title: "Production-ready by default", body: "Governance, observability, and compliance are built in — not bolted on after the first incident." },
];

export type Product = {
  kw: string;
  title: string;
  body: string;
  cta: string;
  feature?: boolean;
  dark?: boolean;
};

export const products: Product[] = [
  { kw: "Flagship", title: "Control Plane", body: "Govern, observe, and control every agent — wherever it runs — from a single pane. The layer that turns scattered agents into a managed fleet.", cta: "Access now →", feature: true },
  { kw: "Build", title: "Agent Studio", body: "Design, test, and ship agents in a visual workspace built for teams.", cta: "Open Studio →" },
  { kw: "Design", title: "Architect", body: "Blueprint multi-agent systems and the data flows between them.", cta: "Learn more →" },
  { kw: "Runtime", title: "Agentic OS", body: "The operating layer agents run on — orchestration, memory, and tools.", cta: "Learn more →" },
  { kw: "Enterprise", title: "Sovereign AI", body: "Fully self-hosted deployment for regulated industries — banking, government, and healthcare.", cta: "Talk to us →", dark: true },
];

export type FooterColumn = { title: string; links: string[] };

export const footerColumns: FooterColumn[] = [
  { title: "Platform", links: ["Control Plane", "Agent Studio", "Architect", "Agentic OS", "Sovereign AI"] },
  { title: "Solutions", links: ["Banking & Fintech", "Healthcare", "Government", "Customer Service"] },
  { title: "Company", links: ["Customers", "Pricing", "Partners", "Resources"] },
];
