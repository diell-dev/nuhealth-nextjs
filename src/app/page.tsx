import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import TrustMarquee from '@/components/sections/TrustMarquee';
import HomeAnimations from '@/components/pages/home/HomeAnimations';
import HomeHeroGL from '@/components/pages/home/HomeHeroGL';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'NuHealth Medical Wellness | Doctor-Supervised Weight Loss & Performance',
  description:
    'NuHealth Medical Wellness offers doctor-supervised GLP-1 weight loss, performance optimization, hormone therapy, and sexual health programs. Telehealth & in-person in Michigan, Florida, Alabama, and Mississippi.',
};

const featuredServices = [
  {
    title: 'Weight Loss',
    tag: 'Most Popular',
    description: 'GLP-1 medications that actually work. Semaglutide from $125/mo. Doctor-supervised, results-driven.',
    href: '/weight-loss',
    gradient: 'from-[#304526] via-[#3d5a30] to-[#4a6b3a]',
    iconBg: 'bg-[#304526]',
    stats: '47 lbs avg lost',
    price: 'From $125/mo',
    featured: true,
  },
  {
    title: 'Performance',
    tag: 'Peak Optimization',
    description: 'NAD+, Sermorelin, Glutathione. Unlock cellular energy, sharper cognition, and peak physical output.',
    href: '/performance',
    gradient: 'from-indigo-900 via-indigo-800 to-indigo-700',
    iconBg: 'bg-indigo-900',
    stats: 'Cellular renewal',
    price: 'From $60/mo',
    featured: true,
  },
];

const otherServices = [
  {
    title: 'Hormone Therapy',
    description: 'TRT, Enclomiphene, DHEA. Restore balance, energy, and vitality.',
    href: '/hormone-therapy',
    gradient: 'from-amber-800 via-amber-700 to-amber-600',
    price: 'From $45/mo',
  },
  {
    title: 'Sexual Health',
    description: 'Sildenafil & Tadalafil. Discreet, effective, physician-prescribed.',
    href: '/sexual-health',
    gradient: 'from-rose-900 via-rose-800 to-rose-700',
    price: 'From $90/4 wks',
  },
];

const trustStats = [
  { value: '12', suffix: 'k+', label: 'Patients served', target: 12000, format: 'k' },
  { value: '96', suffix: '%', label: 'Satisfaction rate', target: 96 },
  { value: '4', suffix: '', label: 'States served', target: 4 },
  { value: '50', suffix: '+', label: 'Treatments offered', target: 50 },
];

const whyFeatures = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Board-Certified MDs',
    description: 'Every protocol reviewed and supervised by licensed physicians. Not nurses, not PAs — doctors.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: 'Delivered to Your Door',
    description: 'Medications shipped in discreet packaging with everything included. Needles, pads, instructions.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '93% Less Than Brand',
    description: 'Compounded GLP-1 medications from licensed 503B pharmacies. Same molecule, fraction of the cost.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: '24/7 Provider Access',
    description: 'Weekly check-ins, dose adjustments, and round-the-clock support. You are never on your own.',
  },
];

