import { layers, models } from "@/lib/content";

const ACTIVE = "02";

export default function ControlPlane() {
  return (
    <div className="rounded-[30px] border border-line2 bg-white p-[22px] shadow-panel">
      <div className="mb-4 flex items-center justify-between px-1.5 pt-1">
        <span className="text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-muted">Control Plane</span>
        <span className="rounded-full border border-rose/25 bg-rose/10 px-[11px] py-[5px] text-[0.72rem] font-semibold text-rose">
          8 weeks → production
        </span>
      </div>
      <div className="flex flex-col gap-[7px]">
        {layers.map((layer) => {
          const active = layer.n === ACTIVE;
          return (
            <div
              key={layer.n}
              className={`flex items-start gap-3 rounded-[13px] border px-[15px] py-[13px] transition-transform duration-500 ease-out hover:translate-x-[3px] ${
                active
                  ? "border-rose/35 bg-gradient-to-b from-white to-[#fdf4f1] shadow-[0_8px_26px_rgba(201,106,90,.14)]"
                  : "border-line2 bg-parch"
              }`}
            >
              <span className={`w-[26px] text-[0.68rem] font-bold tracking-[0.12em] ${active ? "text-rose" : "text-subtle"}`}>
                {layer.n}
              </span>
              <span>
                <span className="block text-[0.95rem] font-medium text-ink">{layer.name}</span>
                <span className="mt-px block text-[0.8rem] text-muted">{layer.desc}</span>
                {active && (
                  <span className="mt-2.5 flex flex-wrap gap-1.5">
                    {models.map((model) => (
                      <span
                        key={model}
                        className="rounded-[7px] border border-line2 bg-cream px-2.5 py-1 text-[0.72rem] font-medium text-mahogany"
                      >
                        {model}
                      </span>
                    ))}
                  </span>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
