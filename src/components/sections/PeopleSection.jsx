import { ArrowUpRight, Code2, MessageCircle, Users } from 'lucide-react';
import Button from '../common/Button.jsx';
import Reveal from '../common/Reveal.jsx';
import SectionLabel from '../common/SectionLabel.jsx';

export default function PeopleSection() {
  return (
    <section className="section-shell people-section" id="people" data-theme="light">
      <SectionLabel number="05">COMMUNITY</SectionLabel>
      <div className="people-section__layout">
        <Reveal className="people-copy">
          <p className="eyebrow">Better ideas happen together</p>
          <h2>Find your<br />people<span className="highlight highlight--soft-lime">.</span></h2>
          <p className="section-lede">Build with developers. Think with designers. Compete with builders.</p>
          <div className="people-actions">
            <Button to="/register">Meet your team</Button>
            <span className="people-count"><strong>12k+</strong><span>student builders</span></span>
          </div>
        </Reveal>
        <Reveal className="people-visual">
          <div className="people-visual__backdrop" />
          <img src="/Assets/people.png" alt="Illustration of student teammates connecting and sharing ideas" />
          <div className="people-bubble people-bubble--top"><MessageCircle size={19} /><span>got an idea?</span></div>
          <div className="people-bubble people-bubble--bottom"><Code2 size={18} /><span>let's build it</span><ArrowUpRight size={15} /></div>
          <div className="people-visual__badge"><Users size={16} /><span>YOUR PEOPLE ARE HERE</span></div>
        </Reveal>
      </div>
    </section>
  );
}
