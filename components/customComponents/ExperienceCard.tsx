import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

const dummy = `Headquarter at Mumbai (Maharashtra) Direction 
Software LLP provides IT services and solution like e-Business consulting,
 Microsoft Business, custom software development etc.
  Works on various technologies like Java, .Net, 
  Angular, Vue.js and serves 50+ international client across the 
  world with 350+ of employees. Give freshers opportunity to showcase their 
  technical skill and guide them to improve those skills.`;

export default function ExperienceCard() {
  return (
    <Card className="max-w-[800px]">
      <CardHeader className="flex gap-3 items-center justify-between">
        <div className="flex items-center justify-center space-x-2">
          <Image
            alt="direction software logo"
            height={40}
            radius="sm"
            src="/Direction-Software-LLP-logo.png"
            width={50}
          />
          <div className="flex flex-col">
            <p className="text-md">Direction Software LLP</p>
            <p className="text-small text-default-500">
              Associate Software Engineer
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <p className="text-md">2021 - Present</p>
          <p className="text-small text-default-500"></p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{dummy}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href="https://www.direction.biz/">
          www.direction.biz
        </Link>
      </CardFooter>
    </Card>
  );
}
