import { ArrowUpRight } from 'lucide-react';
import Button from '../common/Button.jsx';
import Reveal from '../common/Reveal.jsx';
import SectionLabel from '../common/SectionLabel.jsx';

export default function FinalCtaSection() {
  return (
    <section className="section-shell final-cta theme-dark" id="start" data-theme="dark">
      <SectionLabel number="06">YOUR MOVE</SectionLabel>
      <Reveal className="final-cta__content">
        <p className="eyebrow">Your idea has somewhere to go</p>
        <h2>
          Your next<br />
          <span className="final-cta__outline">project</span><br />
          <span className="final-cta__pill">starts here.</span>
        </h2>
        <div className="final-cta__rule" />
        <Button to="/register" variant="light">Join CampusCode</Button>
        <a className="final-cta__login" href="/login">Already a member? Log in <ArrowUpRight size={15} /></a>
      </Reveal>
      <span className="final-cta__index mono-label">CC / KEEP GOING</span>
    </section>
  );
}
