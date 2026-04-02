export default function LabsSection() {
  const coreHormones = [
    {
      name: "Total Testosterone",
      description: "Measures total T in your bloodstream",
    },
    {
      name: "Free Testosterone",
      description: "Biologically active testosterone",
    },
    {
      name: "Estradiol (E2)",
      description: "Monitor aromatization and balance",
    },
    {
      name: "SHBG",
      description: "Sex hormone binding globulin",
    },
  ];

  const safetyTests = [
    {
      name: "Complete Blood Count (CBC)",
      description: "Red & white blood cells, hemoglobin",
    },
    {
      name: "Metabolic Panel",
      description: "Liver, kidney, glucose function",
    },
    {
      name: "PSA (Prostate-Specific Antigen)",
      description: "Baseline for prostate health monitoring",
    },
    {
      name: "Lipid Panel",
      description: "Cholesterol & cardiovascular markers",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-latte/30 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-sage/8 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-caramel/8 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="nh-container max-w-4xl relative z-10">
        <div className="reveal text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-chocolate mb-4">
            Lab Work Included
          </h2>
          <p className="text-lg text-chocolate/70">
            Comprehensive testing to understand your hormone profile and guide personalized
            treatment.
          </p>
        </div>

        <div className="reveal bg-white rounded-xl p-12 shadow-lg border border-caramel/10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif font-bold text-chocolate text-lg mb-6">
                Core Hormone Panel
              </h3>
              <div className="space-y-4">
                {coreHormones.map((test, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-sage font-bold text-lg mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-chocolate">{test.name}</p>
                      <p className="text-sm text-chocolate/60">{test.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-serif font-bold text-chocolate text-lg mb-6">
                Safety & Health Monitoring
              </h3>
              <div className="space-y-4">
                {safetyTests.map((test, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-sage font-bold text-lg mt-1">✓</span>
                    <div>
                      <p className="font-semibold text-chocolate">{test.name}</p>
                      <p className="text-sm text-chocolate/60">{test.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-caramel/5 border border-caramel/20 rounded-lg">
            <p className="text-sm text-chocolate">
              <strong>Why this matters:</strong> Comprehensive testing ensures we
              understand your full hormone picture and monitor for any health changes.
              Repeat labs track your progress and keep you safe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
