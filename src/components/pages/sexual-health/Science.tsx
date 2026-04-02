export default function Science() {
  return (
    <section className="bg-olive py-20 lg:py-28 relative overflow-hidden">
      <div className="nh-container">
        <div className="reveal text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-cream mb-4">
            The <em className="font-serif font-normal not-italic text-sage italic">science.</em>
          </h2>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto">FDA-approved, clinically proven, extensively researched.</p>
        </div>

        <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-chocolate/60 backdrop-blur-xl rounded-2xl p-8 border border-sage/20 card-shine">
            <h3 className="text-2xl font-bold text-cream mb-4">How PDE5 Inhibitors Work</h3>
            <p className="text-cream/90 leading-relaxed">
              Sildenafil and Tadalafil are phosphodiesterase-5 (PDE5) inhibitors. They relax smooth muscle tissue in
              blood vessels, increasing blood flow to the penis. This natural physiological response enables normal
              sexual function.
            </p>
          </div>
          <div className="bg-chocolate/60 backdrop-blur-xl rounded-2xl p-8 border border-sage/20 card-shine">
            <h3 className="text-2xl font-bold text-cream mb-4">Clinical Evidence</h3>
            <p className="text-cream/90 leading-relaxed">
              FDA-approved since 1998 (Sildenafil) and 2003 (Tadalafil). Millions of successful treatments worldwide.
              Extensive peer-reviewed research demonstrating efficacy and safety profiles across diverse patient
              populations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
