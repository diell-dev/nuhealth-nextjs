"use client";

import { useState, useEffect } from "react";

export default function JourneySection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: 1,
      title: "Assessment & Consultation",
      description:
        "Complete a detailed symptom questionnaire and health history. Our licensed providers review your symptoms and discuss your goals via telehealth.",
      timeline: "30 minutes",
      format: "Telehealth available",
      gradient: "from-caramel to-caramel/80",
    },
    {
      number: 2,
      title: "Comprehensive Blood Work",
      description:
        "Targeted labs: Total Testosterone, Free Testosterone, Estradiol, SHBG, CBC, Metabolic Panel, and PSA. Draw at a local lab near you.",
      timeline: "1 week",
      format: "Cost: Included in your plan",
      gradient: "from-sage to-sage/80",
    },
    {
      number: 3,
      title: "Custom Protocol Design",
      description:
        "Based on your labs and symptoms, we design a personalized protocol — medication, dosing, injection technique, and lifestyle recommendations.",
      timeline: "2-3 days",
      format: "Includes: Follow-up consultation",
      gradient: "from-olive to-[#3d5a30]",
    },
    {
      number: 4,
      title: "Titration & Optimization",
      description:
        "Start therapy with regular check-ins every 2-4 weeks. We adjust dosing based on your response, labs, and how you feel.",
      timeline: "6-12 weeks",
      format: "Support: 24/7 provider access",
      gradient: "from-[#7a5a3a] to-chocolate",
    },
    {
      number: 5,
      title: "Ongoing Maintenance",
      description:
        "Once optimized, move to maintenance labs every 6-12 months and quarterly provider check-ins. Continuous support and monitoring for long-term health.",
      timeline: "Quarterly reviews",
      format: "Labs: As needed",
      gradient: "from-chocolate to-[#3a2010]",
    },
  ];

  // Simulate scroll-based step animation
  useEffect(() => {
    const handleScroll = () => {
      // In a real implementation, this would use Intersection Observer
      // For now, keep the component stateful and interactive
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="journey" className="bg-chocolate relative">
      <div className="journey-pinned min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay" style={{ pointerEvents: "none" }}></div>
        <div className="nh-container max-w-4xl relative z-10 w-full py-20">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-sage mb-3 block">
              Your Path
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-cream mb-4">
              Your Optimization Journey
            </h2>
            <p className="text-lg text-cream/60">5 steps. Explore each one.</p>
          </div>

          {/* Card display - shows active step */}
          <div className="journey-cards relative" style={{ height: "280px", marginBottom: "40px" }}>
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`journey-card absolute inset-0 rounded-2xl p-8 text-white shadow-2xl transition-all duration-500 ${
                  idx === activeStep
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
                style={{
                  background: `linear-gradient(to bottom right, ${step.gradient})`,
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-xl">
                    {step.number}
                  </div>
                  <h3 className="font-serif text-2xl font-bold">{step.title}</h3>
                </div>
                <p className="text-white/90 leading-relaxed">{step.description}</p>
                <p className="text-sm text-white/60 mt-4">
                  <strong>Timeline:</strong> {step.timeline} • <strong>Format:</strong>{" "}
                  {step.format}
                </p>
              </div>
            ))}
          </div>

          {/* Step indicator dots - clickable navigation */}
          <div className="flex justify-center gap-3 mb-8">
            {steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === activeStep
                    ? "bg-cream scale-125"
                    : "bg-cream/30 hover:bg-cream/50"
                }`}
                aria-label={`Go to step ${idx + 1}`}
              />
            ))}
          </div>
          <p className="text-center text-xs text-cream/30">
            Click dots to navigate steps
          </p>
        </div>
      </div>
    </section>
  );
}
