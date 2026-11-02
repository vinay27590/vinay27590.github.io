"use client";

import { useState } from "react";
import { lineById, lines, skillGroups, type LineId } from "./data";

function Bullet({ id }: { id: LineId }) {
  const line = lineById[id];
  return (
    <span
      title={line.name}
      className="inline-block size-3 rounded-full"
      style={
        line.inProgress
          ? { background: "rgb(var(--platform))", boxShadow: `inset 0 0 0 2.5px ${line.color}` }
          : { background: line.color }
      }
    />
  );
}

/** Three balanced stacks, so no group is orphaned on a short row. */
const COLUMNS = [
  ["Languages", "Database", "Integrations"],
  ["Backend", "Testing"],
  ["Frontend & mobile", "DevOps & cloud"],
];

export function SkillIndex() {
  const [filter, setFilter] = useState<LineId | null>(null);

  return (
    <div>
      <span id="skills-filter-label" className="block text-ink/75 font-semibold">
        Used on
      </span>
      <div
        className="mt-2 -mx-5 px-5 sm:mx-0 sm:px-0 flex sm:flex-wrap items-center gap-2 overflow-x-auto sm:overflow-visible [scrollbar-width:none]"
        role="group"
        aria-labelledby="skills-filter-label"
      >
        <FilterButton pressed={filter === null} onClick={() => setFilter(null)}>
          Everything
        </FilterButton>
        {lines.map((l) => (
          <FilterButton key={l.id} pressed={filter === l.id} onClick={() => setFilter(filter === l.id ? null : l.id)}>
            <Bullet id={l.id} />
            {l.name}
          </FilterButton>
        ))}
      </div>

      <div className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 items-start">
        {COLUMNS.map((col) => (
          <div key={col.join()} className="space-y-10">
            {col.map((name) => skillGroups.find((g) => g.group === name)!).map((g) => (
          <section key={g.group}>
            <h3 className="text-sm font-extrabold pb-2 border-b-[3px] border-ink">{g.group}</h3>
            <ul>
              {g.skills.map((s) => {
                const off = filter !== null && !s.lines.includes(filter);
                return (
                  <li
                    key={s.name}
                    className="flex items-center justify-between gap-3 py-2 border-b border-ink/10 transition-opacity duration-300"
                    style={{ opacity: off ? 0.25 : 1 }}
                  >
                    <span className="font-semibold">{s.name}</span>
                    <span
                      className="flex gap-1 shrink-0"
                      aria-label={s.lines.length ? `Used on ${s.lines.map((id) => lineById[id].name).join(", ")}` : undefined}
                    >
                      {s.lines.map((id) => (
                        <Bullet key={id} id={id} />
                      ))}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function FilterButton({
  pressed,
  onClick,
  children,
}: {
  pressed: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      aria-pressed={pressed}
      onClick={onClick}
      className={`inline-flex shrink-0 whitespace-nowrap items-center gap-2 rounded-[3px] min-h-11 px-4 text-sm font-bold transition-colors ${
        pressed ? "bg-ink text-paper" : "bg-paper hover:bg-ink/10"
      }`}
    >
      {children}
    </button>
  );
}
