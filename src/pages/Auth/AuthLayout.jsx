import { Link } from 'react-router-dom';
import BrandMark from '../../components/common/BrandMark.jsx';

export default function AuthLayout({ title, eyebrow, children, alternate, alternateLabel }) {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <Link className="wordmark auth-card__brand" to="/">
          <BrandMark /><span>CAMPUSCODE<span className="wordmark__dot">.</span></span>
        </Link>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {children}
        <p className="auth-card__alternate">{alternateLabel} <Link to={alternate}>{alternate === '/login' ? 'Log in' : 'Create an account'}</Link></p>
        <p className="auth-card__note">Front-end foundation only - authentication will connect to a service later.</p>
      </div>
    </main>
  );
}
