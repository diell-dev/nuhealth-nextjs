'use client';

import { useEffect } from 'react';

export default function WeightLossStatsBand() {
  useEffect(() => {
    // Stat counter animation will be handled by GSAP script
    // Just initialize the data attributes
  }, []);

  return (
    <section id="stats-band" className="bg-chocolate py-20 lg:py-24 relative noise-overlay">
      <div className="nh-container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          <div className="reveal text-center group">
            <p
              className="stat-number text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#E0D5C9] to-[#D8BDA3] bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105"
              data-target="12000"
              data-suffix="k+"
              data-format="k"
            >
              12k+
            </p>
            <div className="w-8 h-0.5 bg-gradient-to-r from-[#AB795A] to-[#D8BDA3] mx-auto mt-3 mb-2 rounded-full opacity-40"></div>
            <p className="text-sm text-white/50 mt-2 uppercase tracking-widest">Patients Treated</p>
          </div>

          <div className="reveal reveal-d1 text-center group">
            <p
              className="stat-number text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#E0D5C9] to-[#D8BDA3] bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105"
              data-target="96"
              data-suffix="%"
            >
              96%
            </p>
            <div className="w-8 h-0.5 bg-gradient-to-r from-[#AB795A] to-[#D8BDA3] mx-auto mt-3 mb-2 rounded-full opacity-40"></div>
            <p className="text-sm text-white/50 mt-2 uppercase tracking-widest">Satisfaction Rate</p>
          </div>

          <div className="reveal reveal-d2 text-center group">
            <p
              className="stat-number text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#E0D5C9] to-[#D8BDA3] bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105"
              data-target="47"
              data-suffix=" lbs"
            >
              47 lbs
            </p>
            <div className="w-8 h-0.5 bg-gradient-to-r from-[#AB795A] to-[#D8BDA3] mx-auto mt-3 mb-2 rounded-full opacity-40"></div>
            <p className="text-sm text-white/50 mt-2 uppercase tracking-widest">Top Result</p>
          </div>

          <div className="reveal reveal-d3 text-center group">
            <p
              className="stat-number text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#E0D5C9] to-[#D8BDA3] bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105"
              data-target="50"
              data-suffix="+"
            >
              50+
            </p>
            <div className="w-8 h-0.5 bg-gradient-to-r from-[#AB795A] to-[#D8BDA3] mx-auto mt-3 mb-2 rounded-full opacity-40"></div>
            <p className="text-sm text-white/50 mt-2 uppercase tracking-widest">Board-Certified Providers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
