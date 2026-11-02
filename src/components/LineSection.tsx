"use client";

import { useId, useRef, useState, KeyboardEvent } from "react";
import { FiCamera } from "react-icons/fi";
import type { Line } from "./data";
import { Track } from "./NetworkMap";
import { Dotted } from "./Dotted";
import { Gallery } from "./Gallery";

export function LineBadge({ line, size = 44 }: { line: Line; size?: number }) {
  const onAmber = line.id === "direction";
  return (
    <span
      aria-hidden="true"
      className="inline-grid place-items-center rounded-full font-black shrink-0 leading-none"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.48,
        background: line.inProgress ? "rgb(var(--paper))" : line.color,
        color: line.inProgress ? line.color : onAmber ? "#15171c" : "#fff",
        boxShadow: line.inProgress ? `inset 0 0 0 ${Math.round(size / 10)}px ${line.color}` : undefined,
      }}
    >
      {line.name[0]}
    </span>
  );
}

export function LineSection({ line, first = false }: { line: Line; first?: boolean }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const uid = useId();
  const station = line.stations[active];
  const last = line.stations.length - 1;
  const results = [...(line.facts ?? []), ...line.stations.flatMap((s) => s.results ?? [])];

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    let next = active;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = active === last ? 0 : active + 1;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = active === 0 ? last : active - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <article id={line.id} className={`scroll-mt-20 py-14 sm:py-20 ${first ? "" : "border-t-2 border-ink/10"}`}>
      <header className="flex flex-col md:flex-row md:items-start md:justify-between gap-x-10 gap-y-4">
        <div>
          <h3 className="flex items-center gap-4 text-3xl sm:text-[2.75rem] font-black tracking-[-0.03em] leading-none">
            <LineBadge line={line} size={48} />
            {line.name}
          </h3>
          <p className="mt-3 text-lg sm:text-xl font-bold">{line.tagline}</p>
        </div>
        <div className="md:text-right shrink-0">
          <p
            className="inline-flex items-center gap-2 rounded-[3px] px-3 py-1 text-sm font-bold tabular-nums"
            style={
              line.inProgress
                ? { boxShadow: `inset 0 0 0 2px ${line.color}` }
                : { background: "rgb(var(--ink))", color: "rgb(var(--paper))" }
            }
          >
            {line.inProgress && <span className="size-2 rounded-full" style={{ background: line.color }} />}
            {line.status}
          </p>
          <p className="mt-2 text-sm text-ink/70 font-semibold max-w-[34ch] md:ml-auto">
            <Dotted text={line.context} />
          </p>
        </div>
      </header>

      <p className="mt-6 max-w-[64ch] text-lg leading-relaxed text-ink/85">{line.lede}</p>

      <div className="mt-10 grid gap-10 lg:gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7 min-w-0">
          {/* Strip map: the line's stations as tabs, first and last flush with the panel */}
          <div
            role="tablist"
            aria-label={`${line.name} stations`}
            onKeyDown={onKey}
            className="relative flex flex-col sm:flex-row sm:justify-between gap-y-1"
          >
            <Track
              color={line.color}
              hollow={line.inProgress}
              className="hidden sm:block absolute left-[18px] right-[18px] top-[17px] !w-auto"
            />
            <Track
              color={line.color}
              hollow={line.inProgress}
              vertical
              className="sm:hidden absolute left-[13px] top-4 bottom-4 !h-auto"
            />
            {line.stations.map((s, i) => {
              const selected = i === active;
              const align =
                i === 0 ? "sm:items-start sm:text-left" : i === last ? "sm:items-end sm:text-right" : "sm:items-center sm:text-center";
              return (
                <button
                  key={s.id}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  role="tab"
                  id={`${uid}-tab-${i}`}
                  aria-selected={selected}
                  aria-controls={`${uid}-panel`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={`group relative flex sm:flex-col items-center gap-3 sm:gap-2 min-h-11 py-1 text-left rounded-md ${align}`}
                >
                  <span
                    className="relative z-10 grid place-items-center size-9 rounded-full transition-transform duration-200 ease-out group-hover:scale-110"
                    style={{
                      boxShadow: `inset 0 0 0 ${selected ? 0 : 4}px ${line.color}`,
                      background: selected ? "rgb(var(--ink))" : "rgb(var(--paper))",
                    }}
                  >
                    {selected && <span className="size-3 rounded-full bg-paper" />}
                  </span>
                  <span
                    className={`text-[0.95rem] leading-tight lg:whitespace-nowrap ${
                      selected ? "font-extrabold underline decoration-[3px] underline-offset-[6px]" : "font-semibold text-ink/80"
                    }`}
                    style={selected ? { textDecorationColor: line.color } : undefined}
                  >
                    {s.short === "Website" ? "Marketing website" : s.short}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`${uid}-panel`}
            aria-labelledby={`${uid}-tab-${active}`}
            className="mt-6 rounded-[4px] bg-platform p-6 sm:p-8"
          >
            <h4 className="text-2xl font-extrabold tracking-[-0.02em]">{station.name}</h4>
            <p className="mt-1 text-ink/75 font-medium">{station.summary}</p>
            <ul className="mt-5 space-y-2.5 max-w-[60ch]">
              {station.points.map((p) => (
                <li key={p} className="flex gap-3 leading-snug">
                  <span aria-hidden="true" className="mt-[0.45em] h-[3px] w-4 shrink-0 rounded-full" style={{ background: line.color }} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h4 className="text-sm font-extrabold">Built with</h4>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/80">
              <Dotted items={line.tech} />
            </p>
          </div>
        </div>

        <aside className="lg:col-span-5 space-y-6">
          {results.length > 0 && <ResultsBoard line={line} rows={results} />}
          {line.reliability && <p className="max-w-[56ch] text-ink/80 leading-relaxed">{line.reliability}</p>}
          <Screenshots line={line} />
        </aside>
      </div>

      {line.screenshots.length > 0 && <Gallery line={line} />}
    </article>
  );
}

/** Results set like a departures board: an enamel plate, label left, figure right. */
function ResultsBoard({ line, rows }: { line: Line; rows: { label: string; value: string }[] }) {
  return (
    <section className="on-enamel rounded-[4px] bg-enamel text-on-enamel p-6 sm:p-7" aria-label={`${line.name} results`}>
      <div className="flex items-center gap-3 pb-4 border-b-[3px] border-on-enamel/80">
        <span aria-hidden="true" className="h-[10px] w-10 rounded-full" style={{ background: line.color }} />
        <h4 className="text-sm font-extrabold">Results</h4>
      </div>
      <dl>
        {rows.map((r) => (
          <div key={r.label} className="flex items-baseline justify-between gap-6 py-3 border-b border-on-enamel/15 last:border-b-0">
            <dt className="text-on-enamel/80 font-medium">{r.label}</dt>
            <dd className="text-xl sm:text-2xl font-black tabular-nums tracking-[-0.01em] whitespace-nowrap">{r.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/** Shown on in-progress lines until their screenshots exist. */
function Screenshots({ line }: { line: Line }) {
  if (line.screenshots.length > 0 || !line.inProgress) return null;
  return (
    <p
      className="flex items-center gap-3 rounded-[4px] px-4 py-3 text-sm font-semibold text-ink/75"
      style={{ boxShadow: `inset 0 0 0 2px ${line.color}` }}
    >
      <FiCamera aria-hidden="true" className="text-lg shrink-0" style={{ color: line.color }} />
      Screenshots of the apps arrive with the launch.
    </p>
  );
}
