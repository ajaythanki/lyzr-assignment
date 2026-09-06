import Brand from "@/components/Brand";
import { navLinks } from "@/lib/content";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between">
        <Brand />
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-graphite transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#cta" className="btn btn-solid">
          Talk to us <span className="arw">→</span>
        </a>
      </div>
    </header>
  );
}
