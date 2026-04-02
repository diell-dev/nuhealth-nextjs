import Link from 'next/link';

export default function WeightLossPricing() {
  const pricingCards = [
    {
      name: 'Tirzepatide',
      subtitle: 'Dual GLP-1 & GIP Agonist',
      price: 265,
      period: '/mo',
      metric: 'Average: 26% body weight loss',
      icon: '💊',
      features: [
        'Higher efficacy than GLP-1 alone',
        'Dual hormone activation',
        'Muscle preservation',
        'Weekly dose adjustments'
      ],
      isDark: true,
      isFeatured: false,
      ctaText: 'Get Started'
    },
    {
      name: 'Semaglutide',
      subtitle: 'GLP-1 Receptor Agonist',
      price: 125,
      period: '/mo',
      metric: 'Average: 20% body weight loss',
      icon: '💊',
      features: [
        'Once-weekly injection',
        'Proven FDA-approved efficacy',
        'Appetite suppression',
        'Sustained results'
      ],
      isDark: false,
      isFeatured: true,
      ctaText: 'Get Started'
    },
    {
      name: 'Lipo B/C',
      subtitle: 'Lipotropic Injections',
      price: 25,
      period: '/shot',
      metric: 'Energy & metabolism boost',
      icon: '⚡',
      features: [
        '3x energy boost',
        'Enhanced metabolism',
        'Weekly injections',
        'Pairs with any protocol'
      ],
      isDark: true,
      isFeatured: false,
      ctaText: 'Add to Plan'
    }
  ];

  return (
    <section
      id="pricing"
      className="bg-gradient-to-b from-[#304526] via-[#3d5a30] to-[#4a6b3a] py-20 lg:py-28 relative overflow-hidden noise-overlay"
    >
      {/* Background blurs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#304526]/10 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#304526]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="nh-container relative z-10">
        <div className="reveal mb-16 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cream/60 mb-3">
            Transparent Pricing
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-white">
            Simple, transparent <em className="font-serif font-normal not-italic text-[#E0D5C9]">pricing.</em>
          </h2>
          <p className="text-lg text-white/50 mt-4 max-w-xl mx-auto">
            All plans include consultations, blood work ordering and provider review, and nutrition and workout
            plan support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-5 items-start">
          {pricingCards.map((card, idx) => (
            <div
              key={idx}
              className={`reveal ${idx === 1 ? 'reveal-d2' : idx === 0 ? 'reveal-d1' : 'reveal-d3'} ${
                card.isFeatured ? 'bg-white md:scale-105 pricing-featured' : 'bg-white/[0.07] backdrop-blur-md'
              } rounded-[1.25rem] p-8 ${
                card.isFeatured
                  ? 'relative'
                  : 'border border-white/[0.12] hover:bg-white/[0.12] transition-all duration-500 hover:-translate-y-1'
              } card-shine`}
            >
              {card.isFeatured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#D8BDA3] text-chocolate text-xs font-bold px-5 py-1.5 rounded-full shadow-lg shadow-[#D8BDA3]/30">
                  Most Popular
                </span>
              )}

              <h3 className={`text-2xl font-bold font-serif ${card.isFeatured ? 'text-chocolate mt-2' : 'text-white'}`}>
                {card.name}
              </h3>
              <p className={`text-sm ${card.isFeatured ? 'text-caramel' : 'text-white/40'} mt-1`}>{card.subtitle}</p>

              <div className="my-6">
                <div className="flex items-baseline gap-1">
                  <p className={`text-5xl font-extrabold ${card.isFeatured ? 'text-chocolate' : 'text-white'}`}>
                    ${card.price}
                  </p>
                  <span className={`text-xl ${card.isFeatured ? 'text-latte' : 'text-white/40'} font-normal`}>
                    {card.period}
                  </span>
                </div>
                <p
                  className={`text-sm mt-2 flex items-center gap-1.5 ${
                    card.isFeatured ? 'text-caramel' : 'text-white/40'
                  }`}
                >
                  <svg className={`w-3.5 h-3.5 ${card.isFeatured ? 'text-olive' : 'text-[#E0D5C9]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  {card.metric}
                </p>
              </div>

              {/* Medication icon box */}
              <div className="h-52 flex items-center justify-center mb-6">
                <div
                  className={`w-28 h-44 rounded-2xl border flex flex-col items-center justify-center text-center p-4 shadow-lg ${
                    card.isFeatured
                      ? 'bg-gradient-to-b from-olive/20 to-olive/5 border-latte'
                      : 'bg-gradient-to-b from-white/20 to-white/5 border-white/15'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${
                      card.isFeatured ? 'bg-olive/10' : 'bg-white/15'
                    }`}
                  >
                    <svg
                      className={`w-5 h-5 ${card.isFeatured ? 'text-olive' : 'text-white/70'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <span className={`text-xs font-bold ${card.isFeatured ? 'text-chocolate' : 'text-white/80'}`}>
                    {card.name}
                  </span>
                  <span
                    className={`text-[10px] mt-1 ${
                      card.isFeatured ? 'text-caramel' : 'text-white/40'
                    }`}
                  >
                    {card.subtitle.split(' ')[0]}
                  </span>
                </div>
              </div>

              <Link
                href="/weight-loss#consultation"
                className={`block w-full text-center font-bold rounded-full py-3.5 transition-all duration-300 ${
                  card.isFeatured
                    ? 'bg-olive text-cream hover:bg-[#263a1c] hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5'
                    : 'bg-white text-olive hover:bg-cream hover:shadow-lg hover:shadow-white/10'
                }`}
              >
                {card.ctaText}
              </Link>

              <div
                className={`w-full h-px ${
                  card.isFeatured
                    ? 'bg-gradient-to-r from-transparent via-latte to-transparent'
                    : 'bg-gradient-to-r from-transparent via-white/10 to-transparent'
                } my-6`}
              ></div>

              <ul className={`space-y-3 text-sm ${card.isFeatured ? 'text-caramel' : 'text-white/60'}`}>
                {card.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <svg
                      className={`w-4 h-4 ${card.isFeatured ? 'text-olive' : 'text-[#E0D5C9]'} shrink-0`}
                    >
                      <use href="#icon-checkmark" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="reveal text-center text-white/35 text-sm mt-12 max-w-xl mx-auto">
          All plans include $50 one-time consultation, blood work ordered and reviewed by your provider — typically
          covered by insurance, nutrition and workout plan support, and 24/7 access to your provider. No hidden fees.
          Cancel anytime.
        </p>
      </div>
    </section>
  );
}
