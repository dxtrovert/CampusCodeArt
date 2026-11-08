import Button from '../common/Button.jsx';
import Reveal from '../common/Reveal.jsx';
import SectionLabel from '../common/SectionLabel.jsx';
import { processSteps } from '../../data/landingContent.js';
import discoverImage from '../../assets/discover.png';
import teamImage from '../../assets/teamup.png';
import buildImage from '../../assets/build.png';
import shipImage from '../../assets/ship.png';
import { processCardDetails } from '../../data/flipCardContent.js';
import FlipCard from '../FlipCard.jsx';
import FlipCardBack from '../common/FlipCardBack.jsx';

const illustrations = [discoverImage, teamImage, buildImage, shipImage];
const actions = ['Explore challenges', 'Find teammates', 'Start building', 'Submit project'];

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
          return (
            <Reveal key={step.title} delay={index * 0.07}>
              <FlipCard className="campus-flip campus-flip--process" ariaLabel={`${step.title}: flip for details`} color="#111111" background="transparent" draggable={false} tilt={false} glare={false} shadow={false} hoverScale={1} front={<article className={`process-card process-card--${index + 1}`}>
                <div className="process-card__top">
                  <span className="process-card__number">0{index + 1}</span>
                </div>
                <h3>{index === 3 ? 'Ship' : step.title}</h3>
                <p>{step.description}</p>
                <div className="process-card__art">
                  <img className="process-card__illustration" src={illustrations[index]} alt="" loading="lazy" />
                </div>
                <Button {...(index === 0 ? { href: '#arena' } : { to: '/register' })} variant={index === 0 ? 'dark' : 'outline'} className="process-card__action">{actions[index]}</Button>
              </article>} back={<FlipCardBack detail={processCardDetails[index]} index={index} action />} />
            </Reveal>
          );
        })}
      </div>
      <div className="process-cta">
        <Button to="/register" variant="outline">Start building</Button>
      </div>
    </section>
  );
}
