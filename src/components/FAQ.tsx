import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How much will my project cost?",
    answer:
      "Scope drives cost—integrations, AI, multi-tenancy, and compliance all matter. Book a discovery call and we'll give you a realistic range and what we'd validate first.",
    value: "item-1",
  },
  {
    question: "How long will my project take?",
    answer:
      "A focused internal tool might ship in weeks; a SaaS or tournament platform often spans multiple phases. We work in milestones so you see working software early.",
    value: "item-2",
  },
  {
    question: "Do you only build websites?",
    answer:
      "We build marketing sites when you need a credible front door, but our core work is custom applications, SaaS, automation, and Stripe-backed billing—not template brochure sites.",
    value: "item-3",
  },
  {
    question: "Can you take over or extend an existing product?",
    answer:
      "Often yes. We'll review the codebase, deployment story, and risks before committing—then propose a safe path to extend or stabilize.",
    value: "item-4",
  },
  {
    question: "What's included after launch?",
    answer:
      "We agree on handoff: docs, access, and runbooks. Many clients keep us on for iterations, incidents, or roadmap work—scoped month-to-month or by milestone.",
    value: "item-5",
  },
  {
    question: "What technologies do you use?",
    answer:
      "Typically React or Next.js on the front end, solid API design, PostgreSQL or similar where it fits, and Stripe for payments. We pick tools for maintainability and your constraints—not buzzwords.",
    value: "item-6",
  },
  {
    question: "Do you build AI features responsibly?",
    answer:
      "We scope data boundaries, human review where needed, and measurable outcomes. If AI isn't the right tool, we'll say so and suggest automation or a simpler workflow instead.",
    value: "item-7",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">{question}</AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#contact"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
