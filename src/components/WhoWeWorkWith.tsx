import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface AudienceItem {
  title: string;
  description: string;
}

const audiences: AudienceItem[] = [
  {
    title: "Service businesses",
    description:
      "Booking, dispatch, client portals, and ops tools that cut phone tag and rework.",
  },
  {
    title: "Startups",
    description:
      "MVPs and foundations you can extend without rewriting everything six months in.",
  },
  {
    title: "Nonprofits",
    description:
      "Clear workflows, donations and membership flows, and tools volunteers can use.",
  },
  {
    title: "Sports organizations",
    description:
      "Registration, rosters, payments, and organizer workflows that hold up on event day.",
  },
  {
    title: "Growing companies",
    description:
      "Custom tooling where spreadsheets and generic SaaS are the bottleneck.",
  },
  {
    title: "Industrial & Field Teams",
    description:
      "Simple systems for managing jobs, schedules, and customer work in the field.",
  },
];

export const WhoWeWorkWith = () => {
  return (
    <section id="clients" className="container py-24 sm:py-32">
      <div className="max-w-3xl mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Who we{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            work with
          </span>
        </h2>
        <p className="text-muted-foreground text-xl mt-4">
          Teams that need software to match how they operate.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {audiences.map(({ title, description }) => (
          <Card key={title}>
            <CardHeader>
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