export default function HomePage() {
  return (
    <>
      <HomeAnimations />
      <HomeHeroGL />

      <main className="overflow-hidden">
        {/* ═══ HERO ═══ */}
        <section id="home-hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-cream via-[#ece3d8] to-[#d4c4b0]">
          <canvas
            id="home-hero-gl"
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
          />

          {/* Decorative gradient orbs */}
          <div className="absolute top-20 -left-32 w-96 h-96 bg-[#304526]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-20 -right-32 w-80 h-80 bg-sage/15 rounded-full blur-3xl pointer-events-none" />

          <div className="nh-container relative z-10 pt-28 pb-20 lg:pt-36 lg:pb-28">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
              {/* Left: Text */}
              <div className="lg:col-span-3 space-y-8">
                <div className="reveal">
                  <span className="inline-block text-xs font-semibold uppercase tracking-widest text-olive bg-olive/10 px-4 py-1.5 rounded-full">
                    Doctor-Supervised Wellness
                  </span>
                </div>

                <h1 id="hero-headline" className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-chocolate leading-[0.95]">
                  <span className="hero-line block">Your path to</span>
                  <span className="hero-line block">
                    real{' '}
                    <span className="gradient-text">wellness</span>
                  </span>
                  <span className="hero-line block text-latte">starts here.</span>
                </h1>

                <p className="text-lg lg:text-xl text-caramel max-w-lg leading-relaxed">
                  Medical-grade treatments for weight loss, performance, hormones, and more.
                  Prescribed by board-certified physicians. Delivered to your door.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/weight-loss#consultation"
                    className="cta-glow inline-flex items-center justify-center gap-2 bg-olive text-cream font-semibold rounded-full px-8 py-4 text-base transition-all duration-300 hover:bg-[#263a1c] hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Start Free Consultation
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="inline-flex items-center justify-center gap-2 bg-white/60 backdrop-blur-sm text-chocolate font-medium rounded-full px-8 py-4 text-base border border-latte/40 transition-all duration-300 hover:bg-white hover:shadow-lg"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    {siteConfig.phoneDisplay}
                  </a>
                </div>

                {/* Trust pills */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="reveal inline-flex items-center gap-1.5 text-xs font-medium text-caramel bg-white/50 backdrop-blur-sm rounded-full px-3 py-1.5 border border-latte/20">
                    <svg className="w-3.5 h-3.5 text-olive" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    LegitScript Certified
                  </span>
                  <span className="reveal inline-flex items-center gap-1.5 text-xs font-medium text-caramel bg-white/50 backdrop-blur-sm rounded-full px-3 py-1.5 border border-latte/20">
                    <svg className="w-3.5 h-3.5 text-olive" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    HIPAA Compliant
                  </span>
                  <span className="reveal inline-flex items-center gap-1.5 text-xs font-medium text-caramel bg-white/50 backdrop-blur-sm rounded-full px-3 py-1.5 border border-latte/20">
                    <svg className="w-3.5 h-3.5 text-olive" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    503B Pharmacy
                  </span>
                </div>
              </div>

              {/* Right: Featured service preview cards */}
              <div className="reveal lg:col-span-2 space-y-4">
                {featuredServices.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className={`group block relative overflow-hidden rounded-3xl bg-gradient-to-br ${s.gradient} p-7 text-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:brightness-110`}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                    {s.tag && (
                      <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-white/70 mb-2">
                        {s.tag}
                      </span>
                    )}
                    <h3 className="text-2xl font-bold">{s.title}</h3>
                    <p className="text-sm text-white/70 mt-2 max-w-[280px] leading-relaxed">{s.description}</p>
                    <div className="flex items-center justify-between mt-5">
                      <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">{s.price}</span>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-white group-hover:gap-2 transition-all duration-300">
                        Learn more
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ TRUST MARQUEE ═══ */}
        <TrustMarquee />

        {/* ═══ STATS BAND ═══ */}
        <section id="home-stats" className="bg-chocolate py-14 lg:py-16">
          <div className="nh-container">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {trustStats.map((stat) => (
                <div key={stat.label} className="reveal text-center">
                  <span
                    className="stat-number text-4xl lg:text-5xl font-extrabold text-cream"
                    data-target={stat.target}
                    data-suffix={stat.suffix}
                    data-format={stat.format || ''}
                  >
                    0{stat.suffix}
                  </span>
                  <p className="text-xs lg:text-sm text-cream/50 uppercase tracking-widest mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SERVICES ═══ */}
        <section id="services" className="bg-cream py-20 lg:py-28">
          <div className="nh-container">
            <div className="reveal text-center mb-14 lg:mb-20">
              <span className="text-xs font-semibold uppercase tracking-widest text-olive">Our Programs</span>
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-chocolate mt-3">
                Treatments that{' '}
                <em className="font-serif font-normal not-italic text-caramel italic">transform.</em>
              </h2>
              <p className="text-lg text-caramel mt-4 max-w-2xl mx-auto">
                From weight loss to peak performance — every program is physician-designed and backed by science.
              </p>
            </div>

            {/* Featured: Weight Loss + Performance — large cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {featuredServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className={`service-card group relative overflow-hidden rounded-3xl bg-gradient-to-br ${s.gradient} p-8 lg:p-10 text-white min-h-[280px] lg:min-h-[340px] flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:brightness-110 card-shine`}
                >
                  <div className="absolute top-0 right-0 w-60 h-60 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
                  <div>
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-white/60 mb-3">{s.tag}</span>
                    <h3 className="text-3xl lg:text-4xl font-bold">{s.title}</h3>
                    <p className="text-base text-white/70 mt-3 max-w-sm leading-relaxed">{s.description}</p>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <div>
                      <span className="block text-xl font-bold">{s.price}</span>
                      <span className="text-xs text-white/50">{s.stats}</span>
                    </div>
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm group-hover:bg-white/25 transition-all duration-300">
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Other services — smaller cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className={`service-card group relative overflow-hidden rounded-2xl bg-gradient-to-br ${s.gradient} p-7 text-white flex items-center justify-between transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:brightness-110 card-shine`}
                >
                  <div>
                    <h3 className="text-xl font-bold">{s.title}</h3>
                    <p className="text-sm text-white/60 mt-1.5 max-w-[280px]">{s.description}</p>
                    <span className="inline-block text-xs font-semibold text-white/50 mt-3">{s.price}</span>
                  </div>
                  <span className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/15 group-hover:bg-white/25 transition-all duration-300 ml-4">
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ WHY NUHEALTH ═══ */}
        <section id="why-nuhealth" className="bg-[#F0F4EF] py-20 lg:py-28">
          <div className="nh-container">
            <div className="reveal text-center mb-14 lg:mb-20">
              <span className="text-xs font-semibold uppercase tracking-widest text-olive">The NuHealth Difference</span>
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-chocolate mt-3">
                Why <em className="font-serif font-normal not-italic text-caramel italic">12,000+</em> patients trust us.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {whyFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="reveal bg-white rounded-2xl p-7 lg:p-8 border border-latte/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-olive/10 text-olive flex items-center justify-center mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-chocolate mb-2">{feature.title}</h3>
                  <p className="text-sm text-caramel leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ HOW IT WORKS (Simplified) ═══ */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="nh-container">
            <div className="reveal text-center mb-14 lg:mb-20">
              <span className="text-xs font-semibold uppercase tracking-widest text-olive">Simple Process</span>
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-chocolate mt-3">
                Start in <em className="font-serif font-normal not-italic text-caramel italic">15 minutes.</em>
              </h2>
              <p className="text-lg text-caramel mt-4 max-w-xl mx-auto">
                From consultation to your doorstep — we handle the complexity so you don&apos;t have to.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { step: '01', title: 'Free Consultation', desc: '15-minute chat with a board-certified provider. No credit card, no commitment.' },
                { step: '02', title: 'Custom Protocol', desc: 'Labs, medical history, body composition. Your treatment plan is built for you alone.' },
                { step: '03', title: 'Delivered & Supported', desc: 'Medication ships to your door. Weekly check-ins, nutrition plans, and 24/7 support.' },
              ].map((item) => (
                <div key={item.step} className="reveal text-center">
                  <span className="inline-block text-5xl lg:text-6xl font-extrabold text-latte/60 mb-4">{item.step}</span>
                  <h3 className="text-lg font-bold text-chocolate mb-2">{item.title}</h3>
                  <p className="text-sm text-caramel leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SERVICE AREA ═══ */}
        <section className="bg-chocolate py-16 lg:py-20">
          <div className="nh-container">
            <div className="reveal flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-sage">Where We Serve</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-cream mt-2">
                  Telehealth across{' '}
                  <span className="text-sage">4 states.</span>
                </h2>
                <p className="text-cream/50 mt-3 max-w-md">
                  In-person consultations available in Michigan. Telehealth everywhere else.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {siteConfig.serviceStates.map((state) => (
                  <span key={state} className="px-5 py-2.5 rounded-full border border-cream/20 text-cream/80 text-sm font-medium">
                    {state}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA ═══ */}
        <section id="home-cta" className="bg-gradient-to-br from-[#304526] via-[#3d5a30] to-[#2a3d20] py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sage/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cream/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

          <div className="nh-container relative z-10 text-center">
            <div className="reveal">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-sage/70 mb-4">Ready?</span>
              <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-cream leading-tight">
                Your best self is<br />
                <span className="text-sage">one call away.</span>
              </h2>
              <p className="text-lg text-cream/60 mt-6 max-w-xl mx-auto">
                Free consultation. No credit card. No commitment. Just a conversation with a doctor who cares.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <Link
                  href="/weight-loss#consultation"
                  className="cta-glow inline-flex items-center justify-center gap-2 bg-cream text-olive font-bold rounded-full px-10 py-4 text-lg transition-all duration-300 hover:bg-white hover:shadow-2xl hover:-translate-y-1"
                >
                  Start Free Consultation
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-cream font-medium rounded-full px-10 py-4 text-lg border border-cream/20 transition-all duration-300 hover:bg-white/20"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
