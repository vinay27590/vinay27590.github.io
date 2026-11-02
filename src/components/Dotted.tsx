import { Fragment } from "react";

/**
 * Renders "a · b · c" with drawn separator dots. Overpass sets its middle dot
 * off-centre, so the glyph is never used as a separator. Each dot stays on
 * the line of the item before it and items never break internally, so a line
 * can neither start with a dot nor split "JPA / Hibernate".
 */
export function Dotted({ items, text }: { items?: string[]; text?: string }) {
  const parts = items ?? (text ?? "").split(" · ");
  const last = parts.length - 1;
  return (
    <>
      {parts.map((p, i) => (
        <Fragment key={`${p}-${i}`}>
          <span className="whitespace-nowrap">
            {p}
            {i < last && (
              <>
                <span className="sr-only">,</span>
                <span
                  aria-hidden="true"
                  className="inline-block size-[0.24em] rounded-full bg-current ml-[0.45em] mr-[0.2em] align-middle opacity-70"
                />
              </>
            )}
          </span>
          {i < last && " "}
        </Fragment>
      ))}
    </>
  );
}
