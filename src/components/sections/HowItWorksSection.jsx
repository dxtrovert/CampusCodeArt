import { ArrowUpRight, Code2, Search, Users, Trophy } from 'lucide-react';
import Button from '../common/Button.jsx';
import Reveal from '../common/Reveal.jsx';
import SectionLabel from '../common/SectionLabel.jsx';
import { processSteps } from '../../data/landingContent.js';

const icons = [Search, Users, Code2, Trophy];

export default function HowItWorksSection() {
  return (
    <section className="section-shell process-section" id="process" data-theme="light">
      <SectionLabel number="03">THE PROCESS</SectionLabel>
      <div className="section-heading-row">
        <Reveal>
          <p className="eyebrow">From first spark to shipped work</p>
          <h2>How it <span className="highlight highlight--soft-lime">works.</span></h2>
        </Reveal>
        <p className="section-heading-row__aside">One small step at a time.<br />Big things happen along the way.</p>
      </div>
      <div className="process-grid">
        {processSteps.map((step, index) => {
          const Icon = icons[index];
          return (
            <Reveal key={step.title} delay={index * 0.07}>
              <article className={`process-card process-card--${index + 1}`}>
                <div className="process-card__top">
                  <span className="mono-label">0{index + 1} / 04</span>
                  <ArrowUpRight size={20} aria-hidden="true" />
                </div>
                <Icon className="process-card__icon" size={34} strokeWidth={1.7} aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
      <div className="process-cta">
        <span className="mono-label">NO PERFECT PLAN REQUIRED</span>
        <Button to="/register" variant="outline">Start building</Button>
      </div>
    </section>
  );
}
