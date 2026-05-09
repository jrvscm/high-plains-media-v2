import { Radar } from "lucide-react";

interface CapabilityProps {
  name: string;
}

const capabilities: CapabilityProps[] = [
  { name: "Custom applications" },
  { name: "AI & automation" },
  { name: "SaaS platforms" },
  { name: "Payment integrations" },
  { name: "Operational tooling" },
];

export const Sponsors = () => {
  return (
    <section id="capabilities-strip" className="container pt-12 pb-8 sm:pb-12">
      <h2 className="text-center text-sm font-semibold uppercase tracking-wide mb-6 text-muted-foreground">
        What we build
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 md:gap-x-10">
        {capabilities.map(({ name }) => (
          <div
            key={name}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <Radar className="w-4 h-4 text-primary shrink-0" aria-hidden />
            <span className="text-base md:text-lg font-semibold text-foreground">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
