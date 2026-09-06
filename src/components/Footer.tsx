import Brand from "@/components/Brand";
import { footerColumns } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-d0 pb-[34px] pt-[66px] text-fg/60">
      <div className="wrap">
        <div className="mb-[52px] grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_repeat(3,1fr)]">
          <div>
            <Brand className="mb-3.5 text-fg" />
            <p className="max-w-[32ch] text-[0.95rem] text-fg/60">
              The control plane for agent productionization — governed, observed, and controlled from one place.
            </p>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-[18px] text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-rosem">{col.title}</h4>
              {col.links.map((link) => (
                <a key={link} href="#" className="block py-1.5 text-[0.93rem] text-fg/60 transition-colors hover:text-fg">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-[26px] text-[0.84rem] text-fg/60">
          <span>© 2026 Lyzr — concept redesign, not affiliated.</span>
          <span className="font-medium text-rosem">Reimagined by Ajay Thanki</span>
        </div>
      </div>
    </footer>
  );
}
