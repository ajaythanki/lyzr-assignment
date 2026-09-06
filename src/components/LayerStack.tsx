import { layers } from "@/lib/content";

export default function LayerStack() {
  return (
    <section id="layers" className="wrap py-20 md:py-28">
      <div className="marker mb-12">
        <span className="idx">01</span>
        <span>The stack</span>
        <span className="fill" />
      </div>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <h2 className="h-sec">Seven layers between your agents and production.</h2>
          <p className="mt-5 max-w-[40ch] text-graphite">
            Connection, control and compliance as one stack you drop over what you already run.
          </p>
        </div>
        <ol className="border-b border-line">
          {layers.map((layer) => (
            <li
              key={layer.n}
              className="grid grid-cols-[auto_1fr] gap-x-5 border-t border-line py-5 transition-colors hover:bg-bone"
            >
              <span className="font-mono text-[0.8rem] text-rose">{layer.n}</span>
              <div>
                <h3 className="text-[1.15rem] font-semibold tracking-[-0.01em]">{layer.name}</h3>
                <p className="mt-1 max-w-[56ch] text-[0.96rem] text-graphite">{layer.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
