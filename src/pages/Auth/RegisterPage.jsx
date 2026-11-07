import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from './AuthLayout.jsx';
import { useAuth } from '../../context/AuthContext.jsx';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { signIn } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    signIn({ name: name.trim(), email: email.trim() });
    navigate('/dashboard');
  }

  return (
    <AuthLayout title="Make something matter." eyebrow="Start building on campus" alternate="/login" alternateLabel="Already have an account?">
      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="register-name">Your name</label>
        <input id="register-name" type="text" autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} required />
        <label htmlFor="register-email">Email address</label>
        <input id="register-email" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        <button className="button button--dark auth-form__submit" type="submit">Create account <span aria-hidden="true">↗</span></button>
      </form>
    </AuthLayout>
  );
}
