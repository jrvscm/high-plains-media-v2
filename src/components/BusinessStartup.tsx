import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Check } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/jarvis-highplainsmedia";

interface Pillar {
  title: string;
  items: string[];
}

const pillars: Pillar[] = [
  {
    title: "Website & Online Presence",
    items: [
      "Professional business website",
      "Mobile-friendly on all devices",
      "Easy customer contact forms",
      "Built to help customers find you online",
    ],
  },
  {
    title: "Business Setup & Essentials",
    items: [
      "Domain and website setup handled for you",
      "Professional business email",
      "Secure hosting and website protection",
      "Reliable setup built to grow with your business",
    ],
  },
  {
    title: "Payments & Customer Management",
    items: [
      "Online payments, invoices, and deposits",
      "Customer request and estimate forms",
      "Appointment and scheduling tools",
      "Simple systems to keep your business organized",
    ],
  },
  {
    title: "AI & Automation Tools",
    items: [
      "AI assistant for common customer questions",
      "Automatic customer replies and follow-up",
      "Smart scheduling and inquiry routing",
      "Automation that saves time on daily tasks",
    ],
  },
];

export const BusinessStartup = () => {
  return (
    <section id="startup" className="border-y bg-muted/40 py-24 sm:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 md:mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Digital business infrastructure
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Business Startup Package
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Launch the systems a modern business needs to look credible, get paid,
            and communicate with customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map(({ title, items }) => (
            <Card
              key={title}
              className="bg-card/80 border-muted-foreground/15 shadow-sm"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {items.map((line) => (
                    <li key={line} className="flex gap-3 text-sm leading-relaxed">
                      <Check
                        className="w-4 h-4 text-primary shrink-0 mt-0.5"
                        aria-hidden
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto text-center">
          <Button asChild className="w-full sm:w-auto min-w-[220px]">
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer noopener">
              Schedule a startup consult
            </a>
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto min-w-[220px]">
            <a href="#contact">Discuss your setup</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
