import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="ml-2 font-bold text-xl flex items-center space-x-2"
          >
            <picture className="block h-6 w-6 flex-shrink-0">
              <source
                srcSet="/high-plains-favicon-light.svg"
                media="(prefers-color-scheme: dark)"
              />
              <img
                className="h-full w-full object-contain"
                src="/high-plains-favicon-dark.svg"
                alt="High Plains Media Logo"
              />
            </picture>
            <span className="leading-none">High Plains Media</span>
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Connect</h3>
          <div>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://github.com/jrvscm"
              className="opacity-60 hover:opacity-100"
            >
              Github
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://www.linkedin.com/in/chris-jarvis-dev"
              className="opacity-60 hover:opacity-100"
            >
              LinkedIn
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://calendly.com/jarvis-highplainsmedia"
              className="opacity-60 hover:opacity-100"
            >
              Discovery call
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Services</h3>
          <div>
            <a href="#startup" className="opacity-60 hover:opacity-100">
              Business Startup Package
            </a>
          </div>
          <div>
            <a href="#solutions" className="opacity-60 hover:opacity-100">
              Solutions we build
            </a>
          </div>
          <div>
            <a href="#clients" className="opacity-60 hover:opacity-100">
              Who we work with
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Company</h3>
          <div>
            <a href="#about" className="opacity-60 hover:opacity-100">
              About
            </a>
          </div>
          <div>
            <a href="#faq" className="opacity-60 hover:opacity-100">
              FAQ
            </a>
          </div>
          <div>
            <a href="#contact" className="opacity-60 hover:opacity-100">
              Contact
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Legal</h3>
          <div>
            <Link to="/terms" className="opacity-60 hover:opacity-100">
              Terms of Service
            </Link>
          </div>
          <div>
            <Link to="/privacy" className="opacity-60 hover:opacity-100">
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center space-y-4 max-w-2xl mx-auto">
        <p className="text-muted-foreground text-sm leading-relaxed">
          We build modern systems that help businesses run, operate, and scale more
          efficiently.
        </p>
        <p className="text-muted-foreground text-sm">
          High Plains Media is a trade name of{" "}
          <span className="text-foreground font-medium">Suite Sleeps LLC</span>.
        </p>
        <h3 className="text-base font-normal">
          &copy; {new Date().getFullYear()} Suite Sleeps LLC. Site by{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/in/chris-jarvis-dev/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Chris Jarvis
          </a>
          .
        </h3>
      </section>
    </footer>
  );
};
