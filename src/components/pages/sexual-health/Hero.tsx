'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckIcon } from '@/components/ui/Icons'
import SexualHealthHeroGL from './SexualHealthHeroGL'

export default function Hero() {
  const [step, setStep] = useState(0)
  const [goal, setGoal] = useState('')
  const [timing, setTiming] = useState('')

  const handleReset = () => {
    setStep(0)
    setGoal('')
    setTiming('')
  }

  return (
    <section id="hero" className="relative bg-chocolate overflow-hidden pt-32 lg:pt-40 pb-16 lg:pb-24">
      {/* Three.js pulsing rings canvas */}
      <SexualHealthHeroGL />
      {/* CSS fallback pulse rings */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 0 }}>
        <div className="pulse-ring"></div>
        <div className="pulse-ring"></div>
        <div className="pulse-ring"></div>
      </div>

      <div className="nh-container relative z-10 text-center">
        <div className="reveal max-w-3xl mx-auto mb-8">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-cream mb-6">
            A smarter approach to <em className="font-serif font-normal not-italic italic text-sage">sexual health.</em>
          </h1>
          <p className="text-xl lg:text-2xl text-cream/90 leading-relaxed mb-8">
            Medically supervised. Personalized to your needs. Discreet from consultation to your door.
          </p>
        </div>

        <div className="reveal flex flex-wrap justify-center gap-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-chocolate/40 backdrop-blur-sm border border-sage/30 rounded-full px-4 py-2">
            <CheckIcon className="w-4 h-4 text-sage" />
            <span className="text-sm font-medium text-sage">HIPAA Compliant</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-chocolate/40 backdrop-blur-sm border border-sage/30 rounded-full px-4 py-2">
            <CheckIcon className="w-4 h-4 text-sage" />
            <span className="text-sm font-medium text-sage">Discreet Shipping</span>
          </div>
        </div>

        <div className="reveal max-w-md mx-auto">
          {/* Step 0: CTA button */}
          {step === 0 && (
            <div>
              <button
                onClick={() => setStep(1)}
                className="bg-sage text-chocolate font-semibold rounded-full px-8 py-4 hover:bg-[#7aa3b8] transition-all duration-300 hover:shadow-lg hover:shadow-sage/20 hover:-translate-y-1 cta-glow text-lg"
              >
                Start Your Free Assessment →
              </button>
              <p className="text-cream/40 text-xs mt-3">Free • 30 seconds • No account needed</p>
            </div>
          )}

          {/* Step 1: Goal */}
          {step === 1 && (
            <div className="bg-white/10 backdrop-blur-sm border border-sage/20 rounded-2xl p-6 animate-in fade-in">
              <p className="text-cream/60 text-xs font-semibold uppercase tracking-widest mb-3">Step 1 of 2</p>
              <p className="text-cream font-bold text-lg mb-4">What best describes your situation?</p>
              <div className="space-y-3">
                <button
                  onClick={() => {
                    setGoal('occasional')
                    setStep(2)
                  }}
                  className={`w-full text-left px-5 py-3.5 rounded-xl border transition-all duration-200 text-cream/90 hover:bg-sage/20 hover:border-sage/50 ${
                    goal === 'occasional' ? 'border-sage bg-sage/20' : 'border-cream/20'
                  }`}
                >
                  Occasional difficulty getting or maintaining an erection
                </button>
                <button
                  onClick={() => {
                    setGoal('consistent')
                    setStep(2)
                  }}
                  className={`w-full text-left px-5 py-3.5 rounded-xl border transition-all duration-200 text-cream/90 hover:bg-sage/20 hover:border-sage/50 ${
                    goal === 'consistent' ? 'border-sage bg-sage/20' : 'border-cream/20'
                  }`}
                >
                  Consistent difficulty — happens most of the time
                </button>
                <button
                  onClick={() => {
                    setGoal('confidence')
                    setStep(2)
                  }}
                  className={`w-full text-left px-5 py-3.5 rounded-xl border transition-all duration-200 text-cream/90 hover:bg-sage/20 hover:border-sage/50 ${
                    goal === 'confidence' ? 'border-sage bg-sage/20' : 'border-cream/20'
                  }`}
                >
                  I want more confidence and reliability
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Timing preference */}
          {step === 2 && (
            <div className="bg-white/10 backdrop-blur-sm border border-sage/20 rounded-2xl p-6 animate-in fade-in">
              <p className="text-cream/60 text-xs font-semibold uppercase tracking-widest mb-3">Step 2 of 2</p>
              <p className="text-cream font-bold text-lg mb-4">What matters more to you?</p>
              <div className="space-y-3">
                <button
                  onClick={() => {
                    setTiming('planned')
                    setStep(3)
                  }}
                  className="w-full text-left px-5 py-3.5 rounded-xl border transition-all duration-200 text-cream/90 hover:bg-sage/20 hover:border-sage/50 border-cream/20"
                >
                  I can plan ahead — I want it to work when I take it
                </button>
                <button
                  onClick={() => {
                    setTiming('spontaneous')
                    setStep(3)
                  }}
                  className="w-full text-left px-5 py-3.5 rounded-xl border transition-all duration-200 text-cream/90 hover:bg-sage/20 hover:border-sage/50 border-cream/20"
                >
                  I want to be ready anytime — no planning needed
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Result */}
          {step === 3 && (
            <div className="bg-white/10 backdrop-blur-sm border border-sage/20 rounded-2xl p-6 text-center animate-in fade-in">
              <p className="text-sage font-bold text-sm uppercase tracking-widest mb-2">Your Recommendation</p>
              <h3 className="text-3xl font-bold text-cream mb-2">
                {timing === 'planned' ? 'Sildenafil' : 'Tadalafil'}
              </h3>
              <p className="text-cream/70 text-sm mb-1">
                {timing === 'planned'
                  ? 'As-needed — works in 30-60 min, lasts 4-6 hours'
                  : 'Daily — always ready, lasts up to 36 hours'}
              </p>
              <p className="text-sage font-bold text-xl mb-4">
                {timing === 'planned' ? 'Starting at $90/month' : 'Starting at $100/month'}
              </p>
              <Link
                href="/sexual-health#consultation"
                className="inline-block w-full bg-sage text-chocolate font-bold rounded-full px-8 py-4 hover:bg-[#7aa3b8] transition-all duration-300 cta-glow"
              >
                Start Consultation ($50)
              </Link>
              <p className="text-cream/30 text-xs mt-3">No credit card required. 100% discreet.</p>
              <button
                onClick={handleReset}
                className="text-cream/40 text-xs mt-2 hover:text-cream/60 underline"
              >
                Start over
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
