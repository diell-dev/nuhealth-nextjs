export default function PerformanceBottlenecks() {
  const bottlenecks = [
    {
      title: "Cellular Energy Decline",
      description:
        "NAD+ levels drop 50% by age 50, limiting mitochondrial ATP production and leaving you fatigued even after rest.",
      affects: "Affects: Energy, Endurance, Recovery",
      bgColor: "bg-olive",
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    },
    {
      title: "Oxidative Stress Load",
      description:
        "High mental, physical, and environmental stress depletes glutathione, your body's master antioxidant, accelerating cellular aging.",
      affects: "Affects: Immunity, Inflammation, Aging",
      bgColor: "bg-sage",
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z",
    },
    {
      title: "Growth Hormone Suppression",
      description:
        "Sleep fragmentation and chronic stress reduce GH secretion, compromising muscle, bone density, and tissue repair.",
      affects: "Affects: Muscle, Recovery, Sleep",
      bgColor: "bg-caramel",
      icon: "M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18 10 11.41l4 4 6.3-6.29L23 12v-6z",
    },
  ];

  return (
    <section className="py-24 bg-chocolate relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay"></div>
      <div className="nh-container relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4">
            Performance Bottlenecks
          </h2>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto">
            Even disciplined, health-conscious professionals hit biological limits. Here
            are the three critical gaps we address.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
          {bottlenecks.map((bottleneck, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl p-8 border-cream/20"
            >
              <div className="mb-6">
                <div className={`w-16 h-16 ${bottleneck.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <svg
                    className={`w-8 h-8 ${
                      index === 1 ? "text-olive" : "text-cream"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={bottleneck.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-cream mb-2">
                  {bottleneck.title}
                </h3>
              </div>
              <p className="text-cream/80 text-sm mb-4">{bottleneck.description}</p>
              <div className="pt-4 border-t border-cream/20">
                <p className="text-cream/60 text-xs uppercase tracking-widest">
                  {bottleneck.affects}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
