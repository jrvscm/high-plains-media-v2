import { Link } from "react-router-dom";

const LAST_UPDATED = "March 21, 2026";

export const Privacy = () => {
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
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>
        </header>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Who we are</h2>
            <p>
              This Privacy Policy describes how{" "}
              <strong className="text-foreground">Suite Sleeps LLC</strong> (“we,” “us,” or
              “our”), operating the customer-facing brand{" "}
              <strong className="text-foreground">High Plains Media</strong>, collects, uses,
              and shares information when you visit our website or contact us. We build
              custom websites, applications, and SaaS software for businesses.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Information we collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-foreground">Contact and inquiry data:</strong> name,
                email address, phone number, company name, and message content when you
                submit our contact form or email us.
              </li>
              <li>
                <strong className="text-foreground">Technical data:</strong> IP address,
                browser type, device type, and general usage data collected through cookies
                and similar technologies (see below).
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">How we use information</h2>
            <p>We use the information above to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to inquiries and provide our services</li>
              <li>Operate, secure, and improve our website</li>
              <li>Send transactional or service-related messages when appropriate</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              Communications and service providers
            </h2>
            <p>
              We may use trusted third-party services to host our site, send email, route
              SMS or other messages (for example, communications platforms such as Twilio when
              you opt in or when needed to deliver a service), and analyze site traffic.
              Those providers process data on our behalf under contractual safeguards and
              only as needed to perform their services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Cookies</h2>
            <p>
              We may use cookies and similar technologies to remember preferences and
              understand how visitors use our site. You can control cookies through your
              browser settings.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Retention</h2>
            <p>
              We retain personal information only as long as needed for the purposes above,
              unless a longer period is required by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Your choices</h2>
            <p>
              Depending on where you live, you may have rights to access, correct, or delete
              certain personal information, or to object to or restrict some processing.
              Contact us using the email below to make a request. We will respond in line
              with applicable law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Children</h2>
            <p>
              Our services are directed to businesses and adults. We do not knowingly
              collect personal information from children under 13.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Changes</h2>
            <p>
              We may update this Privacy Policy from time to time. We will post the revised
              policy on this page and update the “Last updated” date.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Contact</h2>
            <p>
              Suite Sleeps LLC (High Plains Media) — privacy questions:{" "}
              <a
                href="mailto:jarvis@highplainsmedia.com"
                className="text-primary font-medium hover:underline"
              >
                jarvis@highplainsmedia.com
              </a>
              . See also our{" "}
              <Link to="/terms" className="text-primary font-medium hover:underline">
                Terms of Service
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};
