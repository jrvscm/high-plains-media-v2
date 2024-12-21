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
    answer: `We provide tailored solutions, so the cost depends on your project\'s size, complexity, and specific requirements. Schedule a discovery call to receive a detailed quote`,
    value: "item-1",
  },
  {
    question: "How long will my project take?",
    answer:
      `Timelines vary based on the scope of the project. On average, simple websites take 1-3 weeks, while complex projects or applications can take 6-12 weeks or more.`,
    value: "item-2",
  },
  {
    question:
      `What\n's included in a custom website package?`,
    answer:
      `Our custom website packages typically include responsive design, SEO optimization, a CMS for easy updates, and integration of essential tools like contact forms and analytics.`,
    value: "item-3",
  },
  {
    question: `Can you redesign my existing website?`,
    answer: `Yes! We can give your website a fresh, modern look, improve its functionality, and ensure it's optimized for SEO and user experience.`,
    value: "item-4",
  },
  {
    question:
      `Do you provide ongoing support after the website is launched?`,
    answer:
      `Yes, we offer maintenance packages that include updates and additional support as needed.`,
    value: "item-5",
  },
  {
    question:
      `What platforms or technologies do you work with?`,
    answer:
      `We specialize in modern frameworks and CMS platforms like React, Next.js, and Shopify, among others.`,
    value: "item-6",
  },
  {
    question:
      `Do you build e-commerce websites?`,
    answer:
      `Absolutely! We specialize in creating user-friendly e-commerce stores with payment integrations, product pages, and inventory management.`,
    value: "item-7",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

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
