export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-r from-olive via-[#1d3318] to-chocolate text-cream relative overflow-hidden noise-overlay">
      <div className="nh-container max-w-4xl text-center reveal">
        <h2 className="font-serif text-4xl font-bold mb-6">
          Your optimization starts with a <em className="text-caramel italic">conversation.</em>
        </h2>
        <p className="text-lg mb-10 leading-relaxed opacity-95">
          Schedule your $50 consultation today. We'll review your symptoms, answer your
          questions, and show you a clear path to optimization. No pressure, no hype—just
          personalized, evidence-based hormone care.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-sage text-chocolate rounded-lg font-semibold hover:bg-sage/90 transition-colors shadow-lg">
            Schedule Your Consultation
          </button>
          <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
            Call Now
          </button>
        </div>
      </div>
    </section>
  );
}
