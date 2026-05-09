import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg mx-auto md:mx-0"
          />
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                About{" "}
              </span>
              High Plains Media
            </h2>
            <p className="text-xl font-semibold text-foreground">
              Built for real-world business operations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We design and build custom software, web applications, and AI-powered
              systems that businesses actually run on day to day.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most businesses don't need more marketing—they need better systems.
              We focus on replacing spreadsheets, manual work, and disconnected tools
              with software that makes operations simpler and more reliable.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We stay close to the problem: who is using it, what they're trying to do,
              and what needs to work without friction in the real world.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're not a marketing agency with a development arm—we're a
              technical partner that builds the systems behind how your business runs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              If your work happens in the field, in the office, or across a team
              coordinating real operations, we translate that into software your
              business can depend on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
