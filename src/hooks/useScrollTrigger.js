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
          trigger: scene, start: () => `top top+=${parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-bottom')) || 92}`, end: '+=120%', pin: true,
          pinSpacing: true, scrub: 1, invalidateOnRefresh: true,
        } });
        const dark = scene.dataset.theme === 'dark';
        // The header follows the rendered (scrubbed) expansion, not raw scroll position.
        gsap.set(scene, { '--section-expansion': 0 });
        const boxedClip = 'inset(12px 4% 12px 4% round 27px)';
        const expandedClip = () => `inset(-${parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-bottom')) || 80}px 0% 0px 0% round 0px)`;
        timeline.fromTo(scene, { clipPath: boxedClip, '--section-expansion': 0 }, { clipPath: expandedClip, '--section-expansion': 1, duration: 1.2, ease: 'sine.inOut' });
        timeline.fromTo(content, { opacity: 0.25, y: 32 }, { opacity: 1, y: 0, stagger: 0.12, duration: 0.8, ease: 'power2.out' }, 0.25);
        timeline.to({}, { duration: 0.6 });
        timeline.to(scene, { clipPath: boxedClip, '--section-expansion': 0, duration: 1.2, ease: 'sine.inOut' });
        timeline.eventCallback('onUpdate', () => window.dispatchEvent(new Event('campuscode:section-expansion')));
      });
      ScrollTrigger.refresh();
    });
    return () => media.revert();
  }, [containerRef]);
}
