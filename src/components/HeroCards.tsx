import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin, CircleUser } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

const CALENDLY_URL = "https://calendly.com/jarvis-highplainsmedia";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage alt="" src="https://github.com/shadcn.png" />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Your ops lead</CardTitle>
            <CardDescription>@after_automation</CardDescription>
          </div>
        </CardHeader>

        <CardContent className="text-sm text-muted-foreground">
          We replaced three spreadsheets and a shared inbox. Onboarding is half the
          time.
        </CardContent>
      </Card>

      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="/images/profile-photo.jpeg"
            alt=""
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Chris Jarvis</CardTitle>
          <CardDescription className="font-normal text-primary">
            Founder, Developer
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2 text-sm text-muted-foreground">
          <p>
            We build production web apps, SaaS, and automation—systems your team runs
            on every day.
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/jrvscm"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <GitHubLogoIcon className="w-5 h-5" />
            </a>

            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/chris-jarvis-dev/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>

            <Link
              to="/jarvis"
              rel="noreferrer noopener"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Developer Profile</span>
              <CircleUser size="20" />
            </Link>
          </div>
        </CardFooter>
      </Card>

      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Discovery call
            <Badge variant="secondary" className="text-sm text-primary">
              Start here
            </Badge>
          </CardTitle>

          <CardDescription>
            30 minutes to map the problem, rough scope, and fit.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button asChild className="w-full">
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer noopener">
              Schedule
            </a>
          </Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-3">
            {[
              "Outcomes and constraints",
              "Technical approach",
              "Timeline & next steps",
            ].map((benefit: string) => (
              <span key={benefit} className="flex text-sm">
                <Check className="text-green-500 shrink-0" />{" "}
                <span className="ml-2">{benefit}</span>
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>

      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Built to scale</CardTitle>
            <CardDescription className="text-md mt-2">
              Data models, permissions, and integrations that hold up as usage grows.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
