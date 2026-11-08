import { ArrowUpRight } from 'lucide-react';
import Button from '../common/Button.jsx';
import Reveal from '../common/Reveal.jsx';
import SectionLabel from '../common/SectionLabel.jsx';
import TechText from '../TechText.jsx';
import { useReducedMotion } from 'framer-motion';

export default function FinalCtaSection() {
  const reduceMotion = useReducedMotion();
  const techTextProps = { fontWeight: 850, fontSize: 110, reveal: reduceMotion ? 'off' : 'letter', intro: 'none', accentColor: '#a8e62e', color: '#fff', sweep: !reduceMotion, draggable: !reduceMotion, clickKick: !reduceMotion, selection: !reduceMotion, labels: !reduceMotion, specks: reduceMotion ? 0 : 15 };
  return (
    <section className="section-shell final-cta theme-dark" id="start" data-theme="dark">
      <SectionLabel number="06">YOUR MOVE</SectionLabel>
      <Reveal className="final-cta__content">
        <p className="eyebrow">Your idea has somewhere to go</p>
        <h2 aria-label="Your next project starts here">
          <span className="final-cta__tech-line" aria-hidden="true"><TechText {...techTextProps} text="YOUR NEXT" /></span>
          <span className="final-cta__tech-line" aria-hidden="true"><TechText {...techTextProps} text="PROJECT" outlineIdle lineStyle="solid" /></span>
          <span className="final-cta__tech-line final-cta__tech-line--accent" aria-hidden="true"><TechText {...techTextProps} text="STARTS HERE." /></span>
        </h2>
        <div className="final-cta__rule" />
        <Button to="/register" variant="light">Join CampusCode</Button>
        <a className="final-cta__login" href="/login">Already a member? Log in <ArrowUpRight size={15} /></a>
      </Reveal>
    </section>
  );
}
