import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Linkedin } from "lucide-react";
import WorkExperience from "./WorkExperience";

const projects = [
    {
      id: "post-1",
      title: "Restaurant SAAS application",
      summary: (
        <span>
            <p className="text-md">
              A Saas application for restaurants, built with Next.js, TypeScript, a Node.js REST API and PostgreSQL. 
            </p>
            <ul className="list-disc my-5 text-sm">
              <li>Multi tenancy architecture for organizations, admin and user roles.</li>
              <li>A client reservation system via apiKey. </li>
              <li>Rewards system via payment provider webhooks.</li>
              <li>Realtime reservation dashboard with Web Sockets</li>
              <li>An admin dashboard to manage reservations, open close hours and rewards configuration.</li>
              <li>Authentication with Json Web Tokens.</li>
            </ul>
          </span>
      ),
      href: "https://github.com/jrvscm/restaurant-saas#readme",
      image: "//images.ctfassets.net/dho5s3z0t7k5/7yBomB5EGtQmi6RGioCL9d/97e6a72ef53ed3144f9b706b39973867/Screenshot_2025-01-07_at_11.36.32_AM.png",
    },
    {
      id: "post-2",
      title: "JuliesCHF Scramble",
      summary: (
        <span>
            <p className="text-md">
              A golf tournament registration website for Julies Caring Heart Foundation.
            </p>
            <ul className="list-disc my-5 text-sm">
              <li>Next.js & Styled-Components on the Frontend.</li>
              <li>Payment flow via Stripe</li>
              <li>Sponsor and Player signup flow using Netlify forms</li>
              <li>Zapier integration for emails to the tournament admin</li>
            </ul>
          </span>
      ),
      href: "https://www.julieschf.com/",
      image: "//images.ctfassets.net/dho5s3z0t7k5/1MXFZBgTMLVQ3ffrSpwfRF/181aacb1fcd21af01798e14278cf9e15/Screenshot_2025-01-07_at_12.22.39_PM.png",
    },
    {
      id: "post-3",
      title: "TechstyleOS Brand Sites",
      summary: (
        <span>
            <p className="text-md">
              A modern Ecommerce site built on Next.js, Typescript, React. A Node.js, Typescript Api. 
            </p>
            <ul className="list-disc my-5 text-sm">
              <li>Next.js & Styled-Components on the Frontend.</li>
              <li>Graphql for querying product data</li>
              <li>Shared npm packages for api and react across the organization</li>
              <li>AB testing and feature flag implementations</li>
              <li>In house CMS system</li>
              <li>Builder.io components for custom marketing pages</li>
              <li>In house CMS to manage custom routes and resources bundles</li>
            </ul>
          </span>
      ),
      href: "https://justfab.com",
      image: "//images.ctfassets.net/dho5s3z0t7k5/2BIJFELdbp4Txxw2jIcYjo/06c1e6a96e127316534739ab1124a37c/Screenshot_2025-01-07_at_12.50.58_PM.png",
    },
  ];

const integrations = [
  [
    {
      id: "integration-1",
      icon: <img alt="Integration" src="/images/figma.svg" />,
    },
    {
      id: "integration-2",
      icon: <img alt="Integration" src="/images/aws.svg" />,
    },
    {
      id: "integration-3",
      icon: <img alt="Integration" src="/images/docker.svg" />,
    },
    {
      id: "integration-4",
      icon: <img alt="Integration" src="/images/redux.svg" />,
    },
    {
      id: "integration-5",
      icon: <img alt="Integration" src="/images/git.svg" />,
    },
  ],
  [
    {
      id: "integration-6",
      icon: <img alt="Integration" src="/images/graphql.svg" />,
    },
    {
      id: "integration-7",
      icon: <img alt="Integration" src="/images/reactjs.svg" />,
    },
    {
      id: "integration-8",
      icon: <img alt="Integration" src="/images/insomnia.svg" />,
    },
    {
      id: "integration-9",
      icon: <img alt="Integration" src="/images/java.svg" />,
    },
    {
      id: "integration-10",
      icon: <img alt="Integration" src="/images/js.svg" />,
    },
  ],
  [
    {
      id: "integration-11",
      icon: <img alt="Integration" src="/images/netlify.svg" />,
    },
    {
      id: "integration-12",
      icon: <img alt="Integration" src="/images/nextjs.svg" />,
    },
    {
      id: "integration-13",
      icon: <img alt="Integration" src="/images/nodejs.svg" />,
    },
    {
      id: "integration-14",
      icon: <img alt="Integration" src="/images/python.svg" />,
    },
    {
      id: "integration-15",
      icon: <img alt="Integration" src="/images/vuejs.svg" />,
    },
  ],
];

