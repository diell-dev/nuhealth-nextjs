import Link from 'next/link';

export default function WeightLossFinalCTA() {
  return (
    <section className="bg-gradient-to-br from-chocolate via-[#2A1E15] to-chocolate py-28 lg:py-36 relative overflow-hidden noise-overlay">
      {/* Gradient orbs */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-olive/8 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-20 right-1/4 w-80 h-80 bg-caramel/8 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Subtle lifestyle photo background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=70"
          alt="Active lifestyle through medical weight loss program at NuHealth Royal Oak"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="reveal">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold text-white leading-[0.95] tracking-tight">
            Your new body
            <br />
            is <em className="font-serif font-normal not-italic text-caramel italic">waiting.</em>
          </h2>
          <p className="text-lg lg:text-xl text-white/50 max-w-2xl mx-auto mt-8 mb-12 leading-relaxed">
            Start your free consultation today. No credit card. No commitment. Just honest assessment from board-certified providers.
          </p>
        </div>

        <div className="reveal reveal-d1 flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link
            href="/weight-loss#consultation"
            className="group bg-white text-chocolate font-bold rounded-full px-10 py-4 hover:bg-cream transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-white/10 flex items-center justify-center gap-2"
          >
            Start Free Consult
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <a
            href="tel:+18552000588"
            className="border-2 border-white/20 text-white font-semibold rounded-full px-10 py-4 backdrop-blur hover:bg-white/10 hover:border-white/30 transition-all duration-300"
          >
            Call (855) 200-0588
          </a>
        </div>

        <div className="reveal reveal-d2 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-white/30 text-sm">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            30-min consult
          </span>
          <span className="hidden sm:block w-1 h-1 bg-white/20 rounded-full"></span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            7 days a week
          </span>
          <span className="hidden sm:block w-1 h-1 bg-white/20 rounded-full"></span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            Board-certified
          </span>
        </div>
      </div>
    </section>
  );
}
