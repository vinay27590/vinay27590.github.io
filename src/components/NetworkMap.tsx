"use client";

import { lines, type LineId } from "./data";
import { useLineFocus } from "./LineFocus";

const INK = "rgb(var(--ink))";
const PAPER = "rgb(var(--paper))";

/*
 * Hand-placed geometry in a 1200 × 396 viewBox. Every line enters from the
 * left, runs through the shared trunk (Spring Boot and PostgreSQL are true
 * interchanges for all four), then leaves for its own stations on the right.
 * Top to bottom matches the order of the Projects section.
 */
type Geo = {
  d: string;
  /** y of the left and right horizontal runs */
  y: number;
  /** label side per station: -1 above, 1 below */
  sides: [number, number, number, number];
};

const STATION_X = [250, 900, 1040, 1180];

const geometry: Record<LineId, Geo> = {
  laundryos: { d: "M150 36 H366 L500 170 H700 L834 36 H1180", y: 36, sides: [-1, -1, 1, -1] },
  flexpulse: { d: "M150 116 H422 L500 194 H700 L778 116 H1180", y: 116, sides: [-1, -1, 1, -1] },
  mihaan: { d: "M150 276 H442 L500 218 H700 L758 276 H1180", y: 276, sides: [1, 1, -1, 1] },
  direction: { d: "M150 356 H386 L500 242 H700 L814 356 H1180", y: 356, sides: [1, 1, -1, 1] },
};

const shortName = (name: string) => (name === "Direction Software" ? "Direction" : name);
const shortStatus = (status: string, inProgress: boolean) =>
  inProgress ? "Under construction" : status.replace(/\w{3} (\d{4})/g, "$1");

