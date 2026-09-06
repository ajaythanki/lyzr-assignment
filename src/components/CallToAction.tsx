export default function CallToAction() {
  return (
    <section id="cta" className="bg-d0 text-fg">
      <div className="wrap section">
        <div className="mx-auto max-w-[44ch] text-center">
          <h2 className="display-2 text-fg">
            Take your AI agents to <span className="em text-rosem">production, faster.</span>
          </h2>
          <p className="mx-auto mb-[34px] mt-[22px] text-[1.1rem] text-fg/60">
            See how the control plane governs your agents in under an hour.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <a href="#" className="btn btn-dark">Talk to us <span className="arw">→</span></a>
            <a href="#" className="btn btn-outline">Explore Agent Studio</a>
          </div>
        </div>
      </div>
    </section>
  );
}
