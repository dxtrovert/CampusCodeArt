import { ArrowUpRight } from 'lucide-react';
import Reveal from '../common/Reveal.jsx';
import SectionLabel from '../common/SectionLabel.jsx';
import { challenges } from '../../data/landingContent.js';

export default function ArenaSection() {
  return (
    <section className="section-shell arena-section theme-dark" id="arena" data-theme="dark">
      <SectionLabel number="04">CHALLENGES</SectionLabel>
      <div className="section-heading-row">
        <Reveal>
          <p className="eyebrow">A good excuse to make something</p>
          <h2>Enter the <span className="highlight highlight--lime">arena.</span></h2>
        </Reveal>
        <a className="button button--light-outline" href="#process">
          <span>How to play</span><ArrowUpRight size={18} />
        </a>
      </div>
      <div className="challenge-grid">
        {challenges.map((challenge, index) => (
          <Reveal key={challenge.title} delay={index * 0.08}>
            <article className={`challenge-card challenge-card--${index + 1}`}>
              <div className="challenge-art" aria-hidden="true">
                <span className="challenge-art__orb" />
                <span className="challenge-art__ring" />
                <span className="challenge-art__number">0{index + 1}</span>
                <span className="challenge-art__status">{challenge.status}</span>
              </div>
              <div className="challenge-card__body">
                <span className="mono-label">{challenge.category}</span>
                <h3>{challenge.title}</h3>
                <p>{challenge.description}</p>
                <a href="/register" aria-label={`Explore ${challenge.title}`}><ArrowUpRight size={21} /></a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
