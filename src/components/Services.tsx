import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon, PlaneIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Websites & Applications",
    description: "We craft user-friendly and high-performing websites/applications that reflect your brand, engage your audience, and reach your goals.",
    icon: <ChartIcon />,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Our team builds scalable, conversion-driven e-commerce platforms that simplify shopping for your customers.",
    icon: <WalletIcon />,
  },
  {
    title: "Digital Marketing",
    description:
      "We create marketing funnels and automate repetitive tasks to grow your customer base.",
    icon: <MagnifierIcon />,
  },
  {
    title: "Integrations",
    description:
      "We connect your business tools, platforms, and systems into one ecosystem, saving you time and simplifying your workflow.",
    icon: <PlaneIcon />,
  },
];

export const Services = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Client-Centric{" "}
            </span>
            Services
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            If you don't see what you're looking for, shoot us a message. Chances are we can build what you need.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
