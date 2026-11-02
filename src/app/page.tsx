import { FiArrowUp, FiArrowUpRight, FiCode, FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { Section, container } from "@/components/Section";
import { LineFocusProvider } from "@/components/LineFocus";
import { LineIndex, NetworkMap, Track } from "@/components/NetworkMap";
import { LineSection } from "@/components/LineSection";
import { SkillIndex } from "@/components/SkillIndex";
import { Dotted } from "@/components/Dotted";
import {
  RESUME_URL,
  certifications,
  contact,
  education,
  lineById,
  lines,
  profile,
  timetable,
} from "@/components/data";

function Actions({ className = "", email = true }: { className?: string; email?: boolean }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a
        href={RESUME_URL}
        download
        className="inline-flex items-center justify-center gap-2.5 rounded-[4px] bg-ink text-paper px-5 sm:px-6 py-3 sm:py-3.5 text-base sm:text-lg font-extrabold hover:opacity-85 transition-opacity"
      >
        <FiDownload aria-hidden="true" /> Download resume
      </a>
      {email && (
        <a
          href={`mailto:${contact.email}`}
          className="inline-flex items-center justify-center gap-2.5 rounded-[4px] px-5 sm:px-6 py-3 sm:py-3.5 text-base sm:text-lg font-extrabold shadow-[inset_0_0_0_3px_rgb(var(--ink))] hover:bg-platform transition-colors"
        >
          <FiMail aria-hidden="true" /> Email me
        </a>
      )}
    </div>
  );
}

function Legend() {
  return (
    <p className="text-sm font-semibold text-ink/70 flex flex-wrap items-center gap-x-6 gap-y-2">
      <span className="inline-flex items-center gap-2">
        <Track color="rgb(var(--ink))" hollow={false} className="!w-8" /> Shipped
      </span>
      <span className="inline-flex items-center gap-2">
        <Track color="rgb(var(--ink))" hollow className="!w-8" /> Under construction
      </span>
      <span>Select a line to ride it.</span>
    </p>
  );
}

