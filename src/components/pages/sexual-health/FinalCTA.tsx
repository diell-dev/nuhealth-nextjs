export default function FinalCTA() {
  return (
    <section className="relative bg-gradient-to-r from-chocolate via-[#4a2e1a] to-chocolate py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="float-particle" style={{ top: '15%', left: '10%', animationDelay: '0s' }}></div>
        <div className="float-particle" style={{ top: '25%', right: '10%', animationDelay: '1.5s' }}></div>
        <div className="float-particle" style={{ bottom: '20%', left: '15%', animationDelay: '3s' }}></div>
      </div>

      <div className="nh-container relative z-10 text-center">
        <div className="reveal max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-cream mb-6">
            Ready to take the <em className="font-serif font-normal not-italic text-sage italic">first step?</em>
          </h2>
          <p className="text-xl text-cream/90 mb-10 leading-relaxed">
            A $50 consultation with a licensed provider (one-time fee). If treatment is right for you, your prescription
            ships the same day — discreetly.
          </p>
          <button className="inline-block bg-sage text-chocolate font-bold text-lg rounded-full px-10 py-5 hover:bg-[#7aa3b8] transition-all duration-300 hover:shadow-lg hover:shadow-sage/30 hover:-translate-y-1 cta-glow">
            Start Your Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
