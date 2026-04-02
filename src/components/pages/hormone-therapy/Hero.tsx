"use client";

import { useState } from "react";
import Image from "next/image";
import HormoneTherapyHeroGL from "./HormoneTherapyHeroGL";

export default function HormoneTherapyHero() {
  const [symptoms, setSymptoms] = useState(
    Array(6).fill(false)
  );
  const checkedCount = symptoms.filter(Boolean).length;

  const handleCheckboxChange = (index: number) => {
    const newSymptoms = [...symptoms];
    newSymptoms[index] = !newSymptoms[index];
    setSymptoms(newSymptoms);
  };

  const symptomsList = [
    "Constant fatigue and low energy",
    "Brain fog and difficulty concentrating",
    "Loss of libido and sexual function",
    "Difficulty building or maintaining muscle",
    "Weight gain, especially around the middle",
    "Mood changes or irritability",
  ];

  return (
    <section
      id="assessment"
      className="relative min-h-screen bg-gradient-to-br from-cream to-latte/30 overflow-hidden pt-20 lg:pt-32"
    >
      {/* Three.js wave background */}
      <HormoneTherapyHeroGL />
      <div className="relative z-10 nh-container py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Headline & Symptom Checker */}
          <div className="reveal">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight text-chocolate">
              It's not just aging. <em className="text-caramel italic">It's biology.</em>
            </h1>
            <p className="text-xl text-chocolate/80 mb-8 leading-relaxed">
              A medically supervised hormone optimization program for men experiencing
              the real effects of declining testosterone.
            </p>

            <div className="mb-10">
              <h3 className="font-serif text-lg font-semibold mb-6 text-chocolate">
                Do these sound familiar?
              </h3>
              <div className="space-y-4">
                {symptomsList.map((symptom, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="checkbox-custom"
                      checked={symptoms[index]}
                      onChange={() => handleCheckboxChange(index)}
                    />
                    <span className="text-sm text-chocolate">{symptom}</span>
                  </label>
                ))}
              </div>

              {checkedCount >= 3 && (
                <div className="mt-6 p-4 bg-caramel/10 border border-caramel/30 rounded-lg">
                  <p className="text-sm text-chocolate font-medium">
                    <span className="text-caramel font-bold">✓ You're not alone.</span>{" "}
                    This pattern is common in men with low testosterone. We can help.
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-caramel text-white rounded-lg font-semibold hover:bg-chocolate transition-colors shadow-lg">
                Start Your Free Assessment
              </button>
              <button className="px-8 py-3 border-2 border-caramel text-caramel rounded-lg font-semibold hover:bg-caramel/5 transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>

          {/* Right: Lifestyle Image */}
          <div className="reveal hidden md:block relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1552028564-98aa8de34236?w=600&h=700&fit=crop"
              alt="Active man in 40s feeling energized"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-chocolate/20 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
