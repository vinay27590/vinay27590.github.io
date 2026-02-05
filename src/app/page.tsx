"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { skills } from "@/components/data";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <main>
      {/* ========================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================= */}
      <section id="hero" className="pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-10">
          {/* TEXT */}
          <div className="flex-1 text-center sm:text-left">
            <p className="inline-flex items-center rounded-full border border-slate-700 bg-bg-soft/70 px-4 py-1 text-sm sm:text-base text-slate-300">
              Java Full-Stack Developer · 4 Years · Immediate Joiner
            </p>

            <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold leading-tight flex flex-wrap justify-center sm:justify-start gap-3">
              Hi, I&apos;m <span className="text-sky-400">Vinay Chouhan</span>
              <span className="wave text-5xl">👋</span>
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-xl mx-auto sm:mx-0">
              I build scalable backend systems using{" "}
              <span className="text-sky-400">Java</span>,
              <span className="text-sky-400"> Spring Boot</span>,
              <span className="text-sky-400"> Spring WebFlux</span>, and
              PostgreSQL — with a strong focus on automation, performance,
              and clean architecture.
            </p>

            <div className="mt-8 flex flex-wrap justify-center sm:justify-start gap-4">
              <a
                href="#projects"
                className="rounded-full bg-sky-500 hover:bg-sky-400 px-6 py-3 text-black font-medium shadow-lg"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-full border border-slate-500 px-6 py-3 font-medium"
              >
                Contact Me
              </a>

              <a
                href="/resume/VINAY CV.pdf"
                download
                className="group rounded-full px-6 py-3 text-sm font-semibold transition
                bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950
                shadow-lg shadow-emerald-500/30 hover:shadow-emerald-400/40
                hover:scale-[1.03]"
              >
                <span className="inline-flex items-center gap-2">
                  <svg
                    className="w-4 h-4 group-hover:animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16V4m0 12l-4-4m4 4l4-4M4 20h16"
                    />
                  </svg>
                  Download Resume
                </span>
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex-1 flex justify-center sm:justify-end mt-8 sm:mt-0">
            <div className="relative w-46 h-46 sm:w-64 sm:h-64 rounded-full border border-slate-700
              bg-gradient-to-br from-sky-400/40 to-purple-500/40 overflow-hidden shadow-xl">
              <img
                src="/profile.jpg"
                alt="Vinay Chouhan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. SKILLS SECTION */}
      {/* ========================================================= */}
      <Section id="skills">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {skills.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.06, y: -2 }}
                className="card border border-slate-800/80 bg-slate-900/40 px-3 py-2 text-sm text-center"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ========================================================= */}
      {/* 3. PROJECTS SECTION */}
      {/* ========================================================= */}
      <Section id="projects">
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="section-title">Projects</h2>

    {/* CORE SYSTEM */}
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      className="card p-6 sm:p-7 rounded-xl border border-slate-800
      bg-gradient-to-br from-slate-900/60 to-slate-900/30 shadow-lg shadow-black/30"
    >
      <h3 className="text-xl font-semibold text-sky-300">
        Global Trade Management & Content Distribution Platform
      </h3>

      <p className="mt-3 text-slate-200/90">
        A production-grade, multi-tenant backend system designed to ingest,
        normalize, and distribute global trade datasets such as RPL, HS, and
        ECCN to subscribed client systems.
      </p>

      <ul className="mt-4 space-y-2 list-disc list-inside text-slate-200/90">
        <li>Reactive REST APIs built using Spring Boot and Spring WebFlux.</li>
        <li>Multi-format ingestion pipelines supporting JSON, XML, CSV, and Excel.</li>
        <li>Incremental update logic with duplicate detection and normalization.</li>
        <li>Subscription-based content distribution for tenant-specific datasets.</li>
        <li>Automated notification and document generation engines.</li>
        <li>Optimized PostgreSQL queries for high-volume data processing.</li>
      </ul>

      <div className="mt-5 flex flex-wrap gap-3 text-sm">
        {["Java", "Spring Boot", "WebFlux", "PostgreSQL"].map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-800 px-3 py-1
            text-slate-200/90 border border-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>

    {/* SUPPORTING SYSTEMS */}
    <div className="mt-8 card p-6 sm:p-7">
      <h3 className="text-lg font-semibold text-sky-300">
        Other Enterprise Systems
      </h3>

      <ul className="mt-4 space-y-3 list-disc list-inside text-slate-200/90">
        <li>
          <strong>Audit Management System</strong> — Implemented CSR audit workflows,
          event calendar, and server-side filtering for 500+ users.
        </li>

        <li>
          <strong>Human Resource Management System</strong> — Built attendance tracking,
          HR configurations, and automated notifications.
        </li>

        <li>
          <strong>License Agreement System</strong> — Developed licensing workflows and
          migrated frontend from AngularJS to React.js.
        </li>

        <li>
          <strong>Analytics & Billing Platform (Woldo Analytics)</strong> — Created
          analytics dashboards, content management features, and integrated Stripe
          payments.
        </li>
      </ul>

      <p className="mt-4 text-sm text-slate-400">
        All systems followed a modular backend design with REST APIs,
        secure authentication, and optimized database access.
      </p>
    </div>
  </motion.div>
</Section>

      {/* ========================================================= */}
      {/* 5. ABOUT SECTION */}
      {/* ========================================================= */}
      <Section id="about">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="card p-6 sm:p-8"
        >
          <h2 className="section-title">About Me</h2>

          <div className="space-y-4 text-slate-200/90 leading-relaxed">
            <p>
              I&apos;m a Java Full-Stack Developer with 4 years of experience
              building secure and scalable enterprise applications.
            </p>

            <p>
              My primary focus is backend development using Spring Boot,
              Microservices, and Spring WebFlux, along with PostgreSQL and REST APIs.
            </p>

            <p>
              I&apos;ve worked extensively on automation, data ingestion pipelines,
              incremental update engines, and multi-tenant systems.
            </p>

            <p>
              I enjoy solving complex problems, optimizing performance,
              and continuously improving system design.
            </p>
          </div>
        </motion.div>
      </Section>

      {/* ========================================================= */}
      {/* 6. CONTACT SECTION */}
      {/* ========================================================= */}
      <Section id="contact">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="card p-6 sm:p-7"
        >
          <h2 className="section-title">Contact</h2>

          <div className="space-y-3">
            <p>📞 Phone: <a href="tel:+918962277229" className="text-sky-300">+91 89622 77229</a></p>
            <p>📧 Email: <a href="mailto:vinay77100@gmail.com" className="text-sky-300">vinay77100@gmail.com</a></p>
            <p>💼 LinkedIn: <a href="https://linkedin.com/in/vinaychouhan275" target="_blank" className="text-sky-300">linkedin.com/in/vinaychouhan275</a></p>
            <p>🐙 GitHub: <a href="https://github.com/vinay27590" target="_blank" className="text-sky-300">github.com/vinay27590</a></p>
            <p className="text-slate-400">📍 Indore, MP, India</p>
          </div>
        </motion.div>

        <p className="mt-8 mb-10 text-center text-xs text-slate-500">
          Designed & Built by Vinay Chouhan · {new Date().getFullYear()}
        </p>
      </Section>
    </main>
  );
}
