import Link from 'next/link'

export default function PricingSummary() {
  return (
    <section className="bg-olive py-12 lg:py-16 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-sage/10 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="nh-container relative z-10">
        <div className="reveal flex flex-col lg:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-sage/70 mb-2 block">
              All-In Pricing
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-cream">
              Starting at <span className="text-sage">$90</span> Sildenafil / <span className="text-sage">$100</span>{' '}
              Tadalafil
            </h2>
            <p className="text-cream/70 mt-2">
              Plus $50 consultation fee (one-time). Includes medication, consultation, and shipping. No hidden fees.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/sexual-health#consultation"
              className="bg-sage text-chocolate font-bold rounded-full px-8 py-4 hover:bg-[#7aa3b8] transition-all duration-300 text-center hover:shadow-lg hover:shadow-sage/20"
            >
              Start Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
