import Button from './Button.jsx';

export default function FlipCardBack({ detail, index, action = false }) {
  return (
    <div className={`flip-card-back flip-card-back--${index + 1}`}>
      <span className="flip-card-back__label">0{index + 1} / {detail.title}</span>
      <p className="flip-card-back__intro">{detail.intro}</p>
      <ul>{detail.points.map((point) => <li key={point}>{point}</li>)}</ul>
      {action && <Button {...(index === 0 ? { href: '#arena' } : { to: '/register' })} variant={index === 0 ? 'dark' : 'outline'} className="flip-card-back__action">{detail.cta}</Button>}
    </div>
  );
}
