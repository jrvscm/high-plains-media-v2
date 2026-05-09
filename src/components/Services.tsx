import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { AppWindow, Bot, Boxes, CreditCard, Globe } from "lucide-react";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceBlock {
  title: string;
  description: string;
  icon: JSX.Element;
}

const CALENDLY_URL = "https://calendly.com/jarvis-highplainsmedia";

const serviceList: ServiceBlock[] = [
  {
    title: "Custom Business Software",
    description:
      "We build simple tools for your business and your customers to use online—like job tracking, customer portals, scheduling systems, and dashboards—so you're not living in spreadsheets, notebooks, or constant phone calls.",
    icon: <AppWindow className="w-8 h-8 text-primary" aria-hidden />,
  },
  {
    title: "AI & Everyday Automation",
    description:
      "We set up practical AI agents that save time in real operations—like answering common questions, sending reminders, organizing requests, and handling repetitive admin tasks your team deals with every day.",
    icon: <Bot className="w-8 h-8 text-primary" aria-hidden />,
  },
  {
    title: "Subscription & Membership Systems",
    description:
      "If your business needs customers to sign up and pay regularly, we build that system for you—memberships, recurring services, online accounts, and everything needed to manage ongoing customers smoothly.",
    icon: <Boxes className="w-8 h-8 text-primary" aria-hidden />,
  },
  {
    title: "Online Payments & Billing",
    description:
      "We make it easy for customers to pay you—online payments, invoices, deposits, and subscriptions. Everything is set up cleanly so money flows into your business without extra hassle or manual work.",
    icon: <CreditCard className="w-8 h-8 text-primary" aria-hidden />,
  },
  {
    title: "Websites That Build Trust",
    description:
      "A clear, professional website that explains what you do and makes it easy for customers to contact or book you. Designed to look good on phones and give people confidence in your business right away.",
    icon: <Globe className="w-8 h-8 text-primary" aria-hidden />,
  },
];

export const Services = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-12 lg:gap-16 place-items-start">
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              What We Build
            </span>
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-10 leading-relaxed">
            We help businesses move from manual, messy systems to simple online tools
            that actually run the business day-to-day. If you're not sure what you need
            yet, that's normal—we figure it out together.
          </p>

          <div className="flex flex-col gap-6">
            {serviceList.map(({ icon, title, description }) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-2 rounded-2xl shrink-0">
                    {icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{title}</CardTitle>
                    <CardDescription className="text-base mt-2 leading-relaxed">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <p className="text-muted-foreground text-sm mt-8">
            Not sure where to start?{" "}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              Book a discovery call
            </a>
            .
          </p>
        </div>

        <div className="w-full flex justify-center lg:sticky lg:top-24">
          <img
            src={cubeLeg}
            className="w-full max-w-[520px] object-contain"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
