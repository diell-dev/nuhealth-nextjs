'use client';

import { useEffect } from 'react';

export default function HomeAnimations() {
  useEffect(() => {
    // Dynamically import to avoid SSR issues
    const init = async () => {
      const gsapModule = await import('gsap');
      const scrollModule = await import('gsap/ScrollTrigger');
      const gsap = gsapModule.default;
      const ScrollTrigger = scrollModule.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      // Custom ease fallback
      const smooth = 'power2.out';

      // ═══ 1. HERO ENTRANCE TIMELINE ═══
      const heroTl = gsap.timeline({ defaults: { ease: smooth }, delay: 0.2 });

      // Reveal badge first
      heroTl.from('.reveal:first-child', { y: 20, opacity: 0, duration: 0.6 });

      // Stagger hero lines
      heroTl.from('.hero-line', { y: 60, opacity: 0, stagger: 0.1, duration: 0.8 }, '-=0.2');

      // Subtitle
      heroTl.from('#hero-headline + p', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4');

      // CTA buttons
      heroTl.from('#hero-headline ~ div', { y: 20, opacity: 0, stagger: 0.1, duration: 0.6 }, '-=0.3');

      // Product/feature cards slide in from right
      const heroCards = document.querySelectorAll('#home-hero .reveal.relative, #home-hero .reveal[class*="card"]');
      if (heroCards.length > 0) {
        heroCards.forEach((card, i) => {
          if (!card.closest('.hero-line') && card !== document.querySelector('.reveal:first-child')) {
            heroTl.from(card, {
              x: 80, opacity: 0, scale: 0.95, duration: 1, ease: 'power3.out'
            }, 0.4 + i * 0.1);
          }
        });
      }

      // Mark hero reveals visible
      document.querySelectorAll('#home-hero .reveal').forEach(el => {
        (el as HTMLElement).style.visibility = 'visible';
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'none';
      });

      // ═══ 2. HERO CANVAS FADE ON SCROLL ═══
      const heroCanvas = document.getElementById('home-hero-gl');
      if (heroCanvas) {
        gsap.to(heroCanvas, {
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: '#home-hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });
      }

      // ═══ 3. SCROLL REVEALS — ScrollTrigger.batch ═══
      // Collect all .reveal elements except those in hero and stats sections
      const allReveals = gsap.utils.toArray<HTMLElement>('.reveal').filter(
        (el) => !el.closest('#home-hero') && !el.closest('#home-stats')
      );
      allReveals.forEach((el: any) => {
        el.style.visibility = 'visible';
        gsap.set(el, { opacity: 0, y: 32 });
      });

      ScrollTrigger.batch(allReveals, {
        start: 'top 88%',
        onEnter: (batch: any) => gsap.to(batch, {
          opacity: 1, y: 0,
          duration: 0.7, ease: smooth,
          stagger: 0.08, overwrite: true
        }),
        onLeaveBack: (batch: any) => gsap.to(batch, {
          opacity: 0, y: 32,
          duration: 0.4, ease: 'power2.in',
          stagger: 0.04, overwrite: true
        })
      });

      // ═══ 4. STATS COUNTER ═══
      ScrollTrigger.create({
        trigger: '#home-stats',
        start: 'top 80%',
        once: true,
        onEnter: () => {
          // Reveal stat elements
          gsap.utils.toArray('#home-stats .reveal').forEach((el: any) => {
            el.style.visibility = 'visible';
          });
          gsap.from('#home-stats .reveal', {
            y: 30, opacity: 0,
            duration: 0.6, stagger: 0.1, ease: 'power2.out'
          });

          // Count up stat numbers
          document.querySelectorAll('.stat-number').forEach((el, i) => {
            const htmlEl = el as HTMLElement;
            const target = parseInt(htmlEl.dataset.target || '0');
            const suffix = htmlEl.dataset.suffix || '';
            const isK = htmlEl.dataset.format === 'k';
            const obj = { val: 0 };

            gsap.to(obj, {
              val: target,
              duration: 1.6,
              delay: i * 0.12,
              ease: 'power2.out',
              onUpdate() {
                const v = Math.round(obj.val);
                htmlEl.textContent = isK ? Math.round(v / 1000) + 'k+' : v + suffix;
              }
            });
          });
        }
      });

      // ═══ 5. SERVICE CARDS STAGGER ═══
      const serviceCards = gsap.utils.toArray<HTMLElement>('.service-card');
      if (serviceCards.length > 0) {
        serviceCards.forEach((card: any) => {
          gsap.set(card, { opacity: 0, scale: 0.9 });
        });

        ScrollTrigger.batch(serviceCards, {
          start: 'top 85%',
          onEnter: (batch: any) => gsap.to(batch, {
            opacity: 1, scale: 1,
            duration: 0.7, ease: smooth,
            stagger: 0.12, overwrite: true
          }),
          onLeaveBack: (batch: any) => gsap.to(batch, {
            opacity: 0, scale: 0.9,
            duration: 0.5, ease: 'power2.in',
            stagger: 0.06, overwrite: true
          })
        });
      }

      // ═══ 6. WORD ROTATION — Gradient Text ═══
      const words = ['wellness', 'performance', 'confidence', 'vitality'];
      let wordIdx = 0;
      const wordEl = document.querySelector('.gradient-text');
      if (wordEl) {
        (function cycle() {
          gsap.delayedCall(3.5, () => {
            wordIdx = (wordIdx + 1) % words.length;
            gsap.timeline()
              .to(wordEl, { y: -6, opacity: 0, duration: 0.25, ease: 'power2.in' })
              .call(() => { wordEl.textContent = words[wordIdx]; })
              .fromTo(wordEl, { y: 8 }, { y: 0, opacity: 1, duration: 0.35, ease: 'power2.out', onComplete: cycle });
          });
        })();
      }

      // ═══ 7. FOOTER PARALLAX ═══
      const wordmark = document.querySelector('footer p[aria-hidden="true"]');
      if (wordmark) {
        gsap.fromTo(wordmark, { x: -120 }, {
          x: 60, ease: 'none',
          scrollTrigger: {
            trigger: 'footer',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      }
    };

    init();

    return () => {
      // Cleanup on unmount — kill all ScrollTriggers
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach(t => t.kill());
      });
    };
  }, []);

  return null;
}
