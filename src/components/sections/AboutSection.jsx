import { Code2, Lightbulb, Rocket, Trophy } from 'lucide-react';
import BrandMark from '../common/BrandMark.jsx';
import Reveal from '../common/Reveal.jsx';
import SectionLabel from '../common/SectionLabel.jsx';
import { aboutSteps } from '../../data/landingContent.js';

const icons = [Lightbulb, Code2, Trophy, Rocket];

export default function AboutSection() {
  return (
    <section className="section-shell about-section" id="about" data-theme="light">
      <SectionLabel number="01">ABOUT</SectionLabel>
      <div className="about-heading">
        <Reveal>
          <h2>What is<br /><span className="highlight highlight--soft-lime">CampusCode?</span></h2>
          <p className="section-lede">
            A student innovation network to ideate, collaborate, compete and ship real-world projects, right from your campus.
          </p>
        </Reveal>
        <div className="about-emblem" aria-hidden="true">
          <span className="about-emblem__orbit" />
          <BrandMark />
          <span className="about-emblem__spark">+</span>
        </div>
      </div>
      <div className="about-steps">
        {aboutSteps.map((step, index) => {
          const Icon = icons[index];
          return (
            <Reveal key={step.title} delay={index * 0.06}>
              <article className={`about-step about-step--${index + 1}`}>
                <span className="about-step__index mono-label">0{index + 1}</span>
                <Icon size={28} strokeWidth={1.8} aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
