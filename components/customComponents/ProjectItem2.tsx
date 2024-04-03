import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

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

export default function ProjectItem() {
  return (
    <div className="lg:w-72">
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Project title
          </p>
          <h4 className="text-white/90 font-medium text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            corporis sapiente labore.
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="/images/card-example-5.jpeg"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="/images/breathing-app-icon.jpeg"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Breathing App</p>
            </div>
          </div>
          <Button radius="full" size="sm">
            Get App
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
