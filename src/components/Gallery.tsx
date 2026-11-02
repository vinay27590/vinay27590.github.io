"use client";

import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiMaximize2, FiX } from "react-icons/fi";
import type { Line, Screenshot } from "./data";

/**
 * The line's screens: the first desktop shot leads, phone shots stand beside
 * it at their real proportions, remaining desktop shots follow two-up.
 * Every shot opens full size in a lightbox.
 */
export function Gallery({ line }: { line: Line }) {
  const shots = line.screenshots;
  const [open, setOpen] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const desktops = shots.filter((s) => s.device === "desktop");
  const phones = shots.filter((s) => s.device === "phone");
  const [lead, ...restDesktops] = desktops;

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open !== null && !d.open) d.showModal();
    if (open === null && d.open) d.close();
  }, [open]);

  const step = (dir: number) => setOpen((i) => (i === null ? i : (i + dir + shots.length) % shots.length));
  const indexOf = (s: Screenshot) => shots.indexOf(s);
  const current = open !== null ? shots[open] : null;

  return (
    <section className="mt-12" aria-label={`${line.name} screens`}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h4 className="text-sm font-extrabold">Screens</h4>
        {line.screenshotsNote && <p className="text-sm font-medium text-ink/70">{line.screenshotsNote}</p>}
      </div>

      <div className="mt-4 grid gap-5 lg:grid-cols-12 lg:items-stretch">
        {lead && (
          <Shot shot={lead} onOpen={() => setOpen(indexOf(lead))} className={phones.length ? "lg:col-span-8" : "lg:col-span-12"} />
        )}
        {phones.length > 0 && (
          <div className={`grid grid-cols-2 gap-4 ${lead ? "lg:col-span-4" : "lg:col-span-12 sm:grid-cols-4"}`}>
            {phones.map((p) => (
              <Shot key={p.src} shot={p} onOpen={() => setOpen(indexOf(p))} fill={Boolean(lead)} />
            ))}
          </div>
        )}
        {restDesktops.length > 0 && (
          <div className="lg:col-span-12 grid gap-5 sm:grid-cols-2">
            {restDesktops.map((s) => (
              <Shot key={s.src} shot={s} onOpen={() => setOpen(indexOf(s))} />
            ))}
          </div>
        )}
      </div>

      <dialog
        ref={dialog}
        aria-label={current ? current.caption : `${line.name} screens`}
        onClose={() => setOpen(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(null);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        className="on-enamel m-auto max-w-[min(96vw,1400px)] max-h-[96vh] rounded-[4px] bg-enamel text-on-enamel p-0 backdrop:bg-black/80"
      >
        {current && (
          <figure className="p-3 sm:p-4">
            <img
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              className={`block mx-auto w-auto h-auto rounded-[3px] ${
                current.device === "phone" ? "max-h-[80vh]" : "max-h-[80vh] max-w-full"
              }`}
            />
            <figcaption className="mt-3 flex items-center justify-between gap-4">
              <span className="font-bold">{current.caption}</span>
              <span className="flex items-center gap-1">
                {shots.length > 1 && (
                  <>
                    <IconButton label="Previous screen" onClick={() => step(-1)}>
                      <FiChevronLeft />
                    </IconButton>
                    <span className="text-sm tabular-nums text-on-enamel/70 px-1">
                      {open! + 1} / {shots.length}
                    </span>
                    <IconButton label="Next screen" onClick={() => step(1)}>
                      <FiChevronRight />
                    </IconButton>
                  </>
                )}
                <IconButton label="Close" onClick={() => setOpen(null)}>
                  <FiX />
                </IconButton>
              </span>
            </figcaption>
          </figure>
        )}
      </dialog>
    </section>
  );
}

/**
 * One screenshot. `fill` (wide screens only) stretches a phone shot to the
 * height of the lead desktop shot beside it, so image bottoms and captions
 * share one baseline.
 */
function Shot({
  shot,
  onOpen,
  className = "",
  fill = false,
}: {
  shot: Screenshot;
  onOpen: () => void;
  className?: string;
  fill?: boolean;
}) {
  const img = shot.thumb ?? shot;
  return (
    <figure className={`${fill ? "lg:flex lg:flex-col lg:h-full" : ""} ${className}`}>
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open full size: ${shot.caption}`}
        className={`group relative block w-full overflow-hidden rounded-[4px] bg-enamel shadow-[0_1px_2px_rgb(0_0_0/0.12),0_8px_24px_-12px_rgb(0_0_0/0.35)] ${
          fill ? "lg:flex-1 lg:min-h-0" : ""
        }`}
      >
        <img
          src={img.src}
          alt={shot.alt}
          width={img.width}
          height={img.height}
          loading="lazy"
          className={`block w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.02] ${
            shot.device === "phone"
              ? `aspect-[9/20] object-cover object-top ${fill ? "lg:aspect-auto lg:h-full lg:absolute lg:inset-0" : ""}`
              : shot.thumb
                ? "aspect-[12/5] object-cover object-left-top"
                : ""
          }`}
        />
        <span
          aria-hidden="true"
          className="absolute right-2 top-2 grid place-items-center size-8 rounded-[3px] bg-black/60 text-white opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity"
        >
          <FiMaximize2 />
        </span>
      </button>
      <figcaption className="mt-2 text-sm font-semibold text-ink/75 whitespace-nowrap overflow-hidden text-ellipsis">
        {shot.caption}
      </figcaption>
    </figure>
  );
}

function IconButton({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid place-items-center size-11 rounded-[3px] text-xl hover:bg-on-enamel/10 transition-colors"
    >
      {children}
    </button>
  );
}
