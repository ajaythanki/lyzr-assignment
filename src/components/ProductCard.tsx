import type { Product } from "@/lib/content";

export default function ProductCard({ kw, title, body, cta, feature, dark }: Product) {
  const onDark = dark || feature;
  const base =
    "group flex min-h-[190px] flex-col rounded-[8px] border p-6 transition-all duration-300 ease-out hover:-translate-y-1";
  const theme = dark
    ? "border-transparent bg-d0 text-fg"
    : feature
      ? "border-transparent bg-ink text-fg sm:col-span-2"
      : "border-line bg-paper hover:border-ink";

  return (
    <article className={`${base} ${theme}`}>
      <span className={`label ${onDark ? "text-rose" : ""}`}>{kw}</span>
      <h3 className={`mt-4 text-[1.35rem] font-semibold tracking-[-0.015em] ${onDark ? "text-fg" : ""}`}>{title}</h3>
      <p className={`mt-2 text-[0.95rem] ${onDark ? "text-fg/65" : "text-graphite"}`}>{body}</p>
      <span className="mt-auto flex items-center gap-1.5 pt-5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-rose">
        {cta} <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </article>
  );
}
