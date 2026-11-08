import Reveal from '../common/Reveal.jsx';
import SectionLabel from '../common/SectionLabel.jsx';
import peopleImage from '../../assets/people.png';
import logo from '../../assets/logo.png';

export default function PeopleSection() {
  return (
    <section className="section-shell people-section" id="people" data-theme="light">
      <SectionLabel number="05">COMMUNITY</SectionLabel>
      <div className="people-section__layout">
        <Reveal className="people-copy">
          <h2>Find<br />your<br /><span className="people-copy__highlight">people.<sup>*</sup></span></h2>
          <div className="people-copy__rule" />
          <div className="people-copy__details">
            <span className="people-copy__badge"><img src={logo} alt="" /><strong>CC</strong></span>
            <p className="section-lede">Build with developers.<br />Think with designers.<br />Compete with builders.</p>
          </div>
        </Reveal>
        <Reveal className="people-visual">
          <span className="people-visual__spark people-visual__spark--top" aria-hidden="true">+</span>
          <img src={peopleImage} alt="Illustration of student teammates connecting and sharing ideas" />
          <span className="people-visual__spark people-visual__spark--bottom" aria-hidden="true">+</span>
        </Reveal>
      </div>
    </section>
  );
}
