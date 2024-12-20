import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                High Plains Media
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                We are "out of this world" developers and designers, creating engaging digital 
                experiences across the web. High Plains Media has cultivated a relentless pursuit 
                of excellence in digital transformation. We view clients as partners.
                Your success is our success, and we strive to build digital 
                solutions that elevate your brand and keep you ahead of the digital curve.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
