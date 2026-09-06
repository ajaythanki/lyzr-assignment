import ControlPlane from "@/components/ControlPlane";

export default function Hero() {
  return (
    <section className="pb-[clamp(60px,8vw,104px)] pt-[clamp(56px,7vw,96px)]">
      <div className="wrap grid items-center gap-[clamp(40px,5vw,80px)] lg:grid-cols-[1.06fr_.94fr]">
        <div>
          <span className="eyebrow">Agent Infrastructure</span>
          <h1 className="display-1">
            The control plane for <span className="em">agent&nbsp;productionization.</span>
          </h1>
          <p className="lead mt-6">
            Agents built on AWS, Azure, LangChain, Agentforce, or anywhere else — all governed, observed, and
            controlled from one place. No migration. No rewrites.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <a href="#cta" className="btn btn-primary">Talk to us <span className="arw">→</span></a>
            <a href="#stack" className="btn btn-ghost">Explore the platform <span className="arw">→</span></a>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-[18px] gap-y-2 text-[0.84rem] text-subtle">
            <span><b className="font-semibold text-muted">$100M</b> raised</span>
            <span className="h-1 w-1 rounded-full bg-line" />
            <span>SOC&nbsp;2 &amp; audit-ready</span>
            <span className="h-1 w-1 rounded-full bg-line" />
            <span>Your data stays in <b className="font-semibold text-muted">your&nbsp;environment</b></span>
          </div>
        </div>
        <ControlPlane />
      </div>
    </section>
  );
}
