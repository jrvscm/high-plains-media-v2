import { Link } from "react-router-dom";

const LAST_UPDATED = "March 21, 2026";

export const Terms = () => {
  return (
    <main className="container py-16 md:py-24">
      <div className="max-w-3xl mx-auto space-y-10">
        <Link
          to="/"
          className="text-primary text-sm font-medium hover:underline inline-block"
        >
          ← Back to home
        </Link>

        <header className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
          <p className="text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>
        </header>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Who we are</h2>
            <p>
              These Terms of Service (“Terms”) govern your use of websites and services
              offered under the name <strong className="text-foreground">High Plains Media</strong>.
              High Plains Media is a trade name of{" "}
              <strong className="text-foreground">Suite Sleeps LLC</strong> (“we,” “us,” or
              “our”). By accessing or using our site or engaging our services, you agree to
              these Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Services</h2>
            <p>
              We design and build custom websites, web applications, integrations, and
              SaaS-style software for clients. Specific scope, deliverables, timelines, and
              fees are set out in a separate statement of work, proposal, or contract when
              you hire us.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Use of this website</h2>
            <p>
              You may use this site for lawful purposes only. You agree not to misuse the
              site, attempt unauthorized access to our systems, or interfere with other
              users’ access.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Intellectual property</h2>
            <p>
              Content on this site (text, graphics, logos, and design) is owned by Suite
              Sleeps LLC or its licensors unless otherwise noted. Rights to work product
              delivered under a client engagement are as defined in your agreement with us.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Disclaimer</h2>
            <p>
              This site and any information on it are provided “as is.” To the fullest
              extent permitted by law, we disclaim warranties not expressly stated in a
              written agreement with you.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Limitation of liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Suite Sleeps LLC and High
              Plains Media will not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising from your use of this site or
              services, except where liability cannot be excluded by law. Our total
              liability for claims relating to this site (absent a separate signed
              agreement) is limited to the amount you paid us in the twelve months before
              the claim, or one hundred U.S. dollars, whichever is greater.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Changes</h2>
            <p>
              We may update these Terms from time to time. The “Last updated” date above
              will change when we do. Continued use of the site after changes constitutes
              acceptance of the revised Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Contact</h2>
            <p>
              Questions about these Terms:{" "}
              <a
                href="mailto:jarvis@highplainsmedia.com"
                className="text-primary font-medium hover:underline"
              >
                jarvis@highplainsmedia.com
              </a>
              . Our{" "}
              <Link to="/privacy" className="text-primary font-medium hover:underline">
                Privacy Policy
              </Link>{" "}
              describes how we handle personal information.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};
