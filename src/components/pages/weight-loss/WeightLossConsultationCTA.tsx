import Link from 'next/link';

export default function WeightLossConsultationCTA() {
  return (
    <section
      id="consultation"
      className="bg-gradient-to-br from-olive via-[#3d5a30] to-[#304526] py-20 lg:py-28 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-cream/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="nh-container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cream/60 mb-6">
            Ready to start?
          </span>
          <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Your first consultation is <em className="font-serif font-normal not-italic text-[#E0D5C9]">free.</em>
          </h2>
          <p className="text-lg text-white/60 mb-8 leading-relaxed">
            No credit card. No commitment. Just a 15-minute call with one of our board-certified providers to
            understand your goals, medical history, and eligibility. Most people feel confident about their plan by
            the end of the call.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="https://calendly.com/nuhealth"
              className="inline-flex items-center justify-center bg-cream text-olive rounded-full px-10 py-5 font-bold text-lg hover:bg-[#E0D5C9] transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1"
            >
              Schedule Free Consult
              <svg className="w-5 h-5 ml-2 transition-transform duration-300">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                  fill="none"
                  stroke="currentColor"
                />
              </svg>
            </Link>
            <a
              href="tel:+1-855-200-0588"
              className="inline-flex items-center justify-center border-2 border-cream text-cream rounded-full px-10 py-5 font-bold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Call 1-855-200-0588
            </a>
          </div>

          <p className="text-sm text-white/40">
            Available Monday–Friday 9am–9pm ET | Saturday 10am–6pm ET
          </p>
        </div>

        {/* Trust signals */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-3xl font-extrabold text-white mb-2">2.9k+</p>
            <p className="text-sm text-white/60">Consultations this month</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-extrabold text-white mb-2">96%</p>
            <p className="text-sm text-white/60">Convert to patients</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-extrabold text-white mb-2">15 min</p>
            <p className="text-sm text-white/60">Average call time</p>
          </div>
        </div>
      </div>
    </section>
  );
}
