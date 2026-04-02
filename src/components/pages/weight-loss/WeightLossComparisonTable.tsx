export default function WeightLossComparisonTable() {
  const features = [
    {
      feature: 'Board-Certified MDs',
      nuhealth: true,
      typical: 'Often nurses/PAs'
    },
    {
      feature: 'Consultation',
      nuhealth: '$50 one-time',
      typical: '$50-100 fee'
    },
    {
      feature: 'Nutrition & Workout Plan Included',
      nuhealth: true,
      typical: 'Additional $200+'
    },
    {
      feature: 'Blood Work',
      nuhealth: 'Typically covered',
      typical: 'Out of pocket'
    },
    {
      feature: 'Compounded GLP-1',
      nuhealth: true,
      typical: 'Brand only (3-4x cost)'
    },
    {
      feature: 'Dose Adjustments',
      nuhealth: 'Weekly check-ins',
      typical: '6-month intervals'
    },
    {
      feature: '24/7 Support',
      nuhealth: true,
      typical: 'Business hours only'
    },
    {
      feature: 'In-Person Option',
      nuhealth: 'Royal Oak, MI',
      typical: 'Virtual only'
    }
  ];

  return (
    <section className="bg-olive text-white py-20 lg:py-28">
      <div className="nh-container">
        <div className="reveal mb-14">
          <div className="flex items-end gap-6">
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
                NuHealth vs <em className="font-serif font-normal not-italic text-[#E0D5C9]">The Rest.</em>
              </h2>
              <p className="text-lg text-white/50 mt-4">Why board-certified providers and quality matter.</p>
            </div>
            {/* Provider headshot for trust */}
            <div className="hidden md:flex items-center gap-3 shrink-0 bg-white/[0.07] backdrop-blur-sm rounded-2xl px-5 py-3 border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=96&h=96&fit=crop&crop=face"
                alt="Dr. Sarah Chen"
                className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
              />
              <div>
                <p className="text-sm font-bold text-white">Dr. Sarah Chen, MD</p>
                <p className="text-xs text-white/40">Chief Medical Officer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal overflow-x-auto rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <td className="py-5 px-6 font-bold text-white/70">Feature</td>
                <td className="py-5 px-6 font-bold text-[#E0D5C9]">NuHealth</td>
                <td className="py-5 px-6 font-bold text-white/40">Typical Clinic</td>
              </tr>
            </thead>
            <tbody>
              {features.map((row, idx) => (
                <tr key={idx} className="border-b border-white/5">
                  <td className="py-4 px-6 text-white/60">{row.feature}</td>
                  <td className="py-4 px-6">
                    {typeof row.nuhealth === 'boolean' ? (
                      <svg className="w-5 h-5 text-[#E0D5C9]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className={typeof row.nuhealth === 'boolean' ? '' : 'text-[#E0D5C9] font-semibold'}>{row.nuhealth}</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-white/40">{row.typical}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
