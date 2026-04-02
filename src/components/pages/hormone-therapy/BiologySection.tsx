"use client";

export default function BiologySection() {
  const ageData = [
    { age: 25, value: 675, percent: 90 },
    { age: 35, value: 625, percent: 75 },
    { age: 45, value: 520, percent: 55 },
    { age: 55, value: 420, percent: 38 },
    { age: 65, value: 350, percent: 25 },
  ];

  const infoCards = [
    {
      percent: "1%",
      title: "Annual Decline",
      description: "Testosterone naturally decreases 1-2% per year after 30",
    },
    {
      percent: "30-50%",
      title: "Total Loss by 50",
      description: "Most men have lost 30-50% of peak testosterone by age 50",
    },
    {
      percent: "350",
      title: "Clinical Low Range",
      description: "Below 350 ng/dL is considered clinically low testosterone",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-chocolate relative overflow-hidden noise-overlay">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-caramel/8 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-sage/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="nh-container relative z-10">
        <div className="reveal text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-sage mb-3 block">
            The Biology
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-cream mb-4">
            Why You Feel This Way
          </h2>
          <p className="text-lg text-cream/70 max-w-2xl mx-auto">
            Testosterone naturally declines 1-2% per year after age 30. By 50, most men
            have lost 30-50% of peak levels. It's not aging — it's biology, and it's
            measurable.
          </p>
        </div>

        {/* Animated SVG Bar Chart */}
        <div className="reveal max-w-4xl mx-auto mb-16">
          <div className="bg-white/[0.06] backdrop-blur-sm rounded-2xl border border-cream/[0.08] p-8 lg:p-12">
            <div className="flex items-end justify-between gap-4 lg:gap-8 h-64">
              {ageData.map((data, idx) => (
                <div
                  key={idx}
                  className="flex-1 flex flex-col items-center justify-end h-full"
                >
                  <div
                    className={`t-bar w-full max-w-[60px] rounded-t-lg transition-all duration-700`}
                    style={{
                      height: "0%",
                      background:
                        idx === 0 || idx === 1
                          ? "linear-gradient(to top, rgb(171, 121, 90), rgb(171, 121, 90, 0.8))"
                          : idx === 2
                            ? "linear-gradient(to top, rgb(216, 189, 163), rgb(216, 189, 163, 0.7))"
                            : "linear-gradient(to top, rgb(143, 183, 205), rgb(143, 183, 205, 0.7))",
                    }}
                    data-height={`${data.percent}%`}
                  ></div>
                  <div className="mt-4 text-center">
                    <p className="text-xl font-bold text-cream">{data.value}</p>
                    <p className="text-[10px] text-cream/40 uppercase tracking-wider">
                      ng/dL
                    </p>
                    <p className="text-xs font-semibold mt-1 text-caramel">
                      Age {data.age}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Baseline label */}
            <div className="mt-2 border-t border-cream/10 pt-3 flex justify-between">
              <span className="text-[10px] text-cream/30 uppercase tracking-widest">
                Peak Testosterone
              </span>
              <span className="text-[10px] text-cream/30 uppercase tracking-widest">
                Clinical Low Range
              </span>
            </div>
          </div>
        </div>

        {/* 3 Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {infoCards.map((card, idx) => (
            <div
              key={idx}
              className="reveal bg-white/[0.06] backdrop-blur-sm rounded-2xl p-6 border border-cream/[0.08]"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="w-10 h-10 bg-caramel/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-caramel font-bold text-lg">{card.percent}</span>
              </div>
              <h3 className="font-serif font-bold text-cream text-lg mb-2">
                {card.title}
              </h3>
              <p className="text-cream/70 text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
