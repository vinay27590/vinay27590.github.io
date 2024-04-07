import LandingPage from "@/components/customComponents/landingPage";
import { landingPageConfig } from "@/config/landingPageConfig";
import Project from "@/components/customComponents/Project";
import Experience from "@/components/customComponents/Experience";

export default function Home() {
  return (
    <div className="space-y-24">
      <LandingPage
        developerName={landingPageConfig.developerName}
        description={landingPageConfig.description}
        buttonLable={landingPageConfig.buttonLable}
      />
      <Project />
      <Experience />
    </div>
  );
}
