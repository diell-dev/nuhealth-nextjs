import Image from "next/image";
import HeroThreeBackground from "./HeroThreeBackground";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-olive hero-clip min-h-screen flex items-center">
      <div className="absolute inset-0 noise-overlay"></div>

      {/* Three.js Canvas Background */}
      <HeroThreeBackground />

      <div className="nh-container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[80vh] py-20">
        {/* Left: Headline & CTA */}
        <div className="reveal">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-cream leading-tight mb-6">
            Perform at the level your biology allows.
          </h1>
          <p className="text-lg text-cream/90 mb-8 max-w-lg leading-relaxed">
            A medically supervised optimization protocol for cognition, recovery, and
            sustained energy. Personalized to your biology, measured by results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-sage text-olive px-8 py-4 rounded-full font-semibold hover:opacity-90 transition">
              Start Your Assessment
            </button>
            <button className="border-2 border-cream text-cream px-8 py-4 rounded-full font-semibold hover:bg-cream/10 transition">
              Talk to a Provider
            </button>
          </div>
        </div>

        {/* Right: Data Viz Placeholder */}
        <div className="hidden md:block reveal">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-sage/20 to-caramel/20 rounded-[2rem] blur-2xl scale-95 pointer-events-none"></div>
            <div className="relative rounded-[2rem] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=70&fit=crop"
                alt="Professional athlete performing at peak capacity through NuHealth optimization protocol"
                width={800}
                height={420}
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive via-olive/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl text-cream text-xs font-mono border border-white/10">
                  NAD+ ↑ 47%
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl text-cream text-xs font-mono border border-white/10">
                  Energy ↑ 63%
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl text-cream text-xs font-mono border border-white/10">
                  Recovery ↓ 34%
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl text-cream text-xs font-mono border border-white/10">
                  Cognition ↑ 52%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
