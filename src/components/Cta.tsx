import { Button } from "./ui/button";

const CALENDLY_URL = "https://calendly.com/jarvis-highplainsmedia";

export const Cta = () => {
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-16">
        <div className="text-center lg:text-left space-y-6 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Tell us what's{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              broken, slow, or stuck in the 90s.
            </span>
          </h2>
          <p className="text-muted-foreground text-xl">
            In a short discovery call, we'll define the outcome you need, outline a rough
            scope, and see if we're the right fit.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:gap-6 w-full lg:w-auto shrink-0">
          <Button asChild className="w-full md:w-auto md:min-w-[220px]">
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer noopener">
              Schedule a discovery call
            </a>
          </Button>
          <Button asChild variant="outline" className="w-full md:w-auto md:min-w-[220px]">
            <a href="#contact">Email us a brief</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
