import { useEffect, useRef } from 'react';
import AboutSection from '../../components/sections/AboutSection.jsx';
import ArenaSection from '../../components/sections/ArenaSection.jsx';
import BuildTogetherSection from '../../components/sections/BuildTogetherSection.jsx';
import FinalCtaSection from '../../components/sections/FinalCtaSection.jsx';
import HeroSection from '../../components/sections/HeroSection.jsx';
import HowItWorksSection from '../../components/sections/HowItWorksSection.jsx';
import PeopleSection from '../../components/sections/PeopleSection.jsx';
import useScrollTrigger from '../../hooks/useScrollTrigger.js';
import SiteFooter from '../../components/layout/SiteFooter.jsx';

export default function LandingPage() {
  const pageRef = useRef(null);
  useScrollTrigger(pageRef);

  useEffect(() => {
    if (!window.location.hash) return undefined;
    let secondFrame;
    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        const target = document.getElementById(window.location.hash.slice(1));
        target?.scrollIntoView({ behavior: 'instant', block: 'start' });
      });
    });
    return () => { cancelAnimationFrame(firstFrame); cancelAnimationFrame(secondFrame); };
  }, []);

  return (
    <main className="landing-page" ref={pageRef}>
      <HeroSection />
      <AboutSection />
      <BuildTogetherSection />
      <HowItWorksSection />
      <ArenaSection />
      <PeopleSection />
      <FinalCtaSection />
      <SiteFooter />
    </main>
  );
}
