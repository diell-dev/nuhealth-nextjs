export default function WeightLossLocalPresence() {
  const locations = ['Royal Oak', 'Troy', 'Birmingham', 'Berkley', 'Southfield', 'Metro Detroit'];

  return (
    <section className="bg-latte/40 py-16 lg:py-20 border-y border-latte/50">
      <div className="nh-container">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-olive">Now in Royal Oak</span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-chocolate mt-3">
              <em className="font-serif font-normal not-italic text-caramel italic">Local care.</em> Modern medicine.
            </h2>
            <p className="text-caramel mt-4 leading-relaxed">
              NuHealth combines the convenience of telehealth with the trust of a local medical practice. Visit us in Royal Oak or connect with your provider from anywhere in Michigan.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {locations.map((location) => (
                <span
                  key={location}
                  className="text-xs font-medium text-chocolate bg-white/80 px-3 py-1.5 rounded-full border border-latte"
                >
                  {location}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 lg:p-8 border border-latte shadow-sm">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-10 h-10 bg-olive/10 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-olive" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-chocolate">Royal Oak, Michigan</h3>
                <p className="text-sm text-caramel mt-0.5">In-person consultations & telehealth available</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-5">
              <div className="w-10 h-10 bg-[#8FB7CD]/10 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#5a8da6]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-chocolate">(855) 200-0588</h3>
                <p className="text-sm text-caramel mt-0.5">Mon–Sun, 7am–9pm EST</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-caramel/10 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-caramel" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-chocolate">Virtual Visits</h3>
                <p className="text-sm text-caramel mt-0.5">Available across all of Michigan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
