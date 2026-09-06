import { values } from "@/lib/content";

export default function WhyLyzr() {
  return (
    <section id="why" className="border-y border-line bg-bone">
      <div className="wrap py-20 md:py-28">
        <div className="marker mb-12">
          <span className="idx">02</span>
          <span>Why Lyzr</span>
          <span className="fill" />
        </div>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <h2 className="h-sec max-w-[15ch]">The control layer your AI stack has been missing.</h2>
          <div>
            {values.map((value, i) => (
              <div key={value.title} className={`border-t border-line py-6 ${i === 0 ? "lg:border-t-0" : ""}`}>
                <h3 className="text-[1.1rem] font-semibold">{value.title}</h3>
                <p className="mt-2 max-w-[52ch] text-graphite">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
