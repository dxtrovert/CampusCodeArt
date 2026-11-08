import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, LockKeyhole, Eye, EyeOff, ArrowUpRight } from 'lucide-react';
import AuthLayout from './AuthLayout.jsx';
import { useAuth } from '../../context/AuthContext.jsx';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    if (!email.trim() || !password) return;
    signIn({ name: email, email: email });
    navigate('/dashboard');
  }
  return (
    <AuthLayout mode="login">
      <form className="auth-form auth-form--reference" onSubmit={handleSubmit}>
        <label className="auth-field"><Mail size={22} aria-hidden="true" /><span className="sr-only">Username</span><input type="text" autoComplete="username" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} required /></label>
        <label className="auth-field"><LockKeyhole size={22} aria-hidden="true" /><span className="sr-only">Password</span><input type={visible ? 'text' : 'password'} autoComplete="current-password" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} required /><button className="auth-field__visibility" type="button" onClick={() => setVisible(!visible)} aria-label={visible ? 'Hide password' : 'Show password'}>{visible ? <EyeOff size={21} /> : <Eye size={21} />}</button></label>
        <button className="button button--dark auth-form__submit" type="submit">Log In <ArrowUpRight size={20} aria-hidden="true" /></button>
      </form>
    </AuthLayout>
  );
}