export function NetworkMap() {
  const { focused, setFocused } = useLineFocus();

  return (
    <svg viewBox="0 0 1200 396" className="map-reveal w-full h-auto" role="group" aria-label="Network map of my work">
      {lines.map((line) => {
        const g = geometry[line.id];
        const dim = focused !== null && focused !== line.id;
        return (
          <a
            key={line.id}
            href={`#${line.id}`}
            className="map-line"
            style={{ opacity: dim ? 0.12 : 1 }}
            onMouseEnter={() => setFocused(line.id)}
            onMouseLeave={() => setFocused(null)}
            onFocus={() => setFocused(line.id)}
            onBlur={() => setFocused(null)}
          >
            {/* generous hit area */}
            <path d={g.d} stroke="transparent" strokeWidth={34} fill="none" />
            <path d={g.d} stroke={line.color} strokeWidth={11} fill="none" strokeLinejoin="round" strokeLinecap="round" />
            {line.inProgress && (
              <path d={g.d} stroke={PAPER} strokeWidth={4.5} fill="none" strokeLinejoin="round" strokeLinecap="round" />
            )}

            <text x={0} y={g.y + 6} className="fill-ink" style={{ fontSize: 20, fontWeight: 800 }}>
              {shortName(line.name)}
            </text>
            <text x={0} y={g.y + 27} className="fill-ink/70 tabular-nums" style={{ fontSize: 14, fontWeight: 600 }}>
              {shortStatus(line.status, line.inProgress)}
            </text>

            {line.stations.map((s, i) => {
              const x = STATION_X[i];
              const side = g.sides[i];
              const terminal = i === 3;
              return (
                <g key={s.id}>
                  <circle cx={x} cy={g.y} r={9} fill={PAPER} stroke={terminal ? INK : line.color} strokeWidth={4} />
                  <text
                    x={terminal ? x + 10 : x}
                    y={side < 0 ? g.y - 18 : g.y + 32}
                    textAnchor={terminal ? "end" : "middle"}
                    className="fill-ink"
                    style={{ fontSize: 15.5, fontWeight: 600 }}
                  >
                    {s.short}
                  </text>
                </g>
              );
            })}
          </a>
        );
      })}

      {/* Interchanges shared by every line */}
      {[
        { x: 560, label: "Spring Boot", ly: 142 },
        { x: 640, label: "PostgreSQL", ly: 284 },
      ].map((ix) => (
        <g key={ix.label} aria-hidden="true">
          <rect x={ix.x - 13} y={156} width={26} height={100} rx={13} fill={PAPER} stroke={INK} strokeWidth={4} />
          <text x={ix.x} y={ix.ly} textAnchor="middle" className="fill-ink" style={{ fontSize: 16, fontWeight: 800 }}>
            {ix.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

/*
 * Narrow-screen diagram. All four tracks run down side by side through the
 * shared interchange, then each line peels off in turn with its stations.
 * The line listed first uses the rightmost track, so labels never cross a
 * running track.
 */
export function LineIndex() {
  const { focused, setFocused } = useLineFocus();
  const TRACK_X = [80, 60, 40, 20];
  const LABEL_X = 104;
  let y = 64;
  const groups = lines.map((line, i) => {
    const x = TRACK_X[i];
    const headY = y;
    y += 30;
    const stationYs = line.stations.map(() => {
      const sy = y;
      y += 24;
      return sy;
    });
    const end = stationYs[stationYs.length - 1];
    y += 16;
    return { line, x, headY, stationYs, end };
  });
  const height = y;

  return (
    <svg viewBox={`0 0 350 ${height}`} className="map-reveal-down w-full h-auto" role="group" aria-label="Network map of my work">
      {/* tracks first, so every disc sits on top */}
      {groups.map(({ line, x, end }) => (
        <g key={line.id} aria-hidden="true" style={{ opacity: focused && focused !== line.id ? 0.12 : 1 }} className="map-line">
          <path d={`M${x} 18 V${end}`} stroke={line.color} strokeWidth={9} strokeLinecap="round" />
          {line.inProgress && <path d={`M${x} 18 V${end}`} stroke={PAPER} strokeWidth={3.5} strokeLinecap="round" />}
        </g>
      ))}

      <g aria-hidden="true">
        <rect x={8} y={14} width={84} height={24} rx={12} fill={PAPER} stroke={INK} strokeWidth={3.5} />
        <text x={LABEL_X} y={31} className="fill-ink" style={{ fontSize: 15, fontWeight: 800 }}>
          Spring Boot + PostgreSQL
        </text>
      </g>

      {groups.map(({ line, x, headY, stationYs }) => (
        <a
          key={line.id}
          href={`#${line.id}`}
          className="map-line"
          style={{ opacity: focused && focused !== line.id ? 0.12 : 1 }}
          onFocus={() => setFocused(line.id)}
          onBlur={() => setFocused(null)}
        >
          <rect x={0} y={headY - 16} width={350} height={30 + stationYs.length * 24} fill="transparent" />
          <circle cx={x} cy={headY} r={8} fill={PAPER} stroke={INK} strokeWidth={3.5} />
          <text x={LABEL_X} y={headY + 6} className="fill-ink" style={{ fontSize: 17, fontWeight: 800 }}>
            {shortName(line.name)}
          </text>
          <text x={342} y={headY + 6} textAnchor="end" className="fill-ink/70 tabular-nums" style={{ fontSize: 12.5, fontWeight: 600 }}>
            {shortStatus(line.status, line.inProgress)}
          </text>
          {line.stations.map((st, j) => (
            <g key={st.id}>
              <path d={`M${x} ${stationYs[j]} H${LABEL_X - 8}`} stroke={line.color} strokeWidth={2} strokeDasharray="2 3" />
              <circle cx={x} cy={stationYs[j]} r={5.5} fill={PAPER} stroke={line.color} strokeWidth={3} />
              <text x={LABEL_X} y={stationYs[j] + 5} className="fill-ink" style={{ fontSize: 14, fontWeight: 600 }}>
                {st.short}
              </text>
            </g>
          ))}
        </a>
      ))}
    </svg>
  );
}

/** A straight run of track; hollow when the line is under construction. */
export function Track({
  color,
  hollow,
  vertical = false,
  className = "",
  ground = "rgb(var(--paper))",
}: {
  color: string;
  hollow: boolean;
  vertical?: boolean;
  className?: string;
  /** Fill of the hollow core; match the surface the track sits on. */
  ground?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`block rounded-full ${vertical ? "w-[10px] h-full" : "h-[10px] w-full"} ${className}`}
      style={hollow ? { background: ground, boxShadow: `inset 0 0 0 3px ${color}` } : { background: color }}
    />
  );
}
