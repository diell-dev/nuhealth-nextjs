"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQAccordion({ items, title = "Frequently Asked Questions", subtitle }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="nh-container max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-chocolate text-center mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-caramel text-center mb-12 max-w-xl mx-auto">{subtitle}</p>
        )}
        <div className="space-y-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-latte overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-chocolate pr-4">{item.question}</span>
                <svg
                  className={`w-5 h-5 text-caramel shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-caramel leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
