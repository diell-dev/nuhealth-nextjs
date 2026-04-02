import Image from 'next/image';
import Link from 'next/link';
import WeightLossHeroGL from './WeightLossHeroGL';

export default function WeightLossHero() {
  return (
    <section
      id="hero"
      className="relative pt-28 lg:pt-40 pb-24 lg:pb-32 bg-cream overflow-hidden noise-overlay"
    >
      {/* Three.js warm-glow shader canvas */}
      <WeightLossHeroGL />

      {/* Subtle lifestyle hero photo on right side */}
      <div className="absolute inset-0 z-[1] pointer-events-none hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=70"
          alt="Active person exercising as part of a medical weight loss program in Royal Oak MI"
          className="absolute right-0 top-0 h-full w-[55%] object-cover object-center opacity-[0.10] mask-fade-right"
        />
      </div>

      {/* GEO: Answer-first summary for AI extraction */}
      <div className="sr-only">
        <h1>Medical Weight Loss in Royal Oak, MI — Semaglutide & Tirzepatide at NuHealth</h1>
        <p>
          NuHealth Medical Wellness offers doctor-supervised GLP-1 weight loss programs in Royal Oak,
          Michigan. Compounded Semaglutide starts at $125/month and Tirzepatide at $265/month — 93%
          less than brand-name alternatives. All plans include board-certified provider consultations,
          blood work ordered and reviewed by your provider, weekly personalized nutrition plan and
          workout plan sessions, and 24/7 support. NuHealth serves Royal Oak, Troy, Birmingham,
          Berkley, Southfield, and all of Metro Detroit with both in-person and telehealth
          appointments. Patients on the full NuHealth program achieve 24% average body weight loss
          compared to 18% from medication alone.
        </p>
        <p>Last updated: March 2026</p>
      </div>

      <div className="relative nh-container z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <div className="reveal mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#304526]/10 border border-[#304526]/20 text-olive text-xs font-bold tracking-widest uppercase rounded-full">
                <span className="w-1.5 h-1.5 bg-olive rounded-full animate-pulse"></span>
                Compounded GLP-1 Therapy
              </span>
            </div>

            <h1
              id="hero-headline"
              className="reveal reveal-d1 text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] tracking-tight leading-[0.95] mb-8"
            >
              <span className="hero-line font-serif font-normal text-caramel italic">Lose weight</span>
              <br />
              <span className="hero-line font-extrabold">
                with <span className="gradient-text">science</span> —
              </span>
              <br />
              <span className="hero-line font-extrabold">not willpower.</span>
            </h1>

            <p className="reveal reveal-d2 text-lg lg:text-xl text-caramel max-w-lg mb-10 leading-relaxed">
              Board-certified providers in Royal Oak, MI. FDA-compliant medication. In-person & telehealth.
            </p>

            <div className="reveal reveal-d3 flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/weight-loss#consultation"
                className="group bg-olive text-cream rounded-full px-8 py-4 font-semibold text-center hover:bg-[#263a1c] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/10 flex items-center justify-center gap-2"
              >
                Get Started — It's Free
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
                  <use href="#icon-arrow-right" />
                </svg>
              </Link>
              <Link
                href="#pricing"
                className="border-2 border-latte text-chocolate rounded-full px-8 py-4 font-semibold text-center hover:border-chocolate hover:text-chocolate transition-all duration-300"
              >
                See Pricing
              </Link>
            </div>

            <div className="reveal reveal-d4 flex items-center gap-5">
              <div className="flex -space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face"
                  alt="Patient"
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=face"
                  alt="Patient"
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=face"
                  alt="Patient"
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&crop=face"
                  alt="Patient"
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-chocolate">2,847 patients</p>
                <p className="text-xs text-caramel">started this month</p>
              </div>
            </div>
          </div>

          {/* Right: product card with person photo */}
          <div className="reveal reveal-d2 relative">
            {/* Background glow behind card */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#304526]/20 to-[#AB795A]/20 rounded-[2rem] blur-2xl scale-95 pointer-events-none"></div>
            <div className="relative bg-gradient-to-br from-[#304526] via-[#3d5a30] to-[#4a6b3a] rounded-[2rem] text-white overflow-hidden card-shine">
              {/* Person photo */}
              <div className="relative h-64 lg:h-72 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=70&fit=crop&crop=face"
                  alt="Confident NuHealth weight loss patient after GLP-1 treatment"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#304526] via-[#304526]/40 to-transparent"></div>
                <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-xs font-bold px-4 py-1.5 rounded-full border border-white/10">
                  Most Popular
                </span>
              </div>

              {/* Card content overlaid below photo */}
              <div className="relative z-10 px-8 lg:px-10 pb-8 lg:pb-10 pt-6 flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold font-serif">Semaglutide</h3>
                <p className="text-[#E0D5C9]/70 text-sm mt-1">GLP-1 Receptor Agonist</p>
                <div className="flex items-baseline gap-1 mt-4">
                  <p className="text-5xl font-extrabold">$125</p>
                  <span className="text-lg text-[#E0D5C9]/70 font-normal">/mo</span>
                </div>
                <Link
                  href="/weight-loss#consultation"
                  className="mt-6 w-full bg-white text-olive font-bold rounded-full px-8 py-3.5 text-center hover:bg-cream transition-all duration-300 hover:shadow-lg hover:shadow-white/20 hover:-translate-y-0.5"
                >
                  Get Started
                </Link>
                <p className="text-[#E0D5C9]/40 text-xs mt-3">No credit card required</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
