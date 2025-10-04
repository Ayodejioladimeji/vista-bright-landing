import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FAQs = () => {
  const loanFAQs = [
    {
      question: "Who can apply for a loan with Prospera Finance?",
      answer:
        "Any individual or business that meets our minimum requirements (valid ID, verifiable income, and proof of need) can apply. We offer solutions for SMEs, salary earners, asset buyers, and contractors.",
    },
    {
      question: "How long does loan approval take?",
      answer:
        "In most cases, approvals are processed within 24–48 hours, provided all documents are submitted.",
    },
    {
      question: "What documents do I need to apply?",
      answer:
        "Typically, you'll need: (1) A valid means of identification, (2) Proof of income (payslip, business statement, or contract), (3) Bank statement (for the last 3–6 months), and (4) Relevant supporting documents (e.g., LPO for contractors).",
    },
    {
      question: "How do I repay my loan?",
      answer:
        "Repayments can be made via direct bank transfer, standing order, or salary deduction (for payroll loans). We design repayment terms to match your cash flow.",
    },
  ];

  const investmentFAQs = [
    {
      question: "How safe are my investments?",
      answer:
        "Your investments are handled with the highest level of transparency and security. We only operate within structured, safe, and clearly defined financial models.",
    },
    {
      question: "What is the minimum amount I can invest?",
      answer:
        "The minimum investment amount depends on the plan you choose. We offer flexible tiers to accommodate both new and experienced investors.",
    },
    {
      question: "How often will I get returns?",
      answer:
        "Depending on your investment package, returns may be paid monthly, quarterly, or at maturity. This will always be clearly stated before you commit.",
    },
    {
      question: "Can I withdraw my investment before maturity?",
      answer:
        "Yes, but early withdrawal may attract certain conditions. Full details will be provided in your investment plan agreement.",
    },
  ];

  const generalFAQs = [
    {
      question: "Do you charge hidden fees?",
      answer:
        "No. At Prospera Finance, we are fully transparent. All charges and rates are clearly stated upfront.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach us via email, phone, or by filling out the contact form on our website. Our team is always ready to help.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="py-16 sm:py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="font-black text-4xl sm:text-5xl md:text-6xl text-primary-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/90 leading-relaxed">
              We've answered some of the most common questions to help you get started with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="animate-fade-in-up">
              <h2 className="font-black text-2xl sm:text-3xl mb-6 text-primary">Loans</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {loanFAQs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`loan-${index}`}
                    className="border border-border rounded-lg px-6 bg-card shadow-soft"
                  >
                    <AccordionTrigger className="text-left font-bold text-base sm:text-lg hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <h2 className="font-black text-2xl sm:text-3xl mb-6 text-secondary">Investments</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {investmentFAQs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`investment-${index}`}
                    className="border border-border rounded-lg px-6 bg-card shadow-soft"
                  >
                    <AccordionTrigger className="text-left font-bold text-base sm:text-lg hover:text-secondary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <h2 className="font-black text-2xl sm:text-3xl mb-6 text-foreground">General</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {generalFAQs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`general-${index}`}
                    className="border border-border rounded-lg px-6 bg-card shadow-soft"
                  >
                    <AccordionTrigger className="text-left font-bold text-base sm:text-lg hover:text-foreground">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <h3 className="font-black text-xl sm:text-2xl mb-4">Still have questions?</h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
              Contact us or speak directly with a Prospera Finance advisor today.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQs;
