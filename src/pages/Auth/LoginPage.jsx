import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from './AuthLayout.jsx';
import { useAuth } from '../../context/AuthContext.jsx';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const { signIn } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (!email.trim()) {
      setError('Enter your email address to continue.');
      return;
    }
    signIn({ email: email.trim() });
    navigate('/dashboard');
  }

  return (
    <AuthLayout title="Welcome back." eyebrow="Pick up where you left off" alternate="/register" alternateLabel="New to CampusCode?">
      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="login-email">Email address</label>
        <input id="login-email" type="email" autoComplete="email" value={email} onChange={(event) => { setEmail(event.target.value); setError(''); }} required />
        {error && <p className="form-error" role="alert">{error}</p>}
        <button className="button button--dark auth-form__submit" type="submit">Continue <span aria-hidden="true">↗</span></button>
      </form>
    </AuthLayout>
  );
}
