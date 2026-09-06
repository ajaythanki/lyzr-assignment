import Counter from "@/components/Counter";
import { metrics } from "@/lib/content";

export default function Metrics() {
  return (
    <section className="border-y border-black/[.08] bg-cream py-[clamp(44px,5vw,64px)]">
      <div className="wrap grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
        {metrics.map((metric, i) => (
          <div key={metric.label} className={i > 0 ? "md:border-l md:border-black/[.08] md:pl-6" : ""}>
            <div className="text-[clamp(2.2rem,3.6vw,3rem)] font-light leading-none tracking-[-0.03em] tabular-nums">
              {"count" in metric ? (
                <Counter to={metric.count} prefix={metric.prefix} suffix={metric.suffix} />
              ) : (
                <span className="text-rose">{metric.text}</span>
              )}
            </div>
            <div className="mt-3 max-w-[22ch] text-[0.9rem] text-muted">{metric.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
