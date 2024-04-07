"use client";
import React from "react";
import { subtitle, title } from "../primitives";
import { Link } from "@nextui-org/link";
import { LampContainer } from "../ui/lamp";
import { motion } from "framer-motion";
import ProjectItem, { ProjectItemModel } from "./ProjectItem2";
import { Spacer } from "@nextui-org/react";
import { projects } from "@/config/dummyData";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <div className="flex flex-col px-24 md:px-28 space-y-6 items-center">
      <div className="space-y-4">
        <h1
          className={title({
            class: "text-center uppercase",
            fullWidth: true,
            color: "cyan",
            size: "md",
          })}
        >
          Experience
        </h1>
        <h1
          className={subtitle({
            class: "text-center ",
          })}
        >
          I have Multiple work Experiences from different fields like Sales,
          Marketing, Tech-Support, Here i have worked for several years and
          learned a lot of different great things and now I&apos;am working as a
          Associate Software Developer. Here are some Experience.
          <p className="text-sm text-yellow-300">
            (Note: I am not sharing my Non-Developer Experiences because it is
            not relavent now.)
          </p>
        </h1>
      </div>

      <div className="mx-auto">
        <ExperienceCard />
      </div>
    </div>
  );
}
