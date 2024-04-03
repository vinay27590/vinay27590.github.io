"use client";
import { Button } from "@nextui-org/button";
import React from "react";
import { subtitle, title } from "../primitives";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { DownloadIcon } from "../icons";
import { button as buttonStyles } from "@nextui-org/theme";
import { AuroraBackground } from "../ui/aurora-background";
import { motion } from "framer-motion";

export interface LandingPageProps {
  developerName: string;
  description: string;
  buttonLable: string;
}

export default function LandingPage(props: LandingPageProps) {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <section className="flex px-10 pt-20 md:pt-28">
          <div className="flex-col ">
            <div className="max-w-4xl space-y-4">
              <h1 className={title({ class: "dark:text-white" })}>
                Hello World!👋 , &nbsp;
              </h1>
              <br />
              <h1
                className={title({
                  class: "mt-5 dark:text-white",
                  inline: true,
                })}
              >
                I'm&nbsp;
              </h1>
              <h1
                className={title({
                  inline: true,
                  color: "yellow",
                  class: "uppercase",
                })}
              >
                {props.developerName}&nbsp;
              </h1>
              <br />
              <h1 className={title({ class: "dark:text-white" })}>
                I'm a Full-Stack Developer
              </h1>
            </div>
            <div className="flex gap-3 mt-10">
              <Link
                isExternal
                href={siteConfig.links.github}
                className={buttonStyles({
                  color: "primary",
                  radius: "full",
                  variant: "shadow",
                })}
              >
                <DownloadIcon />
                {props.buttonLable}
              </Link>
              {/* <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link> */}
            </div>
          </div>
        </section>
      </motion.div>
    </AuroraBackground>
  );
}
