import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface SolutionItem {
  title: string;
  description: string;
}

const solutions: SolutionItem[] = [
  {
    title: "Tournament platforms",
    description:
      "Registration, brackets, payments, and organizer admin in one system.",
  },
  {
    title: "AI assistants",
    description:
      "Context-aware helpers for staff or customers, grounded in your workflows.",
  },
  {
    title: "Dashboards",
    description: "KPIs and operational views your team actually checks.",
  },
  {
    title: "Booking systems",
    description:
      "Scheduling, capacity, reminders, and rules that match how you work.",
  },
  {
    title: "Membership portals",
    description:
      "Accounts, content, renewals, and self-service without the chaos.",
  },
  {
    title: "Automation systems",
    description: "Reliable pipelines that replace copy-paste between tools.",
  },
  {
    title: "Stripe integrations",
    description:
      "Subscriptions, one-off payments, and platform-style payouts done right.",
  },
  {
    title: "Admin tools",
    description:
      "Internal consoles for approvals, data fixes, and day-to-day ops.",
  },
  {
    title: "Reporting systems",
    description: "Exports, scheduled reports, and audit-friendly trails.",
  },
];

export const SolutionsWeBuild = () => {
  return (
    <section id="solutions" className="container py-24 sm:py-32">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Solutions{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            we build
          </span>
        </h2>
        <p className="text-muted-foreground text-xl mt-4">
          Production software for real operations—not slide decks.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map(({ title, description }) => (
          <Card key={title} className="bg-muted/30 border-muted">
            <CardHeader className="space-y-2">
              <CardTitle className="text-lg">{title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                {description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};
