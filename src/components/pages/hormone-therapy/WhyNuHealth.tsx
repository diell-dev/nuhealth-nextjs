import Image from "next/image";

export default function WhyNuHealth() {
  const features = [
    {
      icon: "📅",
      title: "Licensed Medical Providers",
      description:
        "All treatment is overseen by licensed physicians and nurse practitioners specializing in men's hormone health. Not just a supplement service.",
      delay: "0s",
    },
    {
      icon: "✓",
      title: "Personalized Protocols",
      description:
        "No cookie-cutter approach. Your treatment is customized based on your labs, symptoms, age, goals, and medical history.",
      delay: "0.1s",
    },
    {
      icon: "⏱",
      title: "Ongoing Monitoring",
      description:
        "Regular follow-ups, labs, and adjustments ensure you stay optimized and safe. We're here for the long term.",
      delay: "0.2s",
    },
    {
      icon: "📊",
      title: "Comprehensive Labs",
      description:
        "Not just testosterone. We test hormones, cardiovascular markers, liver/kidney function, and prostate health. Full picture.",
      delay: "0.3s",
    },
    {
      icon: "📱",
      title: "Telehealth & Flexible",
      description:
        "Most consultations and follow-ups via secure video. Prescriptions and labs available in your area. Fits your schedule.",
      delay: "0.4s",
    },
    {
      icon: "🔬",
      title: "Evidence-Based",
      description:
        "Protocols rooted in peer-reviewed research. We stay current with the latest in hormone optimization science.",
      delay: "0.5s",
    },
  ];

  return (
    <section id="why" className="py-20 lg:py-28 bg-latte/20">
      <div className="nh-container max-w-6xl">
        <div className="reveal text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-chocolate mb-4">
            Why Choose NuHealth
          </h2>
          <p className="text-lg text-chocolate/70">
            Hormone optimization done right.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="reveal bg-white rounded-xl p-8 border border-caramel/10 sheen"
              style={{ animationDelay: feature.delay }}
            >
              <div className="w-12 h-12 bg-caramel/20 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="font-serif font-bold text-chocolate text-lg mb-3">
                {feature.title}
              </h3>
              <p className="text-chocolate/80 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
