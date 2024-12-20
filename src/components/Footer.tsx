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
          <h3 className="font-bold text-lg">Follow Us</h3>
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
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Platforms</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Web
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Mobile
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Desktop
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>

          <div>
            <a
              rel="noreferrer noopener"
              href="#services"
              className="opacity-60 hover:opacity-100"
            >
              Services
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#faq"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Community</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#about"
              className="opacity-60 hover:opacity-100"
            >
              About
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 made by{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/in/chris-jarvis-dev/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Chris Jarvis
          </a>
        </h3>
      </section>
    </footer>
  );
};
