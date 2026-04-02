export default function PersonasSection() {
  const personas = [
    {
      emoji: "💼",
      title: "The Busy Professional",
      age: 42,
      description:
        "Mid-level executive, 42, who used to crush workouts but now struggles with afternoon energy crashes. Brain fog at 3 PM is killing productivity. Libido has tanked. Just wants to feel sharp again without a complicated regimen.",
      painPoints: [
        "No time for complex health protocols",
        "Needs flexibility for travel",
        "Wants proven, straightforward treatment",
      ],
      delay: "0s",
    },
    {
      emoji: "👨‍👧‍👦",
      title: "The Active Dad",
      age: 48,
      description:
        "Fitness-focused dad, 48, who still works out 4–5 days a week but can't build muscle like he used to. Weight creeping up around the middle despite effort. Mood swings affecting family. Wants to be the energetic dad his kids remember.",
      painPoints: [
        "Frustration with fitness plateau",
        "Concerned about fertility preservation",
        "Wants sustainable, natural-feeling results",
      ],
      delay: "0.1s",
    },
    {
      emoji: "🏃",
      title: "The Health-Conscious Over-50",
      age: 54,
      description:
        "Retired or semi-retired, 54, who takes health seriously. Eats well, sleeps fine, but feels depleted. Knows his testosterone is declining. Wants to age optimally with vitality and strength, backed by science.",
      painPoints: [
        "Fear of dependency or side effects",
        "Wants evidence-based, safe approach",
        "Concerned about long-term health",
      ],
      delay: "0.2s",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-chocolate text-cream relative overflow-hidden">
      <div className="absolute -top-20 -left-40 w-[500px] h-[500px] bg-caramel/8 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-sage/8 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="nh-container max-w-6xl relative z-10">
        <div className="reveal text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-cream mb-4">
            Is This You?
          </h2>
          <p className="text-lg text-cream/80 max-w-xl mx-auto">
            Three common profiles we work with every day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((persona, idx) => (
            <div
              key={idx}
              className="reveal bg-white/[0.12] backdrop-blur-md rounded-2xl p-8 border border-cream/[0.15] hover:bg-white/[0.14] transition-shadow sheen"
              style={{ animationDelay: persona.delay }}
            >
              <div className="w-12 h-12 bg-caramel/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">{persona.emoji}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-cream mb-3">
                {persona.title}
              </h3>
              <p className="text-cream/80 mb-6 text-sm leading-relaxed">
                {persona.description}
              </p>
              <div className="space-y-2 text-sm text-cream/70 mb-8">
                <p className="font-semibold text-cream mb-2">Pain points:</p>
                <ul className="list-disc list-inside space-y-1">
                  {persona.painPoints.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              </div>
              <button className="w-full px-6 py-2 bg-caramel text-white rounded-lg font-semibold text-sm hover:bg-chocolate transition-colors">
                Start Assessment
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
