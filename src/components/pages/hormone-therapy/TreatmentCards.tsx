"use client";

import { useState } from "react";

export default function TreatmentCards() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const treatments = [
    {
      title: "Testosterone Replacement Therapy (TRT)",
      subtitle: "Most effective for clinically low testosterone",
      details: [
        {
          label: "What it is:",
          text: "Bioidentical testosterone delivered via injection, gel, or patch. Designed to restore testosterone to optimal levels.",
        },
        {
          label: "Best for:",
          text: "Men with Total Testosterone below 350 ng/dL and clinical symptoms.",
        },
        {
          label: "Timeline:",
          text: "Results typically noticed in 3–6 weeks. Full benefits by 12 weeks.",
        },
        {
          label: "Monitoring:",
          text: "Regular blood work and check-ins ensure safety and optimization.",
        },
      ],
      pricing: {
        amount: "$45/month",
        note: "(3-month starter kit)",
        consultation: "$50",
        description: "Includes medication, provider support, and follow-up labs.",
      },
      safety:
        "All therapies are medically supervised. Common side effects are mild and manageable. We monitor for contraindications.",
      colorClass: "bg-white/[0.08]",
      hoverClass: "hover:bg-white/[0.14]",
      index: 0,
    },
    {
      title: "Enclomiphene",
      subtitle: "Preserve natural testosterone production",
      details: [
        {
          label: "What it is:",
          text: "A selective estrogen receptor modulator (SERM) that stimulates the body's natural testosterone production rather than replacing it.",
        },
        {
          label: "Best for:",
          text: "Men with mild-to-moderate low testosterone who want to maintain fertility or natural production.",
        },
        {
          label: "Timeline:",
          text: "Results in 4–8 weeks. May take 12+ weeks for full effect.",
        },
        {
          label: "Key benefit:",
          text: "Preserves testicular function and allows for natural fertility.",
        },
      ],
      pricing: {
        amount: "$115/month",
        note: "(3-month starter kit)",
        consultation: "$50",
        description: "Includes medication, provider support, and follow-up labs.",
      },
      safety:
        "Medically supervised with regular monitoring. Milder side effect profile than TRT in many men.",
      colorClass: "bg-white/[0.08]",
      hoverClass: "hover:bg-white/[0.14]",
      index: 1,
    },
    {
      title: "DHEA Optimization",
      subtitle: "Support and enhance your body's natural pathways",
      details: [
        {
          label: "What it is:",
          text: "A precursor hormone that supports testosterone production, energy, and metabolic health. Also declines with age.",
        },
        {
          label: "Best for:",
          text: "Men with low DHEA levels or those seeking additional support for energy, mood, and recovery.",
        },
        {
          label: "Often combined:",
          text: "Works synergistically with TRT or Enclomiphene for enhanced results.",
        },
        {
          label: "Benefits:",
          text: "Energy, mood, lean mass, and immune support.",
        },
      ],
      pricing: {
        amount: "$60/month",
        note: "(3-month starter kit)",
        consultation: "$50",
        description: "Includes medication, provider support, and follow-up labs.",
      },
      safety:
        "Medically supervised with monitoring. Generally well-tolerated with minimal side effects.",
      colorClass: "bg-white/[0.08]",
      hoverClass: "hover:bg-white/[0.14]",
      index: 2,
    },
  ];

  return (
    <section id="treatments" className="py-20 lg:py-28 bg-olive text-cream relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-sage/8 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-caramel/8 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="nh-container max-w-4xl relative z-10">
        <div className="reveal text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-cream mb-4">
            Three Evidence-Based Treatment Paths
          </h2>
          <p className="text-lg text-cream/70">
            We personalize based on your labs, symptoms, and goals. All are medically
            supervised.
          </p>
        </div>

        <div className="space-y-4">
          {treatments.map((treatment, idx) => (
            <div
              key={idx}
              className={`reveal ${treatment.colorClass} backdrop-blur-md rounded-2xl border border-cream/[0.1] overflow-hidden transition-all duration-500 hover:-translate-y-1 card-shine`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <button
                onClick={() =>
                  setActiveAccordion(activeAccordion === treatment.index ? -1 : treatment.index)
                }
                className="w-full px-8 py-6 flex items-center justify-between bg-white/[0.05] hover:bg-white/[0.1]"
              >
                <div className="text-left">
                  <h3 className="font-serif text-xl font-bold text-cream">
                    {treatment.title}
                  </h3>
                  <p className="text-sm text-cream/60 mt-1">{treatment.subtitle}</p>
                </div>
                <svg
                  className={`w-6 h-6 text-cream/60 transition-transform ${
                    activeAccordion === treatment.index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
              <div
                className={`accordion-content px-8 pb-6 ${
                  activeAccordion === treatment.index ? "active" : ""
                }`}
              >
                <div className="space-y-4 text-cream/80">
                  {treatment.details.map((detail, dIdx) => (
                    <p key={dIdx}>
                      <span className="font-semibold text-cream">{detail.label}</span>{" "}
                      {detail.text}
                    </p>
                  ))}
                  <div className="bg-cream/10 border border-cream/20 rounded-lg p-4 mt-4">
                    <p className="text-sm font-medium text-cream">
                      <span className="text-caramel">{treatment.pricing.amount}</span>{" "}
                      {treatment.pricing.note} + <span className="text-caramel">$50</span>{" "}
                      one-time consultation fee. {treatment.pricing.description}
                    </p>
                  </div>
                  <p className="text-xs text-cream/50 mt-4">
                    <strong>Safety:</strong> {treatment.safety}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 p-6 bg-cream/10 border border-cream/20 rounded-2xl text-center">
          <p className="text-sm text-cream/80">
            <strong>Can't decide?</strong> Schedule a $50 consultation. Our providers will
            review your symptoms and labs to recommend the best path for you.
          </p>
        </div>
      </div>
    </section>
  );
}
