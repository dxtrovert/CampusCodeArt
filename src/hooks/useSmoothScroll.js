import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useSmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      syncTouch: false,
      anchors: true,
    });

    const updateScrollTrigger = () => ScrollTrigger.update();
    const animate = (time) => {
      lenis.raf(time * 1000);
    };
    lenis.on('scroll', updateScrollTrigger);
    gsap.ticker.add(animate);

    return () => {
      gsap.ticker.remove(animate);
      lenis.off('scroll', updateScrollTrigger);
      lenis.destroy();
    };
  }, []);
}
