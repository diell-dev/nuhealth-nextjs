'use client';

import { useEffect } from 'react';

export default function SexualHealthAnimations() {
  useEffect(() => {
    const init = async () => {
      const gsapModule = await import('gsap');
      const scrollModule = await import('gsap/ScrollTrigger');
      const gsap = gsapModule.default;
      const ScrollTrigger = scrollModule.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      // Reveal animations on scroll — matching original sexual-health.html
      document.querySelectorAll('.reveal').forEach((el, index) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          duration: 0.8,
          opacity: 0,
          y: 30,
          delay: 0,
          ease: 'power2.out',
          onStart: function() {
            (el as HTMLElement).style.visibility = 'visible';
          }
        });
      });
    };

    init();

    return () => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach(t => t.kill());
      });
    };
  }, []);

  return null;
}