export const Jarvis = () => {
  return (
      <>
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 600"
          className="min-h-full min-w-full"
        >
          <defs>
            <pattern
              id="grid"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 24 0 L 0 0 0 24"
                fill="none"
                stroke="hsl(var(--muted))"
                strokeWidth="1"
                strokeOpacity={0.5}
              />
            </pattern>
          </defs>
          <rect width="1400" height="600" fill="url(#grid)" />
        </svg>
      </div>
      <div className="relative">
        <div className="absolute left-0 z-10 hidden h-full w-1/2 bg-[linear-gradient(to_right,hsl(var(--background))_85%,transparent_100%)] md:block"></div>
        <div className="md:-space-x-26 container relative flex flex-col items-start md:flex-row md:items-center">
          <div className="z-20 -mx-[calc(theme(container.padding))] w-[calc(100%+2*theme(container.padding))] shrink-0 bg-background px-[calc(theme(container.padding))] pt-32 md:w-1/2 md:bg-transparent md:pb-32">
            <div className="flex flex-col text-left items-center md:items-start">
              <div className="relative max-w-sm">
                <Card className="w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                    <CardHeader className="mt-8 flex justify-center items-center pb-2">
                        <img
                        src="/images/profile-photo.jpeg"
                        alt="user avatar"
                        className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                        />
                        <CardTitle className="text-center">Chris Jarvis</CardTitle>
                        <CardDescription className="font-normal text-primary">
                        Software Developer
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="text-center pb-2">
                        <p>
                        Hey I'm Chris.
                        <br />
                        I build software for the web.
                        </p>
                    </CardContent>

                    <CardFooter className="flex flex-col items-center w-full space-y-4">
                        <div className="flex justify-center space-x-4">
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
                        </div>

                        {/* Full-Width Resume Download Button */}
                        <a
                        href="/jarvis-resume-january.pdf" // Update with your actual resume file path
                        download="Chris_Jarvis_Resume"
                        className="w-full"
                        >
                        <Button className="w-full">Download My Resume</Button>
                        </a>
                    </CardFooter>
                </Card>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-16 pb-8 pt-12 md:py-32">
              {integrations.map((line, i) => (
                <div key={i} className="flex gap-x-24 odd:-translate-x-24">
                  {line.map((integration) => (
                    <div
                      key={integration.id}
                      className="size-24 rounded-xl border border-background bg-background shadow-xl"
                    >
                      <div className="flex items-center justify-center h-full w-full bg-muted/20 p-4">
                        {integration.icon}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    
    {/* Work Experience Section */}
    <section>
        <WorkExperience />
    </section>

    <section>
        <div className="my-64">
            <div className="container flex flex-col items-center gap-16 lg:px-16">
                <div className="text-center">
                    <h2 className="font-bold text-5xl w-full text-center text-primary md:text-6xl xs:text-4xl">
                        Recent Projects
                    </h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {projects.map((post) => (
                    <a
                    target="_blank"
                    key={post.id}
                    href={post.href}
                    className="hover:shadow-lg hover:border-primary flex flex-col overflow-clip rounded-xl border border-border"
                    >
                    <div>
                        <img
                        src={post.image}
                        alt={post.title}
                        className="aspect-[16/9] h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                        <h3 className="mb-3 text-md font-semibold md:mb-4 md:text-xl lg:mb-6">
                        {post.title}
                        </h3>
                        <p className="mb-3 text-muted-foreground md:mb-4 lg:mb-6">
                        {post.summary}
                        </p>
                        <p className="flex items-center hover:underline">
                        {`View ${post.id !== 'post-1' ? 'the Site' : 'on GitHub'}`}
                        <ArrowRight className="ml-2 size-4" />
                        </p>
                    </div>
                    </a>
                ))}
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default Jarvis;
