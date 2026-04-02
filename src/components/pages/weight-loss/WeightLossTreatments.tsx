import Link from 'next/link';

export default function WeightLossTreatments() {
  return (
    <section id="treatments" className="bg-cream py-20 lg:py-28">
      <div className="nh-container">
        <div className="reveal mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-olive">Compounded GLP-1</span>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-chocolate mt-3">
            <em className="font-serif font-normal not-italic text-caramel">Medications</em> that work.
          </h2>
          <p className="text-lg text-caramel max-w-2xl mt-4">
            Compounded by licensed 503B pharmacies. Personalized protocols. Adjusted for your body.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Semaglutide */}
          <div className="reveal reveal-d1 group bg-white rounded-[1.25rem] border border-latte overflow-hidden hover:shadow-2xl hover:shadow-chocolate/5 transition-all duration-500 hover:-translate-y-1.5 card-shine">
            <div className="relative h-72 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=70&fit=crop"
                alt="Woman enjoying healthy lifestyle after semaglutide weight loss treatment"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              <span className="absolute top-4 left-4 bg-olive text-cream text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                Most Popular
              </span>
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/80 backdrop-blur-sm rounded-full px-2.5 py-1">
                <span className="w-2 h-2 bg-olive rounded-full animate-pulse"></span>
                <span className="text-xs font-medium text-olive">In stock</span>
              </div>
            </div>
            <div className="p-7">
              <h3 className="text-xl font-bold text-chocolate font-serif">Semaglutide</h3>
              <p className="text-sm text-caramel mt-0.5">GLP-1 Receptor Agonist</p>
              <div className="flex items-baseline gap-1 mt-4">
                <p className="text-3xl font-extrabold text-chocolate">$125</p>
                <span className="text-base font-normal text-latte">/mo</span>
              </div>
              <p className="text-sm text-olive font-medium mt-1.5 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5">
                  <use href="#icon-trend-up" />
                </svg>
                Average weight loss: 20%
              </p>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-latte to-transparent my-5"></div>
              <ul className="space-y-2.5 text-sm text-caramel">
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-olive shrink-0">
                    <use href="#icon-checkmark" />
                  </svg>
                  Once-weekly injection
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-olive shrink-0">
                    <use href="#icon-checkmark" />
                  </svg>
                  Appetite suppression & fullness
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-olive shrink-0">
                    <use href="#icon-checkmark" />
                  </svg>
                  Blood sugar support
                </li>
              </ul>
              <div className="flex gap-3 mt-7">
                <Link
                  href="/weight-loss#consultation"
                  className="flex-1 text-center bg-olive text-cream text-sm font-semibold rounded-full px-4 py-3.5 hover:bg-[#263a1c] transition-all duration-300 hover:shadow-lg hover:shadow-black/10"
                >
                  Get Started
                </Link>
                <Link
                  href="/weight-loss#treatments"
                  className="flex-1 text-center border border-latte text-chocolate text-sm font-semibold rounded-full px-4 py-3.5 hover:bg-latte/30 hover:border-caramel transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Tirzepatide */}
          <div className="reveal reveal-d2 group bg-white rounded-[1.25rem] border border-latte overflow-hidden hover:shadow-2xl hover:shadow-chocolate/5 transition-all duration-500 hover:-translate-y-1.5 card-shine">
            <div className="relative h-72 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=70&fit=crop"
                alt="Patient jogging outdoors during tirzepatide weight loss program"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              <span className="absolute top-4 left-4 bg-[#8FB7CD]/20 backdrop-blur-sm text-[#5a8da6] text-xs font-bold px-3 py-1.5 rounded-full">
                Highest Efficacy
              </span>
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/80 backdrop-blur-sm rounded-full px-2.5 py-1">
                <span className="w-2 h-2 bg-olive rounded-full animate-pulse"></span>
                <span className="text-xs font-medium text-olive">In stock</span>
              </div>
            </div>
            <div className="p-7">
              <h3 className="text-xl font-bold text-chocolate font-serif">Tirzepatide</h3>
              <p className="text-sm text-caramel mt-0.5">GLP-1 & GIP Dual Agonist</p>
              <div className="flex items-baseline gap-1 mt-4">
                <p className="text-3xl font-extrabold text-chocolate">$265</p>
                <span className="text-base font-normal text-latte">/mo</span>
              </div>
              <p className="text-sm text-olive font-medium mt-1.5 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5">
                  <use href="#icon-trend-up" />
                </svg>
                Average weight loss: 26%
              </p>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-latte to-transparent my-5"></div>
              <ul className="space-y-2.5 text-sm text-caramel">
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-olive shrink-0">
                    <use href="#icon-checkmark" />
                  </svg>
                  Dual hormone activation
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-olive shrink-0">
                    <use href="#icon-checkmark" />
                  </svg>
                  Higher efficacy
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-olive shrink-0">
                    <use href="#icon-checkmark" />
                  </svg>
                  Muscle preservation
                </li>
              </ul>
              <div className="flex gap-3 mt-7">
                <Link
                  href="/weight-loss#consultation"
                  className="flex-1 text-center bg-olive text-cream text-sm font-semibold rounded-full px-4 py-3.5 hover:bg-[#263a1c] transition-all duration-300 hover:shadow-lg hover:shadow-black/10"
                >
                  Get Started
                </Link>
                <Link
                  href="/weight-loss#treatments"
                  className="flex-1 text-center border border-latte text-chocolate text-sm font-semibold rounded-full px-4 py-3.5 hover:bg-latte/30 hover:border-caramel transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Lipo B/C */}
          <div className="reveal reveal-d3 group bg-white rounded-[1.25rem] border border-latte overflow-hidden hover:shadow-2xl hover:shadow-chocolate/5 transition-all duration-500 hover:-translate-y-1.5 card-shine">
            <div className="relative h-72 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=70&fit=crop"
                alt="Person stretching with energy after Lipo B/C metabolic boost injection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              <span className="absolute top-4 left-4 bg-[#AB795A]/15 backdrop-blur-sm text-[#643923] text-xs font-bold px-3 py-1.5 rounded-full">
                Add-On
              </span>
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/80 backdrop-blur-sm rounded-full px-2.5 py-1">
                <span className="w-2 h-2 bg-olive rounded-full animate-pulse"></span>
                <span className="text-xs font-medium text-olive">In stock</span>
              </div>
            </div>
            <div className="p-7">
              <h3 className="text-xl font-bold text-chocolate font-serif">Lipo B/C</h3>
              <p className="text-sm text-caramel mt-0.5">Lipotropic Injections</p>
              <div className="flex items-baseline gap-1 mt-4">
                <p className="text-3xl font-extrabold text-chocolate">$25</p>
                <span className="text-base font-normal text-latte">/shot</span>
              </div>
              <p className="text-sm text-caramel font-medium mt-1.5 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 17V7m-6 5l6-6 6 6"
                  />
                </svg>
                Energy & metabolism boost
              </p>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-latte to-transparent my-5"></div>
              <ul className="space-y-2.5 text-sm text-caramel">
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-olive shrink-0">
                    <use href="#icon-checkmark" />
                  </svg>
                  3x energy boost
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-olive shrink-0">
                    <use href="#icon-checkmark" />
                  </svg>
                  Enhanced metabolism
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-olive shrink-0">
                    <use href="#icon-checkmark" />
                  </svg>
                  Pairs with any protocol
                </li>
              </ul>
              <div className="flex gap-3 mt-7">
                <Link
                  href="/weight-loss#consultation"
                  className="flex-1 text-center bg-olive text-cream text-sm font-semibold rounded-full px-4 py-3.5 hover:bg-[#263a1c] transition-all duration-300 hover:shadow-lg hover:shadow-black/10"
                >
                  Add to Plan
                </Link>
                <Link
                  href="/weight-loss#treatments"
                  className="flex-1 text-center border border-latte text-chocolate text-sm font-semibold rounded-full px-4 py-3.5 hover:bg-latte/30 hover:border-caramel transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-latte mt-8">
          Safety info: GLP-1 medications may have serious side effects. Consult your provider.
        </p>
      </div>
    </section>
  );
}
