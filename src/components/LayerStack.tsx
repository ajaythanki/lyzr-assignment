import { layers } from "@/lib/content";

export default function LayerStack() {
  return (
    <section id="stack">
      <div className="wrap section">
        <div className="mb-[clamp(44px,5vw,68px)] max-w-[60ch]">
          <span className="eyebrow">The seven layers</span>
          <h2 className="display-2">
            One plane between your agents and <span className="em">production.</span>
          </h2>
          <p className="mt-4 max-w-[62ch] text-[1.0625rem] text-muted">
            Everything an enterprise needs to run agents safely — connection, control, and compliance — as a single
            stack you drop over what you already have.
          </p>
        </div>
        <ol className="border-t border-black/[.08]">
          {layers.map((layer) => (
            <li
              key={layer.n}
              className="grid grid-cols-[48px_1fr] items-baseline gap-6 border-b border-black/[.08] py-[26px] transition-colors duration-300 hover:bg-rose/[.035] md:grid-cols-[76px_1fr_1.15fr]"
            >
              <span className="font-serif text-[1.7rem] leading-none text-rose">{layer.n}</span>
              <span className="text-[1.22rem] font-medium tracking-[-0.015em]">{layer.name}</span>
              <span className="col-start-2 text-muted md:col-start-3">{layer.desc}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
