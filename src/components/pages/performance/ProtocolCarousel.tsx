export default function ProtocolCarousel() {
  const protocols = [
    {
      badge: "ANTIOXIDANT",
      title: "Glutathione IV Protocol",
      subtitle: "The Master Antioxidant",
      benefit: "Reduces oxidative stress & inflammation",
      dosing: "1,000–2,000 mg IV, 1x/week",
      pricing: "$60/mo (600mg) · $120/mo (1200mg)",
      consultation: "50",
      note: "Administered under medical supervision. Protocol personalized to your biology.",
      buttonBg: "bg-olive",
      buttonText: "text-sage",
      bgGradient: "from-sage to-sage/80",
      bgBorder: "border-sage/30",
      cardBg: "sage",
    },
    {
      badge: "ENERGY",
      title: "NAD+ Infusion Protocol",
      subtitle: "Cellular Energy Currency",
      benefit: "Restores mitochondrial power & endurance",
      dosing: "500–1,000 mg IV, 1x/week",
      pricing: "$200/month",
      consultation: "3-Month",
      consultationSubtext: "preferred",
      note: "Administered by licensed providers. Evidence-based dosing protocol.",
      buttonBg: "bg-cream",
      buttonText: "text-olive",
      bgGradient: "from-olive to-olive/80",
      bgBorder: "border-olive/30",
      textColor: "text-cream",
      cardBg: "olive",
    },
    {
      badge: "GROWTH",
      title: "Sermorelin Peptide Protocol",
      subtitle: "Growth Hormone Optimization",
      benefit: "Supports muscle, bone, and sleep quality",
      dosing: "0.1–0.2 mg SQ daily",
      delivery: "Daily subcutaneous injection",
      pricing: "150",
      pricingSubtext: "/ month",
      note: "Required labs included — contact us with specific questions about lab panels. Medically supervised. Dosing adjusted by your provider based on labs.",
      buttonBg: "bg-olive",
      buttonText: "text-cream",
      bgGradient: "from-caramel to-caramel/80",
      bgBorder: "border-caramel/30",
      textColor: "text-cream",
      cardBg: "caramel",
    },
  ];

  return (
    <section id="protocols" className="py-24 lg:py-28 bg-cream relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-olive/8 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-sage/8 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="nh-container mb-16">
        <div className="text-center reveal">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-olive mb-4">
            Three Optimization Protocols
          </h2>
          <p className="text-lg text-caramel max-w-2xl mx-auto">
            Each designed to address a specific bottleneck. Medically supervised.
            Evidence-based. Personalized to your biology.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto carousel-scroll px-4 md:px-0">
        <div className="flex gap-6 md:gap-8 pb-4 md:justify-center">
          {protocols.map((protocol, index) => (
            <div
              key={index}
              className={`carousel-item card-shine rounded-2xl overflow-hidden flex-shrink-0 w-full md:w-96 bg-gradient-to-br ${protocol.bgGradient} border ${protocol.bgBorder} reveal`}
            >
              <div className="p-8 h-full flex flex-col">
                <div className="mb-6">
                  <div className="inline-block bg-olive text-cream px-4 py-2 rounded-full text-xs font-bold tracking-widest mb-4">
                    {protocol.badge}
                  </div>
                  <h3 className={`text-3xl font-serif font-bold ${protocol.textColor || 'text-olive'} mb-2`}>
                    {protocol.title}
                  </h3>
                  <p className={`${protocol.textColor ? 'text-cream/70' : 'text-olive/70'} text-sm`}>
                    {protocol.subtitle}
                  </p>
                </div>

                <div className="flex-1 space-y-4 mb-8">
                  <div>
                    <p className={`text-xs uppercase tracking-widest ${protocol.textColor ? 'text-cream/60' : 'text-olive/60'} mb-1`}>
                      Key Benefit
                    </p>
                    <p className={`font-semibold ${protocol.textColor || 'text-olive'}`}>
                      {protocol.benefit}
                    </p>
                  </div>
                  <div>
                    <p className={`text-xs uppercase tracking-widest ${protocol.textColor ? 'text-cream/60' : 'text-olive/60'} mb-1`}>
                      Dosing
                    </p>
                    <p className={`font-semibold ${protocol.textColor || 'text-olive'}`}>
                      {protocol.dosing}
                    </p>
                  </div>
                  {protocol.delivery && (
                    <div>
                      <p className={`text-xs uppercase tracking-widest ${protocol.textColor ? 'text-cream/60' : 'text-olive/60'} mb-1`}>
                        Delivery
                      </p>
                      <p className={`font-semibold ${protocol.textColor || 'text-olive'}`}>
                        {protocol.delivery}
                      </p>
                    </div>
                  )}
                  <div>
                    <p className={`text-xs uppercase tracking-widest ${protocol.textColor ? 'text-cream/60' : 'text-olive/60'} mb-1`}>
                      {protocol.consultation ? 'Consultation' : 'Pricing'}
                    </p>
                    {protocol.consultation && (
                      <p className={`text-2xl font-bold ${protocol.textColor || 'text-olive'}`}>
                        {protocol.consultation === '50' ? '$50' : protocol.consultation}
                        {protocol.consultationSubtext ? (
                          <span className={`text-sm font-normal ${protocol.textColor ? 'text-cream' : ''}`}>
                            {' '}
                            {protocol.consultationSubtext}
                          </span>
                        ) : (
                          <span className={`text-sm font-normal`}> one-time</span>
                        )}
                      </p>
                    )}
                    {protocol.pricing && !protocol.consultation && (
                      <p className={`text-2xl font-bold ${protocol.textColor || 'text-olive'}`}>
                        ${protocol.pricing}
                        <span className={`text-sm font-normal ${protocol.textColor ? 'text-cream' : ''}`}>
                          {protocol.pricingSubtext || '/month'}
                        </span>
                      </p>
                    )}
                    {protocol.pricing && protocol.consultation && (
                      <p className={`font-semibold ${protocol.textColor || 'text-olive'}`}>
                        {protocol.pricing}
                      </p>
                    )}
                  </div>
                </div>

                <p className={`text-[10px] ${protocol.textColor ? 'text-cream/50' : 'text-olive/50'} mb-4`}>
                  {protocol.note}
                </p>
                <button className={`w-full ${protocol.buttonBg} ${protocol.buttonText} px-6 py-3 rounded-full font-semibold hover:opacity-90 transition`}>
                  Add to Stack
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
