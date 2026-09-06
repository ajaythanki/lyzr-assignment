export default function CallToAction() {
  return (
    <section id="cta" className="bg-d0 text-fg">
      <div className="wrap grid gap-8 py-20 md:grid-cols-[1.3fr_1fr] md:items-end md:py-28">
        <h2 className="h-sec text-fg">
          Take your agents to production — <span className="text-rose">without losing control.</span>
        </h2>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-fg/55">
            See it govern your agents in under an hour
          </p>
          <div className="flex gap-3">
            <a href="#" className="btn btn-onDark">Talk to us <span className="arw">→</span></a>
            <a href="#" className="btn border border-white/20 text-fg hover:border-white/60">Agent Studio</a>
          </div>
        </div>
      </div>
    </section>
  );
}
