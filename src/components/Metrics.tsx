import Counter from "@/components/Counter";
import { metrics } from "@/lib/content";

export default function Metrics() {
  return (
    <section className="border-b border-line bg-bone">
      <div className="wrap grid grid-cols-2 md:grid-cols-4">
        {metrics.map((metric, i) => (
          <div key={metric.label} className={`py-8 md:py-11 ${i > 0 ? "md:border-l md:border-line md:pl-8" : ""}`}>
            <div className="text-[clamp(2rem,3.4vw,2.9rem)] font-bold tracking-[-0.03em] tabular-nums">
              {"count" in metric ? (
                <Counter to={metric.count} prefix={metric.prefix} suffix={metric.suffix} />
              ) : (
                <span className="text-rose">{metric.text}</span>
              )}
            </div>
            <div className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted">{metric.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
