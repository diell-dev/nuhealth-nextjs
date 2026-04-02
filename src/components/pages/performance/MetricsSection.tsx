export default function MetricsSection() {
  return (
    <div className="metrics-pinned min-h-screen flex items-center bg-chocolate relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay" style={{ pointerEvents: "none" }}></div>
      <div className="nh-container relative z-10 w-full py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Measurable Progress
          </h2>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto">
            Biomarkers tracked every month. Scroll to see average patient improvements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Metric 1: NAD+ */}
          <div className="metric-item text-center" data-target="47" data-color="#8FB7CD">
            <div className="mb-6 flex justify-center">
              <svg className="progress-ring" width="140" height="140" viewBox="0 0 140 140">
                <circle cx="70" cy="70" r="62" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
                <circle
                  className="metric-ring"
                  cx="70"
                  cy="70"
                  r="62"
                  fill="none"
                  stroke="#8FB7CD"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="389.6"
                  strokeDashoffset="389.6"
                />
              </svg>
              <span className="metric-value absolute text-4xl font-bold text-sage">0%</span>
            </div>
            <p className="text-sm uppercase tracking-widest text-cream/60 mb-2">NAD+ Levels</p>
            <p className="text-xs text-cream/50">Avg. increase at 12 weeks</p>
          </div>

          {/* Metric 2: Glutathione */}
          <div className="metric-item text-center" data-target="63" data-color="#304526">
            <div className="mb-6 flex justify-center">
              <svg className="progress-ring" width="140" height="140" viewBox="0 0 140 140">
                <circle cx="70" cy="70" r="62" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
                <circle
                  className="metric-ring"
                  cx="70"
                  cy="70"
                  r="62"
                  fill="none"
                  stroke="#304526"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="389.6"
                  strokeDashoffset="389.6"
                />
              </svg>
              <span className="metric-value absolute text-4xl font-bold text-cream">0%</span>
            </div>
            <p className="text-sm uppercase tracking-widest text-cream/60 mb-2">Glutathione (RBC)</p>
            <p className="text-xs text-cream/50">Cellular antioxidant capacity</p>
          </div>

          {/* Metric 3: Recovery */}
          <div className="metric-item text-center" data-target="34" data-color="#AB795A">
            <div className="mb-6 flex justify-center">
              <svg className="progress-ring" width="140" height="140" viewBox="0 0 140 140">
                <circle cx="70" cy="70" r="62" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
                <circle
                  className="metric-ring"
                  cx="70"
                  cy="70"
                  r="62"
                  fill="none"
                  stroke="#AB795A"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="389.6"
                  strokeDashoffset="389.6"
                />
              </svg>
              <span className="metric-value absolute text-4xl font-bold text-caramel">0%</span>
            </div>
            <p className="text-sm uppercase tracking-widest text-cream/60 mb-2">Recovery Time</p>
            <p className="text-xs text-cream/50">Post-workout soreness & fatigue</p>
          </div>

          {/* Metric 4: Cognition */}
          <div className="metric-item text-center" data-target="52" data-color="#E0D5C9">
            <div className="mb-6 flex justify-center">
              <svg className="progress-ring" width="140" height="140" viewBox="0 0 140 140">
                <circle cx="70" cy="70" r="62" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
                <circle
                  className="metric-ring"
                  cx="70"
                  cy="70"
                  r="62"
                  fill="none"
                  stroke="#E0D5C9"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="389.6"
                  strokeDashoffset="389.6"
                />
              </svg>
              <span className="metric-value absolute text-4xl font-bold text-cream">0%</span>
            </div>
            <p className="text-sm uppercase tracking-widest text-cream/60 mb-2">Cognitive Score</p>
            <p className="text-xs text-cream/50">Attention, focus, processing speed</p>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="scroll-hint text-center mt-12 opacity-60">
          <p className="text-xs text-cream/50 mb-2">Scroll to animate</p>
          <svg
            className="w-5 h-5 mx-auto text-cream/40 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>

        <p className="text-center text-xs text-cream/40 mt-8">
          Results based on patient data. Individual outcomes vary. Biomarkers measured via serum/RBC labs.
        </p>
      </div>
    </div>
  );
}
