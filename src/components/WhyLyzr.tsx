import { values } from "@/lib/content";

export default function WhyLyzr() {
  return (
    <section id="why" className="bg-cream">
      <div className="wrap section grid gap-[clamp(40px,6vw,90px)] lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <span className="eyebrow">Why Lyzr</span>
          <p className="font-serif text-[clamp(1.5rem,2.4vw,2rem)] italic leading-[1.35]">
            The control plane your enterprise AI operation has been <span className="text-rose">missing.</span>
          </p>
        </div>
        <div>
          {values.map((value, i) => (
            <div key={value.title} className={`border-b border-black/[.08] py-6 ${i === 0 ? "border-t" : ""}`}>
              <h3 className="mb-2 text-[1.15rem] font-medium">{value.title}</h3>
              <p className="max-w-[54ch] text-muted">{value.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
