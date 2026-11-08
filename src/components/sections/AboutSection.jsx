import { ArrowUpRight, Code2, Lightbulb, Rocket, Trophy } from 'lucide-react';
import Reveal from '../common/Reveal.jsx';
import SectionLabel from '../common/SectionLabel.jsx';
import { aboutSteps } from '../../data/landingContent.js';
import { aboutCardDetails } from '../../data/flipCardContent.js';
import FlipCard from '../FlipCard.jsx';
import FlipCardBack from '../common/FlipCardBack.jsx';

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
          <svg className="about-emblem__art" viewBox="0 0 560 340" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M45 180 A245 65 0 0 1 535 180" transform="rotate(-16 290 180)" stroke="#111111" strokeWidth="1.5" />
            <g transform="skewX(-25)">
              <rect x="225" y="2" width="95" height="310" rx="16" fill="#F7F7F4" stroke="#111111" strokeWidth="1.5" />
              <rect x="337" y="2" width="95" height="310" rx="16" fill="#7665FF" />
              <rect x="449" y="2" width="95" height="310" rx="16" fill="#A8E62E" />
            </g>
            <path d="M535 180 A245 65 0 0 1 45 180" transform="rotate(-16 290 180)" stroke="#111111" strokeWidth="1.5" />
            <circle cx="53" cy="247" r="6" fill="#111111" />
            <path d="M42 20V52M26 36H58M516 290V322M500 306H532" stroke="#111111" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="about-steps">
        {aboutSteps.map((step, index) => {
          const Icon = icons[index];
          return (
            <Reveal key={step.title} delay={index * 0.06}>
              <FlipCard className="campus-flip campus-flip--about" ariaLabel={`${step.title}: flip for details`} color="#111111" background="transparent" draggable={false} tilt={false} glare={false} shadow={false} hoverScale={1} front={<article className={`about-step about-step--${index + 1}`}>
                <div className="about-step__top">
                  <Icon className="about-step__icon" size={32} strokeWidth={1.8} aria-hidden="true" />
                  <ArrowUpRight className="about-step__arrow" size={22} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>} back={<FlipCardBack detail={aboutCardDetails[index]} index={index} />} />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
