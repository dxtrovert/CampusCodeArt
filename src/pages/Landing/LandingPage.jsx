import { useRef } from 'react';
import AboutSection from '../../components/sections/AboutSection.jsx';
import ArenaSection from '../../components/sections/ArenaSection.jsx';
import BuildTogetherSection from '../../components/sections/BuildTogetherSection.jsx';
import FinalCtaSection from '../../components/sections/FinalCtaSection.jsx';
import HeroSection from '../../components/sections/HeroSection.jsx';
import HowItWorksSection from '../../components/sections/HowItWorksSection.jsx';
import PeopleSection from '../../components/sections/PeopleSection.jsx';
import useScrollTrigger from '../../hooks/useScrollTrigger.js';

export default function LandingPage() {
  const pageRef = useRef(null);
  useScrollTrigger(pageRef);

  return (
    <main className="landing-page" ref={pageRef}>
      <HeroSection />
      <AboutSection />
      <BuildTogetherSection />
      <HowItWorksSection />
      <ArenaSection />
      <PeopleSection />
      <FinalCtaSection />
    </main>
  );
}
