export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: '$50 Consultation',
      description: '15-minute confidential telehealth call with a board-certified provider.',
    },
    {
      number: '2',
      title: 'Review & Decide',
      description: 'Discuss options, get recommendations, ask any questions you have.',
    },
    {
      number: '3',
      title: 'Prescription Sent',
      description: 'If appropriate, your prescription is submitted the same day.',
    },
    {
      number: '4',
      title: 'Discreet Delivery',
      description: 'Medication arrives in unmarked packaging within 2-5 business days.',
    },
  ]

  return (
    <section id="how" className="bg-cream py-20 lg:py-28 relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="float-particle" style={{ top: '10%', left: '15%', animationDelay: '0s' }}></div>
        <div className="float-particle" style={{ top: '20%', left: '85%', animationDelay: '1.2s' }}></div>
        <div className="float-particle" style={{ top: '60%', left: '20%', animationDelay: '2.4s' }}></div>
        <div className="float-particle" style={{ top: '70%', left: '80%', animationDelay: '3.6s' }}></div>
        <div className="float-particle" style={{ top: '40%', left: '50%', animationDelay: '4.8s' }}></div>
      </div>

      <div className="nh-container relative z-10">
        <div className="reveal text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-chocolate mb-4">
            How it <em className="font-serif font-normal not-italic text-sage italic">works.</em>
          </h2>
          <p className="text-lg text-caramel max-w-2xl mx-auto">
            From consultation to confidence in days, not months.
          </p>
        </div>

        <div className="reveal max-w-5xl mx-auto">
          <div className="timeline-track flex justify-between">
            {steps.map((step) => (
              <div key={step.number} className="timeline-step w-1/4">
                <div className="timeline-step-content">
                  <div className="text-4xl font-bold text-sage mb-3">{step.number}</div>
                  <h3 className="text-xl font-bold text-chocolate mb-2">{step.title}</h3>
                  <p className="text-sm text-caramel leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
