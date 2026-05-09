import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";

const CALENDLY_URL = "https://calendly.com/jarvis-highplainsmedia";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-start lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            Custom{" "}
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Websites
            </span>
            ,{" "}
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              SaaS
            </span>
            , and{" "}
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Applications
            </span>{" "}
            built for growth
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-11/12 mx-auto lg:mx-0 text-balance">
          We build modern systems that help businesses run, operate, and scale more
          efficiently.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row md:flex-wrap">
          <Button asChild className="w-full md:w-auto md:min-w-[200px]">
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer noopener">
              Book a discovery call
            </a>
          </Button>

          <Button asChild variant="outline" className="w-full md:w-auto md:min-w-[200px]">
            <a href="#services">View capabilities</a>
          </Button>
        </div>
      </div>

      <div className="z-10">
        <HeroCards />
      </div>

      <div className="shadow"></div>
    </section>
  );
};
