import type { Product } from "@/lib/content";

export default function ProductCard({ kw, title, body, cta, feature, dark }: Product) {
  const base =
    "flex min-h-[210px] flex-col rounded-[22px] border p-7 transition-all duration-500 ease-out hover:-translate-y-[3px] hover:shadow-lift";
  const theme = dark ? "border-transparent bg-d0 text-fg" : "border-line2 bg-white hover:border-rose/40";
  const span = feature ? "sm:col-span-2 bg-gradient-to-br from-white to-[#faf3f0]" : "";

  return (
    <article className={`${base} ${theme} ${span}`}>
      <span className={`mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.16em] ${dark ? "text-rosem" : "text-subtle"}`}>
        {kw}
      </span>
      <h3 className="mb-2.5 text-[1.32rem] font-medium tracking-[-0.018em]">{title}</h3>
      <p className={`text-[0.96rem] ${dark ? "text-fg/60" : "text-muted"}`}>{body}</p>
      <span className={`mt-auto pt-[18px] text-[0.86rem] font-semibold ${dark ? "text-rosem" : "text-rose"}`}>{cta}</span>
    </article>
  );
}
