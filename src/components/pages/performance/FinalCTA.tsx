export default function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-olive to-chocolate text-cream relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay"></div>
      <div className="nh-container relative z-10 text-center reveal">
        <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 max-w-3xl mx-auto">
          Ready to Optimize Your Biology?
        </h2>
        <p className="text-xl text-cream/90 mb-10 max-w-2xl mx-auto">
          Start with a comprehensive assessment. Our providers will design a protocol
          personalized to your labs, goals, and life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-sage text-olive px-10 py-4 rounded-full font-bold text-lg hover:opacity-90 transition">
            Schedule Your Assessment
          </button>
          <button className="border-2 border-cream text-cream px-10 py-4 rounded-full font-bold text-lg hover:bg-cream/10 transition">
            Questions? Talk to a Provider
          </button>
        </div>
        <p className="text-sm text-cream/70 mt-8">
          First consultation includes baseline labs and personalized protocol
          recommendation. No obligation.
        </p>
      </div>
    </section>
  );
}
