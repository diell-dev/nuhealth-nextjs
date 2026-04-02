import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Marcus",
      age: 46,
      location: "Royal Oak",
      role: "TRT Patient",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=70&fit=crop&crop=face",
      quote:
        "Within 6 weeks, I felt like myself again. Energy is back, my gym numbers are up, and the brain fog is gone. Best decision I've made for my health.",
      treatment: "TRT",
      color: "caramel",
      delay: "0s",
    },
    {
      name: "David",
      age: 51,
      location: "Telehealth",
      role: "TRT Patient",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&q=70&fit=crop&crop=face",
      quote:
        "I was hesitant about TRT. The provider explained everything clearly. Three months in — brain fog gone, thinking clearly for the first time in years.",
      treatment: "TRT",
      color: "sage",
      delay: "0.1s",
    },
    {
      name: "James",
      age: 44,
      location: "Royal Oak",
      role: "Enclomiphene Patient",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=70&fit=crop&crop=face",
      quote:
        "I chose Enclomiphene because I'm still planning kids. The team was knowledgeable and supportive. Energy and mood improved significantly.",
      treatment: "Enclomiphene",
      color: "olive",
      delay: "0.2s",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-chocolate text-cream relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay" style={{ pointerEvents: "none" }}></div>
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-sage/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-caramel/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="nh-container max-w-6xl relative z-10">
        <div className="reveal text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-sage mb-3 block">
            Patient Stories
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-cream mb-4">
            What Our Patients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="reveal group bg-white/[0.06] backdrop-blur-sm rounded-[1.5rem] border border-white/[0.08] overflow-hidden hover:bg-white/[0.10] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                animationDelay: testimonial.delay,
                boxShadow:
                  testimonial.color === "caramel"
                    ? "var(--shadow-caramel)"
                    : testimonial.color === "sage"
                      ? "var(--shadow-sage)"
                      : "var(--shadow-olive)",
              }}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name}, ${testimonial.role} at NuHealth`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate via-chocolate/40 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <p className="font-bold text-cream text-lg">
                    {testimonial.name}, {testimonial.age}
                  </p>
                  <p className="text-xs text-caramel">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-1 mb-3">
                  <span className="text-caramel text-sm">★★★★★</span>
                </div>
                <p className="text-cream/90 text-sm leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <span
                    className={`text-[10px] px-2 py-1 rounded-full font-semibold ${
                      testimonial.color === "caramel"
                        ? "bg-caramel/20 text-caramel"
                        : testimonial.color === "sage"
                          ? "bg-sage/20 text-sage"
                          : "bg-olive/30 text-cream/80"
                    }`}
                  >
                    {testimonial.treatment}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-cream/40 mt-10">
          Results vary. Testimonials from real NuHealth patients. Photos are representative.
        </p>
      </div>
    </section>
  );
}
