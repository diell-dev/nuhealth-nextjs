export default function WeightLossScienceSection() {
  const cards = [
    {
      emoji: '🧬',
      badge: 'GLP-1',
      title: 'Glucagon-Like Peptide-1',
      content:
        'GLP-1 mimics a natural hormone that regulates blood sugar and appetite. It slows gastric emptying, making you feel fuller longer. Originally developed for type 2 diabetes, weight loss benefits were discovered in clinical trials — the landmark STEP 1 trial showed 14.9% average body weight reduction over 68 weeks.',
      source: 'FDA-approved since 2017 for weight loss',
      citation: 'Source: Wilding et al., NEJM 2021; DOI: 10.1056/NEJMoa2032183'
    },
    {
      emoji: '⚖️',
      badge: 'Theory',
      title: 'Set Point Theory',
      content:
        'Your body has a genetically-predetermined "set point" weight. Diets fail because your body fights back — metabolic adaptation reduces energy expenditure by up to 15%. GLP-1 medications work with your hypothalamus to reset this set point lower, making weight loss sustainable without constant willpower.',
      source: 'Why crash diets rebound',
      citation: 'Source: Rosenbaum & Leibel, Int J Obesity 2010; NIH PMID: 20921964'
    },
    {
      emoji: '📈',
      badge: 'Process',
      title: 'Titration Protocol',
      content:
        'We start low and go slow. Weekly dose increases allow your body to adapt and minimize side effects. This personalized titration approach — recommended by the Obesity Medicine Association — is why NuHealth patients stay on plan longer than average, with 87% adherence at 6 months.',
      source: 'Higher compliance, better results',
      citation: 'Source: Obesity Medicine Association Clinical Practice Statements, 2024'
    }
  ];

  const badgeColors: Record<string, { bg: string; text: string }> = {
    'GLP-1': { bg: '#304526', text: '#FFFFFF' },
    Theory: { bg: '#8FB7CD', text: '#FFFFFF' },
    Process: { bg: '#AB795A', text: '#FFFFFF' }
  };

  return (
    <section className="bg-chocolate py-20 lg:py-28 relative overflow-hidden noise-overlay">
      {/* Background blurs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-olive/8 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#8FB7CD]/8 rounded-full blur-[80px] pointer-events-none"></div>

      {/* Subtle provider portrait in background */}
      <div className="absolute right-0 top-0 h-full w-1/3 pointer-events-none hidden lg:block opacity-[0.06]">
        <img
          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=70"
          alt="Board-certified NuHealth physician providing GLP-1 weight loss consultation"
          className="h-full w-full object-cover object-top"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 40%, black 80%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 40%, black 80%, transparent)'
          }}
        />
      </div>

      <div className="nh-container relative z-10">
        <div className="reveal mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-3 block">
            How It Works
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-white">
            The <em className="font-serif font-normal not-italic text-caramel italic">science</em> behind it.
          </h2>
          <p className="text-lg text-white/40 mt-4">Understand how these medications work at a cellular level.</p>
          <p className="text-sm text-white/30 mt-3 max-w-2xl">
            GLP-1 receptor agonists like Semaglutide and Tirzepatide reduce appetite by mimicking natural gut
            hormones. Clinical trials demonstrate 14.9–22.5% body weight reduction. NuHealth offers these medications
            as compounded formulations starting at $297/month in Royal Oak, Michigan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, idx) => {
            const colors = badgeColors[card.badge];
            return (
              <div
                key={idx}
                className={`reveal ${idx === 0 ? 'reveal-d1' : idx === 1 ? 'reveal-d2' : 'reveal-d3'} bg-white/[0.07] backdrop-blur-md rounded-[1.25rem] p-8 border border-white/[0.08] hover:bg-white/[0.12] transition-all duration-500 hover:-translate-y-1 card-shine`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">{card.emoji}</span>
                  <span
                    className="px-3 py-1 text-xs font-bold rounded-full"
                    style={{ backgroundColor: `${colors.bg}44`, color: colors.text }}
                  >
                    {card.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-serif text-white mb-4">{card.title}</h3>
                <p className="text-sm text-white/60 mb-5">{card.content}</p>
                <div
                  className="rounded-xl p-3 border"
                  style={{
                    backgroundColor: `${colors.bg}10`,
                    borderColor: `${colors.bg}33`
                  }}
                >
                  <p className="text-xs text-cream/70 font-semibold">{card.source}</p>
                  <p className="text-[10px] text-white/30 mt-1">{card.citation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
