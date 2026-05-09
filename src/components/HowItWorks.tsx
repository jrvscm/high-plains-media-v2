import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MapIcon />,
    title: "Discovery",
    description:
      "We nail the problem, users, constraints, and success criteria—before writing code.",
  },
  {
    icon: <MedalIcon />,
    title: "Architecture & design",
    description:
      "Data model, integrations, permissions, and UX that match how you actually work.",
  },
  {
    icon: <PlaneIcon />,
    title: "Build & integrate",
    description:
      "Iterative delivery with staging, webhooks, and observability—not a big-bang launch.",
  },
  {
    icon: <GiftIcon />,
    title: "Launch & harden",
    description:
      "Production cutover, documentation, handoff, and follow-up when you need changes.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        How we{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          work
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Direct access to the people building your system—end to end.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center text-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              {description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
