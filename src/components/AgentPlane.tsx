import { sources, layers } from "@/lib/content";

const srcY = (i: number) => 34 + i * 62;
const PLANE_X = 214;
const PLANE_W = 176;
const PLANE_Y = 28;
const PLANE_H = 300;
const barY = (j: number) => PLANE_Y + 42 + j * 36;
const MID = PLANE_Y + PLANE_H / 2;

export default function AgentPlane() {
  return (
    <div className="overflow-hidden rounded-[8px] border border-white/10 bg-d0 shadow-[0_30px_80px_rgba(20,10,6,.4)]">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-rose" />
        <span className="ml-2 font-mono text-[0.7rem] tracking-[0.1em] text-fg/55">lyzr / control-plane</span>
        <span className="ml-auto font-mono text-[0.6rem] tracking-[0.2em] text-rose">LIVE</span>
      </div>

      <svg
        viewBox="0 0 560 356"
        className="w-full"
        role="img"
        aria-label="Agents from AWS, Azure, LangChain and other platforms flowing into the Lyzr control plane and out to production."
      >
        {sources.map((s, i) => (
          <path
            key={`edge-${s}`}
            d={`M120 ${srcY(i) + 17} C 170 ${srcY(i) + 17}, 184 ${MID}, ${PLANE_X} ${MID}`}
            fill="none"
            stroke="#C96A5A"
            strokeOpacity="0.55"
            strokeWidth="1.3"
            className="flow"
          />
        ))}
        <path
          d={`M${PLANE_X + PLANE_W} ${MID} C 452 ${MID}, 466 ${MID}, 486 ${MID}`}
          fill="none"
          stroke="#C96A5A"
          strokeOpacity="0.55"
          strokeWidth="1.3"
          className="flow"
        />

        {sources.map((s, i) => (
          <g key={s}>
            <rect x="18" y={srcY(i)} width="102" height="34" rx="6" fill="#ffffff0a" stroke="#ffffff1f" />
            <text x="69" y={srcY(i) + 22} textAnchor="middle" className="font-mono" fontSize="12" fill="#F0E8E4">
              {s}
            </text>
          </g>
        ))}

        <rect x={PLANE_X} y={PLANE_Y} width={PLANE_W} height={PLANE_H} rx="10" fill="#ffffff08" stroke="#ffffff26" />
        <text
          x={PLANE_X + PLANE_W / 2}
          y={PLANE_Y + 25}
          textAnchor="middle"
          className="font-mono"
          fontSize="10.5"
          letterSpacing="2.5"
          fill="#F0E8E4"
          fillOpacity="0.7"
        >
          CONTROL PLANE
        </text>
        {layers.map((layer, j) => {
          const active = j === 1;
          return (
            <g key={layer.n}>
              <rect
                x={PLANE_X + 12}
                y={barY(j)}
                width={PLANE_W - 24}
                height="26"
                rx="4"
                fill={active ? "#C96A5A" : "#ffffff0d"}
                stroke={active ? "#C96A5A" : "#ffffff14"}
                className={active ? "glow" : undefined}
              />
              <text
                x={PLANE_X + 24}
                y={barY(j) + 17}
                className="font-mono"
                fontSize="8.5"
                letterSpacing="1"
                fill={active ? "#fff" : "#F0E8E4"}
                fillOpacity={active ? 1 : 0.5}
              >
                {layer.n}
              </text>
              <text
                x={PLANE_X + 48}
                y={barY(j) + 17}
                className="font-mono"
                fontSize="11"
                fill={active ? "#fff" : "#F0E8E4"}
                fillOpacity={active ? 1 : 0.78}
              >
                {layer.name}
              </text>
            </g>
          );
        })}

        <rect x="486" y={MID - 18} width="60" height="36" rx="6" fill="#C96A5A1a" stroke="#C96A5A66" />
        <text x="516" y={MID + 4} textAnchor="middle" className="font-mono" fontSize="9.5" letterSpacing="1" fill="#C96A5A">
          PROD
        </text>
      </svg>
    </div>
  );
}
