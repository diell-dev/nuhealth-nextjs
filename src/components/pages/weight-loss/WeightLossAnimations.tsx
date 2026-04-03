'use client';

import { useEffect } from 'react';

export default function WeightLossAnimations() {
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

      // ═══ 1. HERO ENTRANCE ═══
      const heroTl = gsap.timeline({ defaults: { ease: smooth }, delay: 0.2 });

      heroTl
        .from('.reveal:first-child', { y: 20, opacity: 0, duration: 0.6 })
        .from('.hero-line', { y: 60, opacity: 0, stagger: 0.1, duration: 0.8 }, '-=0.2')
        .from('#hero-headline + p', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('#hero-headline ~ div', { y: 20, opacity: 0, stagger: 0.1, duration: 0.6 }, '-=0.3');

      // Hero product card
      const heroCard = document.querySelector('.reveal.reveal-d2.relative, .reveal.relative');
      if (heroCard) {
        heroTl.from(heroCard, {
          x: 80, opacity: 0, scale: 0.95, duration: 1, ease: 'power3.out'
        }, 0.4);
      }

      // Mark hero reveals visible
      document.querySelectorAll('#hero .reveal').forEach(el => {
        (el as HTMLElement).style.visibility = 'visible';
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'none';
      });

      // ═══ 2. THREE.JS CANVAS FADE ON SCROLL ═══
      const heroCanvas = document.getElementById('hero-gl');
      if (heroCanvas) {
        gsap.to(heroCanvas, {
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });
      }

      // ═══ 3. SCROLL REVEALS — ScrollTrigger.batch ═══
      const allReveals = gsap.utils.toArray<HTMLElement>('.reveal').filter(
        (el) => !el.closest('#hero') && !el.closest('#stats-band') && !el.closest('#how')
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
        trigger: '#stats-band',
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.utils.toArray('#stats-band .reveal').forEach((el: any) => {
            el.style.visibility = 'visible';
          });
          gsap.from('#stats-band .reveal', {
            y: 30, opacity: 0,
            duration: 0.6, stagger: 0.1, ease: 'power2.out'
          });

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

      // ═══ 5. HOW-IT-WORKS — matchMedia ═══
      const mm = gsap.matchMedia();

      // DESKTOP
      mm.add('(min-width: 1024px)', () => {
        const steps = gsap.utils.toArray('#how .how-step') as HTMLElement[];
        const circles = gsap.utils.toArray('#how .step-circle') as HTMLElement[];
        const contents = gsap.utils.toArray('#how .step-content') as HTMLElement[];
        const progressFill = document.querySelector('.how-progress-fill') as HTMLElement;

        if (steps.length === 0) return;

        gsap.set(circles, { scale: 0, opacity: 0 });
        gsap.set(contents, { opacity: 0, y: 20 });

        const howTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.how-pin-wrap',
            start: 'top top',
            end: '+=200%',
            pin: true,
            scrub: 0.3,
            anticipatePin: 1,
            onUpdate: (self: any) => {
              // Feed scroll progress to Three.js shader + silhouettes
              (window as any).__howScrollProgress = self.progress;
            }
          }
        });

        steps.forEach((step, i) => {
          const circle = circles[i];
          const content = contents[i];
          const pos = i * 0.9;

          howTl.to(circle, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' }, pos);
          howTl.to(content, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, pos + 0.15);

          if (progressFill) {
            howTl.to(progressFill, {
              scaleX: (i + 1) / steps.length,
              duration: 0.3, ease: 'power2.inOut'
            }, pos);
          }

          if (i < steps.length - 1) {
            howTl.to({}, { duration: 0.4 }, pos + 0.5);
          }
        });

        howTl.to({}, { duration: 0.3 });

        return () => {
          gsap.set(circles, { clearProps: 'all' });
          gsap.set(contents, { clearProps: 'all' });
          if (progressFill) gsap.set(progressFill, { clearProps: 'all' });
        };
      });

      // MOBILE
      mm.add('(max-width: 1023px)', () => {
        const steps = gsap.utils.toArray('#how .how-step') as HTMLElement[];
        const dots = gsap.utils.toArray('#how .how-dot') as HTMLElement[];
        const counterEl = document.querySelector('.how-counter-current') as HTMLElement;

        if (steps.length === 0) return;

        gsap.set(steps, { opacity: 0 });
        gsap.set(steps[0], { opacity: 1 });

        const mobileTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.how-pin-wrap',
            start: 'top top',
            end: '+=250%',
            pin: true,
            scrub: 0.3,
            anticipatePin: 1,
            onUpdate: (self: any) => {
              // Feed scroll progress to Three.js shader + silhouettes
              (window as any).__howScrollProgress = self.progress;

              const progress = self.progress;
              const totalSteps = steps.length;
              const activeIdx = Math.min(Math.floor(progress * totalSteps), totalSteps - 1);

              if (counterEl) counterEl.textContent = String(activeIdx + 1);

              dots.forEach((dot, i) => {
                if (i <= activeIdx) {
                  dot.classList.remove('bg-latte');
                  dot.classList.add('bg-olive');
                } else {
                  dot.classList.remove('bg-olive');
                  dot.classList.add('bg-latte');
                }
              });
            }
          }
        });

        steps.forEach((step, i) => {
          if (i === 0) {
            mobileTl.to(step, { opacity: 0, duration: 0.3, ease: 'power1.inOut' }, 0.6);
          } else {
            const segStart = i * 0.85;
            mobileTl.fromTo(step, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power1.inOut' }, segStart);
            if (i < steps.length - 1) {
              mobileTl.to(step, { opacity: 0, duration: 0.3, ease: 'power1.inOut' }, segStart + 0.6);
            }
          }
        });

        mobileTl.to({}, { duration: 0.3 });

        return () => {
          gsap.set(steps, { clearProps: 'all' });
          dots.forEach(dot => {
            dot.classList.remove('bg-olive');
            dot.classList.add('bg-latte');
          });
          dots[0]?.classList.remove('bg-latte');
          dots[0]?.classList.add('bg-olive');
          if (counterEl) counterEl.textContent = '1';
        };
      });

      // ═══ 7. WORD ROTATION ═══
      const words = ['science', 'confidence', 'support', 'results'];
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

      // ═══ 8. PRICING FEATURED FLOAT ═══
      const featured = document.querySelector('.pricing-featured');
      if (featured) {
        gsap.to(featured, {
          y: -6, duration: 2.5,
          ease: 'sine.inOut', repeat: -1, yoyo: true
        });
      }

      // ═══ 9. FOOTER PARALLAX ═══
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

      // ═══ 10. MOBILE STICKY CTA ═══
      const stickyCta = document.getElementById('stickyCta');
      if (stickyCta) {
        ScrollTrigger.create({
          trigger: '#hero',
          start: 'bottom top',
          onEnter: () => stickyCta.classList.add('show'),
          onLeaveBack: () => stickyCta.classList.remove('show')
        });
      }
    };

    init();

    return () => {
      // Cleanup on unmount
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach(t => t.kill());
      });
    };
  }, []);

  return null;
}
