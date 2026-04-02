export default function ScienceSection() {
  const scienceItems = [
    {
      title: "The Master Antioxidant",
      description:
        "Glutathione is your body's primary defense against oxidative stress. It recycles other antioxidants and binds to toxins for removal. High-dose IV delivery bypasses GI absorption limits, restoring cellular GSH levels.",
      reference: "Ref: FASEB J. 2019",
    },
    {
      title: "Cellular Energy Currency",
      description:
        "NAD+ is essential for mitochondrial ATP production and the sirtuin pathway (longevity genes). Levels decline with age, stress, and poor sleep. IV replenishment restores energy production and DNA repair efficiency.",
      reference: "Ref: Cell Metab. 2021",
    },
    {
      title: "Growth Hormone Optimization",
      description:
        "Sermorelin is a GHRH analog that stimulates your pituitary to increase GH secretion naturally. Unlike synthetic HGH, it maintains physiologic feedback loops. Supports muscle, bone, immune, and sleep recovery.",
      reference: "Ref: J. Clin. Endocrinol. 2020",
    },
  ];

  return (
    <section className="py-24 bg-olive relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay"></div>
      <div className="nh-container relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-4">
            The Science Behind Optimization
          </h2>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto">
            Each protocol targets specific bottlenecks in cellular function. Evidence-based.
            Mechanism-validated.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scienceItems.map((item, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-8 border-cream/20 reveal"
            >
              <h3 className="text-2xl font-serif font-bold text-cream mb-4">
                {item.title}
              </h3>
              <p className="text-cream/90 text-sm mb-6">{item.description}</p>
              <div className="border-t border-cream/20 pt-4">
                <p className="text-xs text-cream/60 font-mono">{item.reference}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
