import AgentPlane from "@/components/AgentPlane";

export default function Hero() {
  return (
    <section className="grid-faint border-b border-line">
      <div className="wrap grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <span className="label">Agent Infrastructure</span>
          <h1 className="h-hero mt-5">
            Every agent you run, <span className="text-rose">under one control plane.</span>
          </h1>
          <p className="mt-6 max-w-[46ch] text-[1.05rem] leading-relaxed text-graphite">
            Agents built on AWS, Azure, LangChain or Agentforce — governed, observed and controlled from a single
            console. No migration. No rewrites.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#cta" className="btn btn-solid">Talk to us <span className="arw">→</span></a>
            <a href="#layers" className="btn btn-line">See the layers <span className="arw">→</span></a>
          </div>
          <p className="mt-8 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-muted">
            $100M raised · SOC&nbsp;2 · data stays in your VPC
          </p>
        </div>
        <AgentPlane />
      </div>
    </section>
  );
}
