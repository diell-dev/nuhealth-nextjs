export default function WeightLossHowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Free Consultation',
      description: 'Chat with a board-certified provider. No credit card required. 15-minute assessment.',
      colorFrom: '#304526',
      colorTo: '#3d5a30'
    },
    {
      number: 2,
      title: 'Custom Protocol',
      description: 'Labs. Medical history. Body composition. Your protocol is one-of-one.',
      colorFrom: '#AB795A',
      colorTo: '#8a6148'
    },
    {
      number: 3,
      title: 'Delivered to You',
      description: 'Medications shipped in discreet packaging. Needles, alcohol pads, all included.',
      colorFrom: '#643923',
      colorTo: '#4d2b1a'
    },
    {
      number: 4,
      title: 'Ongoing Support',
      description: 'Weekly check-ins. Nutritionist guidance. Dose adjustments. 24/7 support line.',
      colorFrom: '#8FB7CD',
      colorTo: '#7aa3b8'
    }
  ];

  return (
    <section id="how" className="bg-[#F0F4EF] relative overflow-hidden">
      {/* Three.js scroll-reactive canvas background would go here */}
      <canvas
        id="how-gl"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Body silhouette canvases — inside pin-wrap so they stay in view during scroll */}
      <canvas
        id="silhouette-left"
        className="hidden lg:block absolute pointer-events-none"
        style={{ zIndex: 1, left: 0, top: 0, width: '20vw', height: '100%' }}
      />
      <canvas
        id="silhouette-right"
        className="hidden lg:block absolute pointer-events-none"
        style={{ zIndex: 1, right: 0, top: 0, width: '20vw', height: '100%' }}
      />

      <div className="how-pin-wrap py-20 lg:py-28 relative z-10">
        <div className="nh-container">
          {/* Header */}
          <div className="how-header text-center mb-16 lg:mb-20">
            <span className="text-xs font-semibold uppercase tracking-widest text-olive">Your Journey</span>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-chocolate mt-3">
              Better health,
              <br />
              <span className="text-latte">one step at a time.</span>
            </h2>
            <p className="text-caramel mt-4 max-w-xl mx-auto">
              Four simple steps to your custom weight loss protocol.
            </p>
          </div>

          {/* Step counter indicator (mobile only) */}
          <div className="how-counter flex lg:hidden items-center justify-center gap-2 mb-10">
            <span className="how-counter-current text-sm font-bold text-olive">1</span>
            <span className="text-sm text-latte">/</span>
            <span className="text-sm text-latte">4</span>
            <div className="ml-3 flex gap-1.5">
              <div className="how-dot w-2 h-2 rounded-full bg-olive transition-colors"></div>
              <div className="how-dot w-2 h-2 rounded-full bg-latte transition-colors"></div>
              <div className="how-dot w-2 h-2 rounded-full bg-latte transition-colors"></div>
              <div className="how-dot w-2 h-2 rounded-full bg-latte transition-colors"></div>
            </div>
          </div>

          {/* Steps area */}
          <div className="relative max-w-4xl mx-auto">
            {/* Progress bar (desktop only) */}
            <div className="how-progress hidden lg:block absolute top-8 left-[8%] right-[8%] h-0.5 bg-latte/60 z-0">
              <div
                className="how-progress-fill h-full bg-gradient-to-r from-[#304526] via-[#AB795A] via-[#643923] to-[#8FB7CD] origin-left"
                style={{ transform: 'scaleX(0)' }}
              ></div>
            </div>

            {/* Mobile: stacked cards that cross-fade in place */}
            {/* Desktop: 4-col grid with progressive reveal */}
            <div className="how-steps-grid grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-6">
              {steps.map((step) => (
                <div key={step.number} className="how-step text-center relative" data-step={step.number}>
                  <div
                    className="step-circle w-16 h-16 mx-auto bg-gradient-to-br rounded-full flex items-center justify-center mb-5 shadow-lg relative z-10 ring-4 ring-cream"
                    style={{
                      backgroundImage: `linear-gradient(to bottom right, ${step.colorFrom}, ${step.colorTo})`
                    }}
                  >
                    <span className="text-2xl font-extrabold text-white">{step.number}</span>
                  </div>
                  <div className="step-content">
                    <h3 className="text-lg font-bold text-chocolate mb-2">{step.title}</h3>
                    <p className="text-sm text-caramel max-w-[220px] mx-auto">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
