"use client";
import React from "react";
import { subtitle, title } from "../primitives";
import { Link } from "@nextui-org/link";
import { LampContainer } from "../ui/lamp";
import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem2";
import { Spacer } from "@nextui-org/react";

export default function Project() {
  return (
    <div className="px-24 md:px-28">
      <h1
        className={title({
          class: "text-center uppercase",
          fullWidth: true,
          color: "blue",
          size: "md",
        })}
      >
        Projects
      </h1>
      <h1
        className={subtitle({
          class: "text-center",
        })}
      >
        I love Learning new Technologies and building projects to gain practical
        expertise. My projects makes use of vast variety of latest technology
        tools, Like Java, Angular, React.js, Vue.js, Spring Boot. Here&apos;s a
        few of the projects I&apos;ve worked on. You can see the full list on
        my 
        <Link
          underline="hover"
          size="lg"
          isExternal
          href="https://github.com/vinay27590"
        >
          Github
        </Link>
         profile.
      </h1>
      <section>
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            <div className="flex items-center">
              <ProjectItem />
              <Spacer x={4} />
              <ProjectItem />
              <Spacer x={4} />
              <ProjectItem />
              <Spacer x={4} />
            </div>
          </motion.h1>
        </LampContainer>
      </section>
    </div>
  );
}
