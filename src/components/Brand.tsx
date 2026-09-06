export default function Brand({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`flex items-center gap-2 text-[1.32rem] font-semibold tracking-tight ${className}`}>
      <span className="h-[22px] w-[22px] rotate-45 rounded-md bg-gradient-to-br from-rose to-mahogany" />
      lyzr
    </a>
  );
}
