import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-16">
        {/* Left Column */}
        <div className="text-center lg:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Your
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Trusted Digital{" "}
            </span>
            Partner
          </h2>
          <p className="text-muted-foreground text-xl">
            With over two decades of experience, we deliver innovative,
            high-performing<br/> websites and applications that drive results.
          </p>
        </div>

        {/* Right Column - Buttons */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-6 w-full lg:w-auto">
          <a rel="noreferrer noopener" target="_blank"href="https://calendly.com/jarvis-highplainsmedia"><Button className="w-full md:w-auto">Schedule a Call</Button></a>
          <a rel="noreferrer noopener" href="#contact">
            <Button variant="outline" className="w-full md:w-auto">
                Send a Message
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
