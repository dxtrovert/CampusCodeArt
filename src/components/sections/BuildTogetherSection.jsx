import { ArrowUpRight, Play } from 'lucide-react';
import Button from '../common/Button.jsx';
import BrandMark from '../common/BrandMark.jsx';
import Reveal from '../common/Reveal.jsx';
import SectionLabel from '../common/SectionLabel.jsx';

export default function BuildTogetherSection() {
  return (
    <section className="section-shell build-section theme-dark" id="build" data-theme="dark">
      <SectionLabel number="02">TOGETHER</SectionLabel>
      <div className="build-section__layout">
        <Reveal className="build-section__copy">
          <p className="eyebrow">Good things are a team sport</p>
          <h2>Build<br /><span className="highlight highlight--lime">Together.</span></h2>
          <p className="section-lede">
            Turn a late-night idea into a real project with a community that builds, competes and ships together.
          </p>
          <Button to="/register" variant="light">Find your team</Button>
          <BrandMark className="build-section__mark" />
        </Reveal>
        <Reveal className="build-card">
          <div className="build-card__ornament" aria-hidden="true"><span /><span /></div>
          <div className="build-card__content">
            <span className="build-card__play"><Play size={22} fill="currentColor" /></span>
            <span className="mono-label">A LITTLE LESS TALK</span>
            <h3>A lot more<br /><span>making.</span></h3>
            <p>Your next collaborator is one introduction away.</p>
            <a href="#people" className="build-card__link">Meet the community <ArrowUpRight size={17} /></a>
          </div>
          <span className="build-card__corner mono-label">CC / 002</span>
        </Reveal>
      </div>
    </section>
  );
}
