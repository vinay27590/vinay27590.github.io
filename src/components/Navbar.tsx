"use client";

import { useEffect, useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { RESUME_URL } from "./data";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["hero", ...navLinks.map((l) => l.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-enamel text-on-enamel">
      <nav className="mx-auto max-w-[1280px] h-14 px-5 sm:px-8 lg:px-10 flex items-center gap-2 lg:gap-8" aria-label="Main">
        <a href="#hero" className="flex items-center gap-3 font-extrabold text-[1.05rem] tracking-[-0.01em] whitespace-nowrap min-h-11">
          <span
            aria-hidden="true"
            className="size-5 rounded-full bg-on-enamel"
            style={{ boxShadow: "inset 0 0 0 4px rgb(var(--enamel)), 0 0 0 2px rgb(var(--on-enamel))" }}
          />
          Vinay Chouhan
        </a>

        <ul className="hidden lg:flex items-center gap-7 ml-auto text-[0.95rem] font-semibold">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                className={`nav-link ${active === link.id ? "is-active" : ""}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto lg:ml-0 flex items-center gap-1 lg:gap-3">
          <ThemeToggle />
          <a
            href={RESUME_URL}
            download
            aria-label="Download resume"
            className="inline-flex items-center justify-center gap-2 rounded-[3px] bg-on-enamel text-enamel h-11 lg:h-9 min-w-11 px-3 lg:px-4 text-sm font-extrabold hover:opacity-85 transition-opacity"
          >
            <FiDownload aria-hidden="true" />
            <span className="hidden sm:inline">Resume</span>
          </a>
          <button
            className="lg:hidden -mr-2 grid place-items-center size-11 text-2xl"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="lg:hidden border-t border-on-enamel/15 px-5 sm:px-8 pb-6 pt-2">
          <ul className="flex flex-col text-lg font-semibold">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-3 border-b border-on-enamel/10 ${active === link.id ? "font-extrabold" : "text-on-enamel/80"}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
