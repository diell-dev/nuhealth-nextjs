export default function JourneySection() {
  const steps = [
    {
      number: 1,
      title: "Assessment",
      description:
        "30-minute telehealth consultation. We evaluate your performance goals, medical history, and current biomarkers.",
      bgColor: "from-sage to-sage/70",
      numberBg: "bg-white text-sage",
      hoverBg: "hover:shadow-sage/30",
    },
    {
      number: 2,
      title: "Labs & Biomarkers",
      description:
        "Baseline serum work, RBC glutathione, NAD+ levels, cortisol, HGH. We establish your performance baseline.",
      bgColor: "from-olive to-olive/70",
      numberBg: "bg-white text-olive",
      hoverBg: "hover:shadow-olive/30",
    },
    {
      number: 3,
      title: "Custom Protocol",
      description:
        "Based on your labs and goals, we personalize dosing, timing, and combinations. Medically supervised.",
      bgColor: "from-caramel to-caramel/70",
      numberBg: "bg-white text-caramel",
      hoverBg: "hover:shadow-caramel/30",
    },
    {
      number: 4,
      title: "Ongoing Optimization",
      description:
        "Monthly follow-up labs, provider check-ins, protocol adjustments. Progress measured, results tracked.",
      bgColor: "from-chocolate to-chocolate/70",
      numberBg: "bg-white text-chocolate",
      hoverBg: "hover:shadow-chocolate/30",
    },
  ];

  return (
    <section id="journey" className="py-24 lg:py-28 bg-cream relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-olive/8 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-sage/8 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="nh-container">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-olive mb-4">
            Your Optimization Journey
          </h2>
          <p className="text-lg text-caramel max-w-2xl mx-auto">
            Four integrated steps from assessment to sustained performance.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-sage via-olive to-caramel"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative reveal">
                <div
                  className={`bg-gradient-to-br ${step.bgColor} rounded-2xl p-8 mb-4 text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl ${step.hoverBg} hover:-translate-y-2 cursor-pointer group`}
                >
                  <div
                    className={`w-12 h-12 ${step.numberBg} rounded-full flex items-center justify-center font-bold text-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {step.number}
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-white/90">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
