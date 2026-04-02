import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      title: "VP, FinTech",
      age: "Age 44",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=70&fit=crop&crop=face",
      rating: 5,
      quote:
        "I was running on fumes. Three months into NAD+ and Glutathione, my energy is stable, my sleep is deeper, and I actually have capacity again. This isn't placebo — my labs show it.",
      tags: ["NAD+", "Glutathione"],
      tagColors: ["bg-sage/20 text-sage", "bg-olive/20 text-cream/60"],
    },
    {
      name: "James R.",
      title: "Endurance Athlete",
      age: "Age 52",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&q=70&fit=crop&crop=face",
      rating: 5,
      quote:
        "Recovery was my bottleneck. Now with Sermorelin + NAD+, I'm training harder and recovering faster than I did in my 30s. My coach noticed the difference immediately.",
      tags: ["Sermorelin", "NAD+"],
      tagColors: ["bg-caramel/20 text-caramel", "bg-sage/20 text-sage"],
    },
    {
      name: "Michael T.",
      title: "Founder & CEO",
      age: "Age 49",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=70&fit=crop&crop=face",
      rating: 5,
      quote:
        "My board meetings are high-stress. Since starting the full protocol, my focus is sharper and I'm not depleted afterward. Clear competitive advantage.",
      tags: ["Full Stack", "3 Protocols"],
      tagColors: ["bg-sage/20 text-sage", "bg-olive/20 text-cream/60"],
    },
  ];

  return (
    <section className="py-24 lg:py-28 bg-chocolate text-cream relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay"></div>
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-sage/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-caramel/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="nh-container relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="text-xs font-semibold uppercase tracking-widest text-sage mb-3 block">
            Patient Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            What Our Patients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="reveal group bg-white/[0.06] backdrop-blur-sm rounded-[1.5rem] border border-white/[0.08] overflow-hidden hover:bg-white/[0.10] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sage/10"
            >
              {/* Patient photo */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name}, ${testimonial.title} and NuHealth patient`}
                  fill
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate via-chocolate/40 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <p className="font-bold text-cream text-lg">{testimonial.name}</p>
                  <p className="text-xs text-sage">
                    {testimonial.title} • {testimonial.age}
                  </p>
                </div>
              </div>
              {/* Content */}
              <div className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-sage text-sm">
                      &#9733;
                    </span>
                  ))}
                </div>
                <p className="text-cream/90 text-sm leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 flex-wrap">
                  {testimonial.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-[10px] ${testimonial.tagColors[i]} px-2 py-1 rounded-full font-semibold`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-cream/40 mt-12">
          Results vary by individual. These testimonials are from real NuHealth patients.
          Photos are representative.
        </p>
      </div>
    </section>
  );
}
