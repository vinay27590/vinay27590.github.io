import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { DownloadIcon, GithubIcon } from "@/components/icons";
import LandingPage from "@/components/customComponents/landingPage";
import { landingPageConfig } from "@/config/landingPageConfig";
import Project from "@/components/customComponents/Project";

export default function Home() {
  return (
    <div className="space-y-10">
      <LandingPage
        developerName={landingPageConfig.developerName}
        description={landingPageConfig.description}
        buttonLable={landingPageConfig.buttonLable}
      />
      <Project />
    </div>
  );
}