export default function HomePage() {
  return (
    <LineFocusProvider>
      <main>
        {/* ── Hero: the station sign and the network ── */}
        <section id="hero" className={`${container} pt-20 sm:pt-24`}>
          <h1 className="text-[clamp(2.75rem,7vw,4.75rem)] font-black tracking-[-0.045em] leading-[0.88]">
            {profile.name}
          </h1>

          <div className="mt-6 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-2xl sm:text-[1.75rem] font-extrabold tracking-[-0.02em] leading-tight">{profile.role}</p>
              <p className="mt-1 text-lg font-semibold text-ink/75">
                <Dotted items={profile.stack} />
              </p>
              <p className="mt-5 max-w-[64ch] text-lg leading-relaxed text-ink/85 text-pretty">{profile.summary}</p>
              <Actions className="mt-7 xl:hidden" />
              <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-ink/70 xl:hidden">
                <FiMapPin aria-hidden="true" /> {profile.location}
              </p>
            </div>

            {/* Wide screens: actions beside the summary, aligned to the role line */}
            <div className="hidden xl:flex lg:col-span-5 flex-col items-end gap-4">
              <Actions className="flex-col w-[17rem] [&>a]:w-full" />
              <p className="w-[17rem] flex items-center justify-center gap-2 text-sm font-semibold text-ink/70">
                <FiMapPin aria-hidden="true" /> {profile.location}
              </p>
            </div>

            {/* Narrow and mid screens: the vertical diagram */}
            <div className="xl:hidden lg:col-span-5">
              <div className="max-w-[400px] md:ml-auto">
                <LineIndex />
              </div>
            </div>
          </div>

          <div className="hidden xl:block mt-6">
            <NetworkMap />
          </div>
          <div className="mt-6 xl:mt-4">
            <Legend />
          </div>
        </section>

        {/* ── Projects ── */}
        <Section
          id="projects"
          title="Projects"
          intro="Two products I'm building end to end, and the enterprise systems behind them. Select a station to see what was built there."
        >
          {lines.map((line, i) => (
            <LineSection key={line.id} line={line} first={i === 0} />
          ))}
        </Section>

        {/* ── Experience: the timetable board ── */}
        <Section
          id="experience"
          tone="enamel"
          title="Experience"
          intro="From a support desk in 2019 to leading a team of three at Mihaan, and now my own two products."
        >
          <ol className="mt-12">
            {timetable.map((job, i) => {
              const last = i === timetable.length - 1;
              const routeLines = job.lines?.map((id) => lineById[id]) ?? [];
              return (
                <li key={job.company} className="grid grid-cols-[2.5rem_1fr] md:grid-cols-[3rem_14rem_1fr] gap-x-4 md:gap-x-6">
                  <div className="relative row-span-2 md:row-span-1" aria-hidden="true">
                    <div className={`absolute left-1/2 -translate-x-1/2 top-3 ${last ? "h-12" : "bottom-0"} flex gap-1`}>
                      {routeLines.length > 0 ? (
                        routeLines.map((l) => (
                          <Track key={l.id} color={l.color} hollow={l.inProgress} vertical ground="rgb(var(--enamel))" />
                        ))
                      ) : (
                        <Track color={job.color} hollow={false} vertical />
                      )}
                    </div>
                    <span
                      className="absolute left-1/2 -translate-x-1/2 top-1 z-10 size-6 rounded-full bg-enamel"
                      style={{ boxShadow: "inset 0 0 0 4px rgb(var(--on-enamel))" }}
                    />
                  </div>
                  <p className="pt-1 text-lg font-black tabular-nums tracking-[-0.01em]">{job.period}</p>
                  <div
                    className={`col-start-2 md:col-start-3 pt-1 ${
                      last ? "pb-2" : "pb-10 mb-10 border-b border-on-enamel/15"
                    }`}
                  >
                    <p className="text-2xl font-extrabold tracking-[-0.02em]">{job.company}</p>
                    <p className="mt-1 text-lg font-semibold">{job.role}</p>
                    <p className="mt-0.5 text-on-enamel/70 font-medium">
                      <Dotted text={job.place} />
                    </p>
                    {job.outcome && <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-on-enamel/90">{job.outcome}</p>}
                    {routeLines.length > 0 && (
                      <p className="mt-3 flex flex-wrap gap-x-5 font-bold">
                        {routeLines.map((l) => (
                          <a
                            key={l.id}
                            href={`#${l.id}`}
                            className="inline-flex min-h-11 items-center underline decoration-[3px] underline-offset-[6px]"
                            style={{ textDecorationColor: l.color }}
                          >
                            {l.name} line
                          </a>
                        ))}
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </Section>

        {/* ── Skills: the interchange index ── */}
        <Section
          id="skills"
          tone="platform"
          className="!mt-0"
          title="Skills"
          intro="Every skill is marked with the lines it was used on. Pick a project to filter."
        >
          <div className="mt-10">
            <SkillIndex />
          </div>
        </Section>

        {/* ── About ── */}
        <Section id="about" title="About">
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
            <figure className="lg:col-span-5 max-w-md lg:max-w-none">
              <img
                src="/images/vinay-runfinity.jpg"
                srcSet="/images/vinay-runfinity-600.jpg 600w, /images/vinay-runfinity.jpg 900w"
                sizes="(min-width: 1024px) 460px, 90vw"
                width={900}
                height={1200}
                loading="lazy"
                alt="Vinay Chouhan standing beside the Runfinity 2.0 marathon sign, wearing a medal"
                className="w-full h-auto rounded-[4px]"
              />
              <figcaption className="mt-3 text-sm font-semibold text-ink/70">
                At the Runfinity 2.0 marathon, medal around my neck.
              </figcaption>
            </figure>

            <div className="lg:col-span-7 space-y-5 text-lg leading-relaxed max-w-[60ch]">
              <p className="text-2xl sm:text-3xl font-extrabold tracking-[-0.02em] leading-snug text-balance">
                Six years in IT: two at a support desk, then four building production systems for Direction Software and
                Mihaan.
              </p>
              <p className="text-ink/85 text-pretty">
                My core is Spring Boot, Spring WebFlux, Spring Security with JWT, PostgreSQL and REST API design, across
                microservice and modular architectures, multi-tenant systems and AI features built with Spring AI, Google
                Gemini and RAG.
              </p>
              <p className="text-ink/85 text-pretty">
                On the front end I build responsive apps with Angular, React.js and Vue.js. I work in Agile/Scrum teams and
                back my code with JUnit 5 and Mockito tests.
              </p>
              <p className="text-ink/85 text-pretty">
                Right now I&apos;m building LaundryOS and FlexPulse end to end, from the backend to the Android, iOS and web
                apps.
              </p>

              <div className="pt-6 grid sm:grid-cols-2 gap-8 text-base">
                <div>
                  <h3 className="text-sm font-extrabold pb-2 border-b-[3px] border-ink">Certification</h3>
                  <ul>
                    {certifications.map((c) => (
                      <li key={c.title} className="py-2.5 border-b border-ink/10">
                        <p className="font-semibold leading-snug">{c.title}</p>
                        <p className="text-ink/70 text-[0.95rem]">{c.place}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-extrabold pb-2 border-b-[3px] border-ink">Education</h3>
                  <ul>
                    {education.map((e) => (
                      <li key={e.title} className="py-2.5 border-b border-ink/10">
                        <p className="font-semibold leading-snug">{e.title}</p>
                        <p className="text-ink/70 text-[0.95rem]">{e.place}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ── Contact: the terminus ── */}
        <Section id="contact" title="Contact" intro="All lines end here. Email is the fastest way to reach me.">
          <div className="mt-10 flex items-center" aria-hidden="true">
            <div className="flex-1 space-y-[7px]">
              {lines.map((l) => (
                <Track key={l.id} color={l.color} hollow={l.inProgress} />
              ))}
            </div>
            <span className="w-3 self-stretch -my-2 rounded-full bg-ink" />
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <a
                href={`mailto:${contact.email}`}
                className="group inline-flex items-center gap-3 py-1 text-[clamp(1.5rem,3.8vw,3.25rem)] font-black tracking-[-0.03em] [overflow-wrap:anywhere] underline [text-decoration-skip-ink:none] decoration-[4px] underline-offset-[10px] decoration-ink/20 hover:decoration-ink transition-colors"
              >
                {contact.email}
                <FiArrowUpRight
                  aria-hidden="true"
                  className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
              <Actions className="mt-8" email={false} />
            </div>

            <ul className="lg:col-span-5 text-lg">
              {[
                { icon: FiPhone, label: "Phone", value: contact.phone, href: contact.phoneHref },
                { icon: FiLinkedin, label: "LinkedIn", value: contact.linkedinLabel, href: contact.linkedin },
                { icon: FiGithub, label: "GitHub", value: contact.githubLabel, href: contact.github },
                { icon: FiCode, label: "HackerRank", value: contact.hackerrankLabel, href: contact.hackerrank },
                { icon: FiMapPin, label: "Based in", value: profile.location },
              ].map(({ icon: Icon, label, value, href }) => (
                <li
                  key={label}
                  className="grid grid-cols-[1.75rem_1fr] sm:grid-cols-[1.75rem_6.5rem_1fr] items-center gap-x-3 min-h-14 py-1 border-b border-ink/15 first:border-t"
                >
                  <Icon aria-hidden="true" className="text-xl" />
                  <span className="sr-only sm:not-sr-only text-ink/70 font-semibold">{label}</span>
                  {href ? (
                    <a
                      href={href}
                      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="font-bold [overflow-wrap:anywhere] py-2.5 hover:underline underline-offset-4 decoration-2"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="font-bold">{value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <footer className={`${container} mt-24`}>
          <div className="py-8 border-t-[6px] border-ink flex flex-wrap items-center justify-between gap-4 text-sm font-semibold text-ink/70">
            <p>Designed and built by Vinay Chouhan, {new Date().getFullYear()}</p>
            <a href="#hero" className="inline-flex items-center gap-1.5 min-h-11 hover:text-ink">
              Back to top <FiArrowUp aria-hidden="true" />
            </a>
          </div>
        </footer>
      </main>
    </LineFocusProvider>
  );
}
