import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  Spacer,
} from "@nextui-org/react";
import { title } from "../primitives";
import { BackgroundGradient } from "../ui/background-gradient";
import { ImageSlider } from "./ImageSlider";

export interface ProjectItemModel {
  projectName: string;
  role: string;
  techUsed: string[];
  purpose: string;
  workedOnFeature: string;
  isPrivateRepo: boolean;
}

interface ProjectItemProps {
  project: ProjectItemModel;
}

export default function ProjectItem(props: ProjectItemProps) {
  return (
    <BackgroundGradient className="rounded-[25px] p-unit sm:p-unit bg-white dark:bg-zinc-900 dark:text-white/80 light:text-black/10">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 items-center   max-w-[800px] ">
        <div className="flex flex-col basis-1/2 p-5 space-y-4 items-center justify-center">
          <div className="text-center">
            <p
              className={title({
                size: "cardTitle",
                color: "violet",
                class: " p-2 text-center",
              })}
            >
              {props.project.projectName}
            </p>
            <h4 className="dark:text-white/90 text-sm">
              {props.project.purpose.slice(0, 250)}...
            </h4>
          </div>
          <div className="flex flex-col space-y-2 text-center">
            <p className="text-medium font-medium">Tech-Used</p>
            <div className="flex space-x-3">
              {props.project.techUsed.map((tech) => (
                <div key={tech} className="">
                  <p className="text-tiny ">{tech}</p>
                </div>
              ))}
            </div>
          </div>

          <Button radius="full" size="sm">
            Know More
          </Button>
        </div>

        {/* ######## Image Slider ######### */}

        <div className="mx-auto">
          <ImageSlider />
        </div>
      </div>
    </BackgroundGradient>
  );
}
