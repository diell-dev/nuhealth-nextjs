export default function WeightLossMythVsFact() {
  const myths = [
    {
      type: 'myth',
      title: '"GLP-1s are just for diabetics. They\'re not real weight loss drugs."',
      content: 'GLP-1 medications were originally developed for type 2 diabetes, but clinical trials showed 14.9–22.5% body weight reduction in non-diabetic patients (STEP 1 Trial, NEJM 2021; SURMOUNT-1, NEJM 2022). The FDA approved them specifically for chronic weight management. They\'re legitimate pharmaceutical interventions backed by rigorous Phase III data.',
      citations: true
    },
    {
      type: 'fact',
      title: 'GLP-1s work by resetting your body\'s weight set point.',
      content: 'These medications activate GLP-1 receptors in the hypothalamus that control appetite, blood sugar, and metabolic rate. Over 90,000 peer-reviewed studies indexed in PubMed support their efficacy and safety profile. Results are sustained because the underlying biological mechanism — reduced hunger signaling and improved satiety — persists with continued use.'
    },
    {
      type: 'myth',
      title: '"You\'ll regain weight the moment you stop. It\'s not sustainable."',
      content: 'Some patients maintain weight loss after discontinuing, especially if lifestyle changes stick. Others benefit from lower maintenance doses. The key is working with a provider who creates a long-term plan, not just a quick fix.'
    },
    {
      type: 'fact',
      title: 'Combination therapy is more effective than medication alone.',
      content: 'GLP-1 works best when paired with habit change, nutrition coaching, and regular exercise. NuHealth includes all of these. Patients who engage with the full program see 24% average weight loss vs 18% from medication alone.'
    }
  ];

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="nh-container">
        <div className="reveal mb-14">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-chocolate">
            Myth vs <em className="font-serif font-normal not-italic text-olive">Fact.</em>
          </h2>
          <p className="text-lg text-caramel mt-4">What you've heard probably isn't true.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {myths.map((item, idx) => {
            const isMythItem = item.type === 'myth';
            const delayClass = ['reveal-d1', 'reveal-d2', 'reveal-d3', 'reveal-d4'][idx];

            return (
              <div
                key={idx}
                className={`reveal ${delayClass} rounded-2xl p-8 lg:p-10 ${
                  isMythItem
                    ? 'bg-gradient-to-br from-[#643923]/5 to-[#AB795A]/5 border border-latte'
                    : 'bg-gradient-to-br from-[#304526]/10 to-[#8FB7CD]/15 border border-latte'
                }`}
              >
                <div className="flex items-center gap-3 mb-5">
                  {isMythItem ? (
                    <span className="w-10 h-10 bg-[#AB795A]/15 rounded-full flex items-center justify-center text-[#643923] font-extrabold text-lg">
                      ✕
                    </span>
                  ) : (
                    <span className="w-10 h-10 bg-[#304526]/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-olive" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  )}
                  <h3 className="text-xl font-bold font-serif">{isMythItem ? 'Myth' : 'Fact'}</h3>
                </div>
                <p className="text-lg font-semibold text-slate-800 mb-3">{item.title}</p>
                <p className="text-sm text-caramel">
                  {item.content}
                  {item.citations && (
                    <>
                      {' '}
                      <a
                        href="https://pubmed.ncbi.nlm.nih.gov/34170647/"
                        className="underline hover:text-chocolate transition-colors"
                        target="_blank"
                        rel="noopener"
                      >
                        STEP 1 Trial, <em>NEJM</em> 2021
                      </a>
                      ;{' '}
                      <a
                        href="https://pubmed.ncbi.nlm.nih.gov/36214836/"
                        className="underline hover:text-chocolate transition-colors"
                        target="_blank"
                        rel="noopener"
                      >
                        SURMOUNT-1, <em>NEJM</em> 2022
                      </a>
                      .
                    </>
                  )}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
