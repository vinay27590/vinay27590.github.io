"use client";
import React from "react";
import { subtitle, title } from "../primitives";
import { Link } from "@nextui-org/link";
import { LampContainer } from "../ui/lamp";
import { motion } from "framer-motion";
import ProjectItem, { ProjectItemModel } from "./ProjectItem2";
import { Spacer } from "@nextui-org/react";
import { projects } from "@/config/dummyData";
import { BackgroundBeams } from "../ui/background-beams";

export default function Project() {
  return (
    <div className="px-24 md:px-28 space-y-6">
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
          class: "text-center ",
        })}
      >
        I love Learning new Technologies and building projects to gain practical
        expertise. My projects makes use of vast variety of latest technology
        tools, Like Java, Angular, React.js, Vue.js, Spring Boot. Here&apos;s a
        few of the projects I&apos;ve worked on. You can see the full list on
        my&nbsp;
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

      <div className="flex flex-col items-center space-y-8">
        {projects.map((project: ProjectItemModel) => (
          <div key={project.projectName} className="">
            <ProjectItem project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
