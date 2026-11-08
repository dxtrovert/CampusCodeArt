import { ArrowUpRight } from 'lucide-react';
import Reveal from '../common/Reveal.jsx';
import SectionLabel from '../common/SectionLabel.jsx';
import { challenges } from '../../data/landingContent.js';
import aiImage from '../../assets/ai.png';
import futureWebImage from '../../assets/futureweb.png';
import campusTechImage from '../../assets/campustech.png';

const challengeImages = [aiImage, futureWebImage, campusTechImage];

export default function ArenaSection() {
  return (
    <section className="section-shell arena-section theme-dark" id="arena" data-theme="dark">
      <SectionLabel number="04">CHALLENGES</SectionLabel>
      <div className="section-heading-row">
        <Reveal>
          <h2>Enter the <span className="highlight highlight--lime">Arena.</span></h2>
        </Reveal>
        <a className="button button--light-outline" href="#process">
          <span>How to play</span><ArrowUpRight size={18} />
        </a>
      </div>
      <div className="challenge-grid">
        {challenges.map((challenge, index) => (
          <Reveal key={challenge.title} delay={index * 0.08}>
            <article className={`challenge-card challenge-card--${index + 1}`}>
              <div className="challenge-art">
                <img className="challenge-art__image" src={challengeImages[index]} alt="" loading="lazy" />
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
