export default function SectionLabel({ number, children }) {
  return (
    <div className="section-label" data-gsap-reveal>
      <span>{number} / {children}</span>
      <span className="section-label__line" aria-hidden="true" />
    </div>
  );
}
