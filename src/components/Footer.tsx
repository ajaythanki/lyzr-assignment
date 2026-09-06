import Brand from "@/components/Brand";
import { footerColumns } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-d0 text-fg/60">
      <div className="wrap grid gap-10 py-16 md:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div>
          <Brand dark />
          <p className="mt-4 max-w-[30ch] font-mono text-[0.75rem] leading-relaxed tracking-[0.02em] text-fg/50">
            One control plane for every agent you run.
          </p>
        </div>
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h4 className="label mb-4 text-fg/45">{col.title}</h4>
            {col.links.map((link) => (
              <a key={link} href="#" className="block py-1.5 text-[0.9rem] text-fg/60 transition-colors hover:text-fg">
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="wrap flex flex-wrap items-center justify-between gap-3 border-t border-white/10 py-6 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-fg/45">
        <span>© 2026 Lyzr — concept redesign</span>
        <span className="text-rose">Reimagined by Ajay Thanki</span>
      </div>
    </footer>
  );
}
