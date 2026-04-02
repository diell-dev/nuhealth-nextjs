export default function WhoThisIsFor() {
  const personas = [
    {
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z",
      title: "The Executive",
      description:
        "You manage complex decisions daily. Brain fog is a liability. You want sharper cognition, steadier energy through long days, and faster recovery from jet lag and stress.",
      benefits: [
        "Cognitive clarity under pressure",
        "Sustained energy (no 3pm crash)",
        "Sleep & jet lag recovery",
      ],
      bgColor: "bg-sage",
      accentColor: "text-sage",
    },
    {
      icon: "M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z",
      title: "The Athlete",
      description:
        "You push your body hard. Faster recovery means more training, less downtime. You want reduced inflammation, preserved muscle, and enhanced endurance at your age.",
      benefits: [
        "Faster post-workout recovery",
        "Reduced inflammation & soreness",
        "Muscle preservation & growth",
      ],
      bgColor: "bg-olive",
      accentColor: "text-olive",
    },
    {
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
      title: "The Founder",
      description:
        "You operate at the edge of burnout. Deep sleep quality is rare. You need resilience, sustained focus, and the ability to sleep despite stress and irregular schedules.",
      benefits: [
        "Peak performance under pressure",
        "Sleep quality (no pills)",
        "Stress resilience & recovery",
      ],
      bgColor: "bg-caramel",
      accentColor: "text-caramel",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-cream relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-olive/8 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-sage/8 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="nh-container">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-olive mb-4">
            Who This Is For
          </h2>
          <p className="text-lg text-caramel max-w-2xl mx-auto">
            If you're serious about performance, you'll recognize yourself here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border-2 border-latte reveal card-shine hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              style={{
                borderColor: {
                  sage: "#8FB7CD",
                  olive: "#304526",
                  caramel: "#AB795A",
                }[persona.bgColor.replace("bg-", "")],
              }}
            >
              <div className={`w-14 h-14 ${persona.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={persona.icon} />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-olive mb-3">
                {persona.title}
              </h3>
              <p className="text-chocolate/80 text-sm mb-4">{persona.description}</p>
              <ul className="space-y-2 text-sm text-caramel">
                {persona.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className={`${persona.accentColor} font-bold`}>✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 p-6 bg-olive/10 border border-olive/20 rounded-2xl text-center max-w-2xl mx-auto">
          <p className="text-sm text-chocolate">
            <strong className="text-olive">
              Available in-person in Royal Oak, MI
            </strong>{" "}
            or via telehealth across Michigan. NuHealth is the only provider offering
            medically supervised performance optimization with both local and virtual
            options.
          </p>
        </div>
      </div>
    </section>
  );
}
