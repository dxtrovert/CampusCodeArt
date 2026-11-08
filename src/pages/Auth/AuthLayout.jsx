import { Link } from 'react-router-dom';
import artwork from '../../assets/login.png';

export default function AuthLayout({ mode, children }) {
  const register = mode === 'register';
  return (
    <main className="auth-page auth-page--reference">
      <div className="auth-layout">
        <section className="auth-intro">
          <h1>{register ? <>Join the<br />CampusCode<br /><span>Community.</span></> : <>Welcome<br />Back to<br /><span>CampusCode.</span></>}</h1>
          <p>{register ? 'Create your account to ideate, collaborate, compete and ship real-world projects.' : 'Log in to collaborate, build, compete and ship real-world projects.'}</p>
          <img src={artwork} alt="" aria-hidden="true" />
        </section>
        <section className="auth-card auth-card--reference">
          <div className="auth-card__heading"><span>{register ? 'SIGN UP' : 'LOG IN'}</span><i /></div>
          <h2>{register ? 'Create Your' : 'Log In to Your'}<br /><span>Account.</span></h2>
          {children}
          <p className="auth-card__note">Frontend demo: passwords are not stored or verified.</p>
          <div className="auth-social-divider"><span>or continue with</span></div>
          <div className="auth-social"><button type="button" disabled title="Coming soon">Google</button><button type="button" disabled title="Coming soon">GitHub</button></div>
          <p className="auth-card__alternate">{register ? 'Already have an account?' : 'Don’t have an account?'} <Link to={register ? '/login' : '/register'}>{register ? 'Log In ↗' : 'Sign Up ↗'}</Link></p>
        </section>
      </div>
    </main>
  );
}
