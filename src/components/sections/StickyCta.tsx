'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function StickyCta() {
  useEffect(() => {
    // Wait for GSAP to load and ScrollTrigger to be available
    if (typeof window !== 'undefined' && (window as any).gsap) {
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;

      if (ScrollTrigger) {
        const stickyCta = document.getElementById('stickyCta');
        if (stickyCta) {
          ScrollTrigger.create({
            trigger: '#hero',
            start: 'bottom',
            onEnter: () => stickyCta.classList.add('show'),
            onLeaveBack: () => stickyCta.classList.remove('show')
          });
        }
      }
    }
  }, []);

  return (
    <div
      id="stickyCta"
      className="sticky-cta md:hidden bg-cream/95 backdrop-blur-lg border-t border-latte/80 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
    >
      <Link
        href="/weight-loss#consultation"
        className="block w-full text-center bg-olive text-cream font-bold rounded-full px-6 py-3.5 text-sm hover:bg-[#263a1c] transition-all"
      >
        Start Free Consult
      </Link>
    </div>
  );
}
