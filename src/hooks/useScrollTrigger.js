import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useScrollTrigger(containerRef) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;
    const media = gsap.matchMedia(container);
    media.add('(min-width: 901px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)', () => {
      container.querySelectorAll('.landing-page > section:not(.hero-section)').forEach((scene) => {
        const content = scene.querySelectorAll('.section-label, h2, .section-lede, .about-emblem, .about-step, .build-card__content, .process-card, .challenge-card, .people-visual img, .final-cta__rule, .final-cta .button');
        const timeline = gsap.timeline({ scrollTrigger: {
          trigger: scene, start: 'top top+=92', end: '+=120%', pin: true,
          pinSpacing: true, scrub: 0.7, invalidateOnRefresh: true,
        } });
        timeline.fromTo(scene, { clipPath: 'inset(0 3% round 27px)' }, { clipPath: 'inset(0 0% round 0px)', duration: 1, ease: 'none' });
        timeline.fromTo(content, { opacity: 0.25, y: 32 }, { opacity: 1, y: 0, stagger: 0.12, duration: 0.8, ease: 'power2.out' }, 0.25);
        timeline.to({}, { duration: 0.6 });
        timeline.to(scene, { clipPath: 'inset(0 3% round 27px)', duration: 0.5, ease: 'none' });
      });
      ScrollTrigger.refresh();
    });
    return () => media.revert();
  }, [containerRef]);
}
