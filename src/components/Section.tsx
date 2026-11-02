import { ReactNode } from "react";

type Tone = "paper" | "platform" | "enamel";

interface SectionProps {
  id: string;
  title: string;
  intro?: ReactNode;
  tone?: Tone;
  children: ReactNode;
  className?: string;
}

const tones: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  platform: "bg-platform text-ink",
  enamel: "on-enamel bg-enamel text-on-enamel",
};

/** Page container shared by every band so all left edges agree. */
export const container = "mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10";

/**
 * A section opens like a station board: a heavy rule, the name, then the
 * intro directly beneath it. Tone sets a full-bleed ground for the band.
 */
export function Section({ id, title, intro, tone = "paper", children, className = "" }: SectionProps) {
  const rule = tone === "enamel" ? "border-on-enamel" : "border-ink";
  const introTone = tone === "enamel" ? "text-on-enamel/80" : "text-ink/80";
  return (
    <section id={id} className={`scroll-mt-14 ${tones[tone]} ${tone === "paper" ? "pt-20 sm:pt-28" : "py-20 sm:py-28 mt-20 sm:mt-28"} ${className}`}>
      <div className={container}>
        <div className={`border-t-[6px] ${rule} pt-5`}>
          <h2 className="text-5xl sm:text-6xl font-black tracking-[-0.04em] leading-[0.95]">{title}</h2>
          {intro && <p className={`mt-4 max-w-[60ch] text-lg font-medium text-pretty ${introTone}`}>{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
