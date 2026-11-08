import logo from '../../assets/logo.png';

export default function BrandMark({ className = '' }) {
  return (
    <img
      className={`brand-mark ${className}`.trim()}
      src={logo}
      alt=""
      aria-hidden="true"
    />
  );
}
