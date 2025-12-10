"use client";

import { Accordion } from "@/components/ui";

const faqItems = [
  {
    question: "Do I need a Google API key?",
    answer: "No. We handle all the translation infrastructure — you just add your Google Business ID.",
  },
  {
    question: "Will this slow down my site?",
    answer: "No. LingoReview is lightweight and optimized for performance.",
  },
  {
    question: "Does it work with my page builder?",
    answer: "Yes. Full compatibility with Elementor, WPBakery, Divi, and most popular builders.",
  },
  {
    question: "What if I need more translations than my plan allows?",
    answer: "Upgrade anytime. No penalties, no lost data.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Monthly plans cancel anytime. Annual plans get a discount — billed yearly.",
  },
];

export default function FAQ() {
  return (
    <section className="relative bg-[#FAFAFA] py-24">
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="mt-12">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
