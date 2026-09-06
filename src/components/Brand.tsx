export default function Brand({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href="#top"
      className={`inline-flex items-center gap-2.5 text-[1.25rem] font-bold tracking-tight ${dark ? "text-fg" : "text-ink"}`}
    >
      <span className="grid h-6 w-6 place-items-center rounded-[5px] bg-rose text-[0.72rem] font-bold text-white">
        L
      </span>
      lyzr
    </a>
  );
}
