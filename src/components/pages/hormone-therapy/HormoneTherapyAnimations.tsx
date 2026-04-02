'use client';

import { useEffect } from 'react';

export default function HormoneTherapyAnimations() {
  useEffect(() => {
    const init = async () => {
      const gsapModule = await import('gsap');
      const scrollModule = await import('gsap/ScrollTrigger');
      const gsap = gsapModule.default;
      const ScrollTrigger = scrollModule.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      // Reveal animations — matching original hormone-therapy.html
      gsap.utils.toArray('.reveal').forEach((element: any) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        );
      });

      // Bar chart animation for biology section
      document.querySelectorAll('.t-bar').forEach(function(bar) {
        const targetHeight = bar.getAttribute('data-height');
        if (targetHeight) {
          gsap.to(bar, {
            height: targetHeight,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: (bar as HTMLElement).closest('section'),
              start: 'top 60%',
              toggleActions: 'play none none none'
            }
          });
        }
      });

      // Journey card stack — pinned scroll with card rotation
      const journeyPinned = document.querySelector('.journey-pinned') as HTMLElement;
      if (journeyPinned) {
        const cards = journeyPinned.querySelectorAll('.journey-card');
        const dots = journeyPinned.querySelectorAll('.journey-dot');

        const journeyTl = gsap.timeline({
          scrollTrigger: {
            trigger: journeyPinned,
            start: 'top top',
            end: '+=300%',
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
            onUpdate: function(self: any) {
              const activeIdx = Math.min(Math.floor(self.progress * cards.length), cards.length - 1);
              dots.forEach(function(dot, i) {
                (dot as HTMLElement).style.opacity = i === activeIdx ? '1' : '0.3';
                (dot as HTMLElement).style.transform = i === activeIdx ? 'scale(1.3)' : 'scale(1)';
              });
            }
          }
        });

        cards.forEach(function(card, i) {
          const startPos = i / cards.length;
          const endPos = (i + 1) / cards.length;

          if (i > 0) {
            journeyTl.fromTo(card,
              { opacity: 0, y: 60, scale: 0.92 },
              { opacity: 1, y: 0, scale: 1, duration: 0.15, ease: 'power2.out' },
              startPos
            );
          }

          if (i < cards.length - 1) {
            journeyTl.to(card,
              { opacity: 0, y: -40, scale: 0.95, duration: 0.1, ease: 'power2.in' },
              endPos - 0.12
            );
          }
        });
      }
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
