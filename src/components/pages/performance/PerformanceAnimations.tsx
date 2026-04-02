'use client';

import { useEffect } from 'react';

export default function PerformanceAnimations() {
  useEffect(() => {
    const init = async () => {
      const gsapModule = await import('gsap');
      const scrollModule = await import('gsap/ScrollTrigger');
      const gsap = gsapModule.default;
      const ScrollTrigger = scrollModule.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      // Basic reveals
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((el) => {
        gsap.to(el, {
          visibility: 'visible',
          autoAlpha: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        });
      });

      // Stagger card reveals
      const cardGroups = document.querySelectorAll('.grid');
      cardGroups.forEach((group) => {
        const cards = group.querySelectorAll('[class*="reveal"]');
        if (cards.length > 1) {
          gsap.to(cards, {
            visibility: 'visible',
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: group,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          });
        }
      });

      // Pinned metrics scroll animation
      const metricsPinned = document.querySelector('.metrics-pinned') as HTMLElement;
      if (metricsPinned) {
        const metricItems = metricsPinned.querySelectorAll('.metric-item');
        const scrollHint = metricsPinned.querySelector('.scroll-hint') as HTMLElement;
        const circ = 2 * Math.PI * 62;

        const metricsTl = gsap.timeline({
          scrollTrigger: {
            trigger: metricsPinned,
            start: 'top top',
            end: '+=200%',
            pin: true,
            scrub: 0.5,
            anticipatePin: 1,
            onUpdate: function(self: any) {
              if (scrollHint) scrollHint.style.opacity = self.progress > 0.05 ? '0' : '0.6';
            }
          }
        });

        const prefixes = ['+', '+', '-', '+'];

        metricItems.forEach(function(item, i) {
          const ring = item.querySelector('.metric-ring') as SVGElement;
          const valueEl = item.querySelector('.metric-value') as HTMLElement;
          const target = parseInt(item.getAttribute('data-target') || '0');
          const prefix = prefixes[i];
          const pos = i * 0.22;
          const counter = { val: 0 };

          const targetOffset = circ - (circ * target / 100);
          metricsTl.fromTo(ring,
            { attr: { 'stroke-dashoffset': circ } },
            { attr: { 'stroke-dashoffset': targetOffset }, duration: 0.25, ease: 'power2.inOut' },
            pos
          );

          metricsTl.to(counter, {
            val: target,
            duration: 0.25,
            ease: 'power2.inOut',
            onUpdate: function() {
              if (valueEl) valueEl.textContent = prefix + Math.round(counter.val) + '%';
            }
          }, pos);

          metricsTl.fromTo(item,
            { opacity: 0.15, y: 30, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 0.2, ease: 'power2.out' },
            pos
          );
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
