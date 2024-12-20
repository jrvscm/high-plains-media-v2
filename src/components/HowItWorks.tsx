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
      "We learn what makes your business tick, uncover opportunities, and set the foundation for success",
  },
  {
    icon: <MedalIcon />,
    title: "Strategy & Design",
    description:
      "We build a plan and design a solution that’s tailored to your goals and resonates with your audience",
  },
  {
    icon: <PlaneIcon />,
    title: "Build & Optimize",
    description:
      "We create, refine, and perfect your solution to ensure it drives impactful results",
  },
  {
    icon: <GiftIcon />,
    title: "Launch & Scale",
    description:
      "We launch with impact and implement strategies to keep your business growing strong",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        You have direct support through the entire process
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
