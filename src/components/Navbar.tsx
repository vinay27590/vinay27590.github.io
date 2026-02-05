"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Close menu on route/scroll
  useEffect(() => {
    const handler = () => setMenuOpen(false);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Smooth scrolling
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // navbar height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setActive(id);
    setMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-bg/80 backdrop-blur-lg border-b border-slate-800">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="#hero"
          onClick={() => scrollToSection("hero")}
          className="text-xl sm:text-2xl font-bold text-sky-400"
        >
          VINAY CHOUHAN
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden sm:flex items-center gap-8 text-slate-300">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`nav-link ${
                  active === link.id ? "text-sky-400 font-semibold" : ""
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className="sm:hidden text-sky-400 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="sm:hidden bg-bg/95 backdrop-blur-lg border-t border-slate-700 py-4 px-6">
          <ul className="flex flex-col gap-6 text-lg text-slate-200">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full text-left ${
                    active === link.id ? "text-sky-400 font-semibold" : ""
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
