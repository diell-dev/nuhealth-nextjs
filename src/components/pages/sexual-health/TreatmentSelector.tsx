'use client'

import { useState } from 'react'

export default function TreatmentSelector() {
  const [choice, setChoice] = useState<'sildenafil' | 'tadalafil'>('sildenafil')

  return (
    <section id="selector" className="bg-cream py-20 lg:py-28">
      <div className="nh-container">
        <div className="reveal text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-chocolate mb-4">
            Which treatment is <em className="font-serif font-normal not-italic text-sage italic">right for you?</em>
          </h2>
          <p className="text-lg text-caramel max-w-2xl mx-auto">
            Two FDA-approved approaches, each personalized by a board-certified provider to fit your life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Toggle Buttons */}
          <div className="reveal flex gap-4 justify-center mb-12">
            <button
              onClick={() => setChoice('sildenafil')}
              className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                choice === 'sildenafil'
                  ? 'bg-sage text-chocolate shadow-lg shadow-sage/20'
                  : 'bg-latte text-chocolate border-2 border-latte hover:border-sage'
              }`}
            >
              As-Needed (Sildenafil)
            </button>
            <button
              onClick={() => setChoice('tadalafil')}
              className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                choice === 'tadalafil'
                  ? 'bg-sage text-chocolate shadow-lg shadow-sage/20'
                  : 'bg-latte text-chocolate border-2 border-latte hover:border-sage'
              }`}
            >
              Daily (Tadalafil)
            </button>
          </div>

          {/* Content Card */}
          <div className="reveal bg-white rounded-3xl border-2 border-latte p-10 lg:p-14 card-shine">
            {choice === 'sildenafil' && (
              <div className="animate-in fade-in">
                <div className="flex items-baseline gap-2 mb-6">
                  <h3 className="text-4xl font-bold text-chocolate">Sildenafil</h3>
                  <span className="text-caramel font-bold">(Generic Viagra)</span>
                </div>
                <p className="text-chocolate text-lg leading-relaxed mb-8">
                  An as-needed option that works in 30-60 minutes and lasts 4-6 hours. Your provider personalizes
                  the dosage to your needs and medical history.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-latte/50 rounded-xl p-4">
                    <p className="text-sm text-caramel font-semibold">Onset Time</p>
                    <p className="text-2xl font-bold text-chocolate mt-1">30-60 mins</p>
                  </div>
                  <div className="bg-latte/50 rounded-xl p-4">
                    <p className="text-sm text-caramel font-semibold">Duration</p>
                    <p className="text-2xl font-bold text-chocolate mt-1">4-6 hours</p>
                  </div>
                  <div className="bg-latte/50 rounded-xl p-4">
                    <p className="text-sm text-caramel font-semibold">Frequency</p>
                    <p className="text-2xl font-bold text-chocolate mt-1">As Needed</p>
                  </div>
                  <div className="bg-latte/50 rounded-xl p-4">
                    <p className="text-sm text-caramel font-semibold">Price</p>
                    <p className="text-2xl font-bold text-sage mt-1">
                      Starting at<span className="text-base font-normal text-caramel"> $90/mo</span>
                    </p>
                    <p className="text-xs text-caramel mt-1">Dosage-based pricing (25mg-100mg)</p>
                  </div>
                </div>
                <button className="w-full bg-sage text-chocolate font-bold py-4 rounded-full hover:bg-[#7aa3b8] transition-all duration-300 hover:shadow-lg hover:shadow-sage/20">
                  Start Your Consultation
                </button>
              </div>
            )}

            {choice === 'tadalafil' && (
              <div className="animate-in fade-in">
                <div className="flex items-baseline gap-2 mb-6">
                  <h3 className="text-4xl font-bold text-chocolate">Tadalafil</h3>
                  <span className="text-caramel font-bold">(Generic Cialis)</span>
                </div>
                <p className="text-chocolate text-lg leading-relaxed mb-8">
                  A daily low-dose option that provides continuous support for up to 36 hours. No timing, no
                  planning — your provider finds the right daily dose for you.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-latte/50 rounded-xl p-4">
                    <p className="text-sm text-caramel font-semibold">Onset Time</p>
                    <p className="text-2xl font-bold text-chocolate mt-1">1-2 hours</p>
                  </div>
                  <div className="bg-latte/50 rounded-xl p-4">
                    <p className="text-sm text-caramel font-semibold">Duration</p>
                    <p className="text-2xl font-bold text-chocolate mt-1">Up to 36 hrs</p>
                  </div>
                  <div className="bg-latte/50 rounded-xl p-4">
                    <p className="text-sm text-caramel font-semibold">Frequency</p>
                    <p className="text-2xl font-bold text-chocolate mt-1">Daily</p>
                  </div>
                  <div className="bg-latte/50 rounded-xl p-4">
                    <p className="text-sm text-caramel font-semibold">Price</p>
                    <p className="text-2xl font-bold text-sage mt-1">
                      Starting at<span className="text-base font-normal text-caramel"> $100/mo</span>
                    </p>
                    <p className="text-xs text-caramel mt-1">Dosage-based pricing (10mg-20mg)</p>
                  </div>
                </div>
                <button className="w-full bg-sage text-chocolate font-bold py-4 rounded-full hover:bg-[#7aa3b8] transition-all duration-300 hover:shadow-lg hover:shadow-sage/20">
                  Start Consultation ($50)
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
