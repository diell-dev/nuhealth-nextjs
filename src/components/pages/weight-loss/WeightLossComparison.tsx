export default function WeightLossComparison() {
  const features = [
    {
      title: 'Medication',
      icon: '🛡️',
      color: '#304526',
      subtitle: 'Compounded by licensed 503B pharmacy with quality assurance.'
    },
    {
      title: 'Blood Work',
      icon: '💊',
      color: '#8FB7CD',
      subtitle: 'Blood work ordered and reviewed by your provider plus quarterly check-ins to monitor progress.'
    },
    {
      title: 'Nutrition & Workout Plan',
      icon: '❤️',
      color: '#AB795A',
      subtitle: 'Personalized meal plans and weekly coaching sessions.'
    },
    {
      title: 'Supplies',
      icon: '⚙️',
      color: '#8FB7CD',
      subtitle: 'Needles, alcohol pads, lancets. Everything you need to inject safely.'
    }
  ];

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="nh-container">
        <div className="reveal mb-14">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-chocolate">
            Everything <em className="font-serif font-normal not-italic text-olive">you need.</em>
          </h2>
          <p className="text-lg text-caramel mt-4">Your membership includes far more than just medication.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`reveal ${idx === 0 ? 'reveal-d1' : idx === 1 ? 'reveal-d2' : idx === 2 ? 'reveal-d3' : 'reveal-d4'} group bg-white rounded-[1.25rem] p-7 border border-latte hover:shadow-xl hover:shadow-chocolate/5 hover:-translate-y-1.5 transition-all duration-500`}
            >
              <div className="w-12 h-12 bg-[#304526]/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="font-bold text-lg text-chocolate">{feature.title}</h3>
              <p className="text-sm text-caramel mt-2 mb-4 leading-relaxed">{feature.subtitle}</p>
              <span className="text-xs font-semibold text-olive bg-[#304526]/10 px-3 py-1.5 rounded-full">
                {idx === 1 ? 'Typically covered by insurance' : 'Included'}
              </span>
            </div>
          ))}
        </div>

        <div className="reveal mt-8 bg-gradient-to-r from-[#304526]/10 to-[#8FB7CD]/15 rounded-2xl p-6 border border-latte">
          <p className="text-center text-sm text-chocolate">
            <strong className="text-olive">
              All medications from NuHealth are compounded by licensed 503B pharmaceutical facilities.
            </strong>{' '}
            We prioritize safety, quality, and clinical outcomes above all else.
          </p>
        </div>
      </div>
    </section>
  );
}
