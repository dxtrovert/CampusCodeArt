import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserRound, Mail, LockKeyhole, Eye, EyeOff, ArrowUpRight } from 'lucide-react';
import AuthLayout from './AuthLayout.jsx';
import { useAuth } from '../../context/AuthContext.jsx';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [visible, setVisible] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    if (!name.trim() || !email.trim()) return;
    signIn({ name, email });
    navigate('/dashboard');
  }
  return (
    <AuthLayout mode="register">
      <form className="auth-form auth-form--reference" onSubmit={handleSubmit}>
        <div className="auth-form__row">
          <label className="auth-field"><UserRound size={22} aria-hidden="true" /><span className="sr-only">Full name</span><input type="text" autoComplete="name" placeholder="Full Name" value={name} onChange={(event) => setName(event.target.value)} required /></label>
          <label className="auth-field"><Mail size={22} aria-hidden="true" /><span className="sr-only">College email</span><input type="text" autoComplete="email" placeholder="College Email" value={email} onChange={(event) => setEmail(event.target.value)} required /></label>
        </div>
        <label className="auth-field"><LockKeyhole size={22} aria-hidden="true" /><span className="sr-only">Create password</span><input type={visible ? 'text' : 'password'} autoComplete="new-password" placeholder="Create Password" value={password} onChange={(event) => setPassword(event.target.value)} /><button className="auth-field__visibility" type="button" onClick={() => setVisible(!visible)} aria-label={visible ? 'Hide passwords' : 'Show passwords'}>{visible ? <EyeOff size={21} /> : <Eye size={21} />}</button></label>
        <label className="auth-field"><LockKeyhole size={22} aria-hidden="true" /><span className="sr-only">Confirm password</span><input type={visible ? 'text' : 'password'} autoComplete="new-password" placeholder="Confirm Password" value={confirm} onChange={(event) => setConfirm(event.target.value)} /></label>
        <button className="button button--dark auth-form__submit" type="submit">Create Account <ArrowUpRight size={20} aria-hidden="true" /></button>
      </form>
    </AuthLayout>
  );
}
