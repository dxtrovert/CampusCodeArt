export default function BrandMark({ className = '' }) {
  return (
    <img
      className={`brand-mark ${className}`.trim()}
      src="/Assets/logo.png"
      alt=""
      aria-hidden="true"
    />
  );
}
