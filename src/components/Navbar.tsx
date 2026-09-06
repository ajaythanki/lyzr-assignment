import Brand from "@/components/Brand";
import { navLinks } from "@/lib/content";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-[68px] border-b border-black/[.08] bg-parch/80 backdrop-blur-md backdrop-saturate-150">
      <div className="wrap flex h-full items-center justify-between">
        <Brand />
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.93rem] font-medium text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3.5">
          <a href="#" className="hidden text-[0.93rem] font-medium sm:inline">Sign in</a>
          <a href="#cta" className="btn btn-primary">Talk to us <span className="arw">→</span></a>
        </div>
      </div>
    </header>
  );
}
